import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../../Particle";
import { projectsData } from "../../../data/projectsData";
import { AiOutlineArrowLeft } from "react-icons/ai";

function ProjectDetails() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  // Scroll to top when the project details load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <Container fluid className="project-section">
        <Container style={{ paddingTop: "140px", textAlign: "center" }}>
          <h1 className="project-heading">Project Not Found</h1>
          <Button as={Link} to="/projects" variant="primary">Back to Projects</Button>
        </Container>
      </Container>
    );
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="project-details-header" style={{ paddingTop: "140px" }}>
          <Link to="/projects" className="back-link">
            <AiOutlineArrowLeft /> Back to Projects
          </Link>
          <h1 className="project-heading" style={{ marginTop: "20px" }}>
            {project.title}
          </h1>
          <p className="project-desc">{project.shortDescription}</p>
        </div>

        <Row className="justify-content-center" style={{ paddingBottom: "80px" }}>
          <Col md={10}>
            <div className="project-detail-card">
              <section className="detail-segment">
                <h3><span className="purple">The Challenge & Solution</span></h3>
                <ul>
                  {project.projects.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </section>

              <section className="detail-segment">
                <h3><span className="purple">Quantifiable Impact</span></h3>
                <ul>
                  {project.impact.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </section>

              <section className="detail-segment">
                <h3><span className="purple">Tech Stack & Tools</span></h3>
                <div className="tool-tags">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectDetails;