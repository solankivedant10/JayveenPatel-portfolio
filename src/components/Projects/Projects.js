import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { projectsData } from "../../data/projectsData";

function Projects() {
  // Map each project to a representative icon (internet-served, no downloads)
  // Adjust slugs anytime without changing UI code.
  const iconMap = {
    "consumer-banking-budget-ownership": "microsoftexcel",
    "integrated-forecasting-sql-bloomberg-python": "python",
    "variance-cost-driver-savings": "powerbi",
    "interest-rate-liquidity-deposit-scenarios": "bloomberg",
    "automation-vba-power-query-reporting": "microsoftexcel",
    "executive-powerbi-kpi-dashboards": "powerbi",
    "sap-oracle-consolidation-regulatory-controls": "sap",
    "fraud-risk-analytics-high-risk-flagging": "oracle",
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Work</strong>
        </h1>

        <p style={{ color: "white", marginBottom: "30px" }}>
          Selected work across FP&amp;A, forecasting, automation, and finance analytics.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsData.map((p) => (
            <Col md={4} className="project-card" key={p.slug}>
              <ProjectCard
                title={p.title}
                description={p.shortDescription}
                slug={p.slug}
                iconSlug={iconMap[p.slug] || "googleanalytics"}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
