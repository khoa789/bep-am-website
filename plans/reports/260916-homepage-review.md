# Homepage verification and review

Scope: DESIGN.md, approved 2026-09-16. Working baseline main 494a87d. No deployment.

## Spec compliance

- Approved editorial composition, serif headings and paper ground: implemented.
- Original Bếp Ấm logo and brand colors: retained.
- Images from supplied Lecmax library, labelled manufacturer references: implemented, manifest docs/image-sources.json.
- Own completed-project assets: unverified, not fabricated. Current project gallery uses labelled manufacturer references.
- Four solution roles and customer selection flexibility: implemented.
- Existing Astro/static delivery, phone/maps, R3F controls: retained. Maps destination updated to user-provided exact place link.
- Consultation CTA: functional telephone appointment route, no invented submission backend.
- 3dviz-pro-max: complete skill installed at revision d077e0e68915c25be8e71d74684d3144fd1c2aca. Local entrypoint and subject clarity/object reasoning/lighting guidance read. Search helper executed, fantasy village recipe resolved for installation recognition only; no village assets used in Bếp Ấm.
- 3D observed pre-existing camera looking at rear; corrected camera, opening direction and door/drawer overlap. Kept three state IDs and controls. Narrowed structure copy to actual illustrated components, no claim of accurate fabrication.

## Browser evidence so far

Ego browser, local production build. Desktop 1440px, mobile 390px visually inspected. Width checks at 375,390,768,844,1024,1440: no horizontal overflow. Font loaded, initial images loaded. Mobile menu opens and closes on navigation. Consultation target reaches #tu-van; phone and Maps destinations checked without placing calls. 3D mounted in browser; all three buttons update state and descriptive text. Inspection captures in /tmp/bep-am-*.png; final delivery captures will be saved in project reports.

## Review pipeline

Spec review complete with stated source/content limitations. Independent read-only code reviewer found no actionable regressions. Final `pnpm test` (4/4), `pnpm check` (0 errors/warnings/hints), `pnpm build` and `git diff --check` passed. Build retains the noted Three.js chunk-size warning.

## Known limits

Production source differs from GitHub main; no overwrite/deploy. User approved both phone numbers; both are now clickable and included in structured data. No real phone call placed, no new scheduling backend, no physical mobile-device test. Static WebGL fallback remains illustrative. Build reports existing >500kB Three.js chunk warning.

## Final browser checks

- Reduced-motion emulation: no canvas, static explanation present; consultation remains usable.
- All referenced images loaded; all internal anchors resolve; exactly one H1.
- Vietnamese headings and body inspected on desktop/mobile. Body contrast 13.89:1, muted text 5.84:1 on paper and 5.25:1 on secondary paper; green display 7.04:1; CTA 5.74:1.
- Menu open/close after link navigation verified; telephone destination tel:+84923179169 and exact Maps short link verified. No phone call or booking submission made.
- Width checks: 375, 390, 768, 844, 1024, 1440, with landscape height 390 at width 844; no overflowing main elements.
- Visual evidence: [desktop](homepage-captures/desktop.png), [mobile](homepage-captures/mobile.png), [projects](homepage-captures/projects.png). These are screenshots of the local production build, not concept renders.
- No physical-device or Safari test; browser is Chromium through Ego.

## Final approved refinements

- Exported original supplied vector logo PDF to transparent SVG; retained all eight paths and original colors, removed only page whitespace with clear space. Header now blends with paper without a white rectangle.
- Both approved contacts, 0923 179 169 and 0988 425 263, use correct tel destinations and 44px tap areas. Both appear in JSON-LD.
- Re-ran test (4/4), Astro check (16 files, no diagnostics), production build and diff whitespace check successfully. Existing Three.js chunk warning remains.
- Inspected final production preview at desktop 1440px and mobile 390px; checked 375px overflow too. Final desktop/mobile captures refreshed; [mobile contact](homepage-captures/contact-mobile.png) confirms both numbers and readable wrapping. No physical-device/Safari test or real call.

## Authorized publication

The user authorized public GitHub publication and production deployment on 2026-09-16, superseding the earlier preview-only boundary above. Cloudflare deployment succeeded at https://bep-am-website.tdk-onwork.workers.dev with version `16d89a76-fb61-4da9-b23e-e9bb809ac7c5`. Live desktop 1440px and mobile 390px checks confirmed no horizontal overflow, the transparent SVG logo, both phone links, loaded images after scrolling and a hydrated 3D canvas with all three controls. Image provenance retains source filenames while omitting private client names and workstation paths.
