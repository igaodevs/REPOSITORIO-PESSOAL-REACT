import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeAnimation}>
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-section">
            <h3>Projetado e desenvolvido por Igor C. Oliveira</h3>
          </Col>
          <Col md="4" className="footer-section">
            <h3>Copyright © {year} IG</h3>
          </Col>
          <Col md="4" className="footer-section">
            <ul className="footer-icons">
              <li className="social-icon">
                <a
                  href="https://github.com/igaonamikaze"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icon">
                <a
                  href="https://twitter.com/Igaoson"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icon">
                <a
                  href="https://www.linkedin.com/in/igor-costa-oliveira-673866169/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icon">
                <a
                  href="https://www.instagram.com/igaonamikaze/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Footer;
