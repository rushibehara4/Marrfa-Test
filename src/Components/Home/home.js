import React from "react";
import "./home.css";

import Swal from "sweetalert2";

import { NavLink } from "react-router-dom";

import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import Header from "../HeaderTab/header";
import Footer from "../Footer/footer";

class Home extends React.Component {
  state = {
    searchDestination: "",
    cities: [
      {
        cityName: "Meppadi, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/4a98e257-5ca6-4a2a-a60d-6ab98544af86.jpg?im_w=720",
        rating: "5.0(68)",
        kilometersAway: "223",
        availableDates: "28Apr-3May",
        perNightCharges: "5706",
      },
      {
        cityName: "Wayanad, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-19065198/original/ec8a6a9d-45ac-4b78-a605-c41043989ea9.jpeg?im_w=720",
        rating: "3.0(20)",
        kilometersAway: "306",
        availableDates: "22-27 Apr",
        perNightCharges: "6234",
      },
      {
        cityName: "Kodagu, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-601646506770488720/original/eec6afac-17ba-4555-90b1-fde5e3c63bdd.jpeg?im_w=720",
        rating: "2.5(80)",
        kilometersAway: "122",
        availableDates: "5-10 May",
        perNightCharges: "2341",
      },
      {
        cityName: "Jaipur, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/51ef8eb3-f726-4b42-9be6-691d6589f531.jpg?im_w=720",
        rating: "4.7(120)",
        kilometersAway: "450",
        availableDates: "15-20 May",
        perNightCharges: "7532",
      },
      {
        cityName: "Udaipur, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-48104213/original/3e48dc38-397d-40af-906b-fbb641626b14.jpeg?im_w=720",
        rating: "4.6(98)",
        kilometersAway: "550",
        availableDates: "8-13 May",
        perNightCharges: "6321",
      },
      {
        cityName: "Goa, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/95216f48-a4cb-40f3-8d9d-ff7d98b9e822.jpg?im_w=720",
        rating: "4.9(150)",
        kilometersAway: "700",
        availableDates: "22-27 Apr",
        perNightCharges: "8743",
      },
      {
        cityName: "Shimla, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA2NDMwMTc5NjI2MTQ3Mg%3D%3D/original/4eb728ce-b6ad-4b85-ae55-8463c7f4056b.jpeg?im_w=720",
        rating: "4.5(80)",
        kilometersAway: "350",
        availableDates: "12-17 May",
        perNightCharges: "5432",
      },
      {
        cityName: "Manali, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzI5MzE0Nzk1MzQzNzE1NDA5/original/be161f44-ea7e-4d3c-b297-f5f53806b6ad.jpeg?im_w=720",
        rating: "4.6(95)",
        kilometersAway: "400",
        availableDates: "18-23 May",
        perNightCharges: "6543",
      },
      {
        cityName: "Agra, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-825361004288693100/original/3a4c9303-fc90-4bba-9a77-76018cf8a3c7.jpeg?im_w=720",
        rating: "4.8(110)",
        kilometersAway: "250",
        availableDates: "25-30 Apr",
        perNightCharges: "7321",
      },
      {
        cityName: "Kochi, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1108470361897757464/original/b080f95c-1a44-47a9-8f81-4d77c4cc35bf.jpeg?im_w=720",
        rating: "4.7(105)",
        kilometersAway: "600",
        availableDates: "4-9 May",
        perNightCharges: "6432",
      },
      {
        cityName: "Pune, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-905621743343884691/original/81a17926-2f8f-44ce-bf62-9fdb138e9c59.jpeg?im_w=720",
        rating: "4.6(95)",
        kilometersAway: "550",
        availableDates: "14-19 May",
        perNightCharges: "5231",
      },
      {
        cityName: "Rishikesh, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-1130363303644074683/original/a853ef5d-0761-4584-a7da-675243ba79a9.jpeg?im_w=720",
        rating: "4.8(125)",
        kilometersAway: "300",
        availableDates: "20-25 Apr",
        perNightCharges: "6432",
      },
      {
        cityName: "Amritsar, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-609899151402074459/original/c06ed6ad-6b55-4bfb-acd4-2bcb394eeddb.jpeg?im_w=720",
        rating: "4.7(100)",
        kilometersAway: "400",
        availableDates: "6-11 May",
        perNightCharges: "7532",
      },
      {
        cityName: "Varanasi, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-1016685294969430887/original/da983fb5-c598-4b0f-82e3-23458c0bafdb.jpeg?im_w=720",
        rating: "4.5(90)",
        kilometersAway: "600",
        availableDates: "11-16 May",
        perNightCharges: "6231",
      },
      {
        cityName: "Kolkata, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/7b40ac86-a8e8-412a-8508-705a8ac57f33.jpg?im_w=720",
        rating: "4.6(95)",
        kilometersAway: "700",
        availableDates: "18-23 Apr",
        perNightCharges: "7432",
      },
      {
        cityName: "Pushkar, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/418a1106-4d18-472d-b80a-b293c95e1782.jpg?im_w=720",
        rating: "4.9(110)",
        kilometersAway: "480",
        availableDates: "22-27 May",
        perNightCharges: "8321",
      },
      {
        cityName: "Jaisalmer, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAyNTkzMjE3MzY1ODc5MDAyOA%3D%3D/original/af6ed139-f82c-4e01-b8de-d0ab98f6eeb8.jpeg?im_w=720",
        rating: "4.8(105)",
        kilometersAway: "550",
        availableDates: "29Apr-4May",
        perNightCharges: "9232",
      },
      {
        cityName: "Ranthambore, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-33255875/original/f5d0e30a-b113-405d-a07f-63b4ea420081.jpeg?im_w=720",
        rating: "4.7(100)",
        kilometersAway: "400",
        availableDates: "7-12 May",
        perNightCharges: "6432",
      },
      {
        cityName: "Gokarna, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-820894051771277021/original/62a4c17b-484f-4394-9e2f-0a7acccc9124.jpeg?im_w=720",
        rating: "4.9(95)",
        kilometersAway: "750",
        availableDates: "14-19 May",
        perNightCharges: "7321",
      },
      {
        cityName: "Puducherry, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/546cbf74-97f4-4b33-9673-126df77988a6.jpg?im_w=720",
        rating: "4.7(105)",
        kilometersAway: "800",
        availableDates: "21-26 Apr",
        perNightCharges: "6532",
      },
      {
        cityName: "Mumbai, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/7aa77bd7-1597-4ee3-9f95-d130ea50f207.jpg?im_w=720",
        rating: "4.6(100)",
        kilometersAway: "900",
        availableDates: "26Apr-1May",
        perNightCharges: "5432",
      },
      {
        cityName: "Hyderabad, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/792d79ee-da7f-4fe7-957e-8842c8eff8d4.jpg?im_w=720",
        rating: "4.8(110)",
        kilometersAway: "1000",
        availableDates: "3-8 May",
        perNightCharges: "7321",
      },
      {
        cityName: "Chennai, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/a481bba6-8694-4695-977c-61e94f435939.jpg?im_w=720",
        rating: "4.7(105)",
        kilometersAway: "1100",
        availableDates: "9-14 May",
        perNightCharges: "6432",
      },
      {
        cityName: "Kodaikanal, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/40739a68-99c7-4195-b2e8-6b872daf2a72.jpg?im_w=720",
        rating: "4.8(100)",
        kilometersAway: "1200",
        availableDates: "16-21 May",
        perNightCharges: "7231",
      },
      {
        cityName: "Mysore, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-724620929958408157/original/d61f30ba-261f-4a0b-8b6d-76f8fbb23d5b.jpeg?im_w=720",
        rating: "4.6(95)",
        kilometersAway: "1300",
        availableDates: "23-28 Apr",
        perNightCharges: "6432",
      },
      {
        cityName: "Tirupati, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/1c36522f-c725-420d-83ea-773c250c6fba.jpg?im_w=720",
        rating: "4.7(90)",
        kilometersAway: "1400",
        availableDates: "30Apr-5May",
        perNightCharges: "5532",
      },
      {
        cityName: "Nainital, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/63be195f-6031-4716-8ce0-835ed513f80d.jpg?im_w=720",
        rating: "4.6(85)",
        kilometersAway: "1500",
        availableDates: "6-11 May",
        perNightCharges: "6432",
      },
      {
        cityName: "Panchgani, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-934381428142326199/original/f0d16870-0798-4b7b-a3ab-fbebd90573c7.jpeg?im_w=720",
        rating: "4.9(100)",
        kilometersAway: "1600",
        availableDates: "13-18 May",
        perNightCharges: "8321",
      },
      {
        cityName: "Mahabaleshwar, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/0e82a47e-bb36-487d-98e5-3d2fd66a4585.jpg?im_w=720",
        rating: "4.8(95)",
        kilometersAway: "1700",
        availableDates: "20-25 Apr",
        perNightCharges: "7432",
      },
      {
        cityName: "Rajkot, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-954740581403750918/original/f94aa30b-159a-4ba8-b0f1-5416b66e6247.jpeg?im_w=720",
        rating: "4.7(90)",
        kilometersAway: "1800",
        availableDates: "27Apr-2May",
        perNightCharges: "6432",
      },
      {
        cityName: "Surat, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-53887306/original/5cc97aee-b38d-4b52-bb3a-a895dbe2ea52.jpeg?im_w=720",
        rating: "4.6(85)",
        kilometersAway: "1900",
        availableDates: "4-9 May",
        perNightCharges: "7532",
      },
      {
        cityName: "Ahmedabad, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/6dbe92d3-3a7a-4fe9-b022-f0621391c313.jpg?im_w=720",
        rating: "4.8(100)",
        kilometersAway: "2000",
        availableDates: "11-16 May",
        perNightCharges: "6432",
      },
      {
        cityName: "Lucknow, India",
        cityImage:
          "https://a0.muscache.com/im/pictures/62d40c6e-f0e0-4ca6-a654-5dbb83fd5725.jpg?im_w=720",
        rating: "4.7(95)",
        kilometersAway: "2100",
        availableDates: "18-23 Apr",
        perNightCharges: "7321",
      },
    ],
  };

