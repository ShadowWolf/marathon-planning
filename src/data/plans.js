
// ─── SHARED PRE-RUN ──────────────────────────────────────────────────────────
export const sharedPre = [
  { time:"T-2h 30m", icon:"🥣", label:"Breakfast", detail:"Quaker Oats Protein Granola + whole milk (~100g carbs). Coffee if that is your normal routine. Zero new foods — this is not the morning to experiment." },
  { time:"T-45m",    icon:"⚡", label:"Electrolyte Pack", detail:"Mix 1 Precision electrolyte pack into ~500ml water. Sip steadily. Sodium loading starts now, not at the start line." },
  { time:"T-15m",    icon:"🎽", label:"Gear & Load Up", detail:"Fuel loaded in order. Check count before you leave. No more food — stomach should be settling into race mode." },
  { time:"T-0",      icon:"🏃", label:"GO", detail:"Start your watch. First fuel at 5km." },
];

export const sharedRacePre = [
  { time:"T-3h",     icon:"⏰", label:"Wake & Hydrate", detail:"500ml water or electrolyte drink immediately on waking. Have it on the nightstand the night before so it is the first thing you do." },
  { time:"T-2h 45m", icon:"🥣", label:"Breakfast", detail:"Quaker Oats Protein Granola + whole milk, 1.5–2 cups (~80–100g carbs). Coffee only if that is already your daily routine." },
  { time:"T-1h 30m", icon:"⚡", label:"Electrolyte Pack", detail:"Mix Precision electrolyte pack into 500ml water. Sip over the next 45 minutes — do not drink it all at once." },
  { time:"T-45m",    icon:"🍌", label:"Optional Snack", detail:"If hungry: banana or one gel. If not hungry, skip it entirely. Do not force food this close to the gun." },
  { time:"T-30m",    icon:"🎽", label:"Corrals", detail:"Fuel loaded in order. Caffeine source separated so you do not grab it early. Get to your corral, do a light dynamic warm-up." },
  { time:"T-5m",     icon:"💧", label:"Last Sip", detail:"One mouthful of water only. You are fueled. Now run." },
];

// ─── MAPLE ONLY PLAN ─────────────────────────────────────────────────────────
export const mapleColor = "#c8501a";

export const maple19Run = [
  { km:0,    time:"+0:00", phase:"early",  label:"Start",                detail:"6:45–6:50/km easy conversational pace. Resist the fresh-legs surge — you have 30km ahead of you." },
  { km:5,    time:"+0:34", phase:"early",  label:"Syrup #1 🍁",          detail:"Anderson's Pure Fuel packet #1. 27g carbs. Squeeze completely, chase with water. Stores still high — this is insurance." },
  { km:10,   time:"+1:08", phase:"middle", label:"Syrup #2 🍁",          detail:"Second packet. Chase with water. You should feel strong — do not let pace creep up." },
  { km:15,   time:"+1:42", phase:"middle", label:"Syrup #3 🍁",          detail:"Third packet. Halfway check. Legs okay? Sticky fingers are normal — wipe on shorts and keep moving." },
  { km:20,   time:"+2:16", phase:"late",   label:"Syrup #4 + Caffeine ☕", detail:"Packet #4 plus your Precision caffeine pack together. This mirrors race-day km 27. Note how your body responds to caffeine mid-effort — important data for race day." },
  { km:24,   time:"+2:43", phase:"late",   label:"Syrup #5 🍁",          detail:"Fifth packet. You are in the hurt zone. Fuel anyway. This is where bonking happens to people who skip this packet." },
  { km:28,   time:"+3:10", phase:"final",  label:"Syrup #6 🍁 (optional)",detail:"Optional sixth packet if you have one. Practice late-race discipline. Mirrors marathon km 38–40." },
  { km:30.6, time:"+3:27", phase:"done",   label:"DONE — 19 miles",      detail:"30.6km complete. Rehydrate immediately. 85–103g carbs + 30–40g protein within 30 minutes." },
];

