import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Section = styled.section`
  padding: 3rem 1rem;
  background-color: #fff;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .grid-item {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures images cover the box and maintain aspect ratio */
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }

  /* Style for the See More button */
  .see-more-btn {
    display: inline-block;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    background-color: #f39c12;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 2rem;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: #e67e22;
      transform: translateY(-2px); /* Adds a small hover effect */
    }

    &:active {
      transform: translateY(
        0
      ); /* Reset the hover effect when the button is clicked */
    }
  }
`;

const PortfolioSection = () => {
  return (
    <Section>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Portfolio
      </motion.h2>
      <motion.div
        className="grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="grid-item">
          <img src="/src/assets/images/port1.jpeg" alt="Portfolio 1" />
        </div>
        <div className="grid-item">
          <img src="/src/assets/images/port2.jpeg" alt="Portfolio 2" />
        </div>
        <div className="grid-item">
          <img src="/src/assets/images/port3.jpg" alt="Portfolio 3" />
        </div>
      </motion.div>
      <Link to="/gallery" className="see-more-btn">
        See More
      </Link>
    </Section>
  );
};

export default PortfolioSection;
