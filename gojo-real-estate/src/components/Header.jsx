import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container nav-container">
        
        <div className="logo">
          <span>Gojo</span>
        </div>

        {/* Nav links */}
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/explore" onClick={closeMenu}>Explore</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </nav>

        {/* Hamburger */}
        <div
          className={menuOpen ? "hamburger active" : "hamburger"}
          onClick={toggleMenu}
        >
          ☰
        </div>

      </div>
    </header>
  );
}

export default Navbar;
