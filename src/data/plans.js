
// ─── PRODUCT SPECS ────────────────────────────────────────────────────────────
export const products = {
  anderson: { name:"Anderson's Pure Fuel", short:"Anderson's", carbs:27, sodium:5,  caffeine:0,   water:false, color:"#c8501a", emoji:"🍁", note:"Fructose+glucose blend, GI 54, all-natural. Thin consistency, easy to swallow." },
  sis:      { name:"SiS GO Isotonic",      short:"SiS GO",     carbs:22, sodium:10, caffeine:0,   water:false, color:"#1a7a58", emoji:"🟢", note:"Maltodextrin-based, fast-acting, isotonic. No water needed. Thin liquid texture." },
  ucan:     { name:"UCAN Edge + Caffeine", short:"UCAN Caff",  carbs:19, sodium:55, caffeine:75,  water:false, color:"#1a50a0", emoji:"☕", note:"LIVSTEADY slow-release corn starch + 75mg caffeine. 75+ min steady energy. No water needed." },
  ucannc:   { name:"UCAN Edge",            short:"UCAN Edge",  carbs:19, sodium:55, caffeine:0,   water:false, color:"#1a50a0", emoji:"⚡", note:"LIVSTEADY slow-release corn starch. No fructose — very GI-gentle. Sustained energy for 75+ min. No water needed." },
  skratch:  { name:"Skratch Labs Hydration",short:"Skratch",   carbs:20, sodium:400,caffeine:0,   water:true,  color:"#8a3898", emoji:"💧", note:"400mg sodium per serving — replaces sodium tablets. Mix pre-run in 500ml water." },
};

// ─── SHARED PRE-RUN ────────────────────────────────────────────────────────────
export const sharedPre20 = [
  { time:"T-2h 30m", icon:"🥣", label:"Breakfast",          detail:"Quaker Oats Protein Granola + whole milk (~100g carbs). Coffee if that is your normal routine. Nothing new today." },
  { time:"T-45m",    icon:"💧", label:"Skratch Labs Mix",    detail:"Mix 1 Skratch Labs packet into 500ml water (400mg sodium, 20g carbs). This replaces sodium tablets entirely. Sip steadily over the next 30 minutes — do not chug it." },
  { time:"T-15m",    icon:"🎽", label:"Gear Up",             detail:"Anderson's packets loaded in order. UCAN caffeine gel in a separate pocket — label it so you do not grab it early. Confirm your support point location." },
  { time:"T-0",      icon:"🏃", label:"GO",                  detail:"6:45-6:50/km from step one. First Anderson's at km 5." },
];

export const sharedPreRace = [
  { time:"T-3h",     icon:"⏰", label:"Wake & Hydrate",       detail:"500ml plain water immediately. Have it on the nightstand the night before." },
  { time:"T-2h 45m", icon:"🥣", label:"Breakfast + Coffee",   detail:"Quaker Oats Protein Granola + whole milk, 1.5-2 cups (~80-100g carbs). Coffee with breakfast — required, not optional. The coffee is dose #1 of your three-dose caffeine plan (coffee + UCAN+Caff at km 17 + UCAN+Caff at km 29)." },
  { time:"T-1h 30m", icon:"💧", label:"Skratch Labs Mix",      detail:"Mix 1 Skratch Labs packet into 500ml water. Sip over 45 minutes. This is your sodium load — do not skip it." },
  { time:"T-45m",    icon:"⚡", label:"UCAN Edge Pre-Load",     detail:"One UCAN Edge packet now. 19g slow-release carbs, no water needed. Bridges breakfast to race start and extends your glycogen runway into the first hour. Not optional — take it." },
  { time:"T-30m",    icon:"🎽", label:"Corrals",               detail:"Stage 2 UCAN Edge + 2 UCAN Edge+Caffeine + 3 SiS GO Isotonic. Both caffeine packets isolated in their own pocket and labeled — easy to confuse with plain UCAN Edge under race pressure. Light dynamic warm-up. Get into your corral early." },
  { time:"T-5m",     icon:"💧", label:"Last Sip",              detail:"One mouthful of water. You are fueled. Now run." },
];

