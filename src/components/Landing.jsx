import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/plans';

const cards = [
  { to:'/run-20',   img:'https://images.unsplash.com/photo-1502904550040-7534597429ae?w=800&q=70', badge:'Tomorrow · 32km', title:'20-Mile Run', sub:'Peak training run · Support at km 16', urgent:true },
  { to:'/marathon', img:'https://images.unsplash.com/photo-1531315396756-905d68d21b56?w=800&q=70', badge:'June 21 · 42.2km', title:'Race Day',    sub:"Grandma's Marathon · Goal 4:30:00" },
  { to:'/dinner',   img:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=70',   badge:'Night Before',  title:'Pre-Race Dinner', sub:"Bellisio's · Canal Park, Duluth" },
  { to:'/recovery', img:'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=70', badge:'After',         title:'Recovery',       sub:'Hour 0 through Day 3' },
];

const productList = [
  { key:'anderson', role:'Primary fuel · every 30-35 min', carbs:'27g/packet' },
  { key:'sis',      role:'Strategic backup · late race push', carbs:'22g/gel' },
  { key:'ucan',     role:'Caffeine weapon · km 20 / km 29', carbs:'19g + 75mg caffeine' },
  { key:'skratch',  role:'Sodium + hydration · pre-run only', carbs:'20g + 400mg sodium' },
];

export default function Landing() {
  return (
    <div>
      <div style={{ position:'relative',height:'100vh',minHeight:560,overflow:'hidden' }}>
        <img src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=1600&q=80" alt="Marathon" style={{ width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 35%',filter:'brightness(0.22) saturate(0.4)' }} />
        <div style={{ position:'absolute',inset:0,opacity:0.04,backgroundImage:'linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)',backgroundSize:'64px 64px' }} />
        <div style={{ position:'absolute',inset:0,background:'linear-gradient(160deg,transparent 35%,rgba(6,6,14,0.95) 100%)' }} />
        <div style={{ position:'absolute',inset:0,display:'flex',flexDirection:'column',justifyContent:'center',padding:'clamp(1.5rem,6vw,5rem)' }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'clamp(0.6rem,1.2vw,0.72rem)',color:'var(--accent)',letterSpacing:'0.25em',marginBottom:'1.25rem',textTransform:'uppercase' }}>
            Grandma's Marathon · Duluth MN · June 21, 2026
          </div>
          <h1 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(3.5rem,12vw,9rem)',color:'var(--text)',lineHeight:0.92,maxWidth:820,marginBottom:'1.25rem' }}>
            RACE<br/><span style={{ color:'var(--accent)' }}>FUEL</span><br/>PLAN
          </h1>
          <p style={{ color:'var(--muted)',fontSize:'clamp(0.95rem,1.8vw,1.1rem)',maxWidth:500,lineHeight:1.65,marginBottom:'2.5rem' }}>
            20-mile peak training run tomorrow, then race day June 21. Anderson's Pure Fuel primary, UCAN Edge caffeine strategic, Skratch Labs replacing sodium tablets.
          </p>
          <div style={{ display:'flex',gap:'0.75rem',flexWrap:'wrap' }}>
            {[{val:'4:30:00',label:'Goal Time'},{val:'6:23/km',label:'Race Pace'},{val:'UCAN Only',label:'Fuel Strategy'},{val:'5 Opens',label:'Race Day Total'}].map(({val,label}) => (
              <div key={label} style={{ background:'rgba(255,255,255,0.04)',border:'1px solid var(--border)',borderRadius:8,padding:'0.6rem 1.1rem',backdropFilter:'blur(8px)' }}>
                <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(1.2rem,2.5vw,1.5rem)',color:'var(--accent)',letterSpacing:'0.05em' }}>{val}</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.62rem',color:'var(--muted)',textTransform:'uppercase',letterSpacing:'0.14em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position:'absolute',bottom:'1.5rem',left:'50%',transform:'translateX(-50%)',display:'flex',flexDirection:'column',alignItems:'center',gap:'0.3rem' }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.6rem',color:'var(--dim)',letterSpacing:'0.2em' }}>SCROLL</span>
          <div style={{ width:1,height:36,background:'linear-gradient(to bottom,var(--dim),transparent)' }} />
        </div>
      </div>

      <div style={{ maxWidth:1100,margin:'0 auto',padding:'4rem 1.25rem 6rem' }}>
        {/* Fuel products */}
        <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.68rem',color:'var(--dim)',letterSpacing:'0.22em',textTransform:'uppercase',marginBottom:'1.25rem' }}>Your Fuel Arsenal</div>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:'0.75rem',marginBottom:'3.5rem' }}>
          {productList.map(({ key, role, carbs }) => {
            const p = products[key];
            return (
              <div key={key} style={{ padding:'1rem 1.25rem',background:'var(--surface2)',border:`1px solid ${p.color}35`,borderLeft:`3px solid ${p.color}`,borderRadius:10 }}>
                <div style={{ display:'flex',alignItems:'center',gap:'0.5rem',marginBottom:'0.4rem' }}>
                  <span style={{ fontSize:'1.2rem' }}>{p.emoji}</span>
                  <span style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.1rem',color:p.color,letterSpacing:'0.05em' }}>{p.name}</span>
                </div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.7rem',color:'var(--accent)',marginBottom:'0.3rem' }}>{carbs}</div>
                <div style={{ color:'var(--muted)',fontSize:'0.85rem',lineHeight:1.45,marginBottom:'0.4rem' }}>{role}</div>
                <div style={{ color:'var(--dim)',fontSize:'0.8rem',lineHeight:1.4,fontStyle:'italic' }}>{p.note}</div>
              </div>
            );
          })}
        </div>

        {/* Section cards */}
        <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.68rem',color:'var(--dim)',letterSpacing:'0.22em',textTransform:'uppercase',marginBottom:'1.5rem' }}>Your Plan — 4 Sections</div>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:'1.1rem',marginBottom:'3.5rem' }}>
          {cards.map(card => <SectionCard key={card.to} card={card} />)}
        </div>

        {/* Course info */}
        <div style={{ padding:'clamp(1.25rem,3vw,2rem)',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:14 }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.68rem',color:'var(--accent)',letterSpacing:'0.2em',textTransform:'uppercase',marginBottom:'1rem' }}>Course Profile — Grandmas Marathon</div>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'1.25rem',marginBottom:'1.25rem' }}>
            {[
              {label:'Start',val:'Two Harbors · 740 ft'},
              {label:'Finish',val:'Canal Park, Duluth · 610 ft'},
              {label:'Net Drop',val:'130 ft total'},
              {label:'Watch For',val:'Lemon Drop Hill · Mile 22'},
              {label:'Aid Stations',val:'Every 2 mi · Every 1 mi after Mile 19'},
              {label:'On-Course Fuel',val:'Water + Powerade + Andersons (Mile 17)'},
            ].map(({label,val}) => (
              <div key={label}>
                <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.62rem',color:'var(--dim)',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'0.2rem' }}>{label}</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.82rem',color:'var(--text)' }}>{val}</div>
              </div>
            ))}
          </div>
          <p style={{ color:'var(--muted)',fontSize:'0.9rem',lineHeight:1.6 }}>Point-to-point along Lake Superior Hwy 61 from Two Harbors into Duluth. Net downhill but rolling hills in the first half. Lemon Drop Hill hits at km 35 when legs are spent. East wind off the lake keeps course cool — check wind direction Thursday June 19, that is the key variable.</p>
        </div>
      </div>
    </div>
  );
}

