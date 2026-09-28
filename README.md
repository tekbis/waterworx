# WaterWorx — Netlify-ready source

This is a static, responsive two-page website. All service photos and comparison illustrations are included locally. No installation or build command is required.

## Publish on Netlify

1. Extract WaterWorx-Netlify-Ready.zip.
2. Drag the extracted folder containing index.html into Netlify's manual deploy area.
3. If importing a Git repository instead, use this folder as the repository root, leave the build command empty, and set the publish directory to a single dot (.). netlify.toml already provides that setting.
4. Enable Netlify form detection and redeploy if needed. Both forms include Netlify form attributes and a spam honeypot. Requests appear under Forms in the Netlify dashboard; configure email notifications there.

Home: index.html. About & Services: services.html. Confirmation: thanks.html.

Opening the HTML files locally provides a demo confirmation. Real submission handling requires Netlify hosting with form detection enabled. No payment integration is configured.

Contact information, business claims, and testimonials are demo content. Replace them with the business's verified details before launch.

Mobile styles and the repeating Tekbis watermark are in mobile.css. Service image overlays are in service-photos.css. Menu interactions and local form preview are in site.js.

Image assets are included. Google Fonts is the only styling dependency loaded online; local font fallbacks are included in the CSS.

The comparison images are illustrative, not actual WaterWorx jobs. Replace them with matched, client-approved project photos before presenting them as customer results. The template phone number and unverified testimonials were removed; enter verified contact details and claims before launch.

The hero automatically advances through three local photographs every 5.5 seconds and includes manual arrows and dots. It pauses during interaction and respects reduced-motion settings. The service-area illustration is decorative; actual service coverage and any fleet imagery should be verified with the business before launch.

The truck-and-map visual is illustrative and does not depict WaterWorx's actual fleet or confirmed service coverage. The TEKBIS LLC proof watermark is a site overlay in mobile.css; the source image files remain clean.
