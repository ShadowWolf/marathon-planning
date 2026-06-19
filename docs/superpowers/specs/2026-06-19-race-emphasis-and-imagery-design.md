# Race-Day Emphasis & Grandma's Imagery — Design

**Date:** 2026-06-19
**Scope:** `src/components/Landing.jsx`, `src/components/Nav.jsx`, `src/components/Marathon.jsx`, `src/components/Run20.jsx`. No data file changes.
**Goal:** Pivot the site from "training peak coming up" to "race in 2 days." De-emphasize the 20-mile training run as a historical reference. Replace generic imagery with Grandma's Marathon-specific photos (Aerial Lift Bridge, Canal Park, Split Rock Lighthouse). Preserve dinner page imagery untouched per user request.

## Context

- Today: 2026-06-19. Race: 2026-06-21 (Saturday). T-2 days.
- 20-mile training run is in the past — currently marked "TOMORROW" on landing and Run20 hero.
- Landing page stats and copy reference the old 5-packet UCAN-only fuel plan (4:30:00 goal, "UCAN Only", "5 Opens") — supersededy the new 7-packet plan (~32 g/hr, ~250mg split caffeine, 4:28 goal).
- Course info still mentions Anderson's at Mile 17 and a date-stamped wind check ("Thursday June 19") that is already past.

## Strategy

Three intertwined changes:

1. **Race-day emphasis.** Hero copy, stat tiles, and section card ordering all pivot to race-imminent framing.
2. **Training run demotion.** Run20 stays as `/run-20` (still useful as race-morning reference for pacing feel), but visually demoted: removed from the main section card grid, no urgent accent, marked as historical reference in nav and on its own page hero.
3. **Imagery refresh.** Four Grandma's-specific Unsplash photos replace generic running/race photos on Landing hero, Landing Race Day section card, and Marathon page hero. Run20, Recovery, and Dinner imagery stays as-is.

## Imagery (curated Unsplash IDs)

All CDN URLs verified by visiting the Unsplash photo page and extracting the canonical image URL.

| Where | Photo (subject) | CDN URL |
|---|---|---|
| Landing hero | Aerial Lift Bridge, Duluth (`U9lbsRIkwoo`) | `https://images.unsplash.com/photo-1620858571016-997522d7b2f3?w=1600&q=80` |
| Landing "Race Day" card | Canal Park rocky beach + lighthouse (`sEVg0wxYJJg`) | `https://images.unsplash.com/photo-1652543533392-8121234d7d9f?w=800&q=70` |
| Marathon page hero | Split Rock Lighthouse on cliff, Lake Superior (`NUl8M2UhsEo`) | `https://images.unsplash.com/photo-1639437038514-0ad841b2f62a?w=1600&q=80` |

Existing photos retained unchanged:
- Run20 hero (`photo-1502904550040-7534597429ae`) — demoted, no investment
- Recovery card / page (`photo-1506126613408-eca07ce68773`) — out of scope
- Dinner card / page (`photo-1555396273-367ea4eb4db5`) — explicitly preserved per user

## Landing Page Changes

### Hero block

**Eyebrow line:** `Grandma's Marathon · Duluth MN · Saturday June 21, 2026` (unchanged from current — already correct)

**Tagline:** Replace
> "20-mile peak training run tomorrow, then race day June 21. Anderson's Pure Fuel primary, UCAN Edge caffeine strategic, Skratch Labs replacing sodium tablets."

with
> "Race in 2 days. Negative split for 4:28 — UCAN base, split-dose caffeine, SiS finish. Skratch Labs replaces sodium tablets pre-race."

**Stat tiles:** Replace the current 4 with 8 (existing flex-wrap layout handles this):

| Value | Label |
|---|---|
| `T-{n} DAYS` (dynamic) | Countdown |
| `4:28` | Goal Time |
| `+2:17` | Half Split |
| `6:23/km` | Avg Pace |
| `NEGATIVE SPLIT` | Strategy |
| `7 PACKETS` | In-Race Fuel |
| `142g` | Race Carbs |
| `~250mg` | Total Caffeine |

**Dynamic countdown:** Add a top-level constant in Landing.jsx:
```js
const RACE_DATE = new Date('2026-06-21T00:00:00');
function daysUntilRace() {
  const ms = RACE_DATE - new Date();
  const days = Math.ceil(ms / 86400000);
  if (days > 0) return `T-${days} DAYS`;
  if (days === 0) return 'RACE DAY';
  return 'RECOVERY';
}
```
Use the result as the first stat tile value. Self-updates daily without touching code.

### Section cards

Replace the current 4-card array with **3 primary cards + 1 demoted historical card** in a separate strip:

**Primary cards (in order, top of section):**
1. **Race Day** (`/marathon`) — `urgent:true` (large/highlighted), badge `2 DAYS · SATURDAY`, image: Canal Park photo, sub: `Grandma's Marathon · Negative split · Goal 4:28`
2. **Pre-Race Dinner** (`/dinner`) — badge `Night Before`, image unchanged, sub unchanged
3. **Recovery** (`/recovery`) — badge `After`, image unchanged, sub unchanged

The `urgent:true` flag on Race Day card carries the existing styling (taller card, accent badge "2 DAYS · SATURDAY" replacing the old "TOMORROW" label).

**Historical strip (small, below primary grid):**

A single small card (different visual treatment — narrower, no accent, muted) for Training Run:
- Header: `Training History`
- Card: `Training Run` → `/run-20`, badge `Done · Reference`, image unchanged, sub: `32km peak run · UCAN + Anderson's (historical)`