// ─── 20-MILE RUN PLAN ─────────────────────────────────────────────────────────
// Target: ~60g/hr over 3:36. Anderson's primary (27g), UCAN caffeine at km 20, SiS as bridge.
// Minimized openings: 6 Anderson's + 1 UCAN = 7 total openings.
// Support point at km 16 — extra gels handed off there.
export const run20Plan = [
  {
    km:0, time:"+0:00", phase:"early", label:"Start — Heat Adjusted",
    fuel:null,
    detail:"7:05-7:15/km today. It is already 64F and climbing to 78F by the end. Conversational effort is the rule — if you cannot hold a sentence, slow down. Heat is doing work your legs cannot see on the watch.",
  },
  {
    km:5, time:"+0:36", phase:"early", label:"Anderson's #1 🍁",
    fuel:"anderson", carbs:27,
    detail:"First Anderson's. 27g carbs. It is warm — chase with water at every opportunity, not just scheduled stops. Sweat rate is higher than a cool day so drink more than you think you need.",
  },
  {
    km:10, time:"+1:12", phase:"middle", label:"Anderson's #2 🍁",
    fuel:"anderson", carbs:27,
    detail:"Second packet. Temperature is climbing toward 70F. Chase with water immediately. Check in: sweating heavily? Drink more. Perceived effort will be elevated — that is the heat tax, not a fitness problem.",
  },
  {
    km:14, time:"+1:41", phase:"middle", label:"Anderson's #3 🍁",
    fuel:"anderson", carbs:27,
    detail:"Third packet. You are entering new territory past recent long runs. The heat makes this feel harder than the km number suggests. That is accurate — you are doing more physiological work today.",
  },
  {
    km:16, time:"+1:56", phase:"middle", label:"Support Point — Restock",
    fuel:null, isSupport:true,
    detail:"Hand-off at km 16. Grab Anderson's packets and UCAN caffeine. Priority today: grab cold water or a sports drink from your support if available — pour some on your head and neck too. 30 seconds max. Keep moving.",
  },
  {
    km:20, time:"+2:23", phase:"late", label:"UCAN Edge + Caffeine ☕",
    fuel:"ucan", carbs:19, caffeine:75,
    detail:"UCAN caffeine gel. 19g slow-release + 75mg caffeine. No water needed. It is now 73-75F and rising. Pace may slip to 7:20-7:30/km — that is correct and expected. Do not chase a number in this heat.",
  },
  {
    km:24, time:"+2:52", phase:"late", label:"Anderson's #4 🍁",
    fuel:"anderson", carbs:27,
    detail:"Fourth packet. Temps peaking near 77F. If you need to slow to 7:30/km or beyond, do it. Finishing strong and uncooked matters more than pace today. Fuel regardless of how you feel.",
  },
  {
    km:28, time:"+3:21", phase:"final", label:"Anderson's #5 🍁",
    fuel:"anderson", carbs:27,
    detail:"Fifth packet. Hardest stretch of any 32km run in the heat. Shorten your stride, keep turnover up, stay upright. UCAN caffeine is still active. Every step here builds race-day heat resilience.",
  },
  {
    km:32, time:"+3:50", phase:"done", label:"DONE — 20 miles in the heat",
    fuel:null,
    detail:"32km complete in 75F+ heat. That is meaningfully harder than a cool-day 20-miler — your effort today reflects fitness well beyond what the pace shows. Rehydrate immediately and aggressively. 85-103g carbs + 30-40g protein within 30 minutes.",
  },
];

// Hourly carb accounting for 20-miler:
// Hr 1 (km 0-9.5): Anderson's #1 (27g) + Anderson's #2 partial = ~40g
// Hr 2 (km 9.5-19): Anderson's #2 partial + #3 (27g) = ~45g
// Hr 3 (km 19-28.5): UCAN (19g) + Anderson's #4 (27g) = 46g
// + Skratch pre-run (20g carbs) bridges the early gap
// Total: ~165g carbs from fuel + Skratch. Adequate with UCAN slow-release sustaining.

