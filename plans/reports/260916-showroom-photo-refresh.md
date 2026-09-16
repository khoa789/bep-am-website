# Showroom photo refresh

## Scope

Replace previous manufacturer photography with the owner's supplied Drive folder (1RWclrVD-zdP6VftR7WF35TXrCnamGBOU), and set official Facebook to https://www.facebook.com/bepamcantho. Preserve approved editorial layout, business contacts and 3D logic.

## Changes

Inspected 22 HEIC photos; selected seven distinct showroom views. Produced eight WebP files including two hero sizes, totaling about 598 KB (585 KiB). Removed the five previous public photo assets. Replaced project-specific copy with accurate showroom descriptions and added samples, sinks and entrance gallery. Updated Open Graph photo and source manifest. Original HEIC files and location metadata are not published. Five videos in the folder were not required for this photo task.

## Verification

- Existing tests 4/4; Astro check: 16 files, no diagnostics; production build passed.
- Existing Three.js bundle warning above 500 kB remains.
- Chromium preview inspected at 1440px desktop and 390px mobile. Photos load and have upright orientation; Vietnamese copy and captions remain readable with no horizontal overflow.
- Facebook link and Open Graph URL point to the newly approved sources. No old photo URLs or Facebook URL remain in application source.
- No physical-device or Safari test. Live deployment 80232bc6-b4f7-4e50-b4d0-ac5577fa13f0 verified: all seven showroom photos load, official Facebook link correct, mobile width 390px has no overflow, old kitchen-warm-1600.webp returns 404.
