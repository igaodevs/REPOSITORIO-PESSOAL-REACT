import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/igorCV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { motion } from "framer-motion";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeNew = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeAnimation}>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume-button-row">
          <Col className="d-flex justify-content-center">
            <Button variant="primary" href={pdf} target="_blank" className="download-button">
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>

        <Row className="resume-document-row">
          <Col className="d-flex justify-content-center">
            <Document file={pdf}>
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Col>
        </Row>

        <Row className="resume-button-row">
          <Col className="d-flex justify-content-center">
            <Button variant="primary" href={pdf} target="_blank" className="download-button">
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default ResumeNew;
