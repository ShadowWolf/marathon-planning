import Nav from './Nav';
import { dinner as D } from '../data/plans';

export default function Dinner() {
  return (
    <div style={{ paddingTop:52 }}>
      <Nav />
      <div style={{ position:'relative',height:'clamp(260px,38vh,380px)',overflow:'hidden' }}>
        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1400&q=80" alt="Bellisios" style={{ width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 60%',filter:'brightness(0.28) saturate(0.5)' }} />
        <div style={{ position:'absolute',inset:0,background:'linear-gradient(to bottom,transparent 20%,var(--black) 100%)' }} />
        <div style={{ position:'absolute',bottom:'2rem',left:'clamp(1.25rem,4vw,3rem)',right:'clamp(1.25rem,4vw,3rem)' }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.7rem',color:'var(--accent)',letterSpacing:'0.22em',marginBottom:'0.5rem',textTransform:'uppercase' }}>Night Before the Race</div>
          <h1 style={{ fontSize:'clamp(2.2rem,6vw,3.8rem)',color:'var(--text)',marginBottom:'0.4rem' }}>PRE-RACE DINNER</h1>
          <p style={{ color:'var(--muted)',fontSize:'0.95rem',fontStyle:'italic' }}>{D.restaurant} · {D.address}</p>
        </div>
      </div>

      <div style={{ maxWidth:720,margin:'0 auto',padding:'2rem 1.25rem 5rem' }}>
        <div style={{ background:'var(--surface2)',border:'1px solid rgba(232,168,48,0.3)',borderLeft:'3px solid var(--accent)',borderRadius:10,padding:'1rem 1.25rem',marginBottom:'2.5rem' }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.68rem',color:'var(--accent)',letterSpacing:'0.15em' }}>STRATEGY · </span>
          <span style={{ color:'var(--muted)',fontSize:'0.9rem' }}>{D.strategy}</span>
        </div>

        <SH>RECOMMENDED DISHES</SH>
        {D.recommended.map(dish => (
          <div key={dish.rank} style={{ display:'flex',gap:'1rem',padding:'1.1rem 1.25rem',marginBottom:'0.75rem',background:'var(--surface2)',border:`1px solid ${dish.color}35`,borderLeft:`3px solid ${dish.color}`,borderRadius:10 }}>
            <div style={{ minWidth:28,height:28,borderRadius:'50%',background:dish.color+'18',border:`1px solid ${dish.color}60`,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Bebas Neue',sans-serif",fontSize:'0.9rem',color:dish.color,marginTop:2,flexShrink:0 }}>{dish.rank}</div>
            <div>
              <div style={{ display:'flex',alignItems:'center',gap:'0.75rem',flexWrap:'wrap',marginBottom:'0.35rem' }}>
                <span style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.15rem',color:'var(--text)',letterSpacing:'0.04em' }}>{dish.name}</span>
                <span style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.62rem',color:dish.color,background:dish.color+'15',padding:'0.12rem 0.4rem',borderRadius:3 }}>{dish.label}</span>
              </div>
              <p style={{ color:'var(--muted)',fontSize:'0.9rem',lineHeight:1.55 }}>{dish.desc}</p>
            </div>
          </div>
        ))}

        <SH top="2rem">STARTER</SH>
        <div style={{ padding:'1rem 1.25rem',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:10,marginBottom:'0.5rem' }}>
          <p style={{ color:'var(--muted)',fontSize:'0.9rem',lineHeight:1.55 }}>{D.starter}</p>
        </div>

        <SH top="2rem">AVOID TONIGHT</SH>
        {D.avoid.map((item,i) => (
          <div key={i} style={{ display:'flex',gap:'0.75rem',padding:'0.75rem 1rem',marginBottom:'0.4rem',background:'var(--surface2)',border:'1px solid rgba(160,40,40,0.2)',borderLeft:'3px solid var(--red)',borderRadius:8 }}>
            <span style={{ color:'var(--red)',marginTop:2,flexShrink:0 }}>✕</span>
            <span style={{ color:'var(--muted)',fontSize:'0.88rem',lineHeight:1.5 }}>{item}</span>
          </div>
        ))}

        <SH top="2rem">NON-ALCOHOLIC DRINKS</SH>
        {D.drinks.map(d => (
          <div key={d.name} style={{ display:'flex',alignItems:'flex-start',gap:'0.75rem',padding:'0.75rem 1rem',marginBottom:'0.4rem',background:'var(--surface2)',border:`1px solid ${d.good?'rgba(48,192,96,0.2)':'rgba(160,40,40,0.2)'}`,borderLeft:`3px solid ${d.good?'var(--green)':'var(--red)'}`,borderRadius:8 }}>
            <span style={{ color:d.good?'var(--green-bright)':'var(--red)',marginTop:2,flexShrink:0 }}>{d.good?'✓':'✕'}</span>
            <div><span style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1rem',color:d.good?'var(--green-bright)':'#e07070',letterSpacing:'0.04em' }}>{d.name} </span><span style={{ color:'var(--muted)',fontSize:'0.88rem' }}>— {d.note}</span></div>
          </div>
        ))}

        <div style={{ marginTop:'2rem',padding:'1rem 1.25rem',background:'var(--surface3)',border:'1px solid var(--border)',borderRadius:8 }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'0.66rem',color:'var(--accent)',letterSpacing:'0.15em' }}>PORTION NOTE · </span>
          <span style={{ color:'var(--muted)',fontSize:'0.88rem' }}>{D.portionNote}</span>
        </div>
      </div>
    </div>
  );
}

function SH({ children, top='0' }) {
  return <h2 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.4rem',letterSpacing:'0.08em',color:'var(--text)',marginBottom:'1rem',marginTop:top }}>{children}</h2>;
}
