import Nav from './Nav';
import { PreRow, RunRow } from './Timeline';
import { marathonForBryan, sharedPreRace, products } from '../data/plans';

export default function MarathonForBryan() {
  const totalCarbs = marathonForBryan.reduce((s,r) => s+(r.carbs||0),0);
  const openings = marathonForBryan.filter(r => r.fuel).length;
  const walkEvents = marathonForBryan.filter(r => r.walk);

  return (
    <div style={{ paddingTop:52 }}>
      <Nav />
      <div style={{ position:'relative',height:'clamp(300px,45vh,480px)',overflow:'hidden' }}>
        <img src="https://images.unsplash.com/photo-1639437038514-0ad841b2f62a?w=1600&q=80" alt="Split Rock Lighthouse, Lake Superior north shore" style={{ width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 30%',filter:'brightness(0.25) saturate(0.45)' }} />
        <div style={{ position:'absolute',inset:0,background:'linear-gradient(to bottom,transparent 15%,var(--black) 100%)' }} />
        <div style={{ position:'absolute',bottom:'2rem',left:'clamp(1.25rem,4vw,3rem)',right:'clamp(1.25rem,4vw,3rem)' }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.7rem',color:'var(--accent)',letterSpacing:'0.22em',marginBottom:'0.5rem',textTransform:'uppercase' }}>Saturday June 20, 2026 · With Asthma + Walking</div>
          <h1 style={{ fontSize:'clamp(2.5rem,7vw,4.5rem)',color:'var(--text)',marginBottom:'0.4rem' }}>RACE DAY <span style={{ color:'var(--accent)' }}>(For Bryan)</span></h1>
          <p style={{ color:'var(--muted)',fontSize:'0.95rem',fontStyle:'italic' }}>Negative split · 4 walk breaks · Inhaler at half + 20mi · Target 4:28</p>
        </div>
      </div>

      <div style={{ maxWidth:700,margin:'0 auto',padding:'2rem 1.25rem 5rem' }}>
        <div style={{ display:'flex',gap:'0.75rem',flexWrap:'wrap',marginBottom:'2rem' }}>
          {[
            {val:'6:27-6:33',label:'Zone 1 Run Pace'},
            {val:'6:18-6:20',label:'Zone 2 Run Pace'},
            {val:'6:03-6:06',label:'Zone 3 Run Pace'},
            {val:'~2:17',label:'Half Split'},
            {val:`${totalCarbs}g`,label:'Total Carbs'},
            {val:String(openings),label:'Fuel Openings'},
            {val:String(walkEvents.length),label:'Walk Breaks'},
          ].map(({val,label}) => (
            <div key={label} style={{ background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:8,padding:'0.45rem 0.85rem' }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.62rem',color:'var(--dim)',textTransform:'uppercase',letterSpacing:'0.1em' }}>{label}</div>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.15rem',color:'var(--accent)',letterSpacing:'0.04em' }}>{val}</div>
            </div>
          ))}
        </div>

        {/* Zone strategy */}
        <div style={{ marginBottom:'1.5rem',padding:'1rem 1.25rem',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:10 }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.65rem',color:'var(--dim)',letterSpacing:'0.18em',textTransform:'uppercase',marginBottom:'0.85rem' }}>Negative Split (Walk-Adjusted) — 3 Zones</div>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'0.6rem' }}>
            {[
              { zone:'Zone 1', km:'km 0–14', pace:'6:27/km run', desc:'Patience. Walk at km 10.', color:'#30c060' },
              { zone:'Zone 2', km:'km 14–28', pace:'6:18/km run', desc:'Goal pace. Inhaler walk at half.', color:'#c8a020' },
              { zone:'Zone 3', km:'km 28–42', pace:'6:03/km run', desc:'Push. Inhaler at 20mi, walk at km 40.', color:'#c03030' },
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
          <p style={{ color:'var(--dim)',fontSize:'0.82rem',marginTop:'0.85rem',lineHeight:1.5 }}>Running paces are slightly faster than the no-walk plan to absorb ~9 minutes of total walking. Half split target: ~2:17. Finish target: ~4:28. Same caffeine architecture: coffee + UCAN+Caff at km 17 + UCAN+Caff at km 29.</p>
        </div>

        {/* Walk breaks card */}
        <div style={{ marginBottom:'1.5rem',padding:'1rem 1.25rem',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:10 }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.65rem',color:'var(--dim)',letterSpacing:'0.18em',textTransform:'uppercase',marginBottom:'0.85rem' }}>Walk Breaks — 4 Scheduled Stops</div>
          <div style={{ display:'flex',flexWrap:'wrap',gap:'0.4rem' }}>
            {walkEvents.map((w,i) => {
              const color = w.walk.inhaler ? '#c03030' : '#3a8ac0';
              return (
                <div key={i} style={{ background:color+'18',border:`1px solid ${color}50`,borderRadius:6,padding:'0.4rem 0.7rem',minWidth:140 }}>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.62rem',color,fontWeight:700 }}>km {w.km} · {w.time}</div>
                  <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'0.95rem',color:'var(--text)',letterSpacing:'0.04em' }}>{w.walk.inhaler ? '💨 Inhaler Walk' : '🚶 Walk Break'}</div>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.58rem',color:'var(--muted)' }}>{w.walk.distance}m · {w.walk.duration}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fuel strip */}
        <div style={{ marginBottom:'2rem',padding:'1rem 1.25rem',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:10 }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.65rem',color:'var(--dim)',letterSpacing:'0.18em',textTransform:'uppercase',marginBottom:'0.85rem' }}>Race Day Fuel at a Glance</div>
          <div style={{ display:'flex',flexWrap:'wrap',gap:'0.4rem' }}>
            {marathonForBryan.filter(r => r.fuel).map((r,i) => {
              const p = products[r.fuel];
              const fuelsBefore = marathonForBryan.filter(x => x.fuel).slice(0, i);
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
          {marathonForBryan.map((row,i) => <RunRow key={i} row={row} />)}
        </div>

        <div style={{ marginTop:'2.5rem',padding:'1.25rem',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:10 }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.65rem',color:'var(--dim)',letterSpacing:'0.18em',textTransform:'uppercase',marginBottom:'0.75rem' }}>Asthma + Walk-Break Notes</div>
          {[
            "Rescue inhaler isolated in a labeled pocket — easy to grab while walking, not buried with fuel.",
            "Inhaler stops: km 21.1 (half) and km 32.2 (20-mile). About 1.5 min each. Walk ~150m, take the dose, breathe, resume running.",
            "Walk breaks at km 10 and km 40 are pure resets — 400m brisk, ~3 min. Use them to drop tension, slow breathing, reset stride.",
            "If breathing flares between scheduled stops, walk early — losing 30 seconds beats a full attack at km 38.",
            "Fueling stays at km 6, 12, 17, 23, 29, 34, 38 — same as no-walk plan. UCAN/SiS don't need water; walks just make swallowing easier.",
            "Running paces are intentionally a bit faster than the standard plan (6:27/6:18/6:03) so the walks pull totals back to 4:28.",
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
