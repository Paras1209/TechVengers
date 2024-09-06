import React, { useState } from 'react';
import './EventsPage.css'; // Ensure this CSS file is correctly linked
import DashSideNav from './DashSideNav';
import DashHeader from './DashHeader';

const EventsPage = () => {
	// State management for modal and summary text
	const [showModal, setShowModal] = useState(false);
	const [eventSummary, setEventSummary] = useState('');

	// Handle modal close
	const handleCloseModal = () => {
		setShowModal(false);
	};

	// Handle filter events functionality
	const filterEvents = () => {
		const eventTypeFilter = document.getElementById('eventTypeFilter').value;
		const topicFilter = document.getElementById('topicFilter').value;
		const mentorFilter = document.getElementById('mentorFilter').value;

		document.querySelectorAll('.event-card').forEach((card) => {
			const eventType = card.getAttribute('data-type');
			const eventTopic = card.getAttribute('data-topic');
			const eventMentor = card.getAttribute('data-mentor');

			if (
				(eventTypeFilter === 'all' || eventTypeFilter === eventType) &&
				(topicFilter === 'all' || topicFilter === eventTopic) &&
				(mentorFilter === 'all' || mentorFilter === eventMentor)
			) {
				card.style.display = 'block';
			} else {
				card.style.display = 'none';
			}
		});
	};

	// Handle event summary display
	const handleSummaryClick = (summary) => {
		setEventSummary(summary);
		setShowModal(true);
	};

	return (
		<div>
			{/* Top Navigation Bar */}
			<nav className="">
				{/* <div className="logo">Event Platform</div>
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">Events</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Contact</a></li>
				</ul> */}
				<DashHeader />
			</nav>

			{/* side nav bar */}
			<DashSideNav />
			{/* Filter Section */}
			<section className="filter-section">
				<div className="filter-container">
					<select id="eventTypeFilter">
						<option value="all">All Events</option>
						<option value="past">Past Events</option>
						<option value="upcoming">Upcoming Events</option>
					</select>

					<select id="topicFilter">
						<option value="all">All Topics</option>
						<option value="ai">AI</option>
						<option value="web">Web Development</option>
						<option value="ml">Machine Learning</option>
					</select>

					<select id="mentorFilter">
						<option value="all">All Mentors</option>
						<option value="mentor1">Ravi Kumar</option>
						<option value="mentor2">Anita Desai</option>
						<option value="mentor3">Rajesh Sharma</option>
					</select>

					<button onClick={filterEvents}>Apply Filters</button>
				</div>
			</section>

			{/* Events Section */}
			<section className="events-section">
				<div className="event-card" data-type="upcoming" data-topic="ai" data-mentor="mentor1">
					<h3>Upcoming Event: AI in Healthcare</h3>
					<p><strong>Topic:</strong> AI Applications in the Indian Healthcare Sector</p>
					<p><strong>Mentor:</strong> Ravi Kumar</p>
					<p><strong>Date:</strong> September 25, 2024</p>
					<button className="register-btn">Register</button>
				</div>

				<div className="event-card" data-type="past" data-topic="web" data-mentor="mentor2">
					<h3>Past Event: Building Modern Web Apps</h3>
					<p><strong>Topic:</strong> Web Development with React in India</p>
					<p><strong>Mentor:</strong> Anita Desai</p>
					<p><strong>Date:</strong> August 15, 2024</p>
					<button className="summary-btn" onClick={() => handleSummaryClick('Summary of Building Modern Web Apps')}>
						View Summary
					</button>
				</div>

				<div className="event-card" data-type="upcoming" data-topic="ml" data-mentor="mentor3">
					<h3>Upcoming Event: Machine Learning for Startups</h3>
					<p><strong>Topic:</strong> ML Techniques for Indian Startups</p>
					<p><strong>Mentor:</strong> Rajesh Sharma</p>
					<p><strong>Date:</strong> October 10, 2024</p>
					<button className="register-btn">Register</button>
				</div>

				<div className="event-card" data-type="past" data-topic="ai" data-mentor="mentor1">
					<h3>Past Event: AI in Indian Agriculture</h3>
					<p><strong>Topic:</strong> Leveraging AI for Crop Yield Optimization</p>
					<p><strong>Mentor:</strong> Ravi Kumar</p>
					<p><strong>Date:</strong> July 5, 2024</p>
					<button className="summary-btn" onClick={() => handleSummaryClick('Summary of AI in Indian Agriculture')}>
						View Summary
					</button>
				</div>
			</section>

			{/* Modal for Event Summary */}
			{showModal && (
				<div className="modal">
					<div className="modal-content">
						<span className="close-btn" onClick={handleCloseModal}>
							&times;
						</span>
						<h3>Event Summary</h3>
						<p id="event-summary-text">{eventSummary}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default EventsPage;
