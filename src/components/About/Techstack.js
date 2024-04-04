import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  CgCPlusPlus,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

const Techstack = () => {
  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeAnimation}>
      <Row className="techstack-section">
        <Col xs={4} md={2} className="tech-icons">
          <CgCPlusPlus />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <TbBrandGolang />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSolidity />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiRedis />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostgresql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
        </Col>
      </Row>
    </motion.div>
  );
};

export default Techstack;
