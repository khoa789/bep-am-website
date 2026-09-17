(() => {
  const collections = JSON.parse(document.getElementById('album-data').textContent);
  const links = [...document.querySelectorAll('[data-collection]')];
  const sections = [...document.querySelectorAll('.collection')];
  const dialog = document.getElementById('image-viewer');
  const fullImage = document.getElementById('viewer-image');
  const imageStatus = document.getElementById('viewer-status');
  const thumbnails = document.querySelector('.viewer-thumbnails');
  let activeCollection;
  let activeIndex = 0;
  let returnFocus;

  function selectCollection(slug) {
    const selected = collections.find((collection) => collection.slug === slug) || collections[0];
    for (const section of sections) section.hidden = section.id !== selected.slug;
    for (const link of links) {
      if (link.dataset.collection === selected.slug) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    }
  }

  function syncHash() {
    const hash = location.hash.slice(1);
    const selected = collections.find((collection) => collection.slug === hash || collection.images.some((image) => image.id === hash));
    selectCollection(selected?.slug);
    if (selected?.images.some((image) => image.id === hash)) document.getElementById(hash)?.scrollIntoView({ block: 'start' });
  }

  for (const link of links) link.addEventListener('click', (event) => {
    event.preventDefault();
    selectCollection(link.dataset.collection);
    history.replaceState(null, '', `#${link.dataset.collection}`);
  });
  window.addEventListener('hashchange', syncHash);
  syncHash();

  function showImage(index) {
    activeIndex = index;
    const image = activeCollection.images[index];
    fullImage.hidden = false;
    imageStatus.textContent = 'Đang tải ảnh…';
    fullImage.alt = image.alt;
    fullImage.src = image.file;
    document.getElementById('viewer-title').textContent = image.title;
    document.getElementById('viewer-details').textContent = `${image.layout} · ${image.space}`;
    document.getElementById('viewer-id').textContent = `Mã ảnh: ${image.id}`;
    document.getElementById('viewer-counter').textContent = `${index + 1} / ${activeCollection.images.length}`;
    document.getElementById('viewer-original').href = image.file;
    for (const button of thumbnails.children) {
      const current = Number(button.dataset.index) === index;
      button.setAttribute('aria-current', String(current));
      if (current) button.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
    const availableCount = activeCollection.images.filter((item) => item.available).length;
    document.getElementById('previous-image').disabled = availableCount < 2;
    document.getElementById('next-image').disabled = availableCount < 2;
  }

  function moveImage(direction) {
    for (let step = 1; step <= activeCollection.images.length; step++) {
      const next = (activeIndex + step * direction + activeCollection.images.length) % activeCollection.images.length;
      if (activeCollection.images[next].available) { showImage(next); return; }
    }
  }

  fullImage.addEventListener('load', () => { imageStatus.textContent = ''; });
  fullImage.addEventListener('error', () => {
    fullImage.hidden = true;
    imageStatus.textContent = 'Không tải được ảnh. Hãy kiểm tra tệp gốc hoặc chọn ảnh khác.';
  });

  for (const link of document.querySelectorAll('[data-image-id]')) link.addEventListener('click', (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0 || typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    returnFocus = link;
    activeCollection = collections.find((collection) => collection.images.some((image) => image.id === link.dataset.imageId));
    document.getElementById('viewer-collection').textContent = activeCollection.title;
    thumbnails.replaceChildren();
    activeCollection.images.forEach((image, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.index = String(index);
      button.disabled = !image.available;
      button.setAttribute('aria-label', `Ảnh ${index + 1}: ${image.title}${image.available ? '' : ', đang chuẩn bị'}`);
      if (image.available) {
        const thumbnail = document.createElement('img');
        thumbnail.src = image.file;
        thumbnail.alt = '';
        thumbnail.loading = 'lazy';
        button.append(thumbnail);
      }
      const number = document.createElement('span');
      number.textContent = String(index + 1).padStart(2, '0');
      button.append(number);
      button.addEventListener('click', () => showImage(index));
      thumbnails.append(button);
    });
    dialog.showModal();
    document.body.classList.add('viewer-open');
    showImage(activeCollection.images.findIndex((image) => image.id === link.dataset.imageId));
    document.getElementById('close-viewer').focus({ preventScroll: true });
  });

  document.getElementById('close-viewer').addEventListener('click', () => dialog.close());
  document.getElementById('previous-image').addEventListener('click', () => moveImage(-1));
  document.getElementById('next-image').addEventListener('click', () => moveImage(1));
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
      const focusable = [...dialog.querySelectorAll('button:not(:disabled), a[href]')].filter((element) => element.getClientRects().length);
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      moveImage(event.key === 'ArrowRight' ? 1 : -1);
    }
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('viewer-open');
    fullImage.removeAttribute('src');
    returnFocus?.focus({ preventScroll: true });
  });
})();