Implementation: rather than introducing a new component, render the training card in a separate `<div>` block after the primary grid with reduced height (180px), border without accent, no `urgent` flag. The existing `SectionCard` component supports this — pass a new variant prop or just render a smaller inline block. Simplest: extract the small-card render inline, don't extend SectionCard.

### Course info card

- Replace "On-Course Fuel" stat value from `Water + Powerade + Andersons (Mile 17)` → `Water + Powerade only (skip Anderson's)`
- Replace closing paragraph stale date reference: `"check wind direction Thursday June 19, that is the key variable"` → `"east wind off the lake keeps the course cool — check Friday's forecast for race-morning wind direction, that is the key variable"`

### Fuel Arsenal cards

The `productList` array at top of Landing.jsx is currently:
```js
[
  { key:'anderson', role:'Primary fuel · every 30-35 min', carbs:'27g/packet' },
  { key:'sis',      role:'Strategic backup · late race push', carbs:'22g/gel' },
  { key:'ucan',     role:'Caffeine weapon · km 20 / km 29', carbs:'19g + 75mg caffeine' },
  { key:'skratch',  role:'Sodium + hydration · pre-run only', carbs:'20g + 400mg sodium' },
]
```

Update to reflect the new plan. Anderson's is no longer in the race plan — but it was used on the training run, so its product entry remains. We have two choices:

**Option A — keep Anderson's listed but mark historical:** Add a `historical:true` flag and render with muted styling. Keeps the arsenal complete.

**Option B — drop Anderson's from the landing arsenal display:** Cleaner — the race-imminent arsenal is what matters. Anderson's still exists in `products` for run20 references.

**Choice: B.** Landing is forward-looking. Race-day arsenal is the four items actually being used: UCAN Edge (no-caff), UCAN+Caff, SiS GO, Skratch.

Updated `productList`:
```js
[
  { key:'ucannc',  role:'Base layer · early race + pre-race', carbs:'19g · slow-release' },
  { key:'ucan',    role:'Split caffeine · km 17 + km 29', carbs:'19g + 75mg · 2 doses' },
  { key:'sis',     role:'Fast carbs · Zone 3 + finish', carbs:'22g · 3 packets' },
  { key:'skratch', role:'Sodium + hydration · pre-race only', carbs:'20g + 400mg sodium' },
]
```

## Nav Changes

Current `sections` array:
```js
[
  { to:'/',           label:'Home' },
  { to:'/run-20',     label:'20-Mile Run' },
  { to:'/marathon',   label:'Race Day' },
  { to:'/dinner',     label:'Pre-Race Dinner' },
  { to:'/recovery',   label:'Recovery' },
]
```

Reorder + rename:
```js
[
  { to:'/',           label:'Home' },
  { to:'/marathon',   label:'Race Day' },
  { to:'/dinner',     label:'Pre-Race Dinner' },
  { to:'/recovery',   label:'Recovery' },
  { to:'/run-20',     label:'Training Run' },
]
```

Race Day moves up; training run moves to the end and gets a neutral label. No styling change beyond order.

## Marathon Page Changes

- Hero image swap: `photo-1531315396756-905d68d21b56` → `photo-1639437038514-0ad841b2f62a` (Split Rock Lighthouse). Keep all other styling (brightness/saturate filter, object-position).
- No content changes — the page already reflects the new fueling plan from the prior spec.

## Run20 Page Changes (light touch)

The only visual change: the hero badge. Current:
```jsx
<div style={{ ...background:'var(--accent)',color:'var(--black)',...}}>TOMORROW</div>
```

Change to a muted variant:
```jsx
<div style={{ ...background:'var(--surface3)',color:'var(--muted)',border:'1px solid var(--border)',...}}>TRAINING · DONE</div>
```

No content changes to the rest of the Run20 page. It remains a functioning reference page.

## Out of Scope

- Dinner page and Dinner imagery (preserved per user)
- Recovery page imagery (not Grandma's-focused)
- `src/data/plans.js` (already reflects race-day plan from prior spec)
- Run20 page body content (reference material remains)
- App route structure (`/run-20` route stays)

## Acceptance Criteria

1. Landing hero shows updated tagline (race in 2 days, no "20-mile peak training run tomorrow").
2. Landing hero stat tiles show all 8 stats from the table above; countdown tile renders `T-2 DAYS` on 2026-06-19 (or appropriate `T-n DAYS` / `RACE DAY` / `RECOVERY` depending on viewing date).
3. Landing section cards: Race Day promoted to first/urgent with badge `2 DAYS · SATURDAY`. Training run not in the primary grid. Training run appears in a small historical strip below.
4. Landing Race Day card uses the Canal Park CDN URL.
5. Landing hero background image is the Aerial Lift Bridge CDN URL.
6. Landing course info stat "On-Course Fuel" updated; closing paragraph no longer references "Thursday June 19".
7. Landing fuel arsenal lists ucannc, ucan, sis, skratch (no Anderson's).
8. Nav order: Home, Race Day, Pre-Race Dinner, Recovery, Training Run. Training Run label replaces "20-Mile Run".
9. Marathon page hero image is the Split Rock Lighthouse CDN URL.
10. Run20 hero badge text is `TRAINING · DONE`, styling is muted (no accent yellow).
11. `npm run build` succeeds.
12. Dinner page is untouched (no diff).
