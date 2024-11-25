import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../AuthContext"; // Import useAuth

interface NavProps {
  $isOpen: boolean;
}

const Nav = styled.nav<NavProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;

    @media (max-width: 768px) {
      display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
      flex-direction: column;
      position: absolute;
      top: 4rem;
      right: 1rem;
      background-color: #333;
      padding: 1rem;
      border-radius: 8px;
      width: 200px;
      z-index: 1000;
    }
  }

  li {
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #f39c12;
    }
  }

  .hamburger {
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth(); // Access authentication context

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <Nav $isOpen={isOpen}>
      <Link to="/" className="logo">
        DANIELLE SAVRE
      </Link>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <ul>
        <li>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Gallery
          </Link>
        </li>
        <li>
          <a
            href="https://www.imdb.com/name/nm1642290/?ref_=nv_sr_1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Resume
          </a>
        </li>
        <li>
          <Link
            to="/contact"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Contact
          </Link>
        </li>
        {isAuthenticated && (
          <li>
            <button
              onClick={logout}
              style={{
                background: "none",
                border: "none",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </Nav>
  );
};

export default Header;
