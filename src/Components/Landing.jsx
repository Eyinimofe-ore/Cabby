import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./Landing.css";
import home_pic from ".././Assets/Images/girl-passenger-sending-her-location-to-cab-driver-2936019-2458998.png";
import logo from ".././Assets/Images/cab-removebg-preview.png";
import card from ".././Assets/Images/6993627.png";
import Booking from ".././Assets/Images/6556135.png";
import map from ".././Assets/Images/7701587.png";
import car from ".././Assets/Images/4664708.png";
import cab from "../Assets/Images/d7d455f856632dbdf135ea6bb52ea080-removebg-preview.png";
import common from "../Assets/Images/common-removebg-preview.png";
import luxe from "../Assets/Images/WhatsApp_Image_2024-08-14_at_13.44.53_1d5178e4-removebg-preview.png";
import image from "../Assets/Images/images.jpeg";
import p1 from "../Assets/Images/p1.jpeg";
import p2 from "../Assets/Images/p2.jpeg";
import p3 from "../Assets/Images/p3.jpeg";
import p4 from "../Assets/Images/p4.jpeg";

import { FaRegEnvelope } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Landing() {
  const navigate = useNavigate();

  // Function to navigate to the LoginSignup component with the login state
  const handleLoginClick = () => {
    navigate("/Login", { state: { action: "login" } });

  };
  const handleSignUpClick = () => {
    navigate("/Login", { state: { action: "signUp" } });
  };

  return (
    <div>
      <div className="home">
        <div className="header">
          <h1>Cabby</h1>
          <img src={logo} alt="logo" className="logo" />

          <li className="links">
            <a href="#">About</a>
            <a href="#">Contact us</a>
          </li>

          <div className="buttons">
            <button onClick={handleSignUpClick}>SignUp</button>
            <button onClick={handleLoginClick}>Login</button>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <h1>
              The best way to get
              <br />
              wherever you're going.
            </h1>
          </div>
        </div>
        <img src={home_pic} alt="home pic" className="feature_img" />
      </div>
      <div className="cars">
        <div className="car_info">
          <h1>
            Get a car for <br /> any ocassion
          </h1>
          <p>Pocket friendly</p>
          <p>Safe rides</p>
          <p>24/7 support</p>
        </div>
        <div className="car_options">
          <div className="car">
            <img src={cab} alt="" />
            <h2>City Taxi</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="car" id="middle">
            <img src={common} alt="" />
            <h2>Regular</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="car">
            <img src={luxe} alt="" />
            <h2>Duluxe</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
      <div className="works">
        <h1>How it works</h1>
        <div className="wrapper">
          <div className="box">
            <img src={map} alt="rando" />
            <h2>Location</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              reiciendis, nesciunt dignissimos nemo voluptates
            </p>
          </div>
          <div className="box">
            <img src={Booking} alt="rando" />
            <h2>Booking</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              reiciendis, nesciunt dignissimos nemo voluptates
            </p>
          </div>
          <div className="box">
            <img src={card} alt="rando" />
            <h2>Payment</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              consequatur fugiat maveniam ut repellat iste enim temporibus
            </p>
          </div>
          <div className="box">
            <img src={car} alt="rando" />
            <h2>Pickup</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="left">
          <h1>
            Why
            <br />
            Choose Us
          </h1>
        </div>
        <div className="right">
          <div className="grid-feature">
            <div className="feature-box">
              <span>1 </span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.a
                fugiat!
              </p>
            </div>
            <div className="feature-box" id="two">
              <span>2 </span>
              <p>
                Sapiente explicabo, nesciunt temporibus nemo praesentium culpa.
              </p>
            </div>
            <div className="feature-box">
              <span>3 </span>
              <p>
                at repellendus laudantium alias ipsa! Nam vel totam porro esse
                ipsum unde consequatur
              </p>
            </div>
            <div className="feature-box">
              <span>4 </span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.a
                fugiat!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section__container">
        <h1>What Are People Saying About Us</h1>
        <div className="section">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="section__card">
                <span>
                  <i className="ri-double-quotes-l"></i>
                </span>
                <h4>Excellent Designs</h4>
                <p>
                  Efficient, reliable, and results-oriented. Visually appealing
                  website, improved online visibility. Highly recommended!
                </p>
                <img src={p1} alt="user" />
                <h5>Tanya Grant</h5>
                <h6>Ceo & Founder</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="section__card">
                <span>
                  <i className="ri-double-quotes-l"></i>
                </span>
                <h4>Excellent Designs</h4>
                <p>
                  Efficient, reliable, and results-oriented. Visually appealing
                  website, improved online visibility. Highly recommended!
                </p>
                <img src={p2} alt="user" />
                <h5>Tanya Grant</h5>
                <h6>Ceo & Founder</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="section__card">
                <span>
                  <i className="ri-double-quotes-l"></i>
                </span>
                <h4>Excellent Designs</h4>
                <p>
                  Efficient, reliable, and results-oriented. Visually appealing
                  website, improved online visibility. Highly recommended!
                </p>
                <img src={p3} alt="user" />
                <h5>Tanya Grant</h5>
                <h6>Ceo & Founder</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="section__card">
                <span>
                  <i className="ri-double-quotes-l"></i>
                </span>
                <h4>Excellent Designs</h4>
                <p>
                  Efficient, reliable, and results-oriented. Visually appealing
                  website, improved online visibility. Highly recommended!
                </p>
                <img src={p4} alt="user" />
                <h5>Tanya Grant</h5>
                <h6>Ceo & Founder</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="section__card">
                <span>
                  <i className="ri-double-quotes-l"></i>
                </span>
                <h4>Excellent Designs</h4>
                <p>
                  Efficient, reliable, and results-oriented. Visually appealing
                  website, improved online visibility. Highly recommended!
                </p>
                <img src={p2} alt="user" />
                <h5>Tanya Grant</h5>
                <h6>Ceo & Founder</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="section__card">
                <span>
                  <i className="ri-double-quotes-l"></i>
                </span>
                <h4>Excellent Designs</h4>
                <p>
                  Efficient, reliable, and results-oriented. Visually appealing
                  website, improved online visibility. Highly recommended!
                </p>
                <img src={p1} alt="user" />
                <h5>Tanya Grant</h5>
                <h6>Ceo & Founder</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="section__card">
                <span>
                  <i className="ri-double-quotes-l"></i>
                </span>
                <h4>Excellent Designs</h4>
                <p>
                  Efficient, reliable, and results-oriented. Visually appealing
                  website, improved online visibility. Highly recommended!
                </p>
                <img src={p4} alt="user" />
                <h5>Tanya Grant</h5>
                <h6>Ceo & Founder</h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="foot">
        <footer>
          <div className="row">
            <div className="col">
              <h1>Cabby</h1>
              <p>Lorem, ipsum dolor sit amet consectetur</p>
            </div>
            <div className="col">
              <h3>
                Office{" "}
                <div className="underline">
                  <span></span>
                </div>
              </h3>
              <p>Bucknor</p>
              <p>Off Funshoguni</p>
              <p>Ejigbo,Lagos State</p>
              <p className="email-id">Cabby@gmail.com</p>
              <h4>08012345643</h4>
            </div>
            <div className="col">
              <h3>
                Links{" "}
                <div className="underline">
                  <span></span>
                </div>
              </h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">services</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3>
                Newsletter{" "}
                <div className="underline">
                  <span></span>
                </div>
              </h3>
              <form id="form">
                <FaRegEnvelope className="far" />
                <input
                  type="email"
                  placeholder="Enter your Email id"
                  required
                />
                <button type="submit">
                  <FaArrowRight className="arrow" />
                </button>
              </form>
              <div className="social-icons">
                <FaInstagram className="icon" />
                <FaTwitter className="icon" />
                <FaFacebookF className="icon" />
                <FaWhatsapp className="icon" />
              </div>
            </div>
          </div>
          <hr />
          <p className="copyright"> Cabby @ 2024 - All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
}

export default Landing;
