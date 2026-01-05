import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

import { projectsData } from "../../data/projectsData";

function Projects() {
  const imageMap = {
    leaf,
    emotion,
    editor,
    chatify,
    suicide,
    bitsOfCode,
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Work</strong>
        </h1>

        <p style={{ color: "white" }}>
          Selected FP&amp;A and finance analytics projects focused on budgeting, forecasting,
          automation, and executive reporting.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsData.map((p) => (
            <Col md={4} className="project-card" key={p.slug}>
              <ProjectCard
                imgPath={imageMap[p.imageKey]}
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
