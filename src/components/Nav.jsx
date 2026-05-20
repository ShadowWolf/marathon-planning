import { Link, useLocation } from 'react-router-dom';

export default function Nav({ planColor, planName }) {
  const { pathname } = useLocation();
  const isMaple = pathname.startsWith('/maple');
  const isUcan  = pathname.startsWith('/ucan');
  const accent  = isMaple ? 'var(--maple)' : isUcan ? 'var(--ucan)' : 'var(--accent)';

  const links = isMaple ? [
    { to:'/maple',          label:'Overview' },
    { to:'/maple/run-19',   label:'19-Mile Run' },
    { to:'/maple/run-20',   label:'20-Mile Run' },
    { to:'/maple/pre-race', label:'Pre-Race Meal' },
    { to:'/maple/race-day', label:'Race Day' },
    { to:'/maple/recovery', label:'Recovery' },
  ] : isUcan ? [
    { to:'/ucan',          label:'Overview' },
    { to:'/ucan/run-19',   label:'19-Mile Run' },
    { to:'/ucan/run-20',   label:'20-Mile Run' },
    { to:'/ucan/pre-race', label:'Pre-Race Meal' },
    { to:'/ucan/race-day', label:'Race Day' },
    { to:'/ucan/recovery', label:'Recovery' },
  ] : [];

  return (
    <nav style={{ position:'fixed', top:0, left:0, right:0, zIndex:100, background:'rgba(6,6,14,0.95)', backdropFilter:'blur(14px)', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'center', padding:'0 1.25rem', height:52, overflowX:'auto', gap:0 }}>
      <Link to="/" style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'1rem', color:'var(--accent)', letterSpacing:'0.12em', marginRight:'1rem', whiteSpace:'nowrap', flexShrink:0, textDecoration:'none' }}>
        ← GRANDMA'S '26
      </Link>
      {links.map(({ to, label }) => {
        const active = pathname === to;
        return (
          <Link key={to} to={to} style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'0.9rem', letterSpacing:'0.07em', color: active ? accent : 'var(--muted)', padding:'0 0.8rem', height:52, display:'flex', alignItems:'center', borderBottom:`2px solid ${active ? accent : 'transparent'}`, transition:'color 0.15s,border-color 0.15s', whiteSpace:'nowrap', textDecoration:'none', flexShrink:0 }}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
