import { Link, useLocation } from 'react-router-dom';

const sections = (base) => [
  { to:`${base}/run-19`, img:'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=700&q=70', badge:'30.6 km', title:'19-Mile Run', sub:'Dress rehearsal · 6:45–6:50/km' },
  { to:`${base}/run-20`, img:'https://images.unsplash.com/photo-1502904550040-7534597429ae?w=700&q=70', badge:'32.2 km', title:'20-Mile Run', sub:'Peak training run · 6:45–6:50/km' },
  { to:`${base}/pre-race`, img:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=70', badge:'Night Before', title:'Pre-Race Dinner', sub:"Bellisio's · Canal Park" },
  { to:`${base}/race-day`, img:'https://images.unsplash.com/photo-1531315396756-905d68d21b56?w=700&q=70', badge:'42.2 km', title:'Race Day', sub:"Grandma's Marathon · June 21" },
  { to:`${base}/recovery`, img:'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&q=70', badge:'After', title:'Recovery', sub:'Hour 0 through Day 3' },
];

export default function PlanOverview({ color, colorDim, title, badge, subtitle, heroImg, summary }) {
  const { pathname } = useLocation();
  const base = pathname.replace(/\/$/, '');
  const cards = sections(base);

  return (
    <div style={{ paddingTop:52 }}>
      {/* Hero */}
      <div style={{ position:'relative', height:'clamp(320px,50vh,520px)', overflow:'hidden' }}>
        <img src={heroImg} alt={title} style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 35%', filter:'brightness(0.22) saturate(0.4)' }} />
        <div style={{ position:'absolute', inset:0, opacity:0.04, backgroundImage:'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize:'64px 64px' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, transparent 20%, var(--black) 100%)' }} />
        <div style={{ position:'absolute', bottom:'2.5rem', left:'clamp(1.25rem,4vw,3rem)', right:'clamp(1.25rem,4vw,3rem)' }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.7rem', color, letterSpacing:'0.22em', marginBottom:'0.5rem', textTransform:'uppercase' }}>{badge}</div>
          <h1 style={{ fontSize:'clamp(2.5rem,7vw,5rem)', color:'var(--text)', marginBottom:'0.5rem' }}>{title}</h1>
          <p style={{ color:'var(--muted)', fontSize:'1rem', fontStyle:'italic', maxWidth:560 }}>{subtitle}</p>
        </div>
      </div>

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'3rem 1.25rem 6rem' }}>
        {/* Summary bar */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:'0.75rem', marginBottom:'3rem', padding:'1.25rem', background:'var(--surface2)', border:`1px solid ${color}30`, borderRadius:12 }}>
          {[
            {label:'Carbs/Hour', val:summary.carbsPerHour},
            {label:'Total Carbs', val:summary.totalCarbs},
            {label:'Training Gels', val:String(summary.trainingGels)},
            {label:'Race Day Gels', val:String(summary.raceGels)},
            {label:'Water Required', val:summary.waterRequired},
            {label:'Caffeine Source', val:summary.caffeineSource},
          ].map(({label,val}) => (
            <div key={label}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.62rem', color:'var(--dim)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'0.2rem' }}>{label}</div>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.82rem', color:'var(--text)', lineHeight:1.3 }}>{val}</div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div style={{ marginBottom:'3rem', padding:'1.25rem', background:'var(--surface2)', border:`1px solid ${color}30`, borderLeft:`3px solid ${color}`, borderRadius:10 }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.65rem', color, letterSpacing:'0.18em', textTransform:'uppercase', marginBottom:'0.75rem' }}>Plan Notes</div>
          {summary.notes.map((note,i) => (
            <div key={i} style={{ display:'flex', gap:'0.6rem', marginBottom:'0.4rem' }}>
              <span style={{ color, marginTop:4, flexShrink:0 }}>·</span>
              <span style={{ color:'var(--muted)', fontSize:'0.9rem', lineHeight:1.55 }}>{note}</span>
            </div>
          ))}
        </div>

        {/* Section cards */}
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.68rem', color:'var(--dim)', letterSpacing:'0.22em', textTransform:'uppercase', marginBottom:'1.5rem' }}>Sections</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:'1rem' }}>
          {cards.map(card => <SectionCard key={card.to} card={card} color={color} />)}
        </div>
      </div>
    </div>
  );
}

function SectionCard({ card, color }) {
  const [hov, setHov] = useState(false);
  return (
    <Link to={card.to} style={{ textDecoration:'none' }}>
      <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{ position:'relative', overflow:'hidden', borderRadius:10, border:`1px solid ${hov?color+'80':'var(--border)'}`, height:200, transition:'border-color 0.2s, transform 0.2s', transform:hov?'translateY(-2px)':'translateY(0)', cursor:'pointer' }}>
        <img src={card.img} alt={card.title} style={{ width:'100%', height:'100%', objectFit:'cover', filter:`brightness(${hov?0.38:0.28}) saturate(0.5)`, transition:'filter 0.2s' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, var(--black) 0%, rgba(6,6,14,0.3) 70%, transparent 100%)' }} />
        <div style={{ position:'absolute', top:'0.85rem', left:'0.85rem' }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.62rem', color, background:color+'18', border:`1px solid ${color}40`, padding:'0.15rem 0.45rem', borderRadius:3 }}>{card.badge}</span>
        </div>
        <div style={{ position:'absolute', bottom:'1rem', left:'1rem', right:'1rem' }}>
          <h3 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'1.4rem', color:'var(--text)', marginBottom:'0.15rem' }}>{card.title}</h3>
          <p style={{ fontSize:'0.82rem', color:'var(--muted)', fontStyle:'italic' }}>{card.sub}</p>
        </div>
      </div>
    </Link>
  );
}

import { useState } from 'react';
