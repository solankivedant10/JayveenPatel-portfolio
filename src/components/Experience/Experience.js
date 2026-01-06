import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Particle from "../Particle";
import { experiences } from "../../data/experienceData"; // Import external data

function Experience() {
  const [activeKey, setActiveKey] = useState(experiences[0].key);
  const activeExp = experiences.find((e) => e.key === activeKey) || experiences[0];

  const contentRef = useRef(null);

  // First Principle: Ensure user focus stays on the content when tabs change
  useEffect(() => {
    if (contentRef.current && window.innerWidth < 768) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeKey]);

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Experience</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingTop: "25px" }}>
          <Col md={12} lg={10}>
            <Nav
              variant="pills"
              activeKey={activeKey}
              onSelect={(k) => k && setActiveKey(k)}
              className="experience-tabs justify-content-center"
            >
              {experiences.map((exp) => (
                <Nav.Item key={exp.key}>
                  <Nav.Link eventKey={exp.key} className="experience-tab">
                    {exp.tab}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingTop: "40px", paddingBottom: "70px" }}>
          <Col md={12} lg={10}>
            <div ref={contentRef} className="experience-card">
              <div className="experience-header">
                <h3 className="experience-role">
                  <span className="purple">{activeExp.role}</span>{" "}
                  <span className="experience-sep">@</span> {activeExp.company}
                </h3>
                <p className="experience-dates">{activeExp.dates}</p>
              </div>

              <ul className="experience-list">
                {activeExp.bullets.map((b, idx) => (
                  <li key={`${activeExp.key}-${idx}`} className="experience-item">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;