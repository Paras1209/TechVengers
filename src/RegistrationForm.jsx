// RegistrationForm.jsx
import React, { useState } from 'react';
import './RegistrationForm.css'; // Import the CSS file
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		phoneNumber: '',
		college: '',
		course: '',
		currentYear: '',
		fieldOfInterest: ''
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission, e.g., send the formData to the backend or API
		console.log(formData);
	};

	return (
		<div className="signup-registration-container">
			<form className="signup-registration-form" onSubmit={handleSubmit}>
				<h2 className="signup-form-title">Student Registration</h2>
				<input
					type="text"
					name="firstName"
					placeholder="First Name"
					value={formData.firstName}
					onChange={handleChange}
					required
				/>
				<input
					type="text"
					name="lastName"
					placeholder="Last Name"
					value={formData.lastName}
					onChange={handleChange}
					required
				/>
				<input
					type="tel"
					name="phoneNumber"
					placeholder="Phone Number"
					value={formData.phoneNumber}
					onChange={handleChange}
					required
				/>
				<input
					type="text"
					name="college"
					placeholder="College"
					value={formData.college}
					onChange={handleChange}
					required
				/>
				<input
					type="text"
					name="course"
					placeholder="Course"
					value={formData.course}
					onChange={handleChange}
					required
				/>
				<select
					name="currentYear"
					value={formData.currentYear}
					onChange={handleChange}
					required
				>
					<option value="">Current Year</option>
					<option value="1">1st Year</option>
					<option value="2">2nd Year</option>
					<option value="3">3rd Year</option>
					<option value="4">4th Year</option>
				</select>
				<input
					type="text"
					name="fieldOfInterest"
					placeholder="Field of Interest"
					value={formData.fieldOfInterest}
					onChange={handleChange}
					required
				/>
				<button type="submit" className="signup-submit-btn" onClick={() => { navigate('/dashboard') }}>Submit</button>
			</form>
		</div>
	);
};

export default RegistrationForm;
