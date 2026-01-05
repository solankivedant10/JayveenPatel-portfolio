import React, { useEffect, useMemo, useRef, useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Particle from "../Particle";

function Experience() {
  const experiences = useMemo(
    () => [
      {
        key: "wells",
        tab: "Wells Fargo",
        role: "FP&A Analyst",
        company: "Wells Fargo, TX",
        dates: "Jun 2024 – Present",
        bullets: [
          "Directed and managed a $1.2B annual operating budget for Consumer Banking, improving forecast precision by 10% and accelerating approval cycles by 15% through automated Excel models and SAP FICO workflows.",
          "Developed data-integrated financial forecasts using SQL, Bloomberg data, and Python analytics, cutting forecast variance from 8% to 5% and strengthening decision-making accuracy.",
          "Conducted in-depth variance and cost-driver analysis, identifying operational inefficiencies and realizing $2M in annual savings.",
          "Built multi-scenario financial models to simulate interest rate fluctuations, liquidity risk, and deposit growth, guiding long-term strategic planning.",
          "Automated 15+ recurring reporting dashboards through Power Query and VBA, reducing manual workload by 30% and increasing data reliability.",
          "Delivered executive-level Power BI dashboards showcasing KPIs, revenue trends, and performance metrics to support senior leadership strategy reviews.",
        ],
      },
      {
        key: "sundaram",
        tab: "Sundaram Finance",
        role: "Financial Data Analyst",
        company: "Sundaram Finance Pvt., India",
        dates: "Nov 2022 – Jul 2023",
        bullets: [
          "Consolidated monthly and annual financial statements from SAP and Oracle systems with 100% accuracy, supporting board and investor reporting.",
          "Conducted KPI and ratio analyses (NIM, ROA, Cost-to-Income) to drive cost reductions of 12% over two years.",
          "Enhanced forecast accuracy by 15% through scenario-based Excel models.",
          "Automated reporting workflows using VBA and Power Query, reducing preparation time by 30%.",
          "Designed interactive Power BI dashboards to visualize financial trends and variance analysis, improving decision speed by 25%.",
          "Ensured full RBI and SEBI compliance, achieving zero audit discrepancies.",
        ],
      },
      {
        key: "accenture",
        tab: "Accenture",
        role: "Business Finance Analyst",
        company: "Accenture, India",
        dates: "Jan 2021 – Oct 2022",
        bullets: [
          "Built driver-based forecasting models for deposits, loans, and liquidity, improving prediction accuracy by 18%.",
          "Executed profitability and sensitivity analyses using SQL/Python to identify high-value segments, increasing engagement by 22%.",
          "Automated Power BI performance dashboards, cutting reporting time from 2 days to 4 hours.",
          "Partnered with risk teams to develop fraud detection analytics, flagging $1.5M in high-risk transactions.",
          "Standardized financial reporting templates, ensuring audit-ready and consistent outputs.",
          "Mentored junior analysts in financial modeling and BI automation, improving team performance and delivery quality.",
        ],
      },
    ],
    []
  );

  const [activeKey, setActiveKey] = useState(experiences[0].key);
  const activeExp = experiences.find((e) => e.key === activeKey) || experiences[0];

  // optional: scroll into view when switching tabs (keeps UX clean)
  const contentRef = useRef(null);
  useEffect(() => {
    if (contentRef.current) {
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

        {/* Horizontal tab bar */}
        <Row style={{ justifyContent: "center", paddingTop: "25px" }}>
          <Col md={10}>
            <Nav
              variant="pills"
              activeKey={activeKey}
              onSelect={(k) => k && setActiveKey(k)}
              className="experience-tabs"
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

        {/* Active tab content */}
        <Row style={{ justifyContent: "center", paddingTop: "22px", paddingBottom: "70px" }}>
          <Col md={10}>
            <div ref={contentRef} className="experience-card">
              <div className="experience-header">
                <h3 className="experience-role">
                  <span className="purple">{activeExp.role}</span>{" "}
                  <span className="experience-sep">|</span> {activeExp.company}
                </h3>
                <div className="experience-dates">{activeExp.dates}</div>
              </div>

              <ul className="experience-list">
                {activeExp.bullets.map((b, idx) => (
                  <li key={`${activeExp.key}-${idx}`}>{b}</li>
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
