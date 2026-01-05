import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Keeping template images as placeholders.
// You can replace with finance-themed screenshots later.
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">FP&amp;A Work</strong>
        </h1>

        <p style={{ color: "white" }}>
          Finance analytics initiatives focused on budgeting, forecasting, automation,
          and executive reporting.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="Budget Ownership & Operating Plan Management"
              description="Built and maintained operating plan models to support budget planning, approvals, and monthly performance reviews. Designed model structure to improve transparency of cost drivers and support leadership decision-making."
              impact="Managed $1.2B annual operating budget and improved forecast precision by ~10%."
              stack="Advanced Excel, SAP FICO, standard FP&A frameworks"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Integrated Forecasting Model (Data + Analytics)"
              description="Developed forecasts by combining internal performance drivers with external market inputs, enabling tighter variance control and clearer assumptions. Built repeatable logic to refresh forecasts with minimal manual effort."
              impact="Reduced forecast variance from ~8% to ~5% and strengthened planning accuracy."
              stack="SQL, Python, Excel modeling"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              title="Scenario & Sensitivity Modeling (Rates / Liquidity / Deposits)"
              description="Created multi-scenario financial models to simulate interest rate shifts, liquidity risk, and deposit growth. Structured scenarios to support long-term planning and risk-aware budgeting decisions."
              impact="Improved strategic planning speed and consistency of scenario outputs for stakeholders."
              stack="Excel scenario modeling, financial sensitivity analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              title="Automation of Recurring Reporting Pack"
              description="Automated recurring financial reporting workflows and standardized reporting packs for consistent variance commentary and KPI storytelling. Reduced manual steps and improved reliability of published numbers."
              impact="Automated 15+ recurring dashboards and reduced manual workload by ~30%."
              stack="Power Query, VBA, Excel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="Executive KPI Dashboards & Performance Storytelling"
              description="Designed executive-facing KPI dashboards to track revenue trends, operational drivers, and performance metrics. Built drilldowns aligned to leadership review cadence to enable faster decisions."
              impact="Increased stakeholder clarity and reduced time to insight for monthly reviews."
              stack="Power BI, Excel, KPI design"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="Cost Driver Analysis & Savings Identification"
              description="Conducted structured variance and cost-driver analysis to identify operational inefficiencies. Translated insights into actionable recommendations and tracked realized outcomes."
              impact="Identified ~$2M in annual savings opportunities."
              stack="Variance analysis, cost modeling, Excel/BI"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
