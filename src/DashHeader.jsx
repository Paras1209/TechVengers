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

export default function DashHeader() {
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
    <>
      <header className="navbar">
        <div className="svg-cont">
          <img src={gl} alt="SVG" className="svg" />
        </div>
        <div className="navbar-center flex justify-center items-center">
          <FontAwesomeIcon icon={faSearch} className="fa-icon" />
          <FontAwesomeIcon icon={faBell} className="fa-icon" />
          {/* <FontAwesomeIcon icon={faCommentDots} className="fa-icon" /> */}
          <div
            className="profile-picture "
            onClick={() => setshowprofile((prev) => !prev)}
          >
            <img src="https://via.placeholder.com/40" alt="Profile" />
          </div>
          {showprofile ? (
            <div ref={profileRef} className="showpr">
              <div className="fgh">Your Profile</div>
              <img className="picture" src="https://via.placeholder.com/150" />
              <div className="gbh">
                <span>Name: TechVenger</span>
              </div>
              <div className="gbh">
                <span>Username: techVengers</span>
              </div>
              <div className="gbh">
                <span>Email: techvengers@gmail.com</span>
              </div>

              <a href="#" className="signout">
                Edit
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </header>
    </>
  );
}
