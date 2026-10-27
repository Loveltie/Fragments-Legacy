# Fragments: brief from Alvaro (27 Oct 2026)

Saved verbatim in substance so every Claude Code session starts from the same brief.

## Role
Technical lead for Fragments. Plan first, build second. Explain decisions simply and briefly (no need to explain basics).

## Current state
Browser extension (Chrome MV3 and a separate Firefox MV2 copy) under the Loveltie GitHub org. Captures highlighted words on any webpage, stores them locally in IndexedDB, schedules reviews with FSRS, has a practice mode, multi language pairs with a swap button, AI export prompts (copy words, paste translations back), notifications and badge counts, and a yellow and black sparkle theme. No backend. Vanilla JS, no build step.

## New direction
* Main product: a Windows desktop app where users study, browse and manage words.
* Browser extension becomes a lightweight capture tool only. It may be rebuilt from scratch.
* Later: iPhone and Android apps.
* Works fully offline and locally; no account needed to use it.
* Rebuild rule: anything already built can be replaced with a newer or better approach, even the whole core, frontend or backend.

## Features
* Sync without a company server: peer to peer between my own devices while both are on, paired with a key; the computer acts as the sync hub when it turns on; a manual "Sync now" button.
* Capture: highlight on webpages; screen region capture (drag a box like a screenshot) to grab words from subtitles, images or anything on screen; photo of a word list as import.
* Import review screen: preview all detected words, quick edit wrong ones, then add and categorize.
* Small open source model running on device: auto categories, quick yes or no decisions with a confidence percentage, text recognition (OCR) from photos and captures. Keep it as light as possible.
* Learning: beautiful swipeable flashcards with animations and sounds; reverse learning mode; study by category; keep FSRS and practice mode.
* Optional accounts with avatars; a feedback channel.
* Data: optional, consent based collection only. The app must work fully if the user says no. (A separate conversation will decide what data is worth collecting.)

## Planning output wanted
1. Recommended tech stack for desktop app, extension, shared core and later mobile, with reasons and alternatives.
2. Architecture sketch: shared core, how the extension hands captures to the desktop app, how peer to peer sync works.
3. Model choice for categorization and OCR, with size and speed estimates.
4. A phased roadmap: what to build first for one visible win, what comes next, and what waits for 2027. Soft goal: stable version by 30 Nov 2026.
5. Wait for approval before writing code.

## Inputs still to add
* Notes from 2 YouTube videos (Alvaro will paste them; take them into account in the plan).

## Constraints
Free and open source tools where possible; local first and private by default; small focused steps testable one at a time; commit often with clear messages; no dash or em dash characters in anything written for Alvaro.

## Existing user data to preserve
Alvaro's real words live in the Chrome extension (27 words on 27 Oct 2026, de-en and es-de pairs, some with FSRS history). A JSON backup lives in `backups/` (gitignored). Any new storage layer needs an importer for this backup format (see `tools/console-backup.js`).

## Done when
An approved plan with the roadmap saved as `docs/PLAN.md` in this folder.
