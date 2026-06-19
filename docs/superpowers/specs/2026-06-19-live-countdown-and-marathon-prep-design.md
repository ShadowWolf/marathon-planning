# Live Race Countdown + Marathon-with-Prep — Design

**Date:** 2026-06-19
**Scope:**
- `src/components/Landing.jsx` — countdown logic + race date correction
- `src/data/plans.js` — new `marathonWithPrepPlan` array + race date constant
- `src/components/Timeline.jsx` — walk-event rendering
- `src/components/MarathonWithPrep.jsx` — new component
- `src/App.jsx` — new route
- `src/components/Nav.jsx` — new nav entry
- All references to race date `June 21` → `June 20` across components
**Goal:** Replace the static `T-N DAYS` countdown with a live HH:MM:SS countdown to the next race event, and add a second race-day plan that incorporates asthma inhaler walks at the half/20-mile marks and 400m walk breaks every 10km — still finishing 4:28 with a negative split.

## Race date correction

**Existing code says race = Saturday June 21, 2026.** That date is a Sunday. Grandma's Marathon is on Saturday — actual race date is **Saturday June 20, 2026**. Bryan confirmed: leaves at 5am June 20, race starts 8:10am June 20.

All `2026-06-21` and `June 21` references update to `2026-06-20` / `June 20`. Affected:
- `Landing.jsx` — hero eyebrow, `RACE_DATE` constant
- `Marathon.jsx` — hero eyebrow

The previous spec docs (committed) referenced June 21 — they remain as historical decision records and don't get edited.

## Change 1 — Live countdown (Option C)

**Anchors:**
- `DEPART = 2026-06-20T05:00:00` (local time, Bryan leaves)
- `RACE_START = 2026-06-20T08:10:00` (corral start)

**Display:** one primary countdown tile + a subtitle line with absolute times.

**State machine for the primary countdown:**

| State | Condition | Display |
|---|---|---|
| Pre-departure | `now < DEPART` | `T-XXh YYm` (hours+minutes to depart) — *or* `XXm YYs` once under 1 hour |
| Travel window | `DEPART ≤ now < RACE_START` | `T-XXh YYm` (hours+minutes to race start) |
| Race underway | `RACE_START ≤ now < RACE_START + 5h` | `RACE UNDERWAY` |
| Recovery | `now ≥ RACE_START + 5h` | `RECOVERY` |

**Subtitle text** (always shown beneath countdown tile, outside the stat-tile grid):

> Depart Sat 5:00 AM · Race Start Sat 8:10 AM

Rendered as a small mono-font line below the hero stat tiles, italic/dim.

**Implementation notes:**
- Add `useEffect` + `setInterval(1000)` in `Landing.jsx` to update countdown every second
- `useState` for current time, recomputed each tick
- During pre-departure and travel windows, format as `T-${h}h ${m}m`; under 1 hour, format as `${m}m ${s}s` for the punchier feel
- The first stat-tile (currently `Countdown`) is replaced by this live tile

**Other stat tiles unchanged:** Goal Time, Half Split, Avg Pace, Strategy, In-Race Fuel, Race Carbs, Total Caffeine.

## Change 2 — Marathon with Prep plan

**Goal:** Run 4:28 with negative split *while* incorporating asthma rescue-inhaler walks at half-marathon (km 21.1) and 20-mile (km 32.2) marks, plus 400m walk breaks every 10km.

**Walk schedule:**

| km | Type | Walking distance | Duration | Reason |
|---|---|---|---|---|
| 10 | 10km walk break | 400m | ~3 min | Standard every-10km walk |
| 21.1 | Inhaler walk (replaces 20km walk) | ~150m | ~1.5 min | Rescue inhaler at half-marathon mark |
| 32.2 | Inhaler walk (replaces 30km walk) | ~150m | ~1.5 min | Rescue inhaler at 20-mile mark |
| 40 | 10km walk break | 400m | ~3 min | Final walk before closing kick |

Total walking: ~1.1 km / ~9 min over the race. Walking pace assumed at 9 min/km (brisk).

**Pace structure (negative split, walk-adjusted):**
- Zone 1 (km 0–14): **6:27/km** running (vs 6:33 standard)
- Zone 2 (km 14–28): **6:18/km** running (vs 6:24 standard)
- Zone 3 (km 28–42.2): **6:03/km** running (vs 6:08 standard)
- Walks: 9 min/km

**Verified schedule** (running paces + walk events, all times cumulative):

| km | Time | Event | Phase |
|---|---|---|---|
| 0 | +0:00 | Zone 1 Begins — Patience (6:27/km) | early |
| 6 | +0:39 | UCAN Edge #1 | early |
| 10 | +1:05 | **Walk Break #1 — 400m** | early |
| 12 | +1:18 | UCAN Edge #2 | early |
| 13 | +1:25 | Half Split Check | early |
| 14 | +1:32 | Zone 2 Begins (6:18/km) | middle |
| 17 | +1:51 | UCAN+Caff #1 | middle |
| 21.1 | +2:17 | **Half + Inhaler Walk** (~150m, ~1.5 min) | middle |
| 23 | +2:29 | SiS GO #1 | middle |
| 28 | +3:01 | Zone 3 Begins (6:03/km) | late |
| 29 | +3:07 | UCAN+Caff #2 | late |
| 32.2 | +3:26 | **20-mile + Inhaler Walk** (~150m, ~1.5 min) | late |
| 34 | +3:37 | SiS GO #2 | late |
| 35 | +3:43 | Lemon Drop Hill | final |
| 38 | +4:01 | SiS GO #3 | final |
| 40 | +4:13 | **Walk Break #4 — 400m** | final |
| 42.2 | +4:28 | FINISH | done |

