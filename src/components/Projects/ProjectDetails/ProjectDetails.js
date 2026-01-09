import React, { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../../Particle";
import { projectsData } from "../../../data/projectsData";
import { AiOutlineArrowLeft } from "react-icons/ai";

function ProjectDetails() {
  const { slug } = useParams();

  const project = useMemo(() => {
    if (!slug) return null;
    return projectsData.find((p) => p.slug === slug) || null;
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <Container fluid className="project-section" role="main">
        <Particle />
        <Container style={{ paddingTop: "140px", textAlign: "center", paddingBottom: "80px" }}>
          <h1 className="project-heading">
            Project <strong className="purple">Not Found</strong>
          </h1>
          <p style={{ color: "white", opacity: 0.9 }}>
            The project link may be incorrect or the page may have been moved.
          </p>
          <Button as={Link} to="/projects" variant="primary" style={{ marginTop: "10px" }}>
            Back to Projects
          </Button>
        </Container>
      </Container>
    );
  }

  const items = Array.isArray(project.projects) ? project.projects : [];
  const impact = Array.isArray(project.impact) ? project.impact : [];
  const tools = Array.isArray(project.tools) ? project.tools : [];

  return (
    <Container fluid className="project-section" role="main">
      <Particle />
      <Container>
        <div className="project-details-header" style={{ paddingTop: "140px" }}>
          <Link to="/projects" className="back-link" aria-label="Back to Projects">
            <AiOutlineArrowLeft /> Back to Projects
          </Link>

          <h1 className="project-heading" style={{ marginTop: "20px" }}>
            {project.title}
          </h1>

          {project.shortDescription && <p className="project-desc">{project.shortDescription}</p>}
        </div>

        <Row className="justify-content-center" style={{ paddingBottom: "80px" }}>
          <Col md={10}>
            <div className="project-detail-card">
              <section className="detail-segment" aria-label="Challenge and solution">
                <h3>
                  <span className="purple">Challenge &amp; Solution</span>
                </h3>
                {items.length ? (
                  <ul>
                    {items.map((item, i) => (
                      <li key={`${project.slug}-work-${i}`}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ marginBottom: 0 }}>Details coming soon.</p>
                )}
              </section>

              <section className="detail-segment" aria-label="Quantifiable impact">
                <h3>
                  <span className="purple">Quantifiable Impact</span>
                </h3>
                {impact.length ? (
                  <ul>
                    {impact.map((item, i) => (
                      <li key={`${project.slug}-impact-${i}`}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ marginBottom: 0 }}>Impact metrics coming soon.</p>
                )}
              </section>

              <section className="detail-segment" aria-label="Tools and tech stack">
                <h3>
                  <span className="purple">Tech Stack &amp; Tools</span>
                </h3>
                {tools.length ? (
                  <div className="tool-tags">
                    {tools.map((tool, i) => (
                      <span key={`${project.slug}-tool-${i}`} className="tool-tag">
                        {tool}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p style={{ marginBottom: 0 }}>Tools list coming soon.</p>
                )}
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectDetails;
