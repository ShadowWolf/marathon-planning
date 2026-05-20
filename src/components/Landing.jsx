import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div>
      {/* Hero */}
      <div style={{ position:'relative', height:'100vh', minHeight:560, overflow:'hidden' }}>
        <img src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=1600&q=80" alt="Marathon runners" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 35%', filter:'brightness(0.22) saturate(0.4)' }} />
        <div style={{ position:'absolute', inset:0, opacity:0.04, backgroundImage:'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize:'64px 64px' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(160deg, transparent 35%, rgba(6,6,14,0.95) 100%)' }} />
        <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'center', padding:'clamp(1.5rem,6vw,5rem)' }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'clamp(0.6rem,1.2vw,0.72rem)', color:'var(--accent)', letterSpacing:'0.25em', marginBottom:'1.25rem', textTransform:'uppercase' }}>
            Grandma's Marathon · Duluth, MN · June 21, 2026
          </div>
          <h1 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(3.5rem,12vw,9rem)', color:'var(--text)', lineHeight:0.92, maxWidth:820, marginBottom:'1.25rem' }}>
            RACE<br/><span style={{ color:'var(--accent)' }}>FUEL</span><br/>PLAN
          </h1>
          <p style={{ color:'var(--muted)', fontSize:'clamp(0.95rem,1.8vw,1.15rem)', maxWidth:500, lineHeight:1.65, marginBottom:'2.5rem' }}>
            Two complete fueling strategies for Grandma's Marathon. Each is a fully self-contained plan covering training runs, race day, and recovery. Choose the one that fits your preference.
          </p>
          <div style={{ display:'flex', gap:'0.75rem', flexWrap:'wrap' }}>
            {[{val:'4:30:00',label:'Goal Time'},{val:'6:23/km',label:'Race Pace'},{val:'60g/hr',label:'Carb Target'},{val:'June 21',label:'Race Day'}].map(({val,label}) => (
              <div key={label} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid var(--border)', borderRadius:8, padding:'0.6rem 1.1rem', backdropFilter:'blur(8px)' }}>
                <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(1.2rem,2.5vw,1.5rem)', color:'var(--accent)', letterSpacing:'0.05em' }}>{val}</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.62rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.14em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position:'absolute', bottom:'1.5rem', left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:'0.3rem' }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.6rem', color:'var(--dim)', letterSpacing:'0.2em' }}>CHOOSE YOUR PLAN</span>
          <div style={{ width:1, height:36, background:'linear-gradient(to bottom, var(--dim), transparent)' }} />
        </div>
      </div>

      {/* Plan selector */}
      <div style={{ maxWidth:1100, margin:'0 auto', padding:'4rem 1.25rem 6rem' }}>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.68rem', color:'var(--dim)', letterSpacing:'0.22em', textTransform:'uppercase', marginBottom:'2rem' }}>Select Your Fueling Strategy</div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px,1fr))', gap:'1.5rem', marginBottom:'3.5rem' }}>
          <PlanCard
            to="/maple"
            color="var(--maple)"
            colorDim="var(--maple-dim)"
            img="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=70"
            badge="Plan A"
            title="Pure Maple Syrup"
            subtitle="Andersons Pure Fuel · All-natural · On-course at Mile 17"
            stats={[{val:'27g',label:'Per Packet'},{val:'7 Packets',label:'Race Day'},{val:'On Course',label:'Mile 17'}]}
            pros={["Andersons is already on the Grandmas course","Highest carbs per serving at 27g","All-natural, real food fuel","No complex alternating pattern"]}
            cons={['Slightly under 60g/hr target','Stickier to handle mid-run','No slow-release base layer']}
          />
          <PlanCard
            to="/ucan"
            color="var(--ucan)"
            colorDim="var(--ucan-dim)"
            img="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=900&q=70"
            badge="Plan B"
            title="Maple + UCAN Edge"
            subtitle="Andersons Pure Fuel + UCAN Edge Gels · Dual-source approach"
            stats={[{val:'46g/gel',label:'Avg Combo'},{val:'5+4',label:'Race Day'},{val:'55–65g',label:'Per Hour'}]}
            pros={['Closest to 60g/hr target','Steady energy floor from UCAN LIVSTEADY','UCAN requires no water — take between stations','Caffeine built into UCAN flavors']}
            cons={['More complex to execute','Two products to carry and alternate','Higher cost']}
          />
        </div>

        {/* Course profile */}
        <div style={{ padding:'clamp(1.25rem,3vw,2rem)', background:'var(--surface2)', border:'1px solid var(--border)', borderRadius:14 }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.68rem', color:'var(--accent)', letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'1rem' }}>Course Profile — Grandma's Marathon</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px,1fr))', gap:'1.25rem', marginBottom:'1.25rem' }}>
            {[
              {label:'Start', val:'Two Harbors · 740 ft'},
              {label:'Finish', val:'Canal Park, Duluth · 610 ft'},
              {label:'Net Drop', val:'130 ft total'},
              {label:'Watch For', val:'Lemon Drop Hill · ~Mile 22'},
              {label:'Aid Stations', val:'Every 2 mi · Every 1 mi after Mile 19'},
              {label:'On-Course Fuel', val:'Water + Powerade + Andersons Pure Fuel (Mile 17)'},
            ].map(({label,val}) => (
              <div key={label}>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.62rem', color:'var(--dim)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'0.2rem' }}>{label}</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.82rem', color:'var(--text)' }}>{val}</div>
              </div>
            ))}
          </div>
          <p style={{ color:'var(--muted)', fontSize:'0.9rem', lineHeight:1.6 }}>Point-to-point along Lake Superior's Hwy 61 from Two Harbors into Duluth's Canal Park. Net downhill but don't let gravity fool you — rolling hills in the first half, and Lemon Drop Hill hits at km 35 when your legs are spent. An east wind off the lake keeps temperatures manageable; a wind shift west removes that buffer. Check forecast Thursday June 19.</p>
        </div>
      </div>
    </div>
  );
}