// ─── MARATHON RACE PLAN (NEGATIVE SPLIT) ────────────────────────────────────
// Strategy: 3 zones. Zone 1 (km 0-14): 6:32-6:35/km patience.
// Zone 2 (km 14-28): 6:23-6:25/km goal pace settle.
// Zone 3 (km 28-42.2): 6:10-6:15/km deliberate push.
// Half split target: ~2:17. Finish target: ~4:28.
// Course net downhill assists Zone 3.
// Fuel: UCAN base + SiS finish. No fructose. 1 pre-race + 7 during = 142g during race, ~32 g/hr.
// Caffeine: split-dose. Coffee + UCAN+Caff at km 17 + UCAN+Caff at km 29 = ~230-250mg total
// (~2.7-2.9 mg/kg for 85kg). km 29 dose peaks at Lemon Drop Hill (km 35); km 17 dose covers Zone 2.
export const marathonPlan = [
  {
    km:0, time:"+0:00", phase:"early", label:"Zone 1 Begins — Patience",
    fuel:null,
    detail:"6:32-6:35/km. This feels embarrassingly slow and that is exactly correct. Every runner passing you in the first 5km is making a mistake you are choosing not to make. The downhill tempts you to bank time early. Resist.",
    station:null,
  },
  {
    km:6, time:"+0:39", phase:"early", label:"UCAN Edge #1",
    fuel:"ucannc", carbs:19,
    detail:"First in-race UCAN. 19g slow-release, no fructose, no GI stress. Take it between stations — no water needed, chase with Powerade at Mile 3 aid station. Pre-race UCAN is still active, this stacks the runway. Still 6:32-6:35/km.",
    station:"Near Aid Station: Mile 3",
  },
  {
    km:12, time:"+1:19", phase:"early", label:"UCAN Edge #2",
    fuel:"ucannc", carbs:19,
    detail:"Second UCAN Edge. 19g, slow-release stacking on top of UCAN #1 — sustained energy through Zone 2 transition. No GI stress. Take between stations, Powerade at Mile 7. Hold pace at 6:32-6:35/km.",
    station:"Near Aid Station: Mile 7",
  },
  {
    km:13, time:"+1:25", phase:"early", label:"Half Split Check",
    fuel:null,
    detail:"Project your half split — you want to cross 21.1km around 2:17. If you are on pace for faster than that, back off now. The back half is where this race gets run.",
    station:"Aid Station: Mile 9",
  },
  {
    km:17, time:"+1:51", phase:"middle", label:"UCAN+Caff #1 — Zone 2 Begins",
    fuel:"ucan", carbs:19, caffeine:75,
    detail:"Zone 2 starts here. First caffeine dose: UCAN Edge + 75mg caffeine. 19g slow-release, gut stays quiet. Caffeine peaks ~km 24 and carries into Zone 3. Ease to 6:23-6:25/km, a controlled release not a surge. Start alternating Powerade at stations from here.",
    station:"Aid Station: Mile 11",
  },
  {
    km:21, time:"+2:17", phase:"middle", label:"Half — On Plan",
    fuel:null,
    detail:"Half at ~2:17. This is exactly where you want to be. You have banked nothing — you have conserved everything. Runners who went out at 6:10/km are starting to fade. You are not.",
    station:"Aid Station: Mile 13",
  },
  {
    km:23, time:"+2:30", phase:"middle", label:"SiS GO #1 — Glycogen Top-Up",
    fuel:"sis", carbs:22,
    detail:"First fast carbs of the day. SiS GO Isotonic — 22g fast maltodextrin, no water needed. Top up glycogen before Zone 3 demand spikes. Two hours of UCAN base means your gut is ready for this. Still 6:23-6:25/km.",
    station:"Between Aid Stations: Mile 14-15",
  },
  {
    km:29, time:"+3:08", phase:"late", label:"UCAN+Caff #2 — Zone 3 Begins",
    fuel:"ucan", carbs:19, caffeine:75,
    detail:"Zone 3. Second caffeine dose: UCAN Edge + 75mg caffeine — slow-release plus the push you have been saving. Take it between stations, no water needed. Deliberately push to 6:10-6:15/km. This is you finally racing. Caffeine peaks in ~25 min, right at Lemon Drop Hill.",
    station:"Between stations",
  },
  {
    km:32, time:"+3:22", phase:"final", label:"Pushing — Stations Every Mile",
    fuel:null,
    detail:"6:10-6:15/km. Stations every mile — Powerade at each one. You are running faster than your first half. Every runner you pass now went out too fast. That is your plan working.",
    station:"Aid Stations: Miles 20, 21, 22",
  },
  {
    km:34, time:"+3:38", phase:"final", label:"SiS GO #2 — Pre-Hill Fast Carbs",
    fuel:"sis", carbs:22,
    detail:"Second SiS GO — 22g fast maltodextrin. Energy lands right before Lemon Drop Hill. Both caffeine doses are stacked and active. No water needed. Keep pushing 6:10-6:15/km — the climb is coming.",
    station:"Aid Station: Mile 21",
  },
  {
    km:35, time:"+3:43", phase:"final", label:"Lemon Drop Hill — Caffeine Stacked",
    fuel:null,
    detail:"Lemon Drop Hill. Both caffeine doses fully active, SiS GO just landing. The hill is not large but at km 35 everything is large. Shorten stride going up, keep turnover. Recover on the descent then re-engage pace.",
    station:"Aid Stations: Miles 23, 24",
  },
  {
    km:38, time:"+4:03", phase:"final", label:"SiS GO #3 — Closing Kick",
    fuel:"sis", carbs:22,
    detail:"Final fuel of the day. SiS GO — 22g fast carbs land in the system right when the closing kick demands them. 4.2km to go, your gut has been clean all day, both caffeine doses still active. Take Powerade at every remaining station. Canal Park is 25 minutes away.",
    station:"Aid Station: Mile 25",
  },
  {
    km:42.2, time:"+4:28", phase:"done", label:"FINISH — Grandmas Marathon",
    fuel:null,
    detail:"4:28. Negative split executed. Canal Park, Duluth. Find Melissa. You ran the second half faster than the first over 42km. That is how you run a marathon.",
    station:null,
  },
];

