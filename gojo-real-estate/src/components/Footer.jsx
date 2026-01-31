import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content container">

        <div className="footer-column">
          <img src="/images/logo.jpg" alt="Gojo Real Estate" className="footer-logo" />
          <p className="footer-tagline">
            Helping you find your dream home across Ethiopia.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <p>Addis Ababa, Ethiopia</p>
          <p>Email: info@gojorealestate.com</p>
          <p>Phone: +251 900 000 000</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Gojo Real Estate. All rights reserved.
      </div>
    </footer>
  );
}

  