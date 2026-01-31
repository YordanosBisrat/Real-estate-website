import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function validate() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSuccess(false); // reset message

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) {
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.log("Backend error:", data);
      }
    } catch (error) {
      console.log("Network error:", error);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="contact-hero-small">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to help you find your perfect home.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section container">
        <div className="contact-grid">

          {/* Form */}
          <div className="contact-form-box">
            <h2>Send Us a Message</h2>

            {success && (
              <p style={{ color: "green", marginBottom: "15px" }}>
                Message sent successfully!
              </p>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
                {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
                {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                />
                {errors.message && <small style={{ color: "red" }}>{errors.message}</small>}
              </div>

              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Info */}
          <div className="contact-info-box">
            <h2>Our Office</h2>

            <p><strong>Location:</strong><br />Addis Ababa, Ethiopia</p>
            <p><strong>Phone:</strong><br />+251 900 000 000</p>
            <p><strong>Email:</strong><br />info@gojorealestate.com</p>

            <h3>Follow Us</h3>
            <div className="social-icons-row">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-telegram-plane"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-tiktok"></i></a>
              <a href="#"><i className="fab fa-x-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
