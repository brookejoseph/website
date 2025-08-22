import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Ambitious from './pages/ambition';
import WorkEthicReflection from './pages/work-ethic';
import HealthyEatingGuide from './pages/food';
import InterestingProblems from './pages/problems';
import ThingsIWontShutUpAbout from './pages/interesting-stuff';
import Running from './pages/running';
import LiftingGuide from './pages/lifting';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pages/ambition" element={<Ambitious />} />
        <Route path="/pages/work-ethic" element={<WorkEthicReflection />} />
        <Route path="/pages/food" element={<HealthyEatingGuide />} />
        <Route path="/pages/problems" element={<InterestingProblems />} />
        <Route path="/pages/interesting-stuff" element={<ThingsIWontShutUpAbout />} />
        <Route path="/pages/running" element={<Running />} />
        <Route path="/pages/lifting" element={<LiftingGuide />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;