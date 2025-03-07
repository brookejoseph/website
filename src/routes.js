import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Ambitious from './pages/ambition';
import WorkEthicReflection from './pages/work-ethic'
import HealthyEatingGuide from './pages/food'
// Import other article pages

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pages/ambition" element={<Ambitious />} />
        <Route path="/pages/ambition" element={<WorkEthicReflection />} />
        <Route path="/pages/food" element={<HealthyEatingGuide />} />

      </Routes>
    </BrowserRouter>
  );
}