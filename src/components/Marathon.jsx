import Nav from './Nav';
import { PreRow, RunRow } from './Timeline';
import { marathonPlan, sharedPreRace, products } from '../data/plans';

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
          <p style={{ color:'var(--muted)',fontSize:'0.95rem',fontStyle:'italic' }}>Grandmas Marathon · 42.2 km · Negative Split · Target: 4:28</p>
        </div>
      </div>

      <div style={{ maxWidth:700,margin:'0 auto',padding:'2rem 1.25rem 5rem' }}>
        <div style={{ display:'flex',gap:'0.75rem',flexWrap:'wrap',marginBottom:'2rem' }}>
          {[
            {val:'6:32-6:35',label:'Zone 1 Pace'},
            {val:'6:23-6:25',label:'Zone 2 Pace'},
            {val:'6:10-6:15',label:'Zone 3 Pace'},
            {val:'~2:17',label:'Half Split'},
            {val:`${totalCarbs}g`,label:'Total Carbs'},
            {val:String(openings),label:'Fuel Openings'},
          ].map(({val,label}) => (
            <div key={label} style={{ background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:8,padding:'0.45rem 0.85rem' }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.62rem',color:'var(--dim)',textTransform:'uppercase',letterSpacing:'0.1em' }}>{label}</div>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.15rem',color:'var(--accent)',letterSpacing:'0.04em' }}>{val}</div>
            </div>
          ))}
        </div>

        {/* Zone strategy */}
        <div style={{ marginBottom:'1.5rem',padding:'1rem 1.25rem',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:10 }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.65rem',color:'var(--dim)',letterSpacing:'0.18em',textTransform:'uppercase',marginBottom:'0.85rem' }}>Negative Split Strategy — 3 Zones</div>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'0.6rem' }}>
            {[
              { zone:'Zone 1', km:'km 0–14', pace:'6:32–6:35/km', desc:'Patience. Feels too slow.', color:'#30c060' },
              { zone:'Zone 2', km:'km 14–28', pace:'6:23–6:25/km', desc:'Goal pace. Controlled release.', color:'#c8a020' },
              { zone:'Zone 3', km:'km 28–42', pace:'6:10–6:15/km', desc:'Racing. Deliberate push.', color:'#c03030' },
            ].map(z => (
              <div key={z.zone} style={{ padding:'0.75rem',background:'var(--surface)',border:`1px solid ${z.color}35`,borderTop:`2px solid ${z.color}`,borderRadius:8 }}>
                <div style={{ display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:'0.2rem' }}>
                  <span style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1rem',color:z.color,letterSpacing:'0.06em' }}>{z.zone}</span>
                  <span style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.62rem',color:'var(--dim)' }}>{z.km}</span>
                </div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.78rem',color:'var(--text)',marginBottom:'0.2rem' }}>{z.pace}</div>
                <div style={{ color:'var(--muted)',fontSize:'0.82rem',fontStyle:'italic' }}>{z.desc}</div>
              </div>
            ))}
          </div>
          <p style={{ color:'var(--dim)',fontSize:'0.82rem',marginTop:'0.85rem',lineHeight:1.5 }}>Half split target: ~2:17. Finish target: ~4:28. The course net downhill assists Zone 3 — you are running faster late with less effort than flat. Split-dose caffeine: coffee at breakfast, UCAN+Caff at km 17 (covers Zone 2), UCAN+Caff at km 29 (peaks at Lemon Drop Hill, km 35).</p>
        </div>

        {/* Fuel strip */}
        <div style={{ marginBottom:'2rem',padding:'1rem 1.25rem',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:10 }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.65rem',color:'var(--dim)',letterSpacing:'0.18em',textTransform:'uppercase',marginBottom:'0.85rem' }}>Race Day Fuel at a Glance</div>
          <div style={{ display:'flex',flexWrap:'wrap',gap:'0.4rem' }}>
            {marathonPlan.filter(r => r.fuel).map((r,i) => {
              const p = products[r.fuel];
              const fuelsBefore = marathonPlan.filter(x => x.fuel).slice(0, i);
              const typeCount = fuelsBefore.filter(x => x.fuel === r.fuel).length + 1;
              const name = r.fuel === 'ucan' ? `UCAN+Caff #${typeCount}` : r.fuel === 'ucannc' ? `UCAN Edge #${typeCount}` : r.fuel === 'sis' ? `SiS GO #${typeCount}` : r.fuel === 'anderson' ? `Anderson's #${typeCount}` : r.fuel;
              return (
                <div key={i} style={{ background:p.color+'18',border:`1px solid ${p.color}50`,borderRadius:6,padding:'0.35rem 0.65rem' }}>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.62rem',color:p.color,fontWeight:700 }}>km {r.km}</div>
                  <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'0.9rem',color:'var(--text)',letterSpacing:'0.04em' }}>{p.emoji} {name}</div>
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
            "Take UCAN and SiS between stations, not at them — neither needs water. Chase with Powerade at the next station.",
            "Pinch your cup. Slight slowdown at stations — 10 seconds over 42km is nothing.",
            "Mile 17 Pure Fuel station has Anderson's on-course — take Powerade there instead, you are on your own UCAN plan today.",
            "Two caffeine packets: UCAN+Caff at km 17 and km 29. Both isolated in a labeled pocket — do not confuse with plain UCAN Edge mid-race.",
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