export const maple20Run = [
  { km:0,    time:"+0:00", phase:"early",  label:"Start",                detail:"6:45–6:50/km easy. Your longest training run. Respect the distance from step one." },
  { km:5,    time:"+0:34", phase:"early",  label:"Syrup #1 🍁",          detail:"First Anderson's packet. 27g carbs. Chase with water. Legs feel good — trust the plan anyway." },
  { km:10,   time:"+1:08", phase:"middle", label:"Syrup #2 🍁",          detail:"Second packet. Form check: shoulders relaxed, cadence steady. How are you feeling mentally?" },
  { km:15,   time:"+1:42", phase:"middle", label:"Syrup #3 🍁",          detail:"Third packet. You are approaching where previous long runs ended. New territory starts here." },
  { km:20,   time:"+2:16", phase:"late",   label:"Syrup #4 + Caffeine ☕", detail:"Packet #4 plus caffeine pack. Race-equivalent of km 27. Caffeine should carry you through to km 28+." },
  { km:24,   time:"+2:43", phase:"late",   label:"Syrup #5 🍁",          detail:"Fifth packet. Legs are tired. Fuel anyway. Mental toughness starts here — this is what race day km 35 will feel like." },
  { km:28,   time:"+3:10", phase:"final",  label:"Syrup #6 🍁",          detail:"Sixth packet. You are in the pain cave. This is intentional. Every step past 28km builds race-day resilience." },
  { km:32,   time:"+3:36", phase:"done",   label:"DONE — 20 miles",      detail:"32km complete. Peak training run. Celebrate it. 85–103g carbs + 30–40g protein within 30 minutes." },
];

export const mapleRaceRun = [
  { km:0,    time:"+0:00", phase:"early",  label:"Start — Hold Back",           detail:"6:30/km for the first 5km regardless of feel. Adrenaline will lie to you. Every runner who passes you now will see you again at km 35.", stationNote:null },
  { km:5,    time:"+0:33", phase:"early",  label:"Syrup #1 🍁 — Settle In",     detail:"Mile 3 aid station. Packet #1 + water. Settle to 6:25/km. Shoulders down, cadence comfortable.", stationNote:"Aid Station: Mile 3" },
  { km:10,   time:"+1:05", phase:"early",  label:"Syrup #2 🍁 — Find Rhythm",   detail:"Mile 7 aid station. Packet #2 + water (not Powerade yet). Controlled and comfortable is correct — do not chase the feeling.", stationNote:"Aid Station: Mile 7" },
  { km:13,   time:"+1:23", phase:"middle", label:"Half Marathon — Stay Honest",  detail:"Ideal half split is ~2:15. If you are faster than that, ease off slightly. Second half is where marathons are won or lost.", stationNote:"Aid Station: Mile 9" },
  { km:17,   time:"+1:49", phase:"middle", label:"Syrup #3 🍁 + Start Powerade", detail:"Mile 11 station. Packet #3 + water. From here start taking Powerade at alternate stations — sodium replacement becomes critical.", stationNote:"Aid Station: Mile 11" },
  { km:21,   time:"+2:14", phase:"middle", label:"Syrup #4 🍁 — The Lie Zone",   detail:"Mile 13 station. Packet #4 + Powerade. You feel like you are almost done. You are not. Maintain pace.", stationNote:"Aid Station: Mile 13" },
  { km:25,   time:"+2:40", phase:"late",   label:"Syrup #5 🍁 — Pure Fuel Stop", detail:"Mile 17 — Anderson's official Pure Fuel station on the course. Packet #5. This station exists for you.", stationNote:"Pure Fuel Station: Mile 17" },
  { km:29,   time:"+3:05", phase:"late",   label:"Syrup #6 🍁 + Caffeine ☕",    detail:"Mile 19 station. Packet #6 plus caffeine pack. Fresh fruit also here — grab it if your stomach is willing.", stationNote:"Aid Station: Mile 19 + Fresh Fruit" },
  { km:32,   time:"+3:24", phase:"final",  label:"Syrup #7 🍁 — Pre-Hill Fuel", detail:"Take packet #7 BEFORE Lemon Drop Hill (~km 35). Fuel in your system before the climb, not after. The hill is not large — but at km 35 everything is large.", stationNote:"Aid Stations: Miles 20, 21, 22" },
  { km:37,   time:"+3:56", phase:"final",  label:"Final Miles — Gut Check",      detail:"Stations every mile. Powerade at each one. You are in the pain cave. Everything hurts. Canal Park is close.", stationNote:"Aid Stations: Miles 23, 24, 25" },
  { km:42.2, time:"+4:30", phase:"done",   label:"FINISH — Grandma's Marathon",  detail:"4:30:00. Canal Park, Duluth. Find Melissa. Eat everything. You earned all of it.", stationNote:null },
];

