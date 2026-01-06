import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Jayveen_Patel_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Resume</strong>
        </h1>

        {/* Top Buttons */}
        <Row className="justify-content-center" style={{ padding: "20px 0" }}>
          <Col xs="auto" className="mb-2">
            <Button
              variant="primary"
              href={pdf}
              download
              aria-label="Download resume PDF"
              className="d-flex align-items-center"
            >
              <AiOutlineDownload />
              &nbsp;Download Resume
            </Button>
          </Col>

          <Col xs="auto" className="mb-2">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              rel="noreferrer"
            >
              Open in New Tab
            </Button>
          </Col>
        </Row>

        {/* Fix for Issue #8: Enhanced PDF Viewer 
            The iframe now uses the 'resume-embed-wrap' class from style.css 
            which is set to 1000px height for desktop readability.
        */}
        <div className="resume-embed-wrap">
          <iframe
            className="resume-embed"
            title="Jayveen Patel Resume"
            src={`${pdf}#view=FitH`} // Forces PDF to fit container width
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        </div>

        <p className="resume-fallback text-center mt-3" style={{ color: "white", opacity: 0.8 }}>
          If the viewer doesn't load, you can {" "}
          <a href={pdf} target="_blank" rel="noreferrer" className="purple">
            click here
          </a>
          {" "}to view or download it directly.
        </p>

        {/* Bottom Download Button */}
        <Row className="justify-content-center" style={{ padding: "20px 0" }}>
          <Col xs="auto">
            <Button
              variant="primary"
              href={pdf}
              download
              className="d-flex align-items-center"
            >
              <AiOutlineDownload />
              &nbsp;Download Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;