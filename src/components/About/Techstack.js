import React from "react";
import { Col, Row } from "react-bootstrap";

// List of professional skills.  Without reliable icon slugs for all items,
// we display text in a uniform layout.
const skills = [
  "SQL",
  "Python",
  "Power BI",
  "Tableau",
  "Advanced Excel",
  "SAP FICO",
  "Oracle Financials",
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((label) => (
        <Col key={label} xs={6} sm={4} md={2} className="tech-icons">
          {/* Render the skill name directly since external icons are unreliable or unavailable */}
          <div className="tech-icons-text">{label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
