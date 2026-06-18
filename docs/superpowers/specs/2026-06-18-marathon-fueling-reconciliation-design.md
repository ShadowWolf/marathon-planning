# Marathon Fueling Plan Reconciliation — Design

**Date:** 2026-06-18
**Scope:** `src/data/plans.js` `marathonPlan` array and `sharedPreRace` array. Possible minor touch in `src/components/Marathon.jsx` if labels reference removed products.
**Goal:** Replace the current 5-packet UCAN-only race plan with a balanced 7-packet plan that uses UCAN Edge, UCAN Edge+Caffeine, and SiS GO Isotonic at carb rates adequate for a 4:28 negative split.

## Problem

Commit `3816b4b` collapsed the race plan to UCAN-only fueling: 1 pre-race UCAN Edge + 4 packets during the race = ~95g carbs during the race. The rationale baked into the code was GI safety ("no fructose, GI-gentle throughout").

Two problems with that change:

1. **Undershoots fueling.** ~95g over 4:28 = ~21g/hr. Standard race fueling guidance is 60–90g/hr. Even the previous Anderson's-heavy plan (~176g, ~40g/hr) was on the conservative end. 21g/hr risks a bonk in Zone 3 precisely when the negative split needs the strongest push.
2. **Underuses the available arsenal.** Bryan has three GI-gentle products on hand (UCAN Edge, UCAN Edge+Caffeine, SiS GO Isotonic). Limiting to one product type forfeits the absorption-rate advantages of having a mix.

Anderson's Pure Fuel is out — Bryan confirmed only UCAN Edge, UCAN Edge+Caffeine, and SiS GO Isotonic are in the race inventory.

## Strategy

**Carb target:** ~31–36 g/hr during the race (~140–160g total in-race intake). This is the "proven sweet spot" — adequate fuel for a Zone 3 push without crossing into aggressive territory that would require additional gut training. Plus pre-race UCAN Edge (19g) and Skratch Labs (20g) → ~181g total ingestion across the morning + race.

**Product placement logic (each product where it is best):**

- **UCAN Edge** (19g slow-release LIVSTEADY, GI-gentle, no fructose) → Early race base layer. Slow release bridges 30–40 min and adds zero osmotic burden on a settling gut. Use in Zone 1 and the Zone 2 transition.
- **UCAN Edge + Caffeine** (19g slow-release + 75mg caffeine) → Two doses: Zone 2 begins (km 17) and Zone 3 begins (km 29). Split-dose caffeine sustains the kick from km 24 through the finish. The km 29 dose peaks at Lemon Drop Hill (km 35) as before; the km 17 dose covers the late Zone 2 / early Zone 3 transition where the first dose alone would still be ramping.
- **SiS GO Isotonic** (22g fast maltodextrin) → Late race fast carbs. When glycogen is depleting and effort is at 6:10/km, fast-acting carbs beat slow-release. Stack into Zone 3 and final push.

