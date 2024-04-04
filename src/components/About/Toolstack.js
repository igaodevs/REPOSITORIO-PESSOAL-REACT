import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

const Toolstack = () => {
  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeAnimation}>
      <Row className="toolstack-section">
        <Col xs={4} md={2} className="tech-icons">
          <SiMacos />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSlack />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVercel />
        </Col>
      </Row>
    </motion.div>
  );
};

export default Toolstack;
