import { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: url("/assets/images/dsavre2.jpeg") no-repeat top center;
  background-size: cover;
  color: #fff;
  position: relative; /* For absolute positioning of overlay */
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  z-index: 1;
`;

const HeroText = styled.div`
  position: relative; /* Ensure it stays on top of the overlay */
  z-index: 2;
  max-width: 600px;
  padding: 0 20px; /* Add some padding for responsiveness */

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6); /* Text shadow for better readability */
  }

  button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
    border: none;
    background-color: #f39c12;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e67e22;
    }
  }
`;

const HeroSection = () => {
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch(
          "https://dsavre-server.onrender.com/health"
        );
        if (response.ok) {
          console.log("Health check successful!");
        } else {
          console.error("Health check failed:", response.statusText);
        }
      } catch (error) {
        console.error("Error during health check:", error);
      }
    };

    // Call the health check route when the HeroSection component is mounted
    checkHealth();
  }, []); // Empty dependency array ensures this runs only once, when the component mounts

  return (
    <Section>
      <Overlay />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <HeroText>
          <h1>DANIELLE SAVRE</h1>
          <button>Discover More</button>
        </HeroText>
      </motion.div>
    </Section>
  );
};

export default HeroSection;
