import React, { useEffect } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Landing-page.css";
import { Link, useNavigate } from "react-router-dom";
import GyanSetuLogo from "./Gyan Setu Logo.svg";
// import { ReactComponent as Logo } from './Gyan-Setu-Logo.svg'

export default function LandingPage() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <div data-aos="zoom-out">
        {/* header section */}
        <header>
          <div className="svg-cont">
            {/* <Logo width="50" height="50" />  */}
            <img src={GyanSetuLogo} alt="GyanSetu Logo" className="svg" />
          </div>
          <nav>
            <Link to="/login">Join us</Link>
            <Link to="#contact" className="contact">
              Contact us
            </Link>
          </nav>
        </header>

        {/* hero section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-content-h1">
              <h1 data-aos="fade">Welcome to</h1>
              <h1 data-aos="fade">GyaanSetu</h1>
            </div>
            <div className="cta-buttons" data-aos="zoom-out-up">
              <button
                onClick={() => {
                  navigate("/login");
                }}
                style={{ backgroundColor: "#4DAF50" }}
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate("/login");
                }}
              >
                Sign Up
              </button>
            </div>
            <p>Connecting students, alumni for a brighter future.</p>
          </div>
          <div className="right-sec">
            <div className="hero-image">
              <img src="img1.jpg" alt="Campus Image" data-aos="fade-left" />
            </div>
            <section className="right-box" data-aos="zoom-in">
              <h2>Join our community</h2>
              <p>
                Sign up or log in to explore the features and success stories of
                our platform.
              </p>
            </section>
          </div>
        </section>

        {/* key features */}
        <section className="features">
          <h2 data-aos="fade-down">Key Features of Scholar Connect</h2>
          <div className="features-grid"></div>
        </section>

        {/* success stories */}
        <section className="success-stories">
          <h1 data-aos="slide-up">Our Impact in Numbers</h1>
          <p data-aos="slide-up">
            Discover how Scholar Connect has transformed the educational journey
            for thousands.
          </p>
          <section className="stats">
            <div className="stat-item">
              <h3 className="value" data-aos="flip-up">
                <CountUp
                  start={0}
                  end={10000}
                  duration={5}
                  separator=","
                  smooth
                />
                +
              </h3>
              <p>Students Mentored</p>
            </div>
            <div className="stat-item">
              <h3 className="value" data-aos="flip-down">
                <CountUp
                  start={0}
                  end={100}
                  duration={5}
                  separator=","
                  smooth
                />
                +
              </h3>
              <p>Sessions Conducted</p>
            </div>
            <div className="stat-item">
              <h3 className="value" data-aos="flip-right">
                <CountUp start={0} end={50} duration={3} separator="," smooth />
                +
              </h3>
              <p>Alumni Networks</p>
            </div>
          </section>

          <h2 data-aos="fade-up">Success Stories</h2>
          <div className="story">
            {[
              "Scholar Connect helped me find the right mentor to guide me through my career path!",
              "Scholar Connect helped me find the right mentor to guide me through my career path!",
              "Scholar Connect helped me find the right mentor to guide me through my career path!",
              "The resources available on this platform made a huge difference in my academic success.",
            ].map((story, index) => (
              <div className="story-card" key={index} data-aos="fade">
                <p>"{story}"</p>
                <hr className="solid" />
                <p>- Rahul S.</p>
              </div>
            ))}
          </div>
        </section>

        {/* scholar conect */}
        <section>
          <div className="scholar">
            <h1 data-aos="zoom-out">Join Scholar Connect Today</h1>
            <p data-aos="zoom-out">
              Become a part of our thriving educational journey. Sign up now to
              unlock all features.
            </p>
            <div className="know-more" data-aos="zoom-out-up">
              <button
                onClick={() => {
                  navigate("/login");
                }}
              >
                Get Started
              </button>
              <button>Learn More</button>
            </div>
          </div>
        </section>

        {/* contact us */}
        <section className="#contact">
          <div className="contact-section">
            <div className="contact-content">
              <h3>Get in Touch with Scholar Connect</h3>
              <h1>Have Questions? We're Here to Help!</h1>
              <p className="timing">
                Monday–Friday, 9:00 am to 6:00 pm <br />
                Our team is available to assist you with any inquiries.
              </p>
            </div>
            <div className="contact-info">
              <div className="contact-message">
                <h4>Send Us a Message</h4>
                <a href="mailto:connect@scholarconnect.com">
                  connect@scholarconnect.com
                </a>
              </div>
              <div className="social-links">
                <h4>Follow Us</h4>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </div>
        </section>
        {/* footer */}
        <footer>
          <section>
            <div className="footer-landing">
              <ul className="footer-links">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
          </section>

          <hr className="solid" />

          <section>
            <div className="footer-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                distinctio earum repellat quaerat voluptatibus placeat nam,
                commodi optio pariatur est quia magnam eum harum corrupti dicta,
                aliquam sequi voluptate quas.
              </p>
            </div>
          </section>

          <hr className="solid" />

          <section>
            <div className="copyright">
              <p>&copy; 2023 TechVengers. All rights reserved.</p>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
}
