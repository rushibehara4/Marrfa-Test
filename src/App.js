import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/home";
import SafetyBanner from "./Components/SafetyBanner/safety";
import AdventureBanner from "./Components/AdventureBanner/adventure";
import CommunityBanner from "./Components/CommunityBanner/community";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/safety" element={<SafetyBanner />} />
        <Route path="/adventure" element={<AdventureBanner />} />
        <Route path="/community" element={<CommunityBanner />} />
      </Routes>
    </Router>
  );
}

export default App;