Half split lands at ~+2:17 (matches standard plan's target). Second half = ~2:11. Net negative split of ~6 min — same shape as standard plan, just executed via faster running pace to absorb the walks.

**Fueling:** Same 7-packet schedule as the standard plan, same km positions. The walks land at km 10, 21.1, 32.2, 40 — close to but not on fuel km marks (6, 12, 17, 23, 29, 34, 38). This is fine; UCAN and SiS don't need water and a walk near a fuel event makes it easier to swallow if Bryan wants to align them on race day.

### Data model — walk events in plan array

Extend the existing entry shape with an optional `walk` field:

```js
{
  km: 10, time: "+1:05", phase: "early",
  label: "Walk Break #1 — 10km",
  walk: { distance: 400, duration: "~3 min", inhaler: false },
  detail: "First scheduled walk break. 400m at brisk pace — about 3 minutes. Use it to reset breathing, check shoulders, drop tension in hands. Then ease back into 6:27/km running pace.",
  station: null,
}
```

`walk.inhaler: true` flags the half/20-mile breaks. Rendered with an inhaler emoji + slightly different badge color.

### Timeline component (RunRow) update

Extend `Timeline.jsx` to render a walk badge when `row.walk` is present:

```jsx
{row.walk && (
  <span style={{ /* WALK badge: blue/teal, mono font */ }}>
    🚶 WALK · {row.walk.distance}m · {row.walk.duration}
    {row.walk.inhaler && ' · 💨 INHALER'}
  </span>
)}
```

Walks and fuel events can coexist on the same entry (none currently do, but the data model supports it for future flexibility).

### MarathonWithPrep component

Lives at `src/components/MarathonWithPrep.jsx`. Structurally mirrors `Marathon.jsx`:
- Same hero pattern (eyebrow, title, subtitle)
  - Title: `RACE DAY · WITH PREP`
  - Subtitle: `Negative split · Walk breaks · Asthma inhaler at half + 20mi · 4:28 target`
- Same stat tile pattern (different values reflecting walk-adjusted plan)
- Same zone strategy card (paces updated)
- Same fuel strip (identical to standard plan)
- **New "Walk Breaks" card** between zone strategy and fuel strip, summarizing the 4 walk events
- Same pre-race and race-morning sections
- Same aid station strategy

Reuses existing `PreRow` and `RunRow` from `Timeline.jsx`.

### Route + nav

- `App.jsx` — add `<Route path="/marathon-prep" element={<MarathonWithPrep />} />`
- `Nav.jsx` — insert `{ to:'/marathon-prep', label:'Race Day + Prep' }` directly after `Race Day`

### Landing card?

Open question: do we add a section card for `/marathon-prep` on the landing page? My recommendation: **no, not in this change.** The landing page is already pivoted to race-focus with Marathon as the urgent card. Adding a second race-day card next to it would dilute the focus. Bryan can navigate to `/marathon-prep` from nav. (Could revisit if requested.)

## Acceptance Criteria

**Countdown:**
1. `RACE_DATE` constant in Landing.jsx is `2026-06-20T08:10:00` (race start, not midnight).
2. New `DEPARTURE` constant is `2026-06-20T05:00:00`.
3. Countdown stat tile updates every second.
4. On 2026-06-19 evening, displays `T-Xh YYm` format pointing at race start (since departure is also in the future, primary points at next event = depart first, then race once depart passes).
5. Subtitle reads `Depart Sat 5:00 AM · Race Start Sat 8:10 AM` below the stat-tile grid.
6. Hero eyebrow text updated to `Saturday June 20, 2026`.

**Date corrections:**
7. No remaining `June 21` references in any component file.
8. Marathon.jsx hero eyebrow shows `June 20, 2026`.

**Marathon with Prep:**
9. New route `/marathon-prep` resolves to `MarathonWithPrep` component.
10. Nav contains "Race Day + Prep" entry after "Race Day".
11. `marathonWithPrepPlan` array exported from `plans.js` with 4 walk events at km 10, 21.1, 32.2, 40.
12. Inhaler flag set true on the km 21.1 and km 32.2 walk events.
13. Finish time displayed: +4:28.
14. Half split displayed: +2:17.
15. Timeline RunRow renders a walk badge when `row.walk` is present.
16. Standard `/marathon` route unchanged (still shows the no-walks plan).
17. `npm run build` succeeds.

## Out of Scope

- Dinner page (untouched)
- Recovery page
- Run20 page (training-run-historical view)
- Adding `/marathon-prep` card to the landing page
- Modifying the existing standard `marathonPlan` (it stays as the option-without-walks)
- User-memory updates (handled separately after implementation)
