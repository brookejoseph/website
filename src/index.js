import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Ambitious from './pages/ambition'
import WorkEthicReflection from './pages/work-ethic'
import reportWebVitals from './reportWebVitals';
import HealthyEatingGuide from './pages/food'
import Running from './pages/running'
import LiftingGuide from './pages/lifting'
import CoolPeople from './pages/cool-people';
import InterestingProblems from './pages/problems'
import ThingsIWontShutUpAbout from './pages/interesting-stuff';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pages/ambition" element={<Ambitious />} />
        <Route path="/pages/work-ethic" element={<WorkEthicReflection />} />
        <Route path="/pages/food" element={<HealthyEatingGuide />} />
        <Route path="/pages/running" element={<Running />} />
        <Route path="/pages/cool-people" element={<CoolPeople />} />
        <Route path="/pages/problems" element={<InterestingProblems />} />
        <Route path="/pages/interesting-stuff" element={<ThingsIWontShutUpAbout />} />
        <Route path="/pages/lifting" element={<LiftingGuide />} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

