# Local album preview verification

Date: 2026-09-17. UI complete; final image inventory and image-content review remain with the controller while generation continues.

## Scope and files

Only local review artifacts were created:

- [Static page](../../output/imagegen/collection-albums/index.html)
- [Styles](../../output/imagegen/collection-albums/preview.css)
- [Interaction script](../../output/imagegen/collection-albums/preview.js)
- [Repeatable static builder](../../output/imagegen/collection-albums/build-preview.mjs)

No production source, public assets, original generated images, manifest, or deployment configuration was changed by the preview work.

The approved DESIGN.md supplies Newsreader + Arial, paper #F5F2EC, green #1B5E20, rectangular images, captions outside images, and fine rules. This is an existing-brand implementation; no seeded redesign. The visible review note includes “Cánh bóng kính”, AI provenance, and that these are not completed projects. The user later accepted existing images without rechecking or fixing them; induction-only applies to subsequent generation from index 20 onward, so it is not a blanket album caption.

## Behavior

- Three collection selectors; exactly 15 metadata entries per collection.
- Two-column desktop album; single-column mobile album.
- Stable image IDs in every caption and viewer; individual entry hash URLs select the correct collection.
- Original-file anchor fallback and all three collections remain usable without JavaScript.
- Native dialog displays uncropped images, original-file link, previous/next, counter, and thumbnail navigation. Arrow keys wrap between available images. No autoplay.
- Native modal behavior plus explicit Tab boundary handling keep focus inside; Escape closes and returns focus to the originating image link.
- Missing originals render a truthful pending state. Unavailable thumbnail positions are disabled. Runtime load failures show a textual error.
- Static embedded metadata avoids fetch and file-origin CORS. Paths to the existing font and logo assets remain relative.

## Verified with ego-browser

Opened the real page via `file:///Users/tadaka/Documents/Bep%20Am%20Website/output/imagegen/collection-albums/index.html`; no local server started.

- At 1440 × 1000, `scrollWidth = innerWidth = 1440`. Local Newsreader font loaded; sections each contained 15 entries; correct selected collection visible.
- At 375 × 812, `scrollWidth = innerWidth = 375`; active album column measured 327px. Visually inspected header, Vietnamese text, selector layout, and mobile dialog.
- Mobile dialog `scrollWidth = clientWidth = 357`: no horizontal overflow outside its intentionally scrollable thumbnail strip.
- Opened the first actual generated PNG and waited for positive natural image width. ArrowRight changed counter to 2 / 15; two ArrowLeft presses wrapped to 15 / 15.
- Shift+Tab from close button focused the final thumbnail inside the dialog; Tab wrapped to close button. Escape closed the dialog and returned focus to `can-ho-tinh-gon-01`.
- Collection selector switched to the second collection and displayed the pending positions truthfully at the time of the check.
- With JavaScript disabled and the page reloaded, all three sections were visible, 17 existing original-file links remained usable, and mobile had no horizontal overflow.
- `node --check output/imagegen/collection-albums/preview.js` passed.

## Finalization required after image generation

Run from the project root:

```sh
node output/imagegen/collection-albums/build-preview.mjs
```

The last UI build saw 17/45 originals. This is a file-presence snapshot, not approval of image contents. Rebuild after generation and any final file/path changes, then reload the preview. Per the latest user instruction, do not re-audit or fix existing image contents; apply induction-only to subsequent generation from index 20 onward. Current thumbnails reuse originals; no new compressed derivatives were produced. All image entries use lazy loading and the preview stays outside `public/`.

No background process, server port, or browser task was left running by this subtask.

## Production album integration

The user subsequently authorized publishing/deployment when all 45 images are ready. Production integration now lives in:

- [Collection album component](../../src/components/collection-album.astro)
- [Scoped album stylesheet](../../src/styles/collection-album.css)
- [Album metadata](../../src/data/collection-albums.ts)
- [Existing collection detail route](../../src/pages/bo-suu-tap/[slug].astro)
- [Album publishing contract test](../../tests/collection-albums.test.ts)

Each collection retains its existing cover, legacy gallery, prose, consultation CTA and related links. Fifteen new concepts appear directly after the cover. The static links and captions work without JavaScript; the native dialog adds full-frame image viewing, thumbnail selection, previous/next, counter, keyboard wrap, explicit Tab boundaries and opener focus restoration. Images in the grid use lazy loading, responsive 800/1600 WebP candidates, and 320px viewer thumbnails. Expected files are `/images/collections/{slug}/{filename-stem}-{320|800|1600}.webp`. No blanket induction caption is used.

Production validation run:

- `pnpm test -- tests/collection-albums.test.ts`: Vitest ran the full suite; 3 test files and 7 tests passed.
- `pnpm check`: 32 Astro files, zero errors, warnings or hints.
- Source review verified namespace-scoped CSS, retained existing collection content, native modal behavior, modifier-click original-file fallback, error feedback, reduced-motion handling, and no dependency changes.

At handoff no optimized production album assets existed yet. The controller owns generation/optimization, final asset-backed build and browser checks, publication and deployment. This implementation task started no server and performed no deployment.

## Controller finalization — 17 September 2026

All 45 originals are now present and the local preview was rebuilt at 45/45. Production has all 135 WebP variants; original SHA256 values are distinct. Final verification supersedes the interim counts above.

- 3 test files / 8 tests passed; Astro check: 33 files, 0 errors/warnings/hints; 8 pages built; Cloudflare dry-run passed.
- Real production build served at 127.0.0.1:4321. Desktop 1440×900 and mobile 375×812 visually inspected. No horizontal page overflow at 375×812, 320×568 or 844×390. All three routes contained 15 new image anchors.
- On all three small viewports, opening and ArrowLeft to 15 / 15 kept dialog scrollTop at zero and close visible. ArrowRight wrapped to 1 / 15. Shift+Tab from close selected final thumbnail; Tab returned to close. Escape restored the opener and body scrolling after the close event.
- Thumbnail selection changed title/counter to Đồng khói / 2 / 15. The browser automation engine cannot click with script execution disabled, so the page was loaded with scripts disabled then execution re-enabled without reload; its unenhanced anchor opened the full WebP directly.
- Original image contents were not re-audited or changed, per user instruction.
- Cloudflare deployed version 4e704aad-0325-4717-bb11-1a7fb14fe1f5. See live-verification.json for HTTP and byte-for-byte asset verification.
