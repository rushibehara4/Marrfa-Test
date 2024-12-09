import "./adventure.css";

import { NavLink } from "react-router-dom";

import { FaUmbrellaBeach } from "react-icons/fa";
import { MdOutlineDownhillSkiing } from "react-icons/md";
import { GiHillConquest } from "react-icons/gi";

import Header from "../HeaderTab/header";

const AdventureBanner = () => (
  <div>
    <Header />
    <h1 className="mobile-heading">Adventure</h1>
    <div className="adventure-banner-container">
      <div className="adeventure-banner-card">
        <h1 className="safety-heading">Find some Adventures</h1>
        <p className="safety-para">Find some adventures and join with us.</p>
        <button className="safety-button">Find Adventures</button>
      </div>
      <div className="header-tab-bottom-card">
        <ul className="tabs-content-container">
          <li className="card-icon-bottom">
            <FaUmbrellaBeach className="botton-icons" /> Beach Surfing
          </li>
          <li className="card-icon-bottom">
            <MdOutlineDownhillSkiing className="botton-icons" />
            Skiing
          </li>
          <li className="card-icon-bottom">
            <GiHillConquest className="botton-icons" /> Climbing
          </li>
        </ul>
      </div>
    </div>
    <div className="mobile-tabs">
      <div className="mobile-tab-container">
        <NavLink to="/" className="mobile-header-tabs">
          Welcome
        </NavLink>
        <NavLink to="/safety" className="mobile-header-tabs">
          Safety
        </NavLink>
        <NavLink to="/adventure" className="mobile-header-tabs">
          Adventure
        </NavLink>
        <NavLink to="/community" className="mobile-header-tabs">
          Community
        </NavLink>
      </div>
    </div>
  </div>
);

export default AdventureBanner;
