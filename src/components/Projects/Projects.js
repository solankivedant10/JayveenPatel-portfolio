// src/components/Projects/Projects.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Re-using existing images in the template as placeholders.
// If you want finance-specific images, replace these in src/Assets/Projects/.
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Analytics Work</strong>
        </h1>

        <p style={{ color: "white" }}>
          A selection of FP&amp;A and finance-analytics projects focusing on forecasting,
          automation, and executive reporting. (Links can be added to GitHub or demos if available.)
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Budget vs Actual Variance Dashboard"
              description="Executive-friendly variance reporting with drilldowns for cost drivers and performance KPIs. Built for recurring monthly reviews and faster decision cycles."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Forecast Accuracy Improvement Model"
              description="Scenario-based forecasting framework to improve accuracy and reduce variance. Includes sensitivity analysis and standardized assumptions for planning."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SQL Finance Metrics Pipeline"
              description="SQL-based extraction and transformation of finance metrics feeding standardized reports and dashboards. Designed to reduce manual reconciliation and improve reliability."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Interest Rate & Liquidity Scenario Simulator"
              description="Multi-scenario model to simulate interest rate movements, liquidity risk, and deposit growth outcomes to support strategic planning and risk-aware budgeting."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Automated Reporting Pack"
              description="Recurring reporting automation using Power Query and VBA principles to reduce manual workload and improve data quality across monthly and quarterly cycles."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Executive KPI Storyboard"
              description="A structured KPI pack that combines trend analysis and commentary to improve stakeholder clarity. Designed for leadership reviews and performance tracking."
              ghLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
