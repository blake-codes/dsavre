import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 3rem 1rem;
  background-color: #f5f5f5;
  text-align: center;

  img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const AboutSection = () => {
  return (
    <Section>
      <motion.img
        src="/assets/images/hero.jpg"
        alt="About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bio
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Danielle Savre was born with a passion for the performing arts. This
        California native has a deep understanding of the industry and has
        performed as an actress, singer and producer over the years. Danielle
        quickly gained attention for her stand out roles in NBC’s smash hit
        Heroes and as the rock star lead in MTV’s Kaya. Later on she starred as
        the lead in CW’s Supernatural spin off Bloodlines and in the RJ Cutler
        directed pilot Four Stars for CBS. Danielle most recently played the
        leading character of Anna in Tyler Perry’s Too Close to Home and will
        next be starring as one of the leads in ABC’s Untitled Grey’s Anatomy
        Spin Off Station 19 set to premiere March 22nd. Other notable roles
        include her multi-episode arc in season seven of Blue Bloods, Brianna in
        Bring It On All Or Nothing and as the lead in Boogeyman 2 for Ghost
        House Pictures. Danielle recently completed lead roles in several
        independent films including Pierre David’s The Perfect Stalker, John
        Stimpson’s The Wrong Car, H.M. Coakley’s Black List screenplay
        Adulterers and Gwen Wynn’s Wild About Harry, which won the Best of the
        Fest award at the Palm Springs International Film Festival. In 2018 she
        will be starring in the film Happily Never After and the sequel to Deep
        Blue Sea for Warner Brothers pictures. Danielle has also produced
        several short films, including Jeff Betancourt’s award winning film
        Knock Knock, which premiered at the SXSW film festival and has played at
        30 film festivals worldwide. Recently she received a best supporting
        actress nomination for her role in Rowan Maher’s short film Collar at
        the California Women’s Film Festival.
      </motion.p>
    </Section>
  );
};

export default AboutSection;
