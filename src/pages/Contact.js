// Contact.js
import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const initialErrors = {
    name: '',
    email: '',
    message:'',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate fields when user starts typing
    validateField(name, value);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    // Validate fields when user moves out of the field
    validateField(name, value);
  };

  const validateField = (name, value) => {
    // Basic validation
    if (name === 'name') {
      setErrors((prevErrors) => ({ ...prevErrors, name: value ? '' : 'Name is a required field' }));
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: emailRegex.test(value) ? '' : 'Invalid email address',
      }));
    } else if (name === 'message'){
      setErrors((prevErrors) => ({ ...prevErrors, message: value ? '' : 'message is a required field' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    if (Object.values(errors).every((error) => !error)) {
      console.log('Form submitted:', formData);
      setFormData(initialFormData);
      setErrors(initialErrors);
    } else {
      console.log('Form has validation errors. Please correct them.');
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          <div className="error-message">{errors.name}</div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          <div className="error-message">{errors.email}</div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          <div className="error-message">{errors.message}</div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;