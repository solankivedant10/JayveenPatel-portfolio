import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../../Particle";
import { projectsData } from "../../../data/projectsData";

function ProjectDetails() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container style={{ paddingTop: "140px", paddingBottom: "60px" }}>
          <h1 className="project-heading">Project not found</h1>
          <p style={{ color: "white" }}>
            The project you’re looking for doesn’t exist.
          </p>
          <Button as={Link} to="/project" variant="primary">
            Back to Projects
          </Button>
        </Container>
      </Container>
    );
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div style={{ paddingTop: "140px", paddingBottom: "10px" }}>
          <h1 className="project-heading">
            {project.title.split("&").length > 1 ? (
              <>
                {project.title.split("&")[0].trim()} &{" "}
                <strong className="purple">{project.title.split("&")[1].trim()}</strong>
              </>
            ) : (
              project.title
            )}
          </h1>

          <p style={{ color: "white", maxWidth: "900px", margin: "0 auto" }}>
            {project.shortDescription}
          </p>

          <div style={{ marginTop: "18px" }}>
            <Button as={Link} to="/project" variant="primary">
              Back to Projects
            </Button>
          </div>
        </div>

        <Row style={{ justifyContent: "center", paddingTop: "35px", paddingBottom: "60px" }}>
          <Col md={10}>
            <div className="project-card-view" style={{ padding: "28px", textAlign: "left" }}>
              <h3 style={{ marginBottom: "12px" }}>
                <span className="purple">Projects</span>
              </h3>
              <ul style={{ lineHeight: 1.9 }}>
                {project.projects.map((item, idx) => (
                  <li key={`proj-${idx}`}>{item}</li>
                ))}
              </ul>

              <h3 style={{ marginTop: "22px", marginBottom: "12px" }}>
                <span className="purple">Impact</span>
              </h3>
              <ul style={{ lineHeight: 1.9 }}>
                {project.impact.map((item, idx) => (
                  <li key={`impact-${idx}`}>{item}</li>
                ))}
              </ul>

              <h3 style={{ marginTop: "22px", marginBottom: "12px" }}>
                <span className="purple">Tools Used</span>
              </h3>
              <ul style={{ lineHeight: 1.9 }}>
                {project.tools.map((item, idx) => (
                  <li key={`tools-${idx}`}>{item}</li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectDetails;
