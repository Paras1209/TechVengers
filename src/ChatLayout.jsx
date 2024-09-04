// ChatLayout.jsx
import React, { useState } from "react";
import "./ChatLayout.css";

const ChatLayout = () => {
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([
		{ id: 1, text: "Hey, how are you?", type: "received" },
		{ id: 2, text: "I am good, thanks! How about you?", type: "sent" },
		{
			id: 3,
			text: "Doing well! Just working on some projects.",
			type: "received",
		},
	]);
	const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

	const handleSendMessage = () => {
		if (message.trim()) {
			setMessages([
				...messages,
				{ id: messages.length + 1, text: message, type: "sent" },
			]);
			setMessage("");
			scrollToBottom();
		}
	};

	const handleEmojiClick = (emoji) => {
		setMessage(message + emoji);
		setEmojiPickerVisible(false);
	};

	const scrollToBottom = () => {
		const messageArea = document.getElementById("messageArea");
		messageArea.scrollTop = messageArea.scrollHeight;
	};

	return (
		<div className="chat-container">
			{/* Left Sidebar */}
			<div className="left-sidebar">
				<div className="profile-section">
					<img src="profile.jpg" alt="User Profile" />
					<div>
						<p>John Doe</p>
						<p style={{ fontSize: "12px", color: "#888888" }}>
							Available for chat
						</p>
					</div>
				</div>
				<div className="new-message">
					<span className="material-icons">add_circle_outline</span>
				</div>
				<div className="search-bar">
					<input type="text" placeholder="Search..." />
				</div>
				<div className="messages-section">
					{/* Sample chat entries */}
					<div className="message">
						<img src="profile1.jpg" alt="Chat Partner" />
						<div className="message-info">
							<span className="name">Jane Smith</span>
							<span className="preview">Hey, how are you?</span>
						</div>
						<div className="notification-count">2</div>
					</div>
					<div className="message">
						<img src="profile2.jpg" alt="Chat Partner" />
						<div className="message-info">
							<span className="name">Mark Lee</span>
							<span className="preview">See you soon!</span>
						</div>
						<div className="notification-count">1</div>
					</div>
				</div>
			</div>

			{/* Right Section */}
			<div className="right-section">
				{/* Header */}
				<div className="header">
					<div className="profile-info">
						<img src="profile2.jpg" alt="Chat Partner" />
						<span className="name">Jane Smith</span>
					</div>
					<div className="call-icons">
						<span className="material-icons">videocam</span>
						<span className="material-icons">call</span>
					</div>
				</div>

				{/* Message Area */}
				<div className="message-area" id="messageArea">
					{messages.map((msg) => (
						<div key={msg.id} className={`message ${msg.type}`}>
							<div className="text">{msg.text}</div>
						</div>
					))}
					{/* Typing Indicator */}
					<div className="typing-indicator">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>

				{/* Input Bar */}
				<div className="input-bar">
					<button
						className="emoji-button material-icons"
						onClick={() => setEmojiPickerVisible(!emojiPickerVisible)}
					>
						emoji_emotions
					</button>
					<button className="attachment-button material-icons">
						attach_file
					</button>
					<input
						type="text"
						placeholder="Message..."
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button className="send-button" onClick={handleSendMessage}>
						<span className="material-icons">send</span>
					</button>

					{/* Emoji Picker */}
					{emojiPickerVisible && (
						<div className="emoji-picker">
							<span onClick={() => handleEmojiClick("😊")}>😊</span>
							<span onClick={() => handleEmojiClick("😂")}>😂</span>
							<span onClick={() => handleEmojiClick("😍")}>😍</span>
							<span onClick={() => handleEmojiClick("🥰")}>🥰</span>
							<span onClick={() => handleEmojiClick("👍")}>👍</span>
							<span onClick={() => handleEmojiClick("🙌")}>🙌</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ChatLayout;