function SectionCard({ card }) {
  const [hov, setHov] = useState(false);
  const accentColor = card.urgent ? 'var(--accent)' : '#888';
  return (
    <Link to={card.to} style={{ textDecoration:'none' }}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ position:'relative',overflow:'hidden',borderRadius:12,border:`1px solid ${hov?(card.urgent?'var(--accent)80':'#88888880'):'var(--border)'}`,height:card.urgent?290:240,transition:'border-color 0.2s,transform 0.2s',transform:hov?'translateY(-3px)':'translateY(0)',cursor:'pointer' }}>
        <img src={card.img} alt={card.title} style={{ width:'100%',height:'100%',objectFit:'cover',filter:`brightness(${hov?0.38:0.28}) saturate(0.5)`,transition:'filter 0.2s' }} />
        <div style={{ position:'absolute',inset:0,background:'linear-gradient(to top,var(--black) 0%,rgba(6,6,14,0.4) 65%,transparent 100%)' }} />
        {card.urgent && (
          <div style={{ position:'absolute',top:'1rem',right:'1rem',background:'var(--accent)',color:'var(--black)',fontFamily:"'Bebas Neue',sans-serif",fontSize:'0.8rem',letterSpacing:'0.1em',padding:'0.15rem 0.5rem',borderRadius:4 }}>TOMORROW</div>
        )}
        <div style={{ position:'absolute',top:'1rem',left:'1rem' }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.62rem',color:card.urgent?'var(--accent)':'#aaa',background:'rgba(0,0,0,0.5)',padding:'0.15rem 0.45rem',borderRadius:3 }}>{card.badge}</span>
        </div>
        <div style={{ position:'absolute',bottom:'1.25rem',left:'1.25rem',right:'1.25rem' }}>
          <h3 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:card.urgent?'2rem':'1.5rem',color:'var(--text)',marginBottom:'0.2rem' }}>{card.title}</h3>
          <p style={{ fontSize:'0.88rem',color:'var(--muted)',fontStyle:'italic' }}>{card.sub}</p>
        </div>
      </div>
    </Link>
  );
}
