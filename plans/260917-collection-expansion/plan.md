# Kitchen collection expansion

## Outcome
Add six collections of 15 images and a seventh collection of 30 overhead full-kitchen images, preserving the original 3 albums and 45 images. Final scope: 10 collections, 165 album images and 495 responsive image files. A `/bo-suu-tap/` index lists every collection. Homepage keeps only the original 3 with an explicit browse-all link. User authorized publishing/deployment without another review round.

## Constraints
- Flat glossy back-painted glass cabinetry; new images use flat induction cooktops only.
- Every image in the large-family collection includes happy Vietnamese family members smiling and chatting. Kitchen remains primary subject.
- Varied compositions and colors based on the 15-swatch Lecmax reference. Replace 18 early expansion images with diverse two-tone schemes, preserve superseded originals locally.
- Dishwashers beside sinks in all family concepts and selected other spaces, respecting useful circulation.
- Overhead collection: retain first 15 views at about 3–4 m; user then requested the next 15 about 1 m lower, at 2.5–3 m. All 30 show complete kitchen layouts. Exact color-code assignments appear under images and in viewer details.
- Built-in image generation authorized; actual model not exposed. Original 45 remain unchanged.
- Save originals and exact prompts under `output/imagegen/`; publish optimized 320/800/1600 px WebPs only.
- Preserve the approved paper/Newsreader/Arial website design and unrelated dirty files.

## Collections
1. `nha-pho-thoang-sang` — Bếp nhà phố thoáng sáng
2. `bep-mo-nha-them-gan` — Bếp mở, nhà thêm gần
3. `bep-nhin-ra-vuon` — Bếp nhìn ra vườn
4. `sac-tram-tinh-te` — Bếp sắc trầm tinh tế
5. `bep-cho-nha-dong-nguoi` — Bếp cho nhà đông người
6. `bep-va-goc-ca-phe` — Bếp và góc cà phê
7. `toan-canh-bep-tu-tren-cao` — Toàn cảnh bếp từ trên cao

## Artifacts
- [Expansion manifest](../../output/imagegen/collection-expansion/manifest.json): 90 images, 15 per collection.
- [Overhead manifest](../../output/imagegen/collection-aerial/manifest.json): 30 images, per-image color codes and camera instructions.
- [Maintainer docs](../../docs/collection-albums.md): integration and WebP export workflow.
- [UI integration report](ui-integration-report.md).
- [Code review](code-review.md).

## Acceptance
- [x] Generate and preserve 90 expansion originals with exact prompts; verify 90 unique hashes.
- [x] Implement 10-collection index, original 3 homepage selection and new detail routes.
- [x] Export 270 expansion WebPs.
- [x] Finish 30 overhead images and 90 WebPs.
- [x] Verify 165 image records, 495 assets and all color notes; complete tests/check/build.
- [x] Browser validation with final assets: desktop/mobile, discovery and gallery navigation.
- [x] Deploy and verify live pages/assets.
- [x] Commit/push only scoped changes.

## Verification so far
All 120 new PNG sources verified against SHA256 with no duplicates. Exported 360 new WebPs (19.82 MiB), bringing total to 495 album assets. All 10 tests pass, Astro check reports no errors/warnings/hints across 34 files, and build creates 16 pages. Wrangler dry run passes. Final desktop/mobile checks passed: 10 index entries, original 3 homepage cards and browse-all link, 30 aerial captions with color codes, keyboard navigation/wraparound, Escape and focus restoration, no horizontal overflow. See [desktop index](final-desktop-index.png) and [mobile viewer](final-mobile-aerial-viewer.png). Preview PID 51890 stopped and browser TaskSpace 11 finished.

## Release
Production deployed successfully on 2026-09-17: version `58c88904-36ba-4d32-8305-71bea3244d22`. [Production collection index](https://bep-am-website.tdk-onwork.workers.dev/bo-suu-tap/). [Live verification](live-verification.json) passed: all 495 responsive album images match local bytes, and all 12 collection/home pages match the built HTML with expected 15/30 image counts. Scoped changes committed and pushed to `main`; unrelated workspace changes remain outside this release.
