import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/plans';

const RACE_DATE = new Date('2026-06-21T00:00:00');
function countdownLabel() {
  const days = Math.ceil((RACE_DATE - new Date()) / 86400000);
  if (days > 1) return `T-${days} DAYS`;
  if (days === 1) return 'T-1 DAY';
  if (days === 0) return 'RACE DAY';
  return 'RECOVERY';
}

const primaryCards = [
  { to:'/marathon', img:'https://images.unsplash.com/photo-1652543533392-8121234d7d9f?w=800&q=70', badge:'2 Days · Saturday', title:'Race Day',        sub:"Grandma's Marathon · Negative split · Goal 4:28", urgent:true },
  { to:'/dinner',   img:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=70',   badge:'Night Before',     title:'Pre-Race Dinner', sub:"Bellisio's · Canal Park, Duluth" },
  { to:'/recovery', img:'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=70', badge:'After',            title:'Recovery',        sub:'Hour 0 through Day 3' },
];

const historyCard = {
  to:'/run-20',
  img:'https://images.unsplash.com/photo-1502904550040-7534597429ae?w=800&q=70',
  badge:'Done · Reference',
  title:'Training Run',
  sub:'32km peak run · UCAN + Anderson’s (historical)',
};

const productList = [
  { key:'ucannc',  role:'Base layer · pre-race + early miles',     carbs:'19g · slow-release' },
  { key:'ucan',    role:'Split caffeine · km 17 + km 29',          carbs:'19g + 75mg · 2 doses' },
  { key:'sis',     role:'Fast carbs · Zone 3 + finish',            carbs:'22g · 3 packets' },
  { key:'skratch', role:'Sodium + hydration · pre-race only',      carbs:'20g + 400mg sodium' },
];

const heroStats = [
  { val:countdownLabel(), label:'Countdown' },
  { val:'4:28',           label:'Goal Time' },
  { val:'+2:17',          label:'Half Split' },
  { val:'6:23/km',        label:'Avg Pace' },
  { val:'Negative Split', label:'Strategy' },
  { val:'7 Packets',      label:'In-Race Fuel' },
  { val:'142g',           label:'Race Carbs' },
  { val:'~250mg',         label:'Total Caffeine' },
];

export default function Landing() {
  return (
    <div>
      <div style={{ position:'relative',height:'100vh',minHeight:560,overflow:'hidden' }}>
        <img src="https://images.unsplash.com/photo-1620858571016-997522d7b2f3?w=1600&q=80" alt="Aerial Lift Bridge, Duluth" style={{ width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 35%',filter:'brightness(0.22) saturate(0.4)' }} />
        <div style={{ position:'absolute',inset:0,opacity:0.04,backgroundImage:'linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)',backgroundSize:'64px 64px' }} />
        <div style={{ position:'absolute',inset:0,background:'linear-gradient(160deg,transparent 35%,rgba(6,6,14,0.95) 100%)' }} />
        <div style={{ position:'absolute',inset:0,display:'flex',flexDirection:'column',justifyContent:'center',padding:'clamp(1.5rem,6vw,5rem)' }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'clamp(0.6rem,1.2vw,0.72rem)',color:'var(--accent)',letterSpacing:'0.25em',marginBottom:'1.25rem',textTransform:'uppercase' }}>
            Grandma's Marathon · Duluth MN · Saturday June 21, 2026
          </div>
          <h1 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(3.5rem,12vw,9rem)',color:'var(--text)',lineHeight:0.92,maxWidth:820,marginBottom:'1.25rem' }}>
            RACE<br/><span style={{ color:'var(--accent)' }}>FUEL</span><br/>PLAN
          </h1>
          <p style={{ color:'var(--muted)',fontSize:'clamp(0.95rem,1.8vw,1.1rem)',maxWidth:560,lineHeight:1.65,marginBottom:'2.5rem' }}>
            Race in two days. Negative split for 4:28 — UCAN base, split-dose caffeine, SiS finish. Skratch Labs replaces sodium tablets pre-race.
          </p>
          <div style={{ display:'flex',gap:'0.6rem',flexWrap:'wrap' }}>
            {heroStats.map(({val,label}) => (
              <div key={label} style={{ background:'rgba(255,255,255,0.04)',border:'1px solid var(--border)',borderRadius:8,padding:'0.55rem 0.95rem',backdropFilter:'blur(8px)' }}>
                <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(1.05rem,2.1vw,1.35rem)',color:'var(--accent)',letterSpacing:'0.05em' }}>{val}</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.6rem',color:'var(--muted)',textTransform:'uppercase',letterSpacing:'0.14em' }}>{label}</div>
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
        <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.68rem',color:'var(--dim)',letterSpacing:'0.22em',textTransform:'uppercase',marginBottom:'1.25rem' }}>Your Race-Day Arsenal</div>
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

        {/* Primary section cards */}
        <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.68rem',color:'var(--dim)',letterSpacing:'0.22em',textTransform:'uppercase',marginBottom:'1.5rem' }}>Your Plan</div>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:'1.1rem',marginBottom:'3rem' }}>
          {primaryCards.map(card => <SectionCard key={card.to} card={card} />)}
        </div>

        {/* Training history strip */}
        <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.65rem',color:'var(--dim)',letterSpacing:'0.22em',textTransform:'uppercase',marginBottom:'0.85rem' }}>Training History</div>
        <div style={{ marginBottom:'3.5rem' }}>
          <HistoryCard card={historyCard} />
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
              {label:'On-Course Fuel',val:'Water + Powerade only (skip Anderson’s)'},
            ].map(({label,val}) => (
              <div key={label}>
                <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.62rem',color:'var(--dim)',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'0.2rem' }}>{label}</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.82rem',color:'var(--text)' }}>{val}</div>
              </div>
            ))}
          </div>
          <p style={{ color:'var(--muted)',fontSize:'0.9rem',lineHeight:1.6 }}>Point-to-point along Lake Superior Hwy 61 from Two Harbors into Duluth. Net downhill but rolling hills in the first half. Lemon Drop Hill hits at km 35 when legs are spent. East wind off the lake keeps the course cool — check Friday's forecast for race-morning wind direction, that is the key variable.</p>
        </div>
      </div>
    </div>
  );
}

