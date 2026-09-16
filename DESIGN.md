# Bếp Ấm: Hồ sơ một gian bếp ấm

Approved by the user on 2026-09-16, following direct study of the Sedge & Hollis example at https://inspomcp.dev/examples/house-listing. This document owns the current homepage direction and supersedes conflicting homepage typography, surface and CTA decisions in design-system/MASTER.md. The original brand logo, green and orange remain unchanged.

## Outcome and audience

Help families planning a kitchen in Cần Thơ understand the coordinated solution, examine visual evidence, trust the showroom and arrange an in-person consultation. Success means readable Vietnamese, clear image provenance, a visible consultation action, intact phone/maps links and a usable page without WebGL. Preserve Astro static delivery, React Three Fiber controls and the existing product roles.

## Visual direction

Architectural editorial, restrained and warm. Headline above a captioned landscape photograph; generous margins, fine rules, material details and readable project stories. No startup feature-card grid, stock project claims, copied reference artwork, autoplay hero or technology-first introduction.

The reference is an invented Inspo example, not a verified business. Learn composition only. Its serif headlines and paper ground were explicitly approved as website-specific extensions of the older Arial/white guideline. Its overflow at a 390px emulated viewport must not be copied.

- Paper #F5F2EC, secondary paper #EBE6DC, ink #242424, muted #625D55, rules #D8D1C4.
- Brand green #1B5E20, orange #F57C00. Green provides restrained emphasis; orange identifies consultation actions. Do not recolor or crop the logo artwork. Use the transparent SVG exported from the supplied original vector PDF (`Bep Am_Knowledge Base/raw/assets/Logo/logo_BepAm.pdf`); remove only page whitespace, retain clear space and let the paper background show through.
- Newsreader regular/italic for display; Arial for body and controls. Local font files with OFL attribution. Test Vietnamese diacritics, not just Latin letters.
- Body 16–18px, line-height 1.6; headline approximately 40–64px, line-height 1.15. No dense uppercase paragraphs.
- Container 1200px; responsive gutters 24–48px; 4px spacing base. Major sections 64–112px apart. Buttons at least 48px tall, visible keyboard focus.
- Rectangular photographs; captions outside images. Reduced-motion support and visible content before hydration.

## Homepage sequence

1. Short promise, consultation CTA, secondary showroom link, large captioned showroom photograph.
2. Real Bếp Ấm showroom photography from the user-supplied Drive folder. Explain the kitchen and appliance areas without claiming customer projects.
3. Four coordinated solution roles: Lecmax cabinetry; Panasonic appliances, Konox sinks/taps and Vicostone surfaces as defaults when the customer has not chosen their own.
4. Material details, a three-image gallery of samples/sinks/entrance and the existing optional 3D explanatory module.
5. Existing four-step consultation and delivery process.
6. Showroom invitation, telephone appointment and exact supplied Maps destination.

## Content and asset boundaries

Use only showroom photos from the user-supplied Google Drive folder 1RWclrVD-zdP6VftR7WF35TXrCnamGBOU, replacing the earlier manufacturer reference photography. Record each selected original filename and Drive URL in docs/image-sources.json. Publish optimized WebP variants without original location metadata. No invented testimonials, counters, customer-project claims or unverified warranties. The knowledge library provides technical context, not manufacturing approval. Official Facebook supplied by the user: https://www.facebook.com/bepamcantho.

The repository phone is 0923 179 169; Maps showed 0988 425 263 on 2026-09-16. The user approved keeping both numbers; show both as telephone links and include both in structured data. Appointments use an explicit telephone action; there is no backend booking service and no simulated success form. Keep the existing option to visit the showroom directly.

## 3D workflow

Use the installed `3dviz-pro-max` skill whenever creating or changing 3D. Entrypoint: ~/.codex/skills/3dviz-pro-max/SKILL.md. Installed from viettranx/3dviz-pro-max revision d077e0e68915c25be8e71d74684d3144fd1c2aca. Read only references applicable to the change, keep the existing R3F stack and inspect real rendered output. Existing overview, structure and operation controls are preserved. Label the model as explanatory, not an exact construction drawing. Do not introduce ornamental scenes or claim that an installed skill proves rendering quality.

## Source state and non-goals

Work started from GitHub main 494a87d. On 2026-09-16 the user approved publishing the completed homepage, making the GitHub repository public and deploying to the existing Cloudflare Workers Static Assets site. Pricing engines, CRM, databases, fabricated booking workflows and a full site rewrite remain outside scope.

## Verification

Run existing content tests, Astro checks and production build. Inspect desktop 1440px and mobile 375/390px, tablet and landscape widths; check Vietnamese, line wrapping, hierarchy, spacing, menu, consultation anchors, phone/maps targets, image loading, keyboard focus, overflow, 3D states and reduced motion. Record evidence and limitations in plans/reports/.
