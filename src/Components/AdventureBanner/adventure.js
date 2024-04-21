import "./adventure.css"

import { FaUmbrellaBeach } from "react-icons/fa";
import { MdOutlineDownhillSkiing } from "react-icons/md";
import { GiHillConquest } from "react-icons/gi";

import Header from "../HeaderTab/header"
import Footer from "../Footer/footer"

const AdventureBanner = () => (
    <div>
        <div>
    <Header />
    <div className="adventure-banner-container">
      <div className="adeventure-banner-card">
        <h1 className="adventure-heading">Find some Adventures</h1>
        <p className="adventure-para">
          Find some adventures and join with us.
        </p>
        <button className="adventure-button">Find Aventures</button>
      </div>
      <div className="header-tab-bottom-card">
        <ul className="tabs-content-container">
            <li className="card-icon-bottom"><FaUmbrellaBeach className="botton-icons"/> Beach Surfing</li>
            <li className="card-icon-bottom"><MdOutlineDownhillSkiing className="botton-icons"/>Skiing</li>
            <li className="card-icon-bottom"><GiHillConquest className="botton-icons" /> Climbing</li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
    </div>
)

export default AdventureBanner