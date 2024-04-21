import Header from "../HeaderTab/header";
import Footer from "../Footer/footer"
import "./safety.css";

import { FaHospital } from "react-icons/fa";
import { GrUserPolice } from "react-icons/gr";
import { MdAtm } from "react-icons/md";

const SafetyBanner = () => (
  <div>
    <Header />
    <div className="safety-banner-container">
      <div className="safety-banner-card">
        <h1 className="safety-heading">Don't Roam Around</h1>
        <p className="safety-para">
          Find a desired house with 100 percent safe & security
        </p>
        <button className="safety-button">Near You</button>
      </div>
      <div className="header-tab-bottom-card">
        <ul className="tabs-content-container">
            <li className="card-icon-bottom"><FaHospital className="botton-icons"/> Hospitals</li>
            <li className="card-icon-bottom"><GrUserPolice className="botton-icons"/>Police Stations</li>
            <li className="card-icon-bottom"><MdAtm className="botton-icons" /> ATMs</li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
);

export default SafetyBanner;
