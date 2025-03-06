import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Ambitious from './pages/ambition';
// Import other article pages

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pages/ambition" element={<Ambitious />} />
      </Routes>
    </BrowserRouter>
  );
}