import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { projectsData } from "../../data/projectsData";

// Import your assets
import budgetImg from "../../Assets/Projects/chatify.png"; 
import forecastImg from "../../Assets/Projects/blog.png";
import sqlImg from "../../Assets/Projects/codeEditor.png";
import interestImg from "../../Assets/Projects/leaf.png";
import reportingImg from "../../Assets/Projects/suicide.png";
import kpiImg from "../../Assets/Projects/emotion.png";

function Projects() {
  const imageMap = {
    chatify: budgetImg,
    bitsOfCode: forecastImg,
    editor: sqlImg,
    leaf: interestImg,
    suicide: reportingImg,
    emotion: kpiImg,
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Work</strong>
        </h1>
        <p style={{ color: "white", marginBottom: "30px" }}>
          Selected FP&A projects focused on budgeting, forecasting, and finance analytics.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsData.map((p) => (
            <Col md={4} className="project-card" key={p.slug}>
              <ProjectCard
                imgPath={imageMap[p.imageKey] || budgetImg}
                title={p.title}
                description={p.shortDescription}
                slug={p.slug}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;