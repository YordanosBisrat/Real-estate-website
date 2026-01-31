export default function About() {
    return (
      <>
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <h1>About Gojo</h1>
            <p>Your trusted partner in finding the perfect home.</p>
            <p>
              Building modern, elegant, and sustainable living spaces for every
              family.
            </p>
          </div>
        </section>
  
        {/* Who We Are */}
        <section className="container">
          <h2 className="section-title">Who We Are</h2>
          <p className="about-text">
            Gojo Real Estate is dedicated to delivering modern, secure, and
            high-quality homes across Ethiopia. We focus on making property search
            simple, transparent, and accessible for everyone.
          </p>
        </section>
  
        {/* Vision / Core Values */}
        <section className="core-values container">
          <h2 className="section-title">Our Vision</h2>
  
          <div className="values-grid">
            <div className="value-card">
              <h3>Quality Homes</h3>
              <p>
                We aim to provide well-designed, durable homes that meet the needs
                of modern living.
              </p>
            </div>
  
            <div className="value-card">
              <h3>Trust & Transparency</h3>
              <p>
                We believe in honest communication, clear details, and smooth
                transactions for all clients.
              </p>
            </div>
  
            <div className="value-card">
              <h3>Sustainable Growth</h3>
              <p>
                We build with the future in mind, promoting eco-friendly and
                community-driven development.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
  