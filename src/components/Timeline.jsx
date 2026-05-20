import { useState } from 'react';

const phaseStyle = {
  early:  { dot:'#30c060', glow:'#1a7a4040', badge:'rgba(13,51,32,0.85)'  },
  middle: { dot:'#c8a020', glow:'#c8a02030', badge:'rgba(51,38,0,0.85)'   },
  late:   { dot:'#c06020', glow:'#c0602030', badge:'rgba(51,21,0,0.85)'   },
  final:  { dot:'#c03030', glow:'#c0303030', badge:'rgba(51,10,10,0.85)'  },
  done:   { dot:'#e8a830', glow:'#e8a83040', badge:'rgba(51,32,0,0.85)'   },
};

export function PreRow({ row }) {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(o => !o)} style={{ display:'flex', alignItems:'flex-start', gap:'1rem', padding:'0.85rem 1.1rem', marginBottom:'0.4rem', background: open ? 'var(--surface3)':'var(--surface2)', border:`1px solid ${open?'var(--border-bright)':'var(--border)'}`, borderRadius:8, cursor:'pointer', transition:'all 0.15s' }}>
      <span style={{ fontSize:'1.3rem', lineHeight:1, marginTop:3, flexShrink:0 }}>{row.icon}</span>
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ display:'flex', alignItems:'center', gap:'1rem', flexWrap:'wrap' }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.78rem', color:'var(--muted)', minWidth:80 }}>{row.time}</span>
          <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'1.05rem', letterSpacing:'0.06em', color:'var(--text)' }}>{row.label}</span>
        </div>
        {open && <p style={{ marginTop:'0.5rem', color:'#b8b4a8', fontSize:'0.9rem', lineHeight:1.55 }}>{row.detail}</p>}
      </div>
      <span style={{ color:'var(--dim)', fontSize:'0.65rem', marginTop:6, flexShrink:0 }}>{open?'▲':'▼'}</span>
    </div>
  );
}

export function RunRow({ row, accentColor }) {
  const [open, setOpen] = useState(false);
  const s = phaseStyle[row.phase] || phaseStyle.early;
  const isDone = row.phase === 'done';
  return (
    <div style={{ display:'flex', gap:'1rem', marginBottom:'0.5rem', position:'relative' }}>
      <div style={{ minWidth:52, display:'flex', flexDirection:'column', alignItems:'center', paddingTop:'0.65rem', zIndex:1, flexShrink:0 }}>
        <div style={{ width:38, height:38, borderRadius:'50%', background:'var(--surface)', border:`2px solid ${s.dot}`, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'JetBrains Mono',monospace", fontSize:'0.62rem', color:s.dot, fontWeight:700, boxShadow:`0 0 12px ${s.glow}` }}>
          {isDone ? '🏁' : row.km}
        </div>
      </div>
      <div onClick={() => !isDone && setOpen(o => !o)} style={{ flex:1, minWidth:0, padding:'0.75rem 1rem', background: open ? s.badge : 'var(--surface2)', border:`1px solid ${open ? s.dot+'55':'var(--border)'}`, borderRadius:8, cursor: isDone ? 'default':'pointer', transition:'all 0.15s' }}>
        <div style={{ display:'flex', alignItems:'flex-start', gap:'0.6rem', flexWrap:'wrap' }}>
          <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'1.05rem', letterSpacing:'0.05em', color: s.dot }}>{row.label}</span>
          {row.stationNote && <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.62rem', color:'var(--muted)', background:'var(--surface3)', padding:'0.15rem 0.45rem', borderRadius:3, marginTop:2 }}>{row.stationNote}</span>}
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.72rem', color:'var(--dim)', marginLeft:'auto' }}>{row.time}</span>
        </div>
        {(open || isDone) && <p style={{ marginTop:'0.5rem', color:'#b8b4a8', fontSize:'0.9rem', lineHeight:1.55 }}>{row.detail}</p>}
        {!open && !isDone && <p style={{ marginTop:'0.2rem', color:'var(--dim)', fontSize:'0.8rem' }}>Tap for detail ↓</p>}
      </div>
    </div>
  );
}

export function Timeline({ prePlan, runPlan, accentColor, reminders }) {
  return (
    <div style={{ maxWidth:700, margin:'0 auto', padding:'2rem 1.25rem 5rem' }}>
      <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'1.4rem', color:'var(--muted)', marginBottom:'1rem', letterSpacing:'0.08em' }}>PRE-RUN</h2>
      {prePlan.map((row,i) => <PreRow key={i} row={row} />)}
      <div style={{ height:1, background:`linear-gradient(to right, ${accentColor}60, transparent)`, margin:'2rem 0' }} />
      <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'1.4rem', color:'var(--muted)', marginBottom:'1rem', letterSpacing:'0.08em' }}>ON THE RUN</h2>
      <div style={{ position:'relative' }}>
        <div style={{ position:'absolute', left:25, top:20, bottom:20, width:2, background:'linear-gradient(to bottom, #1a7a40, #c8a020, #c06020, #c03030)', opacity:0.3 }} />
        {runPlan.map((row,i) => <RunRow key={i} row={row} accentColor={accentColor} />)}
      </div>
      {reminders && (
        <div style={{ marginTop:'2.5rem', padding:'1.25rem', background:'var(--surface2)', border:'1px solid var(--border)', borderRadius:10 }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.65rem', color:'var(--dim)', letterSpacing:'0.18em', textTransform:'uppercase', marginBottom:'0.75rem' }}>Key Reminders</div>
          {reminders.map((note,i) => (
            <div key={i} style={{ display:'flex', gap:'0.6rem', marginBottom:'0.4rem' }}>
              <span style={{ color:accentColor, marginTop:4, flexShrink:0 }}>·</span>
              <span style={{ color:'var(--muted)', fontSize:'0.88rem', lineHeight:1.55 }}>{note}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
