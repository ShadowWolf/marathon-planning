import Nav from './Nav';
import { PreRow, RunRow } from './Timeline';
import { run20Plan, sharedPre20, products } from '../data/plans';

const reminders = [
  "Anderson's packet: squeeze fully, wipe sticky hands on shorts, keep moving.",
  "UCAN caffeine at km 20 only — it is in the separate pocket for a reason.",
  "Support at km 16 — quick stop, 30 seconds max. No sitting down.",
  "Skratch pre-run replaces sodium tablets. You do not need anything else for sodium today.",
  "6:45-6:50/km the whole way. This is an easy run. The distance is the stimulus, not the pace.",
];

const fuelSummary = [
  { label:"Anderson's #1", km:'km 5',  carbs:27, color:'var(--maple)' },
  { label:"Anderson's #2", km:'km 10', carbs:27, color:'var(--maple)' },
  { label:"Anderson's #3", km:'km 14', carbs:27, color:'var(--maple)' },
  { label:'Support Stop',  km:'km 16', carbs:0,  color:'var(--accent)', special:'Restock here' },
  { label:'UCAN Caffeine', km:'km 20', carbs:19, color:'var(--ucan)', special:'+75mg caff' },
  { label:"Anderson's #4", km:'km 24', carbs:27, color:'var(--maple)' },
  { label:"Anderson's #5", km:'km 28', carbs:27, color:'var(--maple)' },
];

