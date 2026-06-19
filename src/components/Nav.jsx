import { Link, useLocation } from 'react-router-dom';

const sections = [
  { to:'/',                label:'Home' },
  { to:'/marathon',        label:'Race Day' },
  { to:'/marathon-prep',   label:'Race Day + Prep' },
  { to:'/dinner',          label:'Pre-Race Dinner' },
  { to:'/recovery',        label:'Recovery' },
  { to:'/run-20',          label:'Training Run' },
];

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <nav style={{ position:'fixed',top:0,left:0,right:0,zIndex:100,background:'rgba(6,6,14,0.95)',backdropFilter:'blur(14px)',borderBottom:'1px solid var(--border)',display:'flex',alignItems:'center',padding:'0 1.25rem',height:52,overflowX:'auto',gap:0 }}>
      <span style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1rem',color:'var(--accent)',letterSpacing:'0.12em',marginRight:'1.25rem',whiteSpace:'nowrap',flexShrink:0 }}>
        GRANDMA'S '26
      </span>
      {sections.map(({ to, label }) => {
        const active = pathname === to;
        return (
          <Link key={to} to={to} style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'0.9rem',letterSpacing:'0.07em',color:active?'var(--accent)':'var(--muted)',padding:'0 0.85rem',height:52,display:'flex',alignItems:'center',borderBottom:`2px solid ${active?'var(--accent)':'transparent'}`,transition:'color 0.15s,border-color 0.15s',whiteSpace:'nowrap',textDecoration:'none',flexShrink:0 }}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
