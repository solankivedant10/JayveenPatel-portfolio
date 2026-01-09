import React, { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  // Resume is stored in /public so it can be fetched directly and reliably.
  // PUBLIC_URL handles deployments where the app is served from a subpath.
  const resumeUrl = useMemo(() => {
    const base = process.env.PUBLIC_URL || "";
    return `${base}/Jayveen_Patel_Resume.pdf`;
  }, []);

  return (
    <Container fluid className="resume-section" role="main">
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
              href={resumeUrl}
              download
              aria-label="Download resume PDF"
              className="d-flex align-items-center"
            >
              <AiOutlineDownload />
              &nbsp;Download Resume
            </Button>
          </Col>

          <Col xs="auto" className="mb-2">
            <Button variant="primary" href={resumeUrl} target="_blank" rel="noreferrer">
              Open in New Tab
            </Button>
          </Col>
        </Row>

        {/* Viewer */}
        <div className="resume-embed-wrap">
          {/* Prefer <object> with iframe fallback for broader compatibility */}
          <object
            data={`${resumeUrl}#view=FitH`}
            type="application/pdf"
            className="resume-embed"
            aria-label="Resume PDF Viewer"
          >
            <iframe
              className="resume-embed"
              title="Jayveen Patel Resume"
              src={`${resumeUrl}#view=FitH`}
              style={{ border: "none" }}
            />
          </object>
        </div>

        <p className="resume-fallback text-center mt-3" style={{ color: "white", opacity: 0.85 }}>
          If the viewer doesn’t load,{" "}
          <a href={resumeUrl} target="_blank" rel="noreferrer" className="purple">
            open the resume directly
          </a>{" "}
          (you can download it from there).
        </p>

        {/* Bottom Download Button */}
        <Row className="justify-content-center" style={{ padding: "20px 0" }}>
          <Col xs="auto">
            <Button variant="primary" href={resumeUrl} download className="d-flex align-items-center">
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
