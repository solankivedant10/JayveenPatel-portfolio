import React, { useEffect, useMemo, useRef, useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Particle from "../Particle";
import { experiences } from "../../data/experienceData";

function Experience() {
  // Memoize the experiences array so ESLint doesn't complain about changing deps.
  const safeExperiences = useMemo(
    () => (Array.isArray(experiences) ? experiences : []),
    [experiences]
  );

  const defaultKey = safeExperiences[0]?.key || "";
  const [activeKey, setActiveKey] = useState(defaultKey);
  const contentRef = useRef(null);

  // Compute the currently selected experience.
  const activeExp = useMemo(() => {
    if (!safeExperiences.length) return null;
    return (
      safeExperiences.find((e) => e.key === activeKey) || safeExperiences[0]
    );
  }, [activeKey, safeExperiences]);

  // Maintain focus/scroll on content when tabs change.
  useEffect(() => {
    if (!contentRef.current || !activeExp) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (isMobile) {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Accessibility: programmatically focus the content pane.
    contentRef.current.focus({ preventScroll: true });
  }, [activeExp]);

  // Handle the case where no experiences are provided.
  if (!activeExp) {
    return (
      <Container fluid className="experience-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            Professional <strong className="purple">Experience</strong>
          </h1>
          <p>No experience data is currently available.</p>
        </Container>
      </Container>
    );
  }

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
              role="tablist"
            >
              {safeExperiences.map((exp) => (
                <Nav.Item key={exp.key}>
                  <Nav.Link
                    eventKey={exp.key}
                    className="experience-tab"
                    role="tab"
                    aria-selected={activeKey === exp.key}
                  >
                    {exp.tab}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            paddingTop: "40px",
            paddingBottom: "70px",
          }}
        >
          <Col md={12} lg={10}>
            <div
              ref={contentRef}
              className="experience-card"
              tabIndex={-1}
              role="tabpanel"
              aria-live="polite"
            >
              <div className="experience-header">
                <h3 className="experience-role">
                  <span className="purple">{activeExp.role}</span>
                  <span className="experience-sep">@</span> {activeExp.company}
                </h3>
                <p className="experience-dates">{activeExp.dates}</p>
              </div>

              <ul className="experience-list">
                {activeExp.bullets.map((b, idx) => (
                  <li
                    key={`${activeExp.key}-${idx}`}
                    className="experience-item"
                  >
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
