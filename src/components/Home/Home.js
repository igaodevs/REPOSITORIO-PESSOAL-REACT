import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import homeLogo from "../../Assets/home-main.svg";
import { motion } from "framer-motion";

const Home = () => {
  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <motion.section initial="hidden" animate="visible" variants={fadeAnimation}>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Olá!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                Me chamo
                <strong className="main-name"> Igor C. Oliveira</strong>
              </h1>
              <div className="type-wrapper">
                <Type />
              </div>
            </Col>
            <Col md={5} className="home-image">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </motion.section>
  );
};

export default Home;