export default function Run20() {
  return (
    <div style={{ paddingTop:52 }}>
      <Nav />
      {/* Hero */}
      <div style={{ position:'relative',height:'clamp(280px,42vh,440px)',overflow:'hidden' }}>
        <img src="https://images.unsplash.com/photo-1502904550040-7534597429ae?w=1400&q=80" alt="20-mile run" style={{ width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 40%',filter:'brightness(0.28) saturate(0.5)' }} />
        <div style={{ position:'absolute',inset:0,background:'linear-gradient(to bottom,transparent 15%,var(--black) 100%)' }} />
        <div style={{ position:'absolute',top:'1rem',right:'1rem',background:'var(--surface3)',color:'var(--muted)',border:'1px solid var(--border)',fontFamily:"'Bebas Neue',sans-serif",fontSize:'0.85rem',letterSpacing:'0.1em',padding:'0.2rem 0.6rem',borderRadius:4 }}>TRAINING · DONE</div>
        <div style={{ position:'absolute',bottom:'2rem',left:'clamp(1.25rem,4vw,3rem)',right:'clamp(1.25rem,4vw,3rem)' }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.7rem',color:'var(--accent)',letterSpacing:'0.22em',marginBottom:'0.5rem',textTransform:'uppercase' }}>Peak Training Run · 32.2 km</div>
          <h1 style={{ fontSize:'clamp(2.5rem,7vw,4.5rem)',color:'var(--text)',marginBottom:'0.4rem' }}>20-MILE RUN</h1>
          <p style={{ color:'var(--muted)',fontSize:'0.95rem',fontStyle:'italic' }}>7 total fuel openings · Support at km 16 · Heat adjusted: 7:05-7:15/km</p>
        </div>
      </div>

      <div style={{ maxWidth:700,margin:'0 auto',padding:'2rem 1.25rem 5rem' }}>
        {/* Stats */}
        <div style={{ display:'flex',gap:'0.75rem',flexWrap:'wrap',marginBottom:'2rem' }}>
          {[{val:'32.2 km',label:'Distance'},{val:'7:05-7:15/km',label:'Heat Pace'},{val:'~154g',label:'Total Carbs'},{val:'7',label:'Fuel Openings'},{val:'km 16',label:'Support Point'}].map(({val,label}) => (
            <div key={label} style={{ background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:8,padding:'0.45rem 0.85rem' }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.62rem',color:'var(--dim)',textTransform:'uppercase',letterSpacing:'0.1em' }}>{label}</div>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.15rem',color:'var(--accent)',letterSpacing:'0.04em' }}>{val}</div>
            </div>
          ))}
        </div>

        {/* Heat warning */}
        <div style={{ marginBottom:'1.5rem',padding:'0.85rem 1.1rem',background:'rgba(192,80,24,0.12)',border:'1px solid rgba(192,80,24,0.5)',borderLeft:'3px solid var(--maple)',borderRadius:8,display:'flex',gap:'0.6rem',alignItems:'flex-start' }}>
          <span style={{ fontSize:'1.1rem',flexShrink:0 }}>🌡️</span>
          <div>
            <span style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1rem',color:'var(--maple)',letterSpacing:'0.05em' }}>HEAT ADJUSTED PLAN · </span>
            <span style={{ color:'var(--muted)',fontSize:'0.88rem' }}>Start 64°F climbing to 77-78°F. Target 7:05-7:15/km early, allow 7:20-7:30/km in back half. Drink at every opportunity — do not ration water today.</span>
          </div>
        </div>

        {/* Visual fuel strip */}
        <div style={{ marginBottom:'2rem',padding:'1rem 1.25rem',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:10 }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.65rem',color:'var(--dim)',letterSpacing:'0.18em',textTransform:'uppercase',marginBottom:'0.85rem' }}>Fuel Timeline At a Glance</div>
          <div style={{ display:'flex',flexWrap:'wrap',gap:'0.4rem' }}>
            {fuelSummary.map((f,i) => (
              <div key={i} style={{ background:f.color+'18',border:`1px solid ${f.color}50`,borderRadius:6,padding:'0.35rem 0.65rem' }}>
                <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.62rem',color:f.color,fontWeight:700 }}>{f.km}</div>
                <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'0.9rem',color:'var(--text)',letterSpacing:'0.04em' }}>{f.label}</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.58rem',color:'var(--muted)' }}>{f.special || `${f.carbs}g carbs`}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.4rem',color:'var(--muted)',marginBottom:'1rem',letterSpacing:'0.08em' }}>PRE-RUN</h2>
        {sharedPre20.map((row,i) => <PreRow key={i} row={row} />)}

        <div style={{ height:1,background:'linear-gradient(to right,var(--accent-dim),transparent)',margin:'2rem 0' }} />

        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.4rem',color:'var(--muted)',marginBottom:'1rem',letterSpacing:'0.08em' }}>ON THE RUN</h2>
        <div style={{ position:'relative' }}>
          <div style={{ position:'absolute',left:25,top:20,bottom:20,width:2,background:'linear-gradient(to bottom,#1a7a40,#c8a020,#c06020,#c03030)',opacity:0.3 }} />
          {run20Plan.map((row,i) => <RunRow key={i} row={row} />)}
        </div>

        <div style={{ marginTop:'2.5rem',padding:'1.25rem',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:10 }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.65rem',color:'var(--dim)',letterSpacing:'0.18em',textTransform:'uppercase',marginBottom:'0.75rem' }}>Key Reminders</div>
          {reminders.map((note,i) => (
            <div key={i} style={{ display:'flex',gap:'0.6rem',marginBottom:'0.4rem' }}>
              <span style={{ color:'var(--accent)',marginTop:4,flexShrink:0 }}>·</span>
              <span style={{ color:'var(--muted)',fontSize:'0.88rem',lineHeight:1.55 }}>{note}</span>
            </div>
          ))}
        </div>

        {/* Recovery reminder */}
        <div style={{ marginTop:'1.5rem',padding:'1rem 1.25rem',background:'var(--surface2)',border:'1px solid rgba(232,168,48,0.3)',borderLeft:'3px solid var(--accent)',borderRadius:8 }}>
          <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.1rem',color:'var(--accent)',letterSpacing:'0.06em',marginBottom:'0.3rem' }}>Post-Run Within 30 Minutes</div>
          <p style={{ color:'var(--muted)',fontSize:'0.88rem',lineHeight:1.55 }}>85-103g carbs + 30-40g protein. Chocolate milk is the easy one-stop. Rehydrate before you eat. Legs up as soon as possible.</p>
        </div>
      </div>
    </div>
  );
}