export const mapleSummary = {
  gelsPerHour: "~1.5 packets/hr",
  carbsPerHour: "~40–55g/hr",
  totalCarbs: "~189g (7 packets × 27g)",
  waterRequired: "Recommended but flexible",
  caffeineSource: "Separate Precision caffeine pack at km 20/29",
  trainingGels: 6,
  raceGels: 7,
  notes: [
    "Anderson's packets already on course at Mile 17 — you are training with race-day fuel.",
    "27g carbs per packet — highest single-serving count of any option.",
    "No water strictly required but always drink at stations regardless.",
    "Practice opening packets with sweaty hands at pace. Sticky fingers happen — wipe and keep moving.",
    "Slightly under 60g/hr target — offset by passive Powerade carbs on course.",
  ],
};

// ─── MAPLE + UCAN PLAN ───────────────────────────────────────────────────────
export const ucanColor = "#1a60a8";

export const ucan19Run = [
  { km:0,    time:"+0:00", phase:"early",  label:"Start",                      detail:"6:45–6:50/km easy conversational pace. Resist the fresh-legs surge." },
  { km:4,    time:"+0:27", phase:"early",  label:"UCAN Edge #1 💙",             detail:"First UCAN Edge gel. 19g carbs, no water needed — LIVSTEADY slow-release starts now. Take slightly earlier than syrup plan because UCAN takes longer to ramp up." },
  { km:9,    time:"+1:01", phase:"middle", label:"Syrup #1 🍁",                 detail:"Anderson's packet for a fast carb layer on top of the UCAN base. 27g carbs. Chase with water. The two sources complement each other." },
  { km:14,   time:"+1:35", phase:"middle", label:"UCAN Edge #2 💙",             detail:"Second UCAN. Slow-release refill. No water needed. You should feel a steady energy floor rather than peaks and valleys." },
  { km:18,   time:"+2:02", phase:"late",   label:"Syrup #2 🍁 + Caffeine ☕",   detail:"Anderson's packet plus caffeine pack. Fast carbs plus slow-release plus caffeine all active simultaneously. This mirrors race-day km 24." },
  { km:23,   time:"+2:36", phase:"late",   label:"UCAN Edge #3 💙",             detail:"Third UCAN. You are deep in the hurt zone — the slow-release base keeps you from falling off a cliff. No water required." },
  { km:27,   time:"+3:03", phase:"final",  label:"Syrup #3 🍁 (optional)",      detail:"Optional fast-carb top-up if you feel the energy floor dropping. Chase with water." },
  { km:30.6, time:"+3:27", phase:"done",   label:"DONE — 19 miles",             detail:"30.6km complete. Rehydrate immediately. 85–103g carbs + 30–40g protein within 30 minutes." },
];

export const ucan20Run = [
  { km:0,    time:"+0:00", phase:"early",  label:"Start",                      detail:"6:45–6:50/km easy. Longest training run. Conservative is correct." },
  { km:4,    time:"+0:27", phase:"early",  label:"UCAN Edge #1 💙",             detail:"First UCAN Edge. 19g carbs, no water. LIVSTEADY base layer engaged." },
  { km:9,    time:"+1:01", phase:"middle", label:"Syrup #1 🍁",                 detail:"Anderson's fast-carb layer. 27g carbs. Chase with water. You are approaching where previous long runs ended." },
  { km:14,   time:"+1:35", phase:"middle", label:"UCAN Edge #2 💙",             detail:"Second UCAN. Slow-release refill. How is your energy floor feeling? Steady is the goal." },
  { km:18,   time:"+2:02", phase:"late",   label:"Syrup #2 🍁 + Caffeine ☕",   detail:"Anderson's plus caffeine pack. Triple stack active. This is what you will feel at race-day km 24." },
  { km:23,   time:"+2:36", phase:"late",   label:"UCAN Edge #3 💙",             detail:"Third UCAN. Deep hurt zone. Slow-release keeps the floor up." },
  { km:27,   time:"+3:03", phase:"final",  label:"Syrup #3 🍁",                 detail:"Fast-carb push for the final 5km. Chase with water. You are building race-day resilience right now." },
  { km:32,   time:"+3:36", phase:"done",   label:"DONE — 20 miles",             detail:"32km complete. Peak run. Celebrate it. 85–103g carbs + 30–40g protein within 30 minutes." },
];

export const ucanRaceRun = [
  { km:0,    time:"+0:00", phase:"early",  label:"Start — Hold Back",                detail:"6:30/km for the first 5km. Adrenaline will lie to you. Hold.", stationNote:null },
  { km:4,    time:"+0:27", phase:"early",  label:"UCAN #1 💙 — No Station Needed",   detail:"First UCAN Edge between stations. 19g carbs, no water required. Slow-release base layer is now active.", stationNote:"Between stations" },
  { km:7,    time:"+0:47", phase:"early",  label:"Syrup #1 🍁 — Mile 5 Station",     detail:"Mile 5 station. Anderson's packet + water. Fast carbs on top of UCAN base. Settle to 6:25/km.", stationNote:"Aid Station: Mile 5" },
  { km:11,   time:"+1:10", phase:"middle", label:"UCAN #2 💙 — Between Stations",    detail:"Second UCAN between stations. Slow-release refill. No water needed.", stationNote:"Between stations" },
  { km:15,   time:"+1:35", phase:"middle", label:"Syrup #2 🍁 + Start Powerade",     detail:"Mile 11 station. Anderson's packet + Powerade. From here alternate Powerade with water at stations.", stationNote:"Aid Station: Mile 11" },
  { km:19,   time:"+2:01", phase:"middle", label:"UCAN #3 💙 — Between Stations",    detail:"Third UCAN. Steady energy floor maintained. You feel like you are almost done. You are not.", stationNote:"Between stations" },
  { km:22,   time:"+2:20", phase:"late",   label:"Syrup #3 🍁 — Pure Fuel Station",  detail:"Mile 17 — Anderson's official Pure Fuel station. Packet + Powerade. Use the course fuel.", stationNote:"Pure Fuel Station: Mile 17" },
  { km:26,   time:"+2:45", phase:"late",   label:"UCAN #4 💙 + Caffeine ☕",         detail:"Fourth UCAN plus caffeine pack at mile 19. This is the decisive combination. Fast fruit also here.", stationNote:"Aid Station: Mile 19 + Fresh Fruit" },
  { km:30,   time:"+3:11", phase:"final",  label:"Syrup #4 🍁 — Before Lemon Drop",  detail:"Fast carbs BEFORE Lemon Drop Hill. Get it in your system before the climb. Stations every mile now.", stationNote:"Aid Stations: Miles 20, 21, 22" },
  { km:36,   time:"+3:49", phase:"final",  label:"UCAN #5 💙 — Final Push",          detail:"Fifth UCAN for the final push into Canal Park. Slow-release carries you home. Take Powerade at every station.", stationNote:"Aid Stations: Miles 23, 24, 25" },
  { km:42.2, time:"+4:30", phase:"done",   label:"FINISH — Grandma's Marathon",      detail:"4:30:00. Canal Park, Duluth. Find Melissa. Eat everything. You earned all of it.", stationNote:null },
];

export const ucanSummary = {
  gelsPerHour: "~1 UCAN + 0.5 syrup/hr",
  carbsPerHour: "~55–65g/hr",
  totalCarbs: "~190g combined",
  waterRequired: "UCAN: No. Syrup: Recommended.",
  caffeineSource: "Separate Precision caffeine pack at km 18/26",
  trainingGels: "3 UCAN + 3 syrup",
  raceGels: "5 UCAN + 4 syrup",
  notes: [
    "UCAN Edge provides a steady slow-release base — fewer energy spikes and crashes.",
    "Anderson's syrup provides fast carbs when you need a quick boost on top.",
    "UCAN requires no water — you can take it between aid stations, giving more flexibility.",
    "The combination hits 55–65g/hr, the closest of any option to the 60g target.",
    "More complex to execute — practice the alternating pattern on both long runs.",
  ],
};