function PlanCard({ to, color, colorDim, img, badge, title, subtitle, stats, pros, cons }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ border:`1px solid ${hov ? color+'80':'var(--border)'}`, borderRadius:14, overflow:'hidden', transition:'border-color 0.2s, transform 0.2s', transform: hov ? 'translateY(-3px)':'translateY(0)' }}>
      <div style={{ position:'relative', height:200, overflow:'hidden' }}>
        <img src={img} alt={title} style={{ width:'100%', height:'100%', objectFit:'cover', filter:`brightness(${hov?0.35:0.25}) saturate(0.45)`, transition:'filter 0.2s' }} />
        <div style={{ position:'absolute', inset:0, background:`linear-gradient(to bottom, transparent 20%, var(--surface) 100%)` }} />
        <div style={{ position:'absolute', top:'1rem', left:'1rem' }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.65rem', color, background:color+'18', border:`1px solid ${color}40`, padding:'0.18rem 0.5rem', borderRadius:4 }}>{badge}</span>
        </div>
        <div style={{ position:'absolute', bottom:'1rem', left:'1.25rem', right:'1.25rem' }}>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'1.8rem', color:'var(--text)', marginBottom:'0.15rem' }}>{title}</h2>
          <p style={{ color:'var(--muted)', fontSize:'0.85rem', fontStyle:'italic' }}>{subtitle}</p>
        </div>
      </div>
      <div style={{ padding:'1.25rem', background:'var(--surface)' }}>
        <div style={{ display:'flex', gap:'0.5rem', flexWrap:'wrap', marginBottom:'1.25rem' }}>
          {stats.map(({val,label}) => (
            <div key={label} style={{ background:'var(--surface2)', border:`1px solid ${color}30`, borderRadius:6, padding:'0.35rem 0.75rem' }}>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'1.05rem', color, letterSpacing:'0.04em' }}>{val}</div>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.58rem', color:'var(--dim)', textTransform:'uppercase' }}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem', marginBottom:'1.25rem' }}>
          <div>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.62rem', color:'var(--green-bright)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'0.4rem' }}>Strengths</div>
            {pros.map((p,i) => <div key={i} style={{ display:'flex', gap:'0.4rem', marginBottom:'0.25rem' }}><span style={{ color:'var(--green-bright)', fontSize:'0.75rem', flexShrink:0, marginTop:2 }}>✓</span><span style={{ color:'var(--muted)', fontSize:'0.82rem', lineHeight:1.4 }}>{p}</span></div>)}
          </div>
          <div>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.62rem', color:'var(--red)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'0.4rem', opacity:0.8 }}>Tradeoffs</div>
            {cons.map((c,i) => <div key={i} style={{ display:'flex', gap:'0.4rem', marginBottom:'0.25rem' }}><span style={{ color:'var(--red)', fontSize:'0.75rem', flexShrink:0, marginTop:2, opacity:0.8 }}>·</span><span style={{ color:'var(--muted)', fontSize:'0.82rem', lineHeight:1.4 }}>{c}</span></div>)}
          </div>
        </div>
        <Link to={to} style={{ display:'block', textAlign:'center', background: hov ? color : 'var(--surface2)', border:`1px solid ${color}`, borderRadius:8, padding:'0.75rem', fontFamily:"'Bebas Neue',sans-serif", fontSize:'1.1rem', color: hov ? 'var(--black)':'var(--text)', letterSpacing:'0.08em', transition:'background 0.2s, color 0.2s', textDecoration:'none' }}>
          VIEW THIS PLAN →
        </Link>
      </div>
    </div>
  );
}