// ─── DINNER ────────────────────────────────────────────────────────────────────
export const dinner = {
  restaurant:"Bellisio's Italian Restaurant & Wine Bar",
  address:"405 Lake Avenue South, Canal Park, Duluth MN",
  strategy:"High carbs, moderate protein, low fat, low fiber. Tomato-based sauces over cream. Eat until comfortably full — not stuffed. You do not want to be bloated at the start line.",
  recommended:[
    { rank:1, label:"Best Choice",  color:"#30c060", name:"Rigatoni Balsamico",                      desc:"Rigatoni with Italian sausage, marinara sauce, spinach and Parmigiano-Reggiano, topped with balsamic reduction. Tomato-based, solid carbs, familiar flavors. This is the move." },
    { rank:2, label:"Great Option", color:"#c8a020", name:"Gnocchi Fresco",                           desc:"Freshly made gnocchi with beefsteak tomato and goat cheese, topped with fresh basil. Light and clean — tomato-based with less bulk than a full pasta. Good choice if you want something lighter." },
    { rank:3, label:"Good Option",  color:"#c05018", name:"Pasta alla Arrabbiata with Italian Sausage", desc:"Spaghetti with spicy tomato sauce, garlic, basil and fennel sausage. Skip if spicy foods bother your stomach." },
  ],
  starter:"Bellisio's Traditional Bruschetta ($14.40) — fresh Roma tomatoes, garlic and basil on grilled Tuscan bread. Light, carb-forward, easy on the stomach.",
  avoid:["Lobster Ravioli with Grilled Shrimp or Lobster and Shrimp Linguini — lobster cream sauce slows overnight digestion","Fettuccine Alfredo or Seaside Fettuccine — butter and cream sauce is too heavy pre-race","Pappardelle alla Norcina — cream and pancetta, same problem","Italian Sausage Risotto or Shrimp and Asparagus Risotto — too rich the night before","Beef Tenderloin or Filet Mignon alla Bellisio's — high fat and protein, hard to process overnight","Calamari and Peppers — fried food is a GI gamble","Caesar Salad or Tuscan Salad — too much fiber and fat"],
  drinks:[
    { name:"Sparkling Water", good:true,  note:"Best choice. Hydration without GI risk." },
    { name:"Italian Soda",    good:true,  note:"Light, festive, a little sugar." },
    { name:"Still Water",     good:true,  note:"Fine. Alternate with sparkling." },
    { name:"Coffee or Espresso", good:false, note:"Skip — you need quality sleep tonight." },
    { name:"Alcohol",         good:false, note:"Hard no. Even one drink dehydrates and degrades sleep." },
  ],
  portionNote:"Portions at Bellisio's are famously large. Stop at comfortably full.",
};