**Caffeine architecture (split-dose):** Coffee at breakfast (Bryan's daily routine, ~80–100mg) + UCAN+Caff #1 at km 17 (75mg) + UCAN+Caff #2 at km 29 (75mg) = **~230–250mg total, ~2.7–2.9 mg/kg** for an 85kg runner. This lands in the sports-nutrition sweet spot (3 mg/kg target). Single 75mg dose alone is sub-therapeutic for Bryan's weight.

**No fructose anywhere** in the plan — preserves the GI-safety property the recent change was reaching for, just with adequate volume.

## Race Schedule (7 packets during race)

Pace assumptions: Zone 1 (km 0–14) 6:33/km, Zone 2 (km 14–28) 6:24/km, Zone 3 (km 28–42.2) 6:08/km. Half split target +2:17 at km 21, finish +4:28 at km 42.2.

| # | km | Time | Zone | Product | Carbs | Caff |
|---|----|------|------|---------|-------|------|
| Pre | — | T-45m | — | UCAN Edge | 19g | 0 |
| 1 | 6 | +0:39 | Zone 1 | UCAN Edge | 19g | 0 |
| 2 | 12 | +1:19 | Zone 1 | UCAN Edge | 19g | 0 |
| 3 | 17 | +1:51 | Zone 2 begins | **UCAN Edge + Caffeine** | 19g | 75mg |
| 4 | 23 | +2:30 | Zone 2 | SiS GO Isotonic | 22g | 0 |
| 5 | 29 | +3:08 | Zone 3 begins | **UCAN Edge + Caffeine** | 19g | 75mg |
| 6 | 34 | +3:38 | Zone 3 | SiS GO Isotonic | 22g | 0 |
| 7 | 38 | +4:03 | Zone 3 | SiS GO Isotonic | 22g | 0 |

In-race spacing between fuel events (minutes): 40 / 32 / 39 / 38 / 30 / 25. Last SiS lands 25 min from the +4:28 finish — peak absorption hits ~10–15 min later, right when the closing kick demands it.

**Awareness moments (no fuel, but stay in the plan as flag entries):**
- km 13 Half Split Check (existing)
- km 21 Half — On Plan (existing)
- km 32 Pushing — Stations Every Mile (existing)
- km 35 Lemon Drop Hill — UCAN+Caff Active (existing)

**Carb totals:**
- In-race: 2× UCAN Edge (38g) + 2× UCAN+Caff (38g) + 3× SiS (66g) = **142g**
- In-race rate: 142g / 4.47 hr = **31.8 g/hr**
- Total morning + race: 19g (pre-race UCAN) + 20g (Skratch) + 142g (race) = **181g**

**Caffeine totals:**
- Coffee at breakfast: ~80–100mg (Bryan's daily routine)
- 2× UCAN+Caff (km 17 + km 29): 150mg
- Total: **~230–250mg = ~2.7–2.9 mg/kg** for an 85kg runner — sports-nutrition sweet spot
- Sleep check: last dose at +3:08 from start ≈ ~10:30am local. With a 3–5hr half-life, plasma levels drop below threshold by late afternoon — normal bedtime unaffected.

## Pre-Race Updates

`sharedPreRace` entry at T-30m currently says "4 UCAN Edge packets staged, UCAN Edge+Caffeine isolated in a separate pocket." Update to reflect the new inventory: **2 UCAN Edge + 2 UCAN Edge+Caffeine + 3 SiS GO Isotonic packets staged.** Continue calling out caffeine isolation (now two packets to keep separate from the non-caffeinated UCAN Edge).

T-2h 45m breakfast entry currently hedges coffee as "only if that is already your daily routine." Since coffee is now part of the caffeine plan and Bryan confirmed he's a daily coffee drinker, **firm this up**: coffee with breakfast is required, not optional. Update the `detail` string accordingly.

T-45m pre-race UCAN Edge entry stays as-is.

## Files Touched

- `src/data/plans.js`
  - `marathonPlan` array: rewrite to the 7-packet schedule above. Reuse existing fuel-event entry shape (`km`, `time`, `phase`, `label`, `fuel`, `carbs`, `caffeine?`, `detail`, `station`). Note km 17 uses `fuel:"ucan"` (caffeinated) with `caffeine:75`, not `ucannc`.
  - `sharedPreRace` array: update T-2h 45m `detail` (firm up coffee as required) and T-30m `detail` (staging string).
  - Update the header comment block above `marathonPlan` to describe the new strategy ("UCAN base + split caffeine + SiS finish, 7 in-race + 1 pre-race = 142g during race, ~32 g/hr; 2× 75mg caffeine + coffee").
- `src/components/Marathon.jsx` — review for any hardcoded references to removed products or the "5 total" count. Update if found; otherwise no change. The component currently reads from the data array, so most changes propagate automatically.
- `products` object: **no changes** — all three products and Skratch already defined. `ucannc` (UCAN Edge no caffeine) added in the previous commit stays.

## Out of Scope

- `run20Plan` (32km training run). Already past — June 18 is post-training-peak.
- `dinner`, `recovery` arrays. Unchanged.
- `Landing.jsx`, course profile, other route pages.
- No changes to the negative-split pacing strategy itself — only the fueling overlaid on it.

## Acceptance Criteria

1. Marathon route renders the 7-packet schedule in chronological order with correct km/time labels.
2. Each fuel event uses one of: `ucannc` (UCAN Edge), `ucan` (UCAN Edge+Caffeine), `sis` (SiS GO Isotonic).
3. Two `ucan` (caffeinated) fuel events at km 17 and km 29, each with `caffeine:75`.
4. No references to Anderson's Pure Fuel in the marathon plan or pre-race sequence.
5. Pre-race T-30m string lists the actual packets staged (2 UCAN Edge + 2 UCAN+Caff + 3 SiS).
6. Pre-race T-2h 45m breakfast string makes coffee required (not optional).
7. Header comment above `marathonPlan` accurately describes the new strategy, carb totals, and split-caffeine plan.
8. Existing awareness-moment entries (km 13, 21, 32, 35) preserved.
9. `npm run build` succeeds.

## Open Questions

None. Bryan confirmed:
- Anderson's out (Option A)
- Carb target = ~31–36 g/hr (Option C)
- Option D acknowledged but not used
- Split-dose caffeine: coffee at breakfast + 2× UCAN+Caff at km 17 and km 29
