import Nav from './Nav';
import { recovery as R } from '../data/plans';

export default function Recovery() {
  return (
    <div style={{ paddingTop:52 }}>
      <Nav />
      <div style={{ position:'relative',height:'clamp(260px,38vh,380px)',overflow:'hidden' }}>
        <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1400&q=80" alt="Recovery" style={{ width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 40%',filter:'brightness(0.28) saturate(0.45)' }} />
        <div style={{ position:'absolute',inset:0,background:'linear-gradient(to bottom,transparent 20%,var(--black) 100%)' }} />
        <div style={{ position:'absolute',bottom:'2rem',left:'clamp(1.25rem,4vw,3rem)',right:'clamp(1.25rem,4vw,3rem)' }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.7rem',color:'var(--accent)',letterSpacing:'0.22em',marginBottom:'0.5rem',textTransform:'uppercase' }}>Post-Race</div>
          <h1 style={{ fontSize:'clamp(2.2rem,6vw,3.8rem)',color:'var(--text)',marginBottom:'0.4rem' }}>RECOVERY PLAN</h1>
          <p style={{ color:'var(--muted)',fontSize:'0.95rem',fontStyle:'italic' }}>Hour 0 through Day 3 · You burned ~3,500-4,000 kcal</p>
        </div>
      </div>
      <div style={{ maxWidth:720,margin:'0 auto',padding:'2rem 1.25rem 5rem' }}>
        {R.map((phase,pi) => (
          <div key={pi} style={{ marginBottom:'2.5rem' }}>
            <div style={{ position:'relative',height:150,overflow:'hidden',borderRadius:'10px 10px 0 0',border:`1px solid ${phase.color}40`,borderBottom:'none' }}>
              <img src={phase.img} alt={phase.title} style={{ width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 40%',filter:'brightness(0.25) saturate(0.45)' }} />
              <div style={{ position:'absolute',inset:0,background:'linear-gradient(to right,rgba(6,6,14,0.95) 50%,rgba(6,6,14,0.5) 100%)' }} />
              <div style={{ position:'absolute',inset:0,display:'flex',alignItems:'center',padding:'1.25rem 1.5rem' }}>
                <div>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.68rem',color:phase.color,letterSpacing:'0.18em',textTransform:'uppercase',marginBottom:'0.3rem' }}>{phase.window}</div>
                  <h2 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(1.6rem,4vw,2.2rem)',color:'var(--text)',letterSpacing:'0.05em' }}>{phase.title}</h2>
                </div>
              </div>
            </div>
            <div style={{ background:'var(--surface2)',border:`1px solid ${phase.color}30`,borderTop:`2px solid ${phase.color}`,borderRadius:'0 0 10px 10px',padding:'0.5rem',display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'0.5rem' }}>
              {phase.items.map((item,ii) => (
                <div key={ii} style={{ padding:'1rem',background:'var(--surface)',borderRadius:8,border:'1px solid var(--border)' }}>
                  <div style={{ display:'flex',alignItems:'baseline',gap:'0.5rem',marginBottom:'0.4rem',flexWrap:'wrap' }}>
                    <span style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.68rem',color:'var(--dim)',textTransform:'uppercase',letterSpacing:'0.1em' }}>{item.label}</span>
                    <span style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.15rem',color:phase.color,letterSpacing:'0.04em' }}>{item.value}</span>
                  </div>
                  <p style={{ color:'var(--muted)',fontSize:'0.88rem',lineHeight:1.55 }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{ padding:'1.5rem',background:'var(--surface2)',border:'1px solid var(--border)',borderLeft:'3px solid var(--accent)',borderRadius:10 }}>
          <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.3rem',color:'var(--text)',marginBottom:'0.5rem',letterSpacing:'0.06em' }}>You are going to want to sign up for the next one</div>
          <p style={{ color:'var(--muted)',fontSize:'0.92rem',lineHeight:1.65 }}>The legs still sore, the strange empty hunger, the replaying of the race — that is your body telling you it is ready to do it again. Rest it. Feed it. Sleep. Then plan the next one.</p>
          <div style={{ marginTop:'1rem',fontFamily:"'JetBrains Mono',monospace",fontSize:'0.72rem',color:'var(--accent)' }}>Full recovery: 2-4 weeks · Return to easy running: ~10 days</div>
        </div>
      </div>
    </div>
  );
}
