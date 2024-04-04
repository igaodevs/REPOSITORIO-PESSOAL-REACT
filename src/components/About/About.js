import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

const About = () => {
  return (
    <div className="about-section">
      <Particle />
      <Container fluid className="about-container">
        <Row className="about-row">
          <Col md={7} className="about-content">
            <h1 className="about-title">
              Conheça quem <span className="purple-text">EU SOU</span>
            </h1>
            <AboutCard />
          </Col>
          <Col md={5} className="about-image">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <section className="skills-section">
          <h1 className="section-title">
            Professional <span className="purple-text">Conjunto de habilidades</span>
          </h1>
          <Techstack />
        </section>

        <section className="tools-section">
          <h1 className="section-title">
            <span className="purple-text">Ferramentas</span> que eu uso
          </h1>
          <Toolstack />
        </section>

        <Github />
      </Container>
    </div>
  );
};

export default About;
