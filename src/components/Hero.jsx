export default function Hero({ badge, title, subtitle, img, accentColor, stats }) {
  return (
    <div style={{ position:'relative', height:'clamp(280px,40vh,420px)', overflow:'hidden' }}>
      <img src={img} alt={title} style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 40%', filter:'brightness(0.28) saturate(0.5)' }} />
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, transparent 15%, var(--black) 100%)' }} />
      <div style={{ position:'absolute', bottom:'2rem', left:'clamp(1.25rem,4vw,3rem)', right:'clamp(1.25rem,4vw,3rem)' }}>
        {badge && <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.7rem', color:accentColor||'var(--accent)', letterSpacing:'0.22em', marginBottom:'0.5rem', textTransform:'uppercase' }}>{badge}</div>}
        <h1 style={{ fontSize:'clamp(2.2rem,6vw,4rem)', color:'var(--text)', marginBottom:'0.4rem' }}>{title}</h1>
        {subtitle && <p style={{ color:'var(--muted)', fontSize:'0.95rem', fontStyle:'italic' }}>{subtitle}</p>}
        {stats && (
          <div style={{ display:'flex', gap:'0.75rem', flexWrap:'wrap', marginTop:'1rem' }}>
            {stats.map(({ val, label }) => (
              <div key={label} style={{ background:'rgba(255,255,255,0.05)', border:'1px solid var(--border)', borderRadius:8, padding:'0.4rem 0.85rem', backdropFilter:'blur(8px)' }}>
                <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'1.25rem', color:accentColor||'var(--accent)', letterSpacing:'0.05em' }}>{val}</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.6rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.14em' }}>{label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