// ─── SHARED DINNER ───────────────────────────────────────────────────────────
export const dinner = {
  restaurant:"Bellisio's Italian Restaurant & Wine Bar",
  address:"405 Lake Avenue South, Canal Park, Duluth MN",
  strategy:"High carbs, moderate protein, low fat, low fiber. Tomato-based sauces only. Eat until comfortably full — not stuffed.",
  recommended:[
    { rank:1, label:"Best Choice", name:"Pasta Amatriciana", color:"#30c060", desc:"Bucatini with pancetta, caramelized onions and smoky tomato sauce topped with pecorino. Tomato-based, fast-digesting carbs. This is the move." },
    { rank:2, label:"Great Option", name:"Rigatoni with Italian Sausage", color:"#c8a020", desc:"Rigatoni with Italian sausage, marinara, spinach, Parmigiano-Reggiano and balsamic reduction. Solid carb load, familiar flavors." },
    { rank:3, label:"Good Option", name:"Spaghetti Arrabbiata", color:"#c05018", desc:"Spaghetti with spicy tomato sauce, garlic, basil and fennel sausage. Skip if spicy foods affect your stomach." },
  ],
  starter:{ name:"Bruschetta", desc:"Fresh Roma tomatoes, garlic and basil on grilled Tuscan toast. Light, carb-forward, easy on the stomach. Perfect starter." },
  avoid:["Lobster Ravioli or Seafood Fettuccine — cream sauces slow digestion overnight","Risotto — delicious but too rich the night before","Beef Tenderloin — high fat and protein, hard to process overnight","Calamari — fried food is a gamble","Large salads — too much fiber"],
  drinks:[
    { name:"Sparkling Water", good:true, note:"Best choice. Hydration without GI risk." },
    { name:"Italian Soda", good:true, note:"Light, festive, a little sugar." },
    { name:"Still Water", good:true, note:"Perfectly fine. Alternate with sparkling." },
    { name:"Coffee or Espresso", good:false, note:"Skip it. You need quality sleep tonight." },
    { name:"Alcohol", good:false, note:"Hard no. Even one drink dehydrates and degrades sleep." },
  ],
  portionNote:"Portions at Bellisio's are famously large. Many guests take half home. Stop at comfortably full — you do not want to be bloated at the start line.",
};

// ─── SHARED RECOVERY ─────────────────────────────────────────────────────────
export const recovery = [
  {
    window:"0–30 min", title:"The Refuel Window", color:"#e8a830",
    img:"https://images.unsplash.com/photo-1559181567-c3190ca9be46?w=800&q=70",
    items:[
      { label:"Carbs", value:"85–103g", detail:"1.0–1.2g per kg body weight. Glycogen replenishment is the priority. Chocolate milk, banana, sports drink — whatever you can get down." },
      { label:"Protein", value:"30–40g", detail:"0.3–0.4g per kg. Muscle repair begins now. Greek yogurt, protein shake, or chocolate milk covers this." },
      { label:"Fluids", value:"500–750ml", detail:"You lost 1–2+ liters of sweat. Electrolyte drink preferred over plain water." },
      { label:"Ratio", value:"3:1 carb:protein", detail:"Carbs are more urgent than protein in this first window." },
    ],
  },
  {
    window:"30 min – 2 hrs", title:"First Real Meal", color:"#30c060",
    img:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=70",
    items:[
      { label:"Calories", value:"800–1,200 kcal", detail:"You burned ~3,500–4,000 kcal. This is the first of several meals you will need over 24 hours." },
      { label:"Carbs", value:"150–200g", detail:"Rice, pasta, potatoes, bread. Appetite will be back." },
      { label:"Protein", value:"40–50g", detail:"Now protein becomes equally important for muscle repair." },
      { label:"Sodium", value:"Go salty", detail:"Your body craves what it lost. Salt everything." },
    ],
  },
  {
    window:"2–24 hrs", title:"Rest of Race Day", color:"#3060b8",
    img:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=70",
    items:[
      { label:"Keep eating", value:"Every 2–3 hrs", detail:"Small frequent meals beat one giant binge. Glycogen stores need multiple refills." },
      { label:"Hydration", value:"Ongoing", detail:"Urine pale yellow by evening. Avoid alcohol today — it blocks glycogen synthesis and disrupts sleep." },
      { label:"Legs up", value:"As much as possible", detail:"Elevate above heart level. Reduces inflammation and swelling significantly." },
      { label:"Cold water", value:"Optional 10–15 min", detail:"Lake Superior is right there and absolutely cold enough. Ice bath in the first 2 hours reduces soreness." },
    ],
  },
  {
    window:"Day 2–3", title:"The Day After", color:"#c06020",
    img:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=70",
    items:[
      { label:"Walking", value:"Easy 20–30 min", detail:"Light movement beats complete rest. Promotes blood flow without additional damage." },
      { label:"No running", value:"Full week minimum", detail:"Marathon damage takes 2–4 weeks to repair. Day 2 soreness is usually worse than Day 1 — that is normal." },
      { label:"Sleep", value:"8–9 hrs", detail:"Growth hormone peaks in deep sleep. This is when real repair happens." },
      { label:"Protein", value:"Still elevated", detail:"Keep at ~2g/kg for 3–5 days to support ongoing muscle repair." },
    ],
  },
];
