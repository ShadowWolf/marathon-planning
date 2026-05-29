import Nav from './Nav';
import { PreRow, RunRow } from './Timeline';
import { marathonPlan, sharedPreRace } from '../data/plans';

export default function Marathon() {
  const totalCarbs = marathonPlan.reduce((s,r) => s+(r.carbs||0),0);
  const openings = marathonPlan.filter(r => r.fuel).length;

  return (
    <div style={{ paddingTop:52 }}>
      <Nav />
      <div style={{ position:'relative',height:'clamp(300px,45vh,480px)',overflow:'hidden' }}>
        <img src="https://images.unsplash.com/photo-1531315396756-905d68d21b56?w=1600&q=80" alt="Race day" style={{ width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 30%',filter:'brightness(0.25) saturate(0.45)' }} />
        <div style={{ position:'absolute',inset:0,background:'linear-gradient(to bottom,transparent 15%,var(--black) 100%)' }} />
        <div style={{ position:'absolute',bottom:'2rem',left:'clamp(1.25rem,4vw,3rem)',right:'clamp(1.25rem,4vw,3rem)' }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.7rem',color:'var(--accent)',letterSpacing:'0.22em',marginBottom:'0.5rem',textTransform:'uppercase' }}>June 21, 2026 · Two Harbors to Canal Park</div>
          <h1 style={{ fontSize:'clamp(2.5rem,7vw,4.5rem)',color:'var(--text)',marginBottom:'0.4rem' }}>RACE DAY</h1>
          <p style={{ color:'var(--muted)',fontSize:'0.95rem',fontStyle:'italic' }}>Grandmas Marathon · 42.2 km · Goal: 4:30:00</p>
        </div>
      </div>

      <div style={{ maxWidth:700,margin:'0 auto',padding:'2rem 1.25rem 5rem' }}>
        <div style={{ display:'flex',gap:'0.75rem',flexWrap:'wrap',marginBottom:'2rem' }}>
          {[
            {val:'6:30/km',label:'Start Pace'},
            {val:'6:23/km',label:'Race Pace'},
            {val:'~2:15',label:'Half Split'},
            {val:`${totalCarbs}g`,label:'Total Carbs'},
            {val:String(openings),label:'Fuel Openings'},
          ].map(({val,label}) => (
            <div key={label} style={{ background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:8,padding:'0.45rem 0.85rem' }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.62rem',color:'var(--dim)',textTransform:'uppercase',letterSpacing:'0.1em' }}>{label}</div>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.15rem',color:'var(--accent)',letterSpacing:'0.04em' }}>{val}</div>
            </div>
          ))}
        </div>

        {/* Fuel strip */}
        <div style={{ marginBottom:'2rem',padding:'1rem 1.25rem',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:10 }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.65rem',color:'var(--dim)',letterSpacing:'0.18em',textTransform:'uppercase',marginBottom:'0.85rem' }}>Race Day Fuel at a Glance</div>
          <div style={{ display:'flex',flexWrap:'wrap',gap:'0.4rem' }}>
            {marathonPlan.filter(r => r.fuel).map((r,i) => {
              const colors = { anderson:'var(--maple)', sis:'var(--sis)', ucan:'var(--ucan)' };
              const c = colors[r.fuel] || 'var(--accent)';
              const emojis = { anderson:'🍁', sis:'🟢', ucan:'☕' };
              return (
                <div key={i} style={{ background:c+'18',border:`1px solid ${c}50`,borderRadius:6,padding:'0.35rem 0.65rem' }}>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.62rem',color:c,fontWeight:700 }}>km {r.km}</div>
                  <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'0.9rem',color:'var(--text)',letterSpacing:'0.04em' }}>{emojis[r.fuel]} {r.fuel === 'anderson' ? `Anderson's #${i+1}` : r.fuel === 'ucan' ? 'UCAN Caff' : 'SiS GO'}</div>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.58rem',color:'var(--muted)' }}>{r.carbs}g{r.caffeine?` +${r.caffeine}mg`:''}</div>
                </div>
              );
            })}
          </div>
        </div>

        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.4rem',color:'var(--muted)',marginBottom:'1rem',letterSpacing:'0.08em' }}>RACE MORNING</h2>
        {sharedPreRace.map((row,i) => <PreRow key={i} row={row} />)}

        <div style={{ height:1,background:'linear-gradient(to right,var(--accent-dim),transparent)',margin:'2rem 0' }} />

        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.4rem',color:'var(--muted)',marginBottom:'1rem',letterSpacing:'0.08em' }}>THE RACE</h2>
        <div style={{ position:'relative' }}>
          <div style={{ position:'absolute',left:25,top:20,bottom:20,width:2,background:'linear-gradient(to bottom,#1a7a40,#c8a020,#c06020,#c03030)',opacity:0.3 }} />
          {marathonPlan.map((row,i) => <RunRow key={i} row={row} />)}
        </div>

        <div style={{ marginTop:'2.5rem',padding:'1.25rem',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:10 }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.65rem',color:'var(--dim)',letterSpacing:'0.18em',textTransform:'uppercase',marginBottom:'0.75rem' }}>Aid Station Strategy</div>
          {[
            "Anderson's packet 1-2 min before the station. Chase with water immediately.",
            "Pinch your cup. Slight slowdown at stations — 10 seconds over 42km is nothing.",
            "Miles 3-11: water only with gels. Mile 11 onward: alternate Powerade with water.",
            "Mile 17 Pure Fuel station has Anderson's on-course — grab one even if you have enough.",
            "UCAN caffeine at km 29 — no water needed, take it between stations if easier.",
            "Fresh fruit near Miles 19 and 23.5. Grab it if stomach is happy.",
            "Stations every mile from Mile 19. Do not skip a single one.",
          ].map((note,i) => (
            <div key={i} style={{ display:'flex',gap:'0.6rem',marginBottom:'0.4rem' }}>
              <span style={{ color:'var(--accent)',marginTop:4,flexShrink:0 }}>·</span>
              <span style={{ color:'var(--muted)',fontSize:'0.88rem',lineHeight:1.55 }}>{note}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
