# Black & White Portfolio v5 — Local Fonts

This version uses local TTF fonts instead of Google Fonts/CDN requests.

## Add your fonts

Put your existing TTF files in:

`assets/fonts/`

Expected filenames used by `assets/css/fonts.css`:

- Inter_18pt-Regular.ttf
- Inter_18pt-Medium.ttf
- Inter_18pt-SemiBold.ttf
- Inter_18pt-Bold.ttf
- Inter_18pt-ExtraBold.ttf
- Inter_24pt-Regular.ttf
- Inter_24pt-Medium.ttf
- Inter_24pt-SemiBold.ttf
- Inter_24pt-Bold.ttf
- Inter_24pt-ExtraBold.ttf
- DMMono-Regular.ttf
- DMMono-Medium.ttf

If your filenames differ, update the matching `src:url(...)` entries in `assets/css/fonts.css`.

## How typography is applied

- `--sans` → Inter 18pt → body/general text throughout the project.
- `--heading-sans` → Inter 24pt → major headings and project titles.
- `--mono` → DM Mono → navigation, labels, metadata, buttons, gallery controls, tags, and footer.
- `--serif` → Georgia/system serif → intentionally used only for italic editorial accents.

The stylesheet also forces form controls to inherit the project typography instead of using browser defaults.

## Verify

Open the portfolio, use DevTools → Network → Font, and reload. You should see local `.ttf` requests and no `fonts.googleapis.com` or `fonts.gstatic.com` requests.
