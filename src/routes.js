import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPortfolio from './App';
import BrainComputerInterface from '../public/pages/beginners-guide-to-connectomics';
// Import other article pages

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/page/introduction-to-differential-privacy" element={<DifferentialPrivacy />} />
        <Route path="/page/brain-computer-interface-for-bipolar-disorder" element={<BrainComputerInterface />} />
        {/* Add routes for other articles */}
      </Routes>
    </BrowserRouter>
  );
}