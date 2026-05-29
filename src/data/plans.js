
// ─── PRODUCT SPECS ────────────────────────────────────────────────────────────
export const products = {
  anderson: { name:"Anderson's Pure Fuel", short:"Anderson's", carbs:27, sodium:5,  caffeine:0,   water:false, color:"#c8501a", emoji:"🍁", note:"Fructose+glucose blend, GI 54, all-natural. Thin consistency, easy to swallow." },
  sis:      { name:"SiS GO Isotonic",      short:"SiS GO",     carbs:22, sodium:10, caffeine:0,   water:false, color:"#1a7a58", emoji:"🟢", note:"Maltodextrin-based, fast-acting, isotonic. No water needed. Thin liquid texture." },
  ucan:     { name:"UCAN Edge + Caffeine", short:"UCAN Caff",  carbs:19, sodium:55, caffeine:75,  water:false, color:"#1a50a0", emoji:"☕", note:"LIVSTEADY slow-release corn starch + 75mg caffeine. 75+ min steady energy. No water needed." },
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
  { time:"T-2h 45m", icon:"🥣", label:"Breakfast",            detail:"Quaker Oats Protein Granola + whole milk, 1.5-2 cups (~80-100g carbs). Coffee only if that is already your daily routine." },
  { time:"T-1h 30m", icon:"💧", label:"Skratch Labs Mix",      detail:"Mix 1 Skratch Labs packet into 500ml water. Sip over 45 minutes. This is your sodium load — do not skip it." },
  { time:"T-45m",    icon:"🍌", label:"Optional Snack",        detail:"Banana or one Anderson's packet if hungry. Skip entirely if not hungry." },
  { time:"T-30m",    icon:"🎽", label:"Corrals",               detail:"Anderson's packets in order, UCAN caffeine isolated. Light dynamic warm-up. Get into your corral early." },
  { time:"T-5m",     icon:"💧", label:"Last Sip",              detail:"One mouthful of water. You are fueled. Now run." },
];

// ─── 20-MILE RUN PLAN ─────────────────────────────────────────────────────────
// Target: ~60g/hr over 3:36. Anderson's primary (27g), UCAN caffeine at km 20, SiS as bridge.
// Minimized openings: 6 Anderson's + 1 UCAN = 7 total openings.
// Support point at km 16 — extra gels handed off there.
export const run20Plan = [
  {
    km:0, time:"+0:00", phase:"early", label:"Start",
    fuel:null,
    detail:"6:45-6:50/km. Fully conversational. This is your longest training run — conservative is always correct from step one.",
  },
  {
    km:5, time:"+0:34", phase:"early", label:"Anderson's #1 🍁",
    fuel:"anderson", carbs:27,
    detail:"First Anderson's packet. 27g carbs. Squeeze fully and wipe hands. Water at your next opportunity. Energy stores still high — this is prevention not rescue.",
  },
  {
    km:10, time:"+1:08", phase:"middle", label:"Anderson's #2 🍁",
    fuel:"anderson", carbs:27,
    detail:"Second packet. Chase with water. Form check: shoulders down, cadence steady. How does your energy feel? Steady is correct.",
  },
  {
    km:14, time:"+1:35", phase:"middle", label:"Anderson's #3 🍁",
    fuel:"anderson", carbs:27,
    detail:"Third packet. You are approaching territory past your recent long runs. New ground starts around km 16 — fuel now before you get there.",
  },
  {
    km:16, time:"+1:49", phase:"middle", label:"Support Point — Restock",
    fuel:null, isSupport:true,
    detail:"Hand-off point. Grab extra Anderson's packets and confirm UCAN caffeine is ready. Quick stop — 30 seconds max. No sitting down. Keep moving.",
  },
  {
    km:20, time:"+2:16", phase:"late", label:"UCAN Edge + Caffeine ☕",
    fuel:"ucan", carbs:19, caffeine:75,
    detail:"UCAN caffeine gel. 19g slow-release carbs + 75mg caffeine. No water needed. This is your strategic weapon — the slow-release base keeps the energy floor up for the final 12km. Caffeine effect kicks in around km 22-23.",
  },
  {
    km:24, time:"+2:43", phase:"late", label:"Anderson's #4 🍁",
    fuel:"anderson", carbs:27,
    detail:"Fourth Anderson's. You are deep in the hurt zone — this is exactly where bonking happens to people who skip this. Fuel regardless of how you feel.",
  },
  {
    km:28, time:"+3:10", phase:"final", label:"Anderson's #5 🍁",
    fuel:"anderson", carbs:27,
    detail:"Fifth packet. UCAN caffeine is still active. Every km past here builds race-day resilience. You will not feel good — that is expected and correct.",
  },
  {
    km:32, time:"+3:36", phase:"done", label:"DONE — 20 miles",
    fuel:null,
    detail:"32km complete. Peak training run. Rehydrate immediately. 85-103g carbs + 30-40g protein within 30 minutes. You have earned every bit of this.",
  },
];

// Hourly carb accounting for 20-miler:
// Hr 1 (km 0-9.5): Anderson's #1 (27g) + Anderson's #2 partial = ~40g
// Hr 2 (km 9.5-19): Anderson's #2 partial + #3 (27g) = ~45g
// Hr 3 (km 19-28.5): UCAN (19g) + Anderson's #4 (27g) = 46g
// + Skratch pre-run (20g carbs) bridges the early gap
// Total: ~165g carbs from fuel + Skratch. Adequate with UCAN slow-release sustaining.

// ─── MARATHON RACE PLAN ────────────────────────────────────────────────────────
// Target: 60g/hr over 4:30. Anderson's primary, 1 UCAN caffeine at km 29.
// Station notes from Grandmas course (water + Powerade every 2 mi, every 1 mi after mile 19).
export const marathonPlan = [
  {
    km:0, time:"+0:00", phase:"early", label:"Start — Hold Back",
    fuel:null,
    detail:"6:30/km for the first 5km no matter what. Adrenaline will tell you to go faster. Ignore it. The runners passing you now will be behind you at km 35.",
    station:null,
  },
  {
    km:5, time:"+0:33", phase:"early", label:"Anderson's #1 🍁",
    fuel:"anderson", carbs:27,
    detail:"Mile 3 aid station. Anderson's packet + water. Settle to 6:25/km. Shoulders down. Cadence comfortable. This is where you establish rhythm for 37km.",
    station:"Aid Station: Mile 3",
  },
  {
    km:10, time:"+1:05", phase:"early", label:"Anderson's #2 🍁",
    fuel:"anderson", carbs:27,
    detail:"Mile 7 aid station. Anderson's + water. Do NOT take Powerade yet — gel sugars plus sports drink simultaneously can cause GI issues. Water only until km 17.",
    station:"Aid Station: Mile 7",
  },
  {
    km:13, time:"+1:23", phase:"middle", label:"Half Check — Honest Split",
    fuel:null,
    detail:"Ideal half split is ~2:15. If you are faster, ease back slightly. The second half is where marathons are won or lost. No heroics here.",
    station:"Aid Station: Mile 9",
  },
  {
    km:17, time:"+1:49", phase:"middle", label:"Anderson's #3 🍁 + Powerade Starts",
    fuel:"anderson", carbs:27,
    detail:"Mile 11. Anderson's + water. From here begin alternating Powerade with water at stations — sodium replenishment is now critical. Also the Pure Fuel station at Mile 17 will have Anderson's on-course.",
    station:"Aid Station: Mile 11",
  },
  {
    km:21, time:"+2:14", phase:"middle", label:"Anderson's #4 🍁",
    fuel:"anderson", carbs:27,
    detail:"Mile 13. Anderson's + Powerade. You feel like you are almost done. You are not. 21km remaining. Maintain 6:23/km and stay disciplined.",
    station:"Aid Station: Mile 13",
  },
  {
    km:25, time:"+2:40", phase:"late", label:"Anderson's #5 🍁 — Pure Fuel Station",
    fuel:"anderson", carbs:27,
    detail:"Mile 17 — this is the official Anderson's Pure Fuel station on the Grandmas course. Grab one here even if you brought enough. Extra fuel is never a mistake at km 25.",
    station:"Pure Fuel Station: Mile 17",
  },
  {
    km:29, time:"+3:05", phase:"late", label:"UCAN Edge + Caffeine ☕",
    fuel:"ucan", carbs:19, caffeine:75,
    detail:"Mile 19. UCAN caffeine gel. 19g slow-release + 75mg caffeine. No water needed. Take it between stations or with water at the station — your choice. Caffeine effect peaks around km 33-35 exactly when you need it most. Fresh fruit also available here.",
    station:"Aid Station: Mile 19 + Fresh Fruit",
  },
  {
    km:32, time:"+3:24", phase:"final", label:"Anderson's #6 🍁 — Pre-Hill Fuel",
    fuel:"anderson", carbs:27,
    detail:"Miles 20-22, stations every mile. Take Anderson's #6 BEFORE Lemon Drop Hill — you need fuel in your system going into the climb, not scrambling after it. This is non-negotiable.",
    station:"Aid Stations: Miles 20, 21, 22",
  },
  {
    km:37, time:"+3:56", phase:"final", label:"SiS GO #1 🟢 — Final Push",
    fuel:"sis", carbs:22,
    detail:"SiS GO isotonic gel as your final fast-carb push. 22g, no water needed. Stations every mile — take Powerade at each one. You are in the pain cave. Canal Park is close. Every step is banked fitness.",
    station:"Aid Stations: Miles 23, 24, 25",
  },
  {
    km:42.2, time:"+4:30", phase:"done", label:"FINISH — Grandmas Marathon",
    fuel:null,
    detail:"4:30:00. Canal Park, Duluth. Find Melissa. Eat everything. You earned all of it.",
    station:null,
  },
];

// ─── DINNER ────────────────────────────────────────────────────────────────────
export const dinner = {
  restaurant:"Bellisio's Italian Restaurant & Wine Bar",
  address:"405 Lake Avenue South, Canal Park, Duluth MN",
  strategy:"High carbs, moderate protein, low fat, low fiber. Tomato-based sauces over cream. Eat until comfortably full — not stuffed. You do not want to be bloated at the start line.",
  recommended:[
    { rank:1, label:"Best Choice",  color:"#30c060", name:"Pasta Amatriciana",             desc:"Bucatini with pancetta, caramelized onions and smoky tomato sauce. Tomato-based, fast-digesting carbs. Low fat. This is the move." },
    { rank:2, label:"Great Option", color:"#c8a020", name:"Rigatoni with Italian Sausage",  desc:"Rigatoni with Italian sausage, marinara, spinach and Parmigiano-Reggiano. Solid carb load, familiar flavors." },
    { rank:3, label:"Good Option",  color:"#c05018", name:"Spaghetti Arrabbiata",            desc:"Spaghetti with spicy tomato sauce, garlic, basil and fennel sausage. Skip if spicy foods bother your stomach." },
  ],
  starter:"Bruschetta — Roma tomatoes, garlic and basil on grilled Tuscan toast. Light, carb-forward, easy on the stomach.",
  avoid:["Lobster Ravioli or cream-sauced pasta — fat slows overnight digestion","Risotto — too rich the night before","Beef Tenderloin — high fat and protein, hard to process","Calamari — fried food is a gamble","Large salads — too much fiber"],
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