  alertSearchDestination = () => {
    this.setState((prevState) => ({
      isSearching: !prevState.isSearching,
    }));
  };

  onSearchDestination = (event) => {
    this.setState({ searchDestination: event.target.value });
  };

  onBookHotel = (city) => {
    const { cityName, availableDates, perNightCharges } = city;

    Swal.fire({
      title: `${cityName}`,
      html: `
      <p>Available Dates: ${availableDates}</p>
      <p>Night Charge: ${perNightCharges}</p>
    `,
      icon: "info",
      confirmButtonText: "Book Now",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Success!",
          text: "Booking confirmed!",
          icon: "success",
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          text: "Booking cancelled",
          icon: "error",
        });
      }
    });
  };

  render() {
    const { cities, searchDestination } = this.state;

    const filteredCities = cities.filter((city) =>
      city.cityName.toLowerCase().includes(searchDestination.toLowerCase())
    );

    return (
      <div className="app-container">
        <div className="header-component">
          <Header />
        </div>
        <div className="home-continaer">
          <div className="search-function">
            <div className="search-container">
              <div className="destination-checkin-container">
                <button
                  className="checkin-button"
                  onClick={this.alertSearchDestination}
                >
                  <input
                    type="search"
                    placeholder="Destination"
                    name="destination"
                    autoComplete="off"
                    className="search-destination-input"
                    onChange={this.onSearchDestination}
                  />
                </button>
                <button className="search-icon-container">
                  <FaSearch className="search-icon" />
                </button>
              </div>
            </div>
          </div>
          <div className="cities-container">
            <ul className="cities-list-container">
              {filteredCities.map((city, index) => (
                <li
                  key={index}
                  className="city-list-card"
                  onClick={() => this.onBookHotel(city)}
                >
                  <div className="city-image-container">
                    <img
                      src={city.cityImage}
                      alt="city-img"
                      className="city-image"
                    />
                  </div>
                  <div className="city-heading-rating-container">
                    <h1 className="city-heading">{city.cityName}</h1>
                    <h1 className="city-rating">
                      <FaStar className="rating-icon" />
                      {city.rating}
                    </h1>
                  </div>
                  <div className="checking-avaliability-container">
                    <p className="kilometers-away">
                      {city.kilometersAway}{" "}
                      <span className="km-away">Kilometers away</span>
                    </p>
                    <p className="dates-availabel">{city.availableDates}</p>
                    <p className="night-rupees">
                      <b className="rupee">{city.perNightCharges}</b> night
                    </p>
                  </div>
                </li>
              ))}
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
        <div className="footer-component">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
