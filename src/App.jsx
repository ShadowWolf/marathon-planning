import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Nav from './components/Nav';
import PlanOverview from './components/PlanOverview';
import RunPage from './components/RunPage';
import DinnerPage from './components/DinnerPage';
import RaceDayPage from './components/RaceDayPage';
import RecoveryPage from './components/RecoveryPage';
import {
  maple19Run, maple20Run, mapleRaceRun, mapleSummary, mapleColor,
  ucan19Run, ucan20Run, ucanRaceRun, ucanSummary, ucanColor,
} from './data/plans';

const MAPLE = 'var(--maple)';
const UCAN  = 'var(--ucan)';

const mapleReminders19 = [
  'Tear packet fully open, squeeze completely, wipe sticky hands on shorts and keep moving.',
  'Chase every packet with water at your next stop — always drink at water points.',
  'Caffeine pack at km 20 only — separate from the syrup packets.',
  'Same breakfast, same gear as race day. This is your dress rehearsal.',
];
const mapleReminders20 = [
  ...mapleReminders19.slice(0,3),
  'This is your peak training run. Every km past 28 builds race-day resilience.',
];

const ucanReminders19 = [
  'UCAN Edge requires no water — you can take it between aid stations.',
  'Anderson\'s syrup still benefits from a water chase — align those with stations.',
  'The alternating pattern takes practice. Do not wing it on race day.',
  'Caffeine pack at km 18 — earlier than the maple-only plan because UCAN ramps slower.',
];
const ucanReminders20 = [
  ...ucanReminders19.slice(0,3),
  'Note your energy floor on this run — steady with no spikes is what you want from UCAN.',
];

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Landing />} />

        {/* Maple plan */}
        <Route path="/maple" element={
          <>
            <div style={{ paddingTop:52 }}><Nav /></div>
            <PlanOverview
              color={MAPLE} colorDim="var(--maple-dim)"
              badge="Plan A · Pure Maple Syrup"
              title="MAPLE SYRUP PLAN"
              subtitle="Andersons Pure Fuel only — all-natural, on-course at Mile 17, simple to execute"
              heroImg="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80"
              summary={mapleSummary}
            />
          </>
        } />
        <Route path="/maple/run-19" element={
          <RunPage color={MAPLE} km="30.6 km" title="19-MILE RUN" subtitle="Dress rehearsal — maple syrup only, same gear and breakfast as race day"
            heroImg="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1400&q=80"
            runPlan={maple19Run} paceNote="6:45–6:50/km" reminders={mapleReminders19} />
        } />
        <Route path="/maple/run-20" element={
          <RunPage color={MAPLE} km="32.2 km" title="20-MILE RUN" subtitle="Peak training run — maple syrup only, your longest before taper"
            heroImg="https://images.unsplash.com/photo-1502904550040-7534597429ae?w=1400&q=80"
            runPlan={maple20Run} paceNote="6:45–6:50/km" reminders={mapleReminders20} />
        } />
        <Route path="/maple/pre-race" element={<DinnerPage color={MAPLE} />} />
        <Route path="/maple/race-day" element={
          <RaceDayPage color={MAPLE} runPlan={mapleRaceRun}
            heroImg="https://images.unsplash.com/photo-1531315396756-905d68d21b56?w=1600&q=80" />
        } />
        <Route path="/maple/recovery" element={<RecoveryPage color={MAPLE} />} />

        {/* UCAN plan */}
        <Route path="/ucan" element={
          <>
            <div style={{ paddingTop:52 }}><Nav /></div>
            <PlanOverview
              color={UCAN} colorDim="var(--ucan-dim)"
              badge="Plan B · Maple + UCAN Edge"
              title="MAPLE + UCAN PLAN"
              subtitle="Andersons Pure Fuel + UCAN Edge — dual-source approach targeting 60g/hr"
              heroImg="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1400&q=80"
              summary={ucanSummary}
            />
          </>
        } />
        <Route path="/ucan/run-19" element={
          <RunPage color={UCAN} km="30.6 km" title="19-MILE RUN" subtitle="Dress rehearsal — alternating UCAN Edge and maple syrup"
            heroImg="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1400&q=80"
            runPlan={ucan19Run} paceNote="6:45–6:50/km" reminders={ucanReminders19} />
        } />
        <Route path="/ucan/run-20" element={
          <RunPage color={UCAN} km="32.2 km" title="20-MILE RUN" subtitle="Peak training run — alternating UCAN Edge and maple syrup"
            heroImg="https://images.unsplash.com/photo-1502904550040-7534597429ae?w=1400&q=80"
            runPlan={ucan20Run} paceNote="6:45–6:50/km" reminders={ucanReminders20} />
        } />
        <Route path="/ucan/pre-race" element={<DinnerPage color={UCAN} />} />
        <Route path="/ucan/race-day" element={
          <RaceDayPage color={UCAN} runPlan={ucanRaceRun}
            heroImg="https://images.unsplash.com/photo-1531315396756-905d68d21b56?w=1600&q=80" />
        } />
        <Route path="/ucan/recovery" element={<RecoveryPage color={UCAN} />} />
      </Routes>
    </BrowserRouter>
  );
}