function SectionCard({ card }) {
  const [hov, setHov] = useState(false);
  return (
    <Link to={card.to} style={{ textDecoration:'none' }}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ position:'relative',overflow:'hidden',borderRadius:12,border:`1px solid ${hov?(card.urgent?'var(--accent)80':'#88888880'):'var(--border)'}`,height:card.urgent?290:240,transition:'border-color 0.2s,transform 0.2s',transform:hov?'translateY(-3px)':'translateY(0)',cursor:'pointer' }}>
        <img src={card.img} alt={card.title} style={{ width:'100%',height:'100%',objectFit:'cover',filter:`brightness(${hov?0.38:0.28}) saturate(0.5)`,transition:'filter 0.2s' }} />
        <div style={{ position:'absolute',inset:0,background:'linear-gradient(to top,var(--black) 0%,rgba(6,6,14,0.4) 65%,transparent 100%)' }} />
        {card.urgent && (
          <div style={{ position:'absolute',top:'1rem',right:'1rem',background:'var(--accent)',color:'var(--black)',fontFamily:"'Bebas Neue',sans-serif",fontSize:'0.8rem',letterSpacing:'0.1em',padding:'0.15rem 0.5rem',borderRadius:4 }}>SATURDAY</div>
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

function HistoryCard({ card }) {
  const [hov, setHov] = useState(false);
  return (
    <Link to={card.to} style={{ textDecoration:'none' }}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ position:'relative',overflow:'hidden',borderRadius:10,border:`1px solid ${hov?'var(--border-bright)':'var(--border)'}`,height:120,transition:'border-color 0.2s',cursor:'pointer',display:'flex' }}>
        <img src={card.img} alt={card.title} style={{ width:200,height:'100%',objectFit:'cover',filter:'brightness(0.32) saturate(0.35) grayscale(0.3)' }} />
        <div style={{ flex:1,padding:'0.9rem 1.1rem',background:'var(--surface2)',display:'flex',flexDirection:'column',justifyContent:'center' }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.6rem',color:'var(--dim)',letterSpacing:'0.14em',textTransform:'uppercase',marginBottom:'0.3rem' }}>{card.badge}</span>
          <h3 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.2rem',color:'var(--muted)',letterSpacing:'0.04em',marginBottom:'0.15rem' }}>{card.title}</h3>
          <p style={{ fontSize:'0.8rem',color:'var(--dim)',fontStyle:'italic' }}>{card.sub}</p>
        </div>
      </div>
    </Link>
  );
}
