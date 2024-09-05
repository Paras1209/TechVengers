import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Studentdash.css";
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
	faPager,
	faVideoCamera,
	faHouse// Added import
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import RatingComponent from "./Ratingcomponents";

export default function DashSideNav() {
	// const [show, setshow] = useState(false);
	// const [showprofile, setshowprofile] = useState(false);
	// const profileRef = useRef(null);
	// const profileRef2 = useRef(null);
	//   const handleMouseEnter = () => setIsExpanded(true);
	//   const handleMouseLeave = () => setIsExpanded(false);
	const [isExpanded, setIsExpanded] = useState(false);

	const handleMouseEnter = () => {
		setIsExpanded(true);
		style.navbar.box - shadow == none;
	};
	const handleMouseLeave = () => setIsExpanded(false);

	const navigate = useNavigate();

	return (
		<>
			<aside
				className={`side-panel ${isExpanded ? "expanded" : ""}`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div
					className="icon-tooltip"
					onClick={() => {
						navigate("/dashboard");
					}}
				>
					<FontAwesomeIcon icon={faHouse} />
					<span className="tooltip-text">Home</span>
				</div>
				<div
					className="icon-tooltip"
					onClick={() => {
						navigate("/chat");
					}}
				>
					<FontAwesomeIcon icon={faCommentDots} />
					<span className="tooltip-text">Chat</span>
				</div>

				<div className="icon-tooltip" onClick={()=>{navigate('/events')}}>
					<FontAwesomeIcon icon={faCalendar} />
					<span className="tooltip-text">Events</span>
				</div>
				
				<div
					className="icon-tooltip"
					onClick={() => {
						navigate("/forum");
					}}
				>
					<FontAwesomeIcon icon={faPager} />
					<span className="tooltip-text">Forums</span>
				</div>
				<div
					className="icon-tooltip"
					onClick={() => {
						navigate("/webinar");
					}}
				>
					<FontAwesomeIcon icon={faVideo} />
					<span className="tooltip-text">Webinar</span>
				</div>
				<div
					className="icon-tooltip"
					onClick={() => {
						navigate("/search");
					}}
				>
					<FontAwesomeIcon icon={faSearch} />
					<span className="tooltip-text">Search</span>
				</div>
				<div className="icon-tooltip">
					<FontAwesomeIcon icon={faBriefcase} />
					<span className="tooltip-text">Job</span>
				</div>
				
			</aside>
		</>
	);
}

// export default DashSideNav;
