import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import "./App.css"

import Home from "./Components/Home/home";
import SafetyBanner from "./Components/SafetyBanner/safety";
import AdventureBanner from "./Components/AdventureBanner/adventure";
import CommunityBanner from "./Components/CommunityBanner/community";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/safety" Component={SafetyBanner} />
        <Route path="/adventure" Component={AdventureBanner} />
        <Route path="/community" Component={CommunityBanner} />
      </Routes>
    </Router>
  )
}

export default App;
