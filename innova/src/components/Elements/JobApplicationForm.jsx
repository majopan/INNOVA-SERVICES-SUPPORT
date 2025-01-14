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
        position: "",
        employmentType: "full-time",
        eligibilityToWork: "yes",
        workedBefore: "no",
        workedBeforeDates: "",
        convictedFelony: "no",
        felonyDetails: "",
        education: [
        { level: "High School", name: "", cityState: "", from: "", to: "", graduated: "no", diploma: "" },
        { level: "College", name: "", cityState: "", from: "", to: "", graduated: "no", degree: "" },
        { level: "Other", name: "", cityState: "", from: "", to: "", degree: "" },
        ],
        previousEmployment: Array(3).fill({
        employer: "",
        email: "",
        phone: "",
        address: "",
        startingPay: "",
        payTypeStart: "hour",
        endingPay: "",
        payTypeEnd: "hour",
        jobTitle: "",
        responsibilities: "",
        from: "",
        to: "",
        reasonLeaving: "",
        }),
        references: Array(3).fill({ fullName: "", relationship: "", company: "", title: "", email: "", phone: "" }),
        militaryService: {
        veteran: "no",
        branch: "",
        rank: "",
        from: "",
        to: "",
        dischargeType: "",
        dischargeDetails: "",
        },
        consentBackgroundCheck: "yes",
        signature: "",
        printName: "",
        submissionDate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNestedChange = (index, field, section, value) => {
        const updatedSection = [...formData[section]];
        updatedSection[index][field] = value;
        setFormData({ ...formData, [section]: updatedSection });
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

        {/* Employment Details */}
        <section className="form-section">
            <h2>Employment Details</h2>
            <div className="form-group">
            <label>
                Desired Pay:
                <input
                type="number"
                name="desiredPay"
                value={formData.desiredPay}
                onChange={handleChange}
                />
            </label>
            <label>
                Pay Type:
                <select name="payType" value={formData.payType} onChange={handleChange}>
                <option value="hour">Hour</option>
                <option value="salary">Salary</option>
                </select>
            </label>
            </div>
            <div className="form-group">
            <label>
                Position Applied For:
                <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                />
            </label>
            </div>
            <div className="form-group">
            <label>
                Employment Desired:
                <select name="employmentType" value={formData.employmentType} onChange={handleChange}>
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="seasonal">Seasonal</option>
                </select>
            </label>
            </div>
        </section>

        {/* Add additional sections following the same structure */}
        {/* Education */}
    <section className="form-section">
    <h2>Education</h2>
    {formData.education.map((edu, index) => (
        <div key={index} className="form-group">
        <h3>{edu.level}</h3>
        <label>
            Name of School:
            <input
            type="text"
            value={edu.name}
            onChange={(e) =>
                handleNestedChange(index, "name", "education", e.target.value)
            }
            required
            />
        </label>
        <label>
            City / State:
            <input
            type="text"
            value={edu.cityState}
            onChange={(e) =>
                handleNestedChange(index, "cityState", "education", e.target.value)
            }
            required
            />
        </label>
        <label>
            From:
            <input
            type="date"
            value={edu.from}
            onChange={(e) =>
                handleNestedChange(index, "from", "education", e.target.value)
            }
            required
            />
        </label>
        <label>
            To:
            <input
            type="date"
            value={edu.to}
            onChange={(e) =>
                handleNestedChange(index, "to", "education", e.target.value)
            }
            required
            />
        </label>
        <label>
            Graduated?
            <select
            value={edu.graduated}
            onChange={(e) =>
                handleNestedChange(index, "graduated", "education", e.target.value)
            }
            >
            <option value="yes">Yes</option>
            <option value="no">No</option>
            </select>
        </label>
        <label>
            Degree / Diploma:
            <input
            type="text"
            value={edu.diploma || edu.degree}
            onChange={(e) =>
                handleNestedChange(index, "diploma", "education", e.target.value)
            }
            />
        </label>
        </div>
    ))}
    </section>

    {/* Previous Employment */}
    <section className="form-section">
    <h2>Previous Employment</h2>
    {formData.previousEmployment.map((job, index) => (
        <div key={index} className="form-group">
        <h3>Employer {index + 1}</h3>
        <label>
            Company Name:
            <input
            type="text"
            value={job.employer}
            onChange={(e) =>
                handleNestedChange(index, "employer", "previousEmployment", e.target.value)
            }
            required
            />
        </label>
        <label>
            Email:
            <input
            type="email"
            value={job.email}
            onChange={(e) =>
                handleNestedChange(index, "email", "previousEmployment", e.target.value)
            }
            />
        </label>
        <label>
            Phone:
            <input
            type="tel"
            value={job.phone}
            onChange={(e) =>
                handleNestedChange(index, "phone", "previousEmployment", e.target.value)
            }
            />
        </label>
        <label>
            Address:
            <input
            type="text"
            value={job.address}
            onChange={(e) =>
                handleNestedChange(index, "address", "previousEmployment", e.target.value)
            }
            />
        </label>
        <label>
            Job Title:
            <input
            type="text"
            value={job.jobTitle}
            onChange={(e) =>
                handleNestedChange(index, "jobTitle", "previousEmployment", e.target.value)
            }
            />
        </label>
        <label>
            Responsibilities:
            <textarea
            value={job.responsibilities}
            onChange={(e) =>
                handleNestedChange(index, "responsibilities", "previousEmployment", e.target.value)
            }
            />
        </label>
        <label>
            From:
            <input
            type="date"
            value={job.from}
            onChange={(e) =>
                handleNestedChange(index, "from", "previousEmployment", e.target.value)
            }
            />
        </label>
        <label>
            To:
            <input
            type="date"
            value={job.to}
            onChange={(e) =>
                handleNestedChange(index, "to", "previousEmployment", e.target.value)
            }
            />
        </label>
        <label>
            Reason for Leaving:
            <input
            type="text"
            value={job.reasonLeaving}
            onChange={(e) =>
                handleNestedChange(index, "reasonLeaving", "previousEmployment", e.target.value)
            }
            />
        </label>
        </div>
    ))}
    </section>

    {/* References */}
    <section className="form-section">
    <h2>References (Professional Only)</h2>
    {formData.references.map((ref, index) => (
        <div key={index} className="form-group">
        <h3>Reference {index + 1}</h3>
        <label>
            Full Name:
            <input
            type="text"
            value={ref.fullName}
            onChange={(e) =>
                handleNestedChange(index, "fullName", "references", e.target.value)
            }
            required
            />
        </label>
        <label>
            Relationship:
            <input
            type="text"
            value={ref.relationship}
            onChange={(e) =>
                handleNestedChange(index, "relationship", "references", e.target.value)
            }
            />
        </label>
        <label>
            Company:
            <input
            type="text"
            value={ref.company}
            onChange={(e) =>
                handleNestedChange(index, "company", "references", e.target.value)
            }
            />
        </label>
        <label>
            Title:
            <input
            type="text"
            value={ref.title}
            onChange={(e) =>
                handleNestedChange(index, "title", "references", e.target.value)
            }
            />
        </label>
        <label>
            Email:
            <input
            type="email"
            value={ref.email}
            onChange={(e) =>
                handleNestedChange(index, "email", "references", e.target.value)
            }
            />
        </label>
        <label>
            Phone:
            <input
            type="tel"
            value={ref.phone}
            onChange={(e) =>
                handleNestedChange(index, "phone", "references", e.target.value)
            }
            />
        </label>
        </div>
    ))}
    </section>

    {/* Military Service */}
    <section className="form-section">
    <h2>Military Service</h2>
    <label>
        Are you a veteran?
        <select
        name="militaryService.veteran"
        value={formData.militaryService.veteran}
        onChange={(e) =>
            setFormData({
            ...formData,
            militaryService: {
                ...formData.militaryService,
                veteran: e.target.value,
            },
            })
        }
        >
        <option value="yes">Yes</option>
        <option value="no">No</option>
        </select>
    </label>
    {formData.militaryService.veteran === "yes" && (
        <>
        <label>
            Branch:
            <input
            type="text"
            name="branch"
            value={formData.militaryService.branch}
            onChange={(e) =>
                setFormData({
                ...formData,
                militaryService: { ...formData.militaryService, branch: e.target.value },
                })
            }
            />
        </label>
        {/* More fields for rank, discharge, etc. */}
        </>
    )}
    </section>


    {/* Background Check Consent */}
    <section className="form-section">
    <h2>Background Check Consent</h2>
    <label>
        If asked, are you willing to consent to a background check?
        <select
        name="consentBackgroundCheck"
        value={formData.consentBackgroundCheck}
        onChange={handleChange}
        required
        >
        <option value="yes">Yes</option>
        <option value="no">No</option>
        </select>
    </label>
    </section>

    {/* Disclaimer */}
    <section className="form-section">
    <h2>Disclaimer</h2>
    <p>
        Applicant understands that this is an Equal Opportunity Employer and is
        committed to excellence through diversity. In order to ensure this
        application is acceptable, please print or type with the application being
        fully completed in order for it to be considered. Please complete each
        section EVEN IF you decide to attach a resume.
    </p>
    <p>
        I, the Applicant, certify that my answers are true and honest to the best of
        my knowledge. If this application leads to my eventual employment, I
        understand that any false or misleading information in my application or
        interview may result in my employment being terminated.
    </p>
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