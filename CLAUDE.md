# Fragments Legacy

**Frozen.** This is the original browser extension (repo `Loveltie/Fragments-Legacy`). The new app lives in `Loveltie\Projects\Fragments` (repo `Loveltie/Fragments`). Only fixes needed to keep daily use working go here; it is retired once the new capture extension replaces it.

Language learning app by Loveltie (Alvaro). Repo: github.com/Loveltie/Fragments, branch `main`.

## Current state (Oct 2026)
Browser extension, vanilla JS, no build step, no backend.
* `fragments/` Chrome MV3 extension (the one Alvaro uses daily)
* `fragments-firefox/` separate Firefox MV2 copy (fixed gecko id `fragments@loveltie`)
* Features: highlight capture, IndexedDB (`fragments-db`, store `words`), FSRS via `assets/ts-fsrs.js`, practice mode, language pairs with swap, AI export prompts, notifications and badge, yellow `#FFD700` on `#111111` sparkle theme.
* `tools/console-backup.js` and `tools/console-restore.js`: paste into the popup DevTools console to back up or restore all words.

## Chrome extension ID
`fragments/manifest.json` has a fixed `"key"`, so the ID is always `dkkhfonpakdigcpcjckogikpepnlphee` no matter where the folder lives. The private key is outside the repo in `Loveltie\Keys\`. Never commit `*.pem`. If publishing to the Chrome Web Store, check how the store wants the key handled first.

## New direction
Full brief: `docs/BRIEF.md`. Plan and roadmap: `docs/PLAN.md` (to be written and approved before any feature code).
Short version: Windows desktop app becomes the main product; the extension becomes a light capture tool; mobile later; fully offline and local, no account needed; peer to peer sync between own devices; on device small model for categories and OCR; stable version target 30 Nov 2026.

## How to work with Alvaro
* Plan first, build second. Wait for approval before writing feature code.
* Small focused steps he can test one at a time. Commit often with clear messages.
* Simplest real solution first (ponytail plugin is installed).
* Free and open source tools; local first, private by default.
* Keep explanations short. He is a Software Engineering graduate; no need to explain basics.
* Never use dash or em dash characters in anything written for him (prose, docs, commit messages). Hyphens inside code identifiers, file names and package names are fine.
* Never delete files without asking; move instead.

## Run it
Chrome: `chrome://extensions`, Developer mode, Load unpacked, select `fragments/`.
Firefox: `about:debugging`, This Firefox, Load Temporary Add-on, pick `fragments-firefox/manifest.json`.
