import { useState } from 'react';
import { products } from '../data/plans';

const phaseStyle = {
  early:  { dot:'#30c060', glow:'rgba(26,122,64,0.25)',  badge:'rgba(13,51,32,0.9)'  },
  middle: { dot:'#c8a020', glow:'rgba(200,160,32,0.2)',  badge:'rgba(51,38,0,0.9)'   },
  late:   { dot:'#c06020', glow:'rgba(192,96,32,0.2)',   badge:'rgba(51,21,0,0.9)'   },
  final:  { dot:'#c03030', glow:'rgba(192,48,48,0.2)',   badge:'rgba(51,10,10,0.9)'  },
  done:   { dot:'#e8a830', glow:'rgba(232,168,48,0.25)', badge:'rgba(51,32,0,0.9)'   },
};

export function PreRow({ row }) {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(o => !o)} style={{ display:'flex',alignItems:'flex-start',gap:'1rem',padding:'0.85rem 1.1rem',marginBottom:'0.4rem',background:open?'var(--surface3)':'var(--surface2)',border:`1px solid ${open?'var(--border-bright)':'var(--border)'}`,borderRadius:8,cursor:'pointer',transition:'all 0.15s' }}>
      <span style={{ fontSize:'1.3rem',lineHeight:1,marginTop:3,flexShrink:0 }}>{row.icon}</span>
      <div style={{ flex:1,minWidth:0 }}>
        <div style={{ display:'flex',alignItems:'center',gap:'1rem',flexWrap:'wrap' }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.78rem',color:'var(--muted)',minWidth:80 }}>{row.time}</span>
          <span style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.05rem',letterSpacing:'0.06em',color:'var(--text)' }}>{row.label}</span>
        </div>
        {open && <p style={{ marginTop:'0.5rem',color:'#b8b4a8',fontSize:'0.9rem',lineHeight:1.55 }}>{row.detail}</p>}
      </div>
      <span style={{ color:'var(--dim)',fontSize:'0.65rem',marginTop:6,flexShrink:0 }}>{open?'▲':'▼'}</span>
    </div>
  );
}

function FuelBadge({ fuelKey, carbs, caffeine }) {
  if (!fuelKey) return null;
  const p = products[fuelKey];
  return (
    <span style={{ display:'inline-flex',alignItems:'center',gap:'0.3rem',fontFamily:"'JetBrains Mono',monospace",fontSize:'0.62rem',color:p.color,background:p.color+'18',border:`1px solid ${p.color}40`,padding:'0.12rem 0.5rem',borderRadius:4 }}>
      {p.emoji} {p.short} · {carbs}g carbs{caffeine?` · ${caffeine}mg caff`:''}
    </span>
  );
}

function WalkBadge({ walk }) {
  if (!walk) return null;
  const color = walk.inhaler ? '#c03030' : '#3a8ac0';
  return (
    <span style={{ display:'inline-flex',alignItems:'center',gap:'0.3rem',fontFamily:"'JetBrains Mono',monospace",fontSize:'0.62rem',color,background:color+'18',border:`1px solid ${color}40`,padding:'0.12rem 0.5rem',borderRadius:4 }}>
      🚶 Walk · {walk.distance}m · {walk.duration}{walk.inhaler?' · 💨 Inhaler':''}
    </span>
  );
}

export function RunRow({ row }) {
  const [open, setOpen] = useState(false);
  const s = phaseStyle[row.phase] || phaseStyle.early;
  const isDone = row.phase === 'done';
  const isSupport = row.isSupport;

  return (
    <div style={{ display:'flex',gap:'1rem',marginBottom:'0.5rem',position:'relative' }}>
      <div style={{ minWidth:52,display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'0.65rem',zIndex:1,flexShrink:0 }}>
        <div style={{ width:38,height:38,borderRadius:'50%',background:'var(--surface)',border:`2px solid ${isSupport?'var(--accent)':s.dot}`,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'JetBrains Mono',monospace",fontSize:'0.62rem',color:isSupport?'var(--accent)':s.dot,fontWeight:700,boxShadow:`0 0 12px ${s.glow}` }}>
          {isDone ? '🏁' : isSupport ? '📦' : row.km}
        </div>
      </div>
      <div onClick={() => !isDone && setOpen(o => !o)} style={{ flex:1,minWidth:0,padding:'0.75rem 1rem',background:open?s.badge:'var(--surface2)',border:`1px solid ${open?(isSupport?'var(--accent)60':s.dot+'55'):'var(--border)'}`,borderRadius:8,cursor:isDone?'default':'pointer',transition:'all 0.15s' }}>
        <div style={{ display:'flex',alignItems:'flex-start',gap:'0.6rem',flexWrap:'wrap',marginBottom:'0.35rem' }}>
          <span style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.05rem',letterSpacing:'0.05em',color:isSupport?'var(--accent)':s.dot }}>{row.label}</span>
          {row.station && <span style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.62rem',color:'var(--muted)',background:'var(--surface3)',padding:'0.15rem 0.45rem',borderRadius:3,marginTop:2 }}>{row.station}</span>}
          <span style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.72rem',color:'var(--dim)',marginLeft:'auto' }}>{row.time}</span>
        </div>
        <FuelBadge fuelKey={row.fuel} carbs={row.carbs} caffeine={row.caffeine} />
        <WalkBadge walk={row.walk} />
        {(open || isDone) && <p style={{ marginTop:'0.5rem',color:'#b8b4a8',fontSize:'0.9rem',lineHeight:1.55 }}>{row.detail}</p>}
        {!open && !isDone && <p style={{ marginTop:'0.25rem',color:'var(--dim)',fontSize:'0.8rem' }}>Tap for detail ↓</p>}
      </div>
    </div>
  );
}
