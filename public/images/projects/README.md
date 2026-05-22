# Project thumbnails

Drop project images here using the project's `slug` as the filename, e.g.:

- `freshbite.jpg`
- `trackflow.jpg`
- `shopassist-ai.jpg`
- `learnnova.jpg`
- `swiftship.jpg`

Supported: `.jpg`, `.png`, `.webp`. (For animations, also `.mp4` / `.webm`.)

The Work page reads filenames from `src/lib/constants.ts` → `PROJECTS[].thumbnailUrl`. If a project's `thumbnailUrl` is `null`, the card falls back to a gradient + pattern placeholder.

For best performance: export at ~1400px wide, ≤300 KB. Next.js will handle further optimization automatically (no Cloudinary roundtrip).
