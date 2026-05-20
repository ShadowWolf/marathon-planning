import Nav from './Nav';
import Hero from './Hero';
import { Timeline } from './Timeline';
import { sharedPre } from '../data/plans';

export default function RunPage({ color, km, title, subtitle, heroImg, runPlan, reminders, paceNote, extraStats }) {
  const stats = [
    { val:km, label:'Distance' },
    { val:paceNote, label:'Easy Pace' },
    ...(extraStats||[]),
  ];
  return (
    <div style={{ paddingTop:52 }}>
      <Nav />
      <Hero badge={`Training Run · ${km}`} title={title} subtitle={subtitle} img={heroImg} accentColor={color} stats={stats} />
      <div style={{ maxWidth:700, margin:'0 auto', padding:'1.5rem 1.25rem 0' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:'0.6rem', background:'var(--surface2)', border:'1px solid var(--border)', borderRadius:8, padding:'0.5rem 1rem', marginBottom:'0.5rem' }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.72rem', color:'var(--muted)' }}>EASY PACE</span>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.9rem', color, fontWeight:700 }}>{paceNote}</span>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.72rem', color:'var(--dim)' }}>· fully conversational</span>
        </div>
      </div>
      <Timeline prePlan={sharedPre} runPlan={runPlan} accentColor={color} reminders={reminders} />
    </div>
  );
}
