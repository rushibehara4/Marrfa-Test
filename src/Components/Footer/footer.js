import React from "react";
import "./footer.css";

import { CiGlobe } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

class Footer extends React.Component {
  state = {
    isArrow: false,
    isShare: false,
    isHost: false,
    isPrivacy: false,
  };

  toggleArrow = () => {
    this.setState({
      isArrow: !this.state.isArrow,
    });
  };

  toggleSheShare = () => {
    this.setState((prevState) => ({
      isShare: !prevState.isShare,
    }));
    this.setState({ isHost: false });
    this.setState({ isPrivacy: false });
  };

  toggleHost = () => {
    this.setState((prevState) => ({
      isHost: !prevState.isHost,
    }));
    this.setState({ isShare: false });
    this.setState({ isPrivacy: false });
  };

  togglePrivacy = () => {
    this.setState((prevState) => ({
      isPrivacy: !prevState.isPrivacy,
    }));
    this.setState({ isShare: false });
    this.setState({ isHost: false });
  };

  render() {
    const { isArrow, isHost, isPrivacy, isShare } = this.state;
    return (
      <>
        <div className="footer-container">
          <ul className="footer-list-container">
            <li>&copy; 2024, Womenbnb Inc.</li>
            <li onClick={this.toggleSheShare}>She Share</li>
            <li onClick={this.toggleHost}>Become a Host</li>
            <li onClick={this.togglePrivacy}>Terms & Privacy</li>
          </ul>
          <ul className="footer-list-container">
            <li>
              <CiGlobe className="footer-icon" /> English (IN)
            </li>
            <li>
              INR <MdCurrencyRupee className="footer-icon" />
            </li>
            <li>
              <button
                className="arrow-button-container"
                onClick={this.toggleArrow}
              >
                Support & Resource{" "}
                {isArrow ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </li>
          </ul>
        </div>
        {isShare && (
          <div className="share-dropdown-menu">
            <ul className="share-dropdown-menu-list">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Follow Us</li>
              <li>Careers</li>
            </ul>
          </div>
        )}
        {isHost && (
          <div className="host-dropdown-menu">
            <ul className="host-dropdown-menu-list">
              <li>Hosting Resource</li>
              <li>Hosting Resposibility</li>
              <li>Share a Room</li>
              <li>Pets</li>
            </ul>
          </div>
        )}
        {isPrivacy && (
          <div className="privacy-dropdown-menu">
            <ul className="privacy-dropdown-menu-list">
              <li>terms & Conditions</li>
              <li>Privacy & Policy</li>
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default Footer;
