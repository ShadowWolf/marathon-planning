import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing  from './components/Landing';
import Run20    from './components/Run20';
import Marathon from './components/Marathon';
import Dinner   from './components/Dinner';
import Recovery from './components/Recovery';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<Landing  />} />
        <Route path="/run-20"    element={<Run20    />} />
        <Route path="/marathon"  element={<Marathon />} />
        <Route path="/dinner"    element={<Dinner   />} />
        <Route path="/recovery"  element={<Recovery />} />
      </Routes>
    </BrowserRouter>
  );
}
