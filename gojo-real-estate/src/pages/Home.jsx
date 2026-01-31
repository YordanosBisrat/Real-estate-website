import { useState } from "react";

export default function Home() {const [message, setMessage] = useState("");

    function testBackend() {
      fetch("http://localhost:5001/api/test")
        .then(res => res.json())
        .then(data => {
          setMessage(data.message);
        })
        .catch(err => {
          console.log("Error:", err);
        });
    }
    return (
      <>
  <button onClick={testBackend}>
    Test Backend Connection
  </button>

  {message && <p>{message}</p>}

        {/* Hero */}
        <section className="home-hero">
          <div className="container hero-content">
            <h1>Your Home, Your Future</h1>
            <p><strong>Find the perfect place with Gojo Real Estate.</strong></p>
            <a href="/explore" className="btn-primary">Start Exploring</a>
          </div>
        </section>
  
        {/* Featured Properties */}
        <section className="featured container">
          <h2 className="section-title">Featured Properties</h2>
  
          <div className="listings-grid">
            <Property
              img="house1.jpg"
              title="Modern Villa"
              location="Addis Ababa"
              price="50,220,000 ETB"
            />
            <Property
              img="house2.jpg"
              title="Luxury Family Home"
              location="Adama"
              price="29,310,000 ETB"
            />
            <Property
              img="house3.jpg"
              title="Modern Apartment"
              location="Bahir Dar"
              price="22,260,000 ETB"
            />
          </div>
        </section>
  
        {/* Browse CTA (moved here for better flow) */}
        <section className="cta">
          <h2>Ready to Find Your New Home?</h2>
          <p>Explore hundreds of properties across Ethiopia.</p>
          <a href="/explore" className="btn-primary">Browse Listings</a>
        </section>
  
        {/* Our Numbers */}
        <section className="our-numbers">
          <div className="container numbers-content">
            <h2>Our Numbers</h2>
            <p>Trusted by many, delivering results.</p>
  
            <div className="numbers-grid">
              <div className="number-item">
                <span className="number">2018</span>
                <span className="label">Founded</span>
              </div>
              <div className="number-item">
                <span className="number">95+</span>
                <span className="label">Projects</span>
              </div>
              <div className="number-item">
                <span className="number">1000+</span>
                <span className="label">Employees</span>
              </div>
              <div className="number-item">
                <span className="number">6 Billion ETB</span>
                <span className="label">Value in Birr</span>
              </div>
            </div>
          </div>
        </section>
  
        {/* Why Choose Us */}
        <section className="why-choose-us">
          <div className="container">
            <h2 className="section-title">Why You Choose Us</h2>
  
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon"><i className="fas fa-map-marker-alt"></i></div>
                <h3>Location</h3>
                <p>Convenient access to amenities and transport.</p>
              </div>
  
              <div className="benefit-item">
                <div className="benefit-icon"><i className="fas fa-money-bill-wave"></i></div>
                <h3>Affordable</h3>
                <p>Quality homes with transparent pricing.</p>
              </div>
  
              <div className="benefit-item">
                <div className="benefit-icon"><i className="fas fa-check-circle"></i></div>
                <h3>Quality</h3>
                <p>Built with safety, durability, and care.</p>
              </div>
  
              <div className="benefit-item">
                <div className="benefit-icon"><i className="fas fa-shield-alt"></i></div>
                <h3>Safety & Security</h3>
                <p>Your safety is always our priority.</p>
              </div>
  
              <div className="benefit-item">
                <div className="benefit-icon"><i className="fas fa-chart-line"></i></div>
                <h3>Investment</h3>
                <p>Strong long-term value and growth.</p>
              </div>
  
              <div className="benefit-item">
                <div className="benefit-icon"><i className="fas fa-home"></i></div>
                <h3>Amenity</h3>
                <p>Comfort-focused modern living.</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  /* Beginner-friendly reusable card */
  function Property({ img, title, location, price }) {
    return (
      <div className="listing-card">
        <img src={`/images/${img}`} alt={title} />
        <div className="card-content">
          <h3>{title}</h3>
          <p>{location}</p>
          <span className="price">{price}</span>
        </div>
      </div>
    );
  }
  