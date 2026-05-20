import Nav from './Nav';
import Hero from './Hero';
import { PreRow, RunRow } from './Timeline';
import { sharedRacePre } from '../data/plans';

export default function RaceDayPage({ color, runPlan, title, heroImg }) {
  return (
    <div style={{ paddingTop:52 }}>
      <Nav />
      <Hero badge="June 21, 2026 · Two Harbors → Canal Park" title={title||"RACE DAY"} subtitle="Grandma's Marathon · 42.2 km · Goal: 4:30:00" img={heroImg||"https://images.unsplash.com/photo-1531315396756-905d68d21b56?w=1600&q=80"} accentColor={color}
        stats={[{val:'6:30/km',label:'Start Pace'},{val:'6:23/km',label:'Race Pace'},{val:'~2:15',label:'Half Split'},{val:'~60g/hr',label:'Carb Target'}]}
      />
      <div style={{ maxWidth:700, margin:'0 auto', padding:'2rem 1.25rem 5rem' }}>
        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'1.4rem', color:'var(--muted)', marginBottom:'1rem', letterSpacing:'0.08em' }}>RACE MORNING</h2>
        {sharedRacePre.map((row,i) => <PreRow key={i} row={row} />)}
        <div style={{ height:1, background:`linear-gradient(to right, ${color}60, transparent)`, margin:'2rem 0' }} />
        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'1.4rem', color:'var(--muted)', marginBottom:'1rem', letterSpacing:'0.08em' }}>THE RACE</h2>
        <div style={{ position:'relative' }}>
          <div style={{ position:'absolute', left:25, top:20, bottom:20, width:2, background:'linear-gradient(to bottom, #1a7a40, #c8a020, #c06020, #c03030)', opacity:0.3 }} />
          {runPlan.map((row,i) => <RunRow key={i} row={row} accentColor={color} />)}
        </div>
        <div style={{ marginTop:'2.5rem', padding:'1.25rem', background:'var(--surface2)', border:'1px solid var(--border)', borderRadius:10 }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.65rem', color:'var(--dim)', letterSpacing:'0.18em', textTransform:'uppercase', marginBottom:'0.75rem' }}>Aid Station Strategy</div>
          {[
            'Take fuel 1–2 min before each station. Chase syrup with water immediately.',
            'Pinch your cup. Slow slightly at stations — 10 seconds over 42km is nothing.',
            'Miles 3–13: water only. Miles 15+: alternate Powerade and water.',
            "Andersons official Pure Fuel station at Mile 17 — use it.",
            'Fresh fruit near Miles 19 and 23.5. Grab it if your stomach is happy.',
            'Stations every mile from Mile 19 onward. Do not skip a single one.',
          ].map((note,i) => (
            <div key={i} style={{ display:'flex', gap:'0.6rem', marginBottom:'0.4rem' }}>
              <span style={{ color, marginTop:4, flexShrink:0 }}>·</span>
              <span style={{ color:'var(--muted)', fontSize:'0.88rem', lineHeight:1.55 }}>{note}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
