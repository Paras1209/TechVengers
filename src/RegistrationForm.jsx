import React, { useState } from "react";
import "./RegistrationForm.css";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    college: "",
    course: "",
    currentYear: "",
    fieldOfInterest: [], // Store interests as an array
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addTag = (event) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      const newTag = event.target.value.trim();

      if (newTag && !formData.fieldOfInterest.includes(newTag)) {
        setFormData({
          ...formData,
          fieldOfInterest: [...formData.fieldOfInterest, newTag],
        });
      }
      event.target.value = ""; // Clear the input field
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData({
      ...formData,
      fieldOfInterest: formData.fieldOfInterest.filter(
        (tag) => tag !== tagToRemove
      ),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/dashboard");
  };

  return (
    <>
      <div className="body2">
        <div className="background-overlay"></div>
        <div className="registration-container">
          <form className="registration-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Student Registration</h2>
            <div className="form">
              <div className="form-section">
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
              </div>
              <div className="form-section">
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

                {/* Tag Input for Field of Interest */}
                <div className="tag-input">
                  <ul className="tag-list">
                    {formData.fieldOfInterest.map((tag, index) => (
                      <li key={index} className="tag">
                        {tag}
                        <button
                          type="button"
                          className="remove-tag"
                          onClick={() => removeTag(tag)}
                        >
                          &times;
                        </button>
                      </li>
                    ))}
                  </ul>
                  <input
                    type="text"
                    placeholder="Field of Interest (press Enter after each tag)"
                    onKeyDown={addTag}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default RegistrationForm;