// ─── RECOVERY ─────────────────────────────────────────────────────────────────
export const recovery = [
  {
    window:"0-30 min", title:"Immediate Refuel", color:"#e8a830",
    img:"https://images.unsplash.com/photo-1559181567-c3190ca9be46?w=800&q=70",
    items:[
      { label:"Carbs",    value:"85-103g",         detail:"1.0-1.2g per kg. Glycogen replenishment is the priority. Chocolate milk, banana, granola bar — whatever you can get down immediately." },
      { label:"Protein",  value:"30-40g",           detail:"0.3-0.4g per kg. Greek yogurt, protein shake, or chocolate milk." },
      { label:"Fluids",   value:"500-750ml",        detail:"Electrolyte drink preferred over plain water. You lost 1-2+ liters." },
      { label:"Ratio",    value:"3:1 carb:protein", detail:"Carbs are more urgent than protein in this first window." },
    ],
  },
  {
    window:"30 min - 2 hrs", title:"First Real Meal", color:"#30c060",
    img:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=70",
    items:[
      { label:"Calories",  value:"800-1,200 kcal", detail:"You burned ~3,500-4,000 kcal. This is the first of several meals over 24 hours." },
      { label:"Carbs",     value:"150-200g",        detail:"Rice, pasta, potatoes, bread." },
      { label:"Protein",   value:"40-50g",          detail:"Now protein becomes equally important for muscle repair." },
      { label:"Sodium",    value:"Go salty",         detail:"Your body craves what it lost. Do not fight it." },
    ],
  },
  {
    window:"2-24 hrs", title:"Rest of Race Day", color:"#1a5898",
    img:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=70",
    items:[
      { label:"Eating",    value:"Every 2-3 hrs",        detail:"Small frequent meals. Glycogen needs multiple refills." },
      { label:"Hydration", value:"Ongoing",               detail:"Urine pale yellow by evening. No alcohol today." },
      { label:"Legs up",   value:"As much as possible",  detail:"Elevate above heart level. Reduces inflammation." },
      { label:"Cold water",value:"10-15 min optional",   detail:"Lake Superior is right there and cold enough. First 2 hours is optimal." },
    ],
  },
  {
    window:"Day 2-3", title:"The Day After", color:"#c06020",
    img:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=70",
    items:[
      { label:"Walking",    value:"Easy 20-30 min",    detail:"Light movement beats complete rest. Promotes blood flow." },
      { label:"No running", value:"Full week minimum", detail:"Marathon damage takes 2-4 weeks to repair. Day 2 soreness is worse than Day 1 — normal." },
      { label:"Sleep",      value:"8-9 hrs",           detail:"Growth hormone peaks in deep sleep. This is real repair time." },
      { label:"Protein",    value:"~2g/kg ongoing",    detail:"Keep elevated for 3-5 days to support muscle repair." },
    ],
  },
];
