import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: formData.name,
      email: formData.email,
      description: formData.description,
    });

    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Description:", formData.description);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(formData.name, formData.email, formData.description);

  return (
    <div className="contact">
      <h1 className="contact-heading">Contact</h1>

      <form>
        <div className="top-fields">
          <div className="name-field">
            <label>Name</label>
            <input
              name="name"
              onChange={handleChange}
              value={formData.name}
              placeholder="Enter your name"
              type="text"
            />
          </div>

          <div className="name-field">
            <label>Email</label>
            <input
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              type="email"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="text-field">
          <label>Please write your queries</label>
          <textarea
            name="description"
            value={formData.description}
            type="text"
            placeholder="Write anything ...."
            onChange={handleChange}
          />
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
