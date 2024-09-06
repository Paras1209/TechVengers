import React, { useState, useRef, useEffect } from "react";
import "./StudentDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faCommentDots,
  faCalendar,
  faVideo,
  faBriefcase,
  faSchool,
  faLocationArrow,
  faPager, // Added import
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import RatingComponent from "./Ratingcomponents";
import gl from "./Gyan Setu Logo.svg";
import { Link } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashSideNav from "./DashSideNav.jsx";

const StudentDashboard = () => {
  const [text, settext] = useState("");
  const [open, setopen] = useState(false);

  const handleemojiclick = (e) => {
    settext((prev) => prev + e.emoji);
    setopen(false);
  };
  const [show, setshow] = useState(false);
  const [showprofile, setshowprofile] = useState(false);
  const profileRef = useRef(null);
  const profileRef2 = useRef(null);
  //   const handleMouseEnter = () => setIsExpanded(true);
  //   const handleMouseLeave = () => setIsExpanded(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
    style.navbar.box - shadow == none;
  };
  const handleMouseLeave = () => setIsExpanded(false);

  return (
    <div className="bg">
      {/* Top Navbar */}
      {/* <header className="navbar">
        <div className="svg-cont">
          <img src={gl} alt="SVG" className="svg" />
        </div>
        <div className="navbar-center flex justify-center items-center">
          <FontAwesomeIcon icon={faSearch} className="fa-icon" />
          <FontAwesomeIcon icon={faBell} className="fa-icon" />
          {/* <FontAwesomeIcon icon={faCommentDots} className="fa-icon" /> }
          <div
            className="profile-picture "
            onClick={() => setshowprofile((prev) => !prev)}
          >
            <img src="https://via.placeholder.com/40" alt="Profile" />
          </div>
          {showprofile ? (
            <div ref={profileRef} className="showpr">
              <div className="fgh">Your Profile</div>
              <img className="picture" src="user.png" />
              <div className="gbh">
                <span>Name:</span> TechVengers{" "}
              </div>
              <div className="gbh">
                <span>Username:</span>techVengersyx
              </div>
              <div className="gbh">
                <span>Email:</span>techvengers@gmail.com
              </div>

              <a href="#" className="signout">
                Edit
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </header> */}
      <DashHeader />
      {/* <aside
        className={`side-panel ${isExpanded ? "expanded" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/chat" className="icon-tooltip">
          <FontAwesomeIcon icon={faCommentDots} />
          <span className="tooltip-text">Chat</span>

        </Link>
        
        <Link to="/forum" className="icon-tooltip">
          <FontAwesomeIcon icon={faPager} />
          <span className="tooltip-text">Forums</span>
        </Link>
        
        <Link to="webinar" className="icon-tooltip">
          <FontAwesomeIcon icon={faVideo} />

          <span className="tooltip-text">Webinar</span>
        </Link>
        
        <Link to="/events" className="icon-tooltip">
          <FontAwesomeIcon icon={faCalendar} />
          <span className="tooltip-text">Events</span>
        </Link>
        
        <Link to="/search" className="icon-tooltip">
          <FontAwesomeIcon icon={faSearch} />
          <span className="tooltip-text">Search</span>
        </Link>
        
        <Link className="icon-tooltip">
          <FontAwesomeIcon icon={faSchool} />
          <span className="tooltip-text">Mentorship</span>
        </Link>
        
      </aside> */}

      <DashSideNav />

      {/* Main Content Area */}
      <main className="content-area">
        <div className="grid-container">
          {/* Column 1 */}
          <div className="hori-grid">
            <div className=" event-horizontal">
              <div className="card card4">
                <h3>Registered Events</h3>
                <ul>
                  <li>
                    <strong>Tech Talk with Dr. Sharma</strong>
                    <p>
                      <FontAwesomeIcon icon={faCalendar} /> October 15, 2024 |{" "}
                      {/* <FontAwesomeIcon icon={faLocationArrow} /> */}
                    </p>
                    <p>Learn about the latest trends in AI.</p>
                  </li>
                  <li>
                    <strong>Alumni Networking Meet</strong>
                    <p>
                      <FontAwesomeIcon icon={faCalendar} /> November 5, 2024 |{" "}
                      {/* <FontAwesomeIcon icon={faLocationArrow} /> Main Hall */}
                    </p>
                    <p>Connect with alumni from various industries.</p>
                  </li>
                </ul>
              </div>
              <div className="card card4">
                <h3>Attended Events</h3>
                <ul>
                  <li>
                    <strong>Introduction to Machine Learning</strong>
                    <p>
                      Rate this event:
                      <RatingComponent></RatingComponent>
                    </p>
                    <p>Feedback: Great session on ML basics!</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* end here */}
            <div className="column rewap">
              <div className="card card2">
                <h3>Upcoming Events</h3>
                <div className="calendar-view">
                  <p>
                    <strong>October 2024</strong>
                  </p>
                  <p>15: Tech Talk with Dr. Sharma </p>
                  <p>25: Alumni Networking Meet</p>
                </div>
              </div>
              <div className="card card2A">
                <h3>Recommended Events</h3>
                <ul>
                  <li>
                    <strong>Data Analytics Workshop</strong>
                    <button>Register</button>
                  </li>
                  <li>
                    <strong>Cybersecurity Webinar</strong>
                    <button>Register</button>
                  </li>
                </ul>
              </div>
            </div>
            <div></div>
            <div className="card">
              <h3>Career Tips</h3>
              <p>
                Explore our latest articles on resume building, job interviews,
                and career growth.
              </p>
            </div>
          </div>
          {/* col2 */}
          <div className="column ">
            <div className="card alumni-spotlight">
              <h3>Alumni Spotlight</h3>
              <div className="carousel">
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/150" alt="Alumni" />
                  <p>
                    <strong>Nitin Yadav</strong>: <br /> Leading AI Research at
                    XYZ Corp
                  </p>
                </div>
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/150" alt="Alumni" />
                  <p>
                    <strong>Pushpit jain</strong>: <br /> CTO at ABC Ltd.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <h3>Followed Alumni Updates</h3>
              <ul>
                <li>
                  <strong>Paras</strong> shared an article on AI advancements.
                </li>
                <li>
                  <strong>Manish</strong> posted about a new tech startup.
                </li>
              </ul>
            </div>
            <div className="card">
              <h3>Event Highlights</h3>
              <p>
                Catch up on the recent tech talks and webinars with our
                highlights and full recordings.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* AI Chatbot */}
      <div className="chatbot-button" onClick={() => setshow((prev) => !prev)}>
        <FontAwesomeIcon icon={faCommentDots} />
      </div>
      {show ? (
        <div
          ref={profileRef2}
          className="showChatBot
			"
        >
          <div className="center">
            <div className="message">
              <div className="texts">
                <p>How can I assist you today?</p>
              </div>
            </div>
            <div className="message own">
              <div className="texts">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Excepturi nam facere aliquam velit qui architecto recusandae
                  dolores tenetur dolorem! Expedita cum vero optio asperiores ex
                  odit facilis sint voluptates soluta?
                </p>
                <span className="time">1 min ago</span>
              </div>
            </div>
          </div>
          <div className="chatbot-bottom">
            <input
              value={text}
              onChange={(e) => settext(e.target.value)}
              className="textinput"
              placeholder="Type a message"
            />
            <div className="emoji">
              <img
                className="emojiimg"
                src="happy.png"
                onClick={() => setopen((prev) => !prev)}
              />
              <img className="emojiimg" src="send (1).png" />
              <div className="picker">
                {/* <EmojiPicker open={open} onEmojiClick={handleemojiclick} /> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default StudentDashboard;
