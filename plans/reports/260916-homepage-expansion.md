# Homepage expansion verification

## Delivered scope

Five original ChatGPT-generated kitchen concepts, optimized in two sizes, replace the hero showroom photograph. Generation prompts and provenance are stored in docs/generated-image-prompts.md and docs/image-sources.json. Real Lecmax references were visually inspected before generation; hidden material construction cannot be verified by a raster concept and is not presented as manufacturing evidence.

Added three factory images, three Hanoi-showroom accessory images, three collection pages, three original kitchen knowledge articles, a workshop/activities area linked to official Facebook, two exact requested YouTube embeds, two new Bếp Ấm gathering photos and two manually played short showroom videos. The latest Drive listing contained 150 items (114 images, 36 videos); selected relevant assets after visual inspection. No invented workshop dates or completed-project claims.

## Verification

- Vitest 6/6; Astro check 27 files, no errors/warnings/hints; production build creates 8 HTML pages; whitespace check clean.
- All local route, image, script, stylesheet and video references in built HTML resolve.
- Browser observed carousel progression at 2001, 4001 and 6001 ms, including wrap from last to first. Manual navigation pauses rotation and announces slide/title through a polite status region. Reduced motion starts paused. Offscreen, hover, focus and hidden-tab states suspend the interval.
- Desktop 1440 and mobile 375/390 visually reviewed. Additional width checks 768/1024: no horizontal overflow. Vietnamese headings, captions and new collection/article page layouts inspected.
- Both local videos played without errors at 1280×720 and 540×960; combined size about 1.2 MB. Playback is manual and preload is none; audio retained as AAC.
- Both YouTube embeds loaded official titles/thumbnails and playback controls. Full playback to completion was not tested. Direct YouTube links remain available.
- Independent read-only review found one screen-reader announcement issue; corrected and browser-verified.

## Limits

No physical-device or Safari test. Existing Three.js chunk warning above 500 kB remains. AI visuals are inspirational concepts, not exact cabinetry specifications. Workshop schedule is not invented; future announcements use official Facebook. No CMS added; collections/articles are maintained in src/data/editorial-content.ts.
