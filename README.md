# Marathon Fuel — Grandma's Marathon 2026

Personal race-day fueling and strategy guide built with Vite + React.

## Sections
- **Home** — Landing page with race overview and stats
- **19-Mile Run** — T-minus fueling plan for the long run dress rehearsal  
- **20-Mile Run** — Peak training day fueling plan
- **Pre-Race Dinner** — Bellisio's menu recommendations for race eve
- **Race Day** — Full marathon fueling plan with aid station map
- **Recovery** — Hour-by-hour post-race recovery protocol

## Local Development
```bash
npm install
npm run dev
```

## Deploy to AWS Amplify

### Option 1 — Amplify Console (recommended)
1. Push this repo to GitHub
2. Go to AWS Amplify Console → New App → Host Web App
3. Connect your GitHub repo
4. Amplify auto-detects the `amplify.yml` — click Save and Deploy
5. Done. Amplify handles build + CDN automatically.

### Option 2 — Amplify CLI
```bash
npm install -g @aws-amplify/cli
amplify init
amplify add hosting
amplify publish
```

### Option 3 — Manual S3 + CloudFront
```bash
npm run build
# Upload contents of /dist to S3 bucket
# Enable static website hosting
# Point CloudFront at the bucket
# Add error page rule: 404 → /index.html (needed for React Router)
```

> **Important for React Router:** Whichever deploy method you use, configure your host to redirect all 404s to `index.html` so client-side routing works correctly.

## Tech Stack
- Vite 6
- React 19
- React Router DOM 7
- Google Fonts (Bebas Neue, Crimson Pro, JetBrains Mono)
- Unsplash images (no API key needed)
