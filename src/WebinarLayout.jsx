import React from 'react';
import './WebinarLayout.css'; // Import the CSS file
import DashSideNav from './DashSideNav';

const WebinarLayout = () => {
	return (
		<div className="webinar-layout">
			{/* Webinar Info Header Bar */}
			<div className="webinar-header-bar">
				Webinar Title - Time Remaining: 45 mins
			</div>

			{/* side nav bar */}
			<DashSideNav />

			<div className="webinar-container">
				{/* Participant List */}
				<div className="webinar-participant-list">
					<h3>Participants</h3>
					<div className="webinar-participant-list-item">
						<img src="https://via.placeholder.com/40" alt="Participant" />
						<p>Rohan (Muted)</p>
					</div>
					<div className="webinar-participant-list-item">
						<img src="https://via.placeholder.com/40" alt="Participant" />
						<p>Krishna (Speaking)</p>
					</div>
					{/* Add more participants as needed */}
				</div>

				{/* Main Video Section */}
				<div className="webinar-main-video-section">
					<div className="webinar-presenter-video">
						{/* Placeholder for Presenter Video */}
					</div>
					<div className="webinar-participant-carousel">
						<div className="webinar-participant-video"></div>
						<div className="webinar-participant-video"></div>
						<div className="webinar-participant-video"></div>
						<div className="webinar-participant-video"></div>
						<div className="webinar-participant-video"></div>
						{/* Add more participant videos as needed */}
					</div>
				</div>

				{/* Chat Panel */}
				<div className="webinar-chat-panel">
					<div className="webinar-chat-header">Chat</div>
					<div className="webinar-chat-messages">
						<div className="webinar-chat-message">
							<img src="https://via.placeholder.com/30" alt="User" />
							<div className="webinar-chat-message-content">Hello everyone!</div>
							<span className="webinar-chat-message-timestamp">10:30 AM</span>
						</div>
						<div className="webinar-chat-message">
							<img src="https://via.placeholder.com/30" alt="User" />
							<div className="webinar-chat-message-content">
								Looking forward to the presentation.
							</div>
							<span className="webinar-chat-message-timestamp">10:31 AM</span>
						</div>
						{/* Add more chat messages as needed */}
					</div>
					<div className="webinar-question-section">
						<input type="text" placeholder="Submit a question..." />
						<button>Send</button>
					</div>
				</div>
			</div>

			{/* Control Bar */}
			<div className="webinar-control-bar">
				<span className="material-icons" title="Mute/Unmute Microphone">
					mic
				</span>
				<span className="material-icons" title="Turn On/Off Camera">
					videocam
				</span>
				<span className="material-icons" title="Screen Share">
					screen_share
				</span>
				<span className="material-icons" title="Leave Webinar">
					exit_to_app
				</span>
				<span className="material-icons" title="Settings">
					settings
				</span>
			</div>
		</div>
	);
};

export default WebinarLayout;
