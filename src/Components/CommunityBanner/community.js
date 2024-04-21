import "./community.css";

import { MdBloodtype } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";

import Header from "../HeaderTab/header";
import Footer from "../Footer/footer";

const CommunityBanner = () => (
  <div>
    <Header />
    <div className="community-banner-container">
      <div className="community-banner-card">
        <h1 className="community-heading">Find some Community</h1>
        <p className="community-para">
          Find some communities and join with us.
        </p>
        <button className="community-button">Come and Join With Us</button>
      </div>
      <div className="header-tab-bottom-card">
        <ul className="tabs-content-container">
            <li className="card-icon-bottom"><MdBloodtype className="botton-icons"/> Blood Donate</li>
            <li className="card-icon-bottom"><FaRegHandshake className="botton-icons"/>Voulnteers</li>
            <li className="card-icon-bottom"><FaHandHoldingUsd className="botton-icons" /> Donations</li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
);

export default CommunityBanner;
