import React, { useState } from "react";
import "../../style/JobApplicationForm.css";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    date: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    phone: "",
    ssn: "",
    dateAvailable: "",
    desiredPay: "",
    payType: "hour",
    eligibilityToWork: "yes",
    workedBefore: "no",
    consentBackgroundCheck: "yes",
    signature: "",
    printName: "",
    submissionDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Application submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="job-application-form">
      <h1>Employment / Job Application</h1>

      {/* Personal Information */}
      <section className="form-section">
        <h2>Personal Information</h2>
        <div className="form-group">
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            State:
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Zip Code:
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </section>

      {/* Employment Eligibility */}
      <section className="form-section">
        <h2>Employment Eligibility</h2>
        <div className="form-group">
          <label>
            Are you legally eligible to work in the U.S.?
            <select
              name="eligibilityToWork"
              value={formData.eligibilityToWork}
              onChange={handleChange}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <label>
            Have you ever worked for this employer?
            <select
              name="workedBefore"
              value={formData.workedBefore}
              onChange={handleChange}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
        </div>
      </section>

      {/* Background Check */}
      <section className="form-section">
        <h2>Background Check Consent</h2>
        <label>
          Are you willing to consent to a background check?
          <select
            name="consentBackgroundCheck"
            value={formData.consentBackgroundCheck}
            onChange={handleChange}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
      </section>

      {/* Disclaimer */}
      <section className="form-section">
        <h2>Disclaimer</h2>
        <div className="form-group">
          <label>
            Signature:
            <input
              type="text"
              name="signature"
              value={formData.signature}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="submissionDate"
              value={formData.submissionDate}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label>
          Print Name:
          <input
            type="text"
            name="printName"
            value={formData.printName}
            onChange={handleChange}
            required
          />
        </label>
      </section>

      <button type="submit" className="submit-button">
        Submit Application
      </button>
    </form>
  );
};

export default JobApplicationForm;
