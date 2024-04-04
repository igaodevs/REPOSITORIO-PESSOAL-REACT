import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";
import { FiCode } from "react-icons/fi";
import { motion } from "framer-motion";

const Github = () => {
  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeAnimation}>
      <Row className="github-section">
        <Col className="github-title" xs={12}>
          <h1 className="project-heading">
            Dias de <strong className="purple-text">Código</strong>
            <FiCode className="code-icon" />
          </h1>
        </Col>
        <Col className="github-calendar" xs={12}>
          <GitHubCalendar
            username="soumyajit4419"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={16}
          />
        </Col>
      </Row>
    </motion.div>
  );
};

export default Github;
