import "./community.css";
import { NavLink } from "react-router-dom";

import { MdBloodtype } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";

import Header from "../HeaderTab/header";

const CommunityBanner = () => (
  <div>
    <Header />
    <h1 className="mobile-heading">Community</h1>
    <div className="community-banner-container">
      <div className="community-banner-card">
        <h1 className="safety-heading">Find some Community</h1>
        <p className="safety-para">Find some communities and join with us.</p>
        <button className="safety-button">Come and Join With Us</button>
      </div>
      <div className="header-tab-bottom-card">
        <ul className="tabs-content-container">
          <li className="card-icon-bottom">
            <MdBloodtype className="botton-icons" /> Blood Donate
          </li>
          <li className="card-icon-bottom">
            <FaRegHandshake className="botton-icons" />
            Voulnteers
          </li>
          <li className="card-icon-bottom">
            <FaHandHoldingUsd className="botton-icons" /> Donations
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

export default CommunityBanner;
