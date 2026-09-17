import { readFile, writeFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const directory = path.dirname(fileURLToPath(import.meta.url));
const manifest = JSON.parse(await readFile(path.join(directory, 'manifest.json'), 'utf8'));
const escape = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const collections = await Promise.all(manifest.collections.map(async (collection) => ({
  ...collection,
  images: await Promise.all(collection.images.map(async ({ id, file, title, layout, space, alt }) => {
    const available = await stat(path.join(directory, file)).then((info) => info.isFile() && info.size > 0).catch(() => false);
    return { id, file, title, layout, space, alt, available };
  })),
})));
const total = collections.reduce((sum, collection) => sum + collection.images.length, 0);
const available = collections.reduce((sum, collection) => sum + collection.images.filter((image) => image.available).length, 0);
const introductions = {
  'can-ho-tinh-gon': 'Những cách bố trí gọn gàng cho căn hộ, với sắc kính nhẹ và ánh sáng tự nhiên.',
  'hai-hoa-ban-menh': 'Khám phá sắc kính theo sở thích và cảm hứng ngũ hành, từ ngọc trai đến xanh rừng.',
  'nhip-song-hien-dai': 'Không gian bếp rộng mở cho nấu nướng, tiếp khách và những khoảnh khắc bên nhau.',
};
const entry = (image, index) => `<figure class="image-entry" id="${escape(image.id)}">
  ${image.available ? `<a class="image-link" href="${escape(image.file)}" data-image-id="${escape(image.id)}" aria-label="Xem ảnh ${String(index + 1).padStart(2, '0')}: ${escape(image.title)}"><img src="${escape(image.file)}" alt="${escape(image.alt)}" loading="lazy" decoding="async" width="1536" height="864"><span class="image-action">Xem toàn ảnh ↗</span></a>` : '<div class="pending-image"><span>Ảnh đang được chuẩn bị</span></div>'}
  <figcaption><div class="caption-heading"><span class="image-number">${String(index + 1).padStart(2, '0')}</span><h3>${escape(image.title)}</h3></div><p class="image-details">${escape(image.layout)} · ${escape(image.space)}</p><p class="image-id">Mã ảnh: <span>${escape(image.id)}</span></p></figcaption>
</figure>`;
const html = `<!doctype html>
<html lang="vi">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow"><title>Album phối cảnh bếp | Bếp Ấm</title><link rel="stylesheet" href="preview.css"><script src="preview.js" defer></script></head>
<body>
<a class="skip-link" href="#bo-suu-tap">Đến bộ sưu tập</a>
<header class="site-header container"><a class="brand" href="#" aria-label="Bếp Ấm, đầu trang"><img src="../../../public/brand/bep-am-logo.svg" alt="Bếp Ấm" width="136" height="64"></a><p>Bản xem trước tại máy<br><span>Chưa xuất bản</span></p></header>
<main class="container">
<section class="intro" aria-labelledby="page-title"><p class="eyebrow">Bộ sưu tập Bếp Ấm</p><h1 id="page-title">Một gian bếp,<br>nhiều cảm hứng.</h1><p class="intro-description">${total} phối cảnh cánh phẳng bóng kính để cùng xem, so sánh và chọn hướng thiết kế.</p><p class="review-note">Cánh bóng kính. Ảnh ý tưởng tạo bằng AI, không phải công trình đã thi công. Góp ý bằng mã ảnh bên dưới mỗi phương án.</p></section>
<nav class="collection-nav" aria-label="Chọn bộ sưu tập">${collections.map((collection) => `<a href="#${escape(collection.slug)}" data-collection="${escape(collection.slug)}">${escape(collection.title)}<span>${collection.images.length} ảnh</span></a>`).join('')}</nav>
<p class="generation-status" role="status">${available === total ? `Đã có ${available}/${total} ảnh để xem.` : `Đã có ${available}/${total} ảnh. Các vị trí còn lại đang được chuẩn bị.`}</p>
<div id="bo-suu-tap">${collections.map((collection) => `<section class="collection" id="${escape(collection.slug)}" aria-labelledby="heading-${escape(collection.slug)}"><div class="collection-intro"><h2 id="heading-${escape(collection.slug)}">${escape(collection.title)}</h2><p>${escape(introductions[collection.slug] || '')}</p></div><figure class="reference-image"><img src="../../../${escape(collection.referenceImage)}" alt="Phối cảnh AI hiện có, tham chiếu cho ${escape(collection.title.toLowerCase())}." loading="lazy" width="1600" height="900"><figcaption>Ảnh tham chiếu hiện có · Phối cảnh AI</figcaption></figure><div class="album-grid">${collection.images.map(entry).join('\n')}</div></section>`).join('\n')}</div>
<noscript><p class="no-script">Bạn có thể xem đủ ba bộ sưu tập và bấm vào từng ảnh để mở bản gốc. Bật JavaScript để dùng trình xem ảnh và phím chuyển ảnh.</p></noscript>
</main>
<footer class="container site-footer"><p>Bếp Ấm · Album ý tưởng cánh phẳng bóng kính</p><p>Chỉ dùng để duyệt phương án trước khi xuất bản.</p></footer>
<dialog id="image-viewer" aria-labelledby="viewer-title" aria-describedby="viewer-details"><div class="viewer-shell"><header class="viewer-header"><p id="viewer-collection"></p><button type="button" id="close-viewer" autofocus>Đóng <span aria-hidden="true">×</span></button></header><div class="viewer-stage"><img id="viewer-image" alt=""><p id="viewer-status" role="status"></p></div><div class="viewer-caption"><div><h2 id="viewer-title"></h2><p id="viewer-details"></p><p id="viewer-id"></p></div><a id="viewer-original" href="#" target="_blank" rel="noopener">Mở ảnh gốc ↗</a></div><div class="viewer-controls"><button type="button" id="previous-image" aria-label="Ảnh trước">← <span>Ảnh trước</span></button><p id="viewer-counter" aria-live="polite" aria-atomic="true"></p><button type="button" id="next-image" aria-label="Ảnh sau"><span>Ảnh sau</span> →</button></div><div class="viewer-thumbnails" aria-label="Chọn ảnh trong bộ sưu tập"></div><p class="viewer-hint">Phối cảnh AI · Dùng ← → để chuyển ảnh, Esc để đóng.</p></div></dialog>
<script id="album-data" type="application/json">${JSON.stringify(collections.map(({slug, title, images}) => ({slug, title, images}))).replace(/</g, '\\u003c')}</script>
</body></html>`;
await writeFile(path.join(directory, 'index.html'), html);
console.log(`Built local preview: ${available}/${total} original images available; ${collections.length} collections.`);
