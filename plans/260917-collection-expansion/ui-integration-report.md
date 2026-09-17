# Collection UI integration verification

Status: implemented; generated image assets still pending at verification time.

## Delivered
- `/bo-suu-tap/` lists all nine collections with responsive cover images, AI captions and meaningful link names. Two columns on desktop, one below 700px.
- Homepage explicitly selects the original three slugs and adds “Xem tất cả 9 bộ sưu tập”. Existing homepage navigation stays unchanged.
- Six new editorial entries have three practical sections each. Original three entries were compared against Git HEAD and remain byte-for-byte unchanged.
- All nine detail pages retain 15 album entries. New collection cover appears on the index and in social metadata, without duplicating it above the album. Original detail covers and extra concept gallery remain.
- Detail pages have a return-to-index link plus two related collection links and the index at the bottom.
- Expanded JSON imported into collection-albums.ts. Tests enforce 135 unique IDs and 405 responsive asset paths.

## Checks
- `pnpm check`: 34 files, 0 errors, 0 warnings, 0 hints.
- `pnpm build`: 15 pages, including the collection index and nine detail routes.
- `pnpm test -- tests/collection-albums.test.ts tests/editorial-content.test.ts`: runner executed all three test files; 7 passed, 2 failed. Both failures are expected ENOENT checks for pending generated WebPs (nha-pho-thoang-sang first image at 320/800 widths). Physical asset requirements were retained and extended to collection covers.
- Built HTML inspection: each of nine routes has 15 unique album links, descriptive image alt text and an index return link.
- Browser at 1440, 768, 375 and 667×375: no horizontal overflow; correct two/one column layout. Homepage rendered only original three collection links and correct index discovery link.
- New large-family detail: 15 album links, no duplicated standalone cover, exactly two related entries plus index.
- Keyboard: index card Enter navigation works; Tab focus shows green 3px outline. Existing album opens via Enter; ArrowRight advances to 2/15; Escape closes and restores focus.
- Reduced motion: enabled successfully, new arrow transition becomes 0s.
- `git diff --check`: passes.

## Evidence / limits
- [Desktop index](index-1440-pending-assets.png)
- [375px index](index-375-pending-assets.png)
- These screenshots show the existing covers above the fold. New-image loading and final appearance require checking again once all 270 new WebPs exist.
- Browser review reused the existing brand tokens and type rules in DESIGN.md; no seeded redesign, new font family or palette was introduced.
- Astro preview ran on 127.0.0.1:4321, PID 40403, then was stopped. Ego TaskSpace 10 was finished. Port 4317 belonged to another project and was left untouched.
- No commit or deployment performed by this UI subtask.
