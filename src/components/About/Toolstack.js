import React from "react";
import { Col, Row } from "react-bootstrap";

// List of tools used.  Since not all brand icons are available,
// we render the names directly.
const tools = [
  "Microsoft Excel",
  "Power BI Service",
  "SAP FICO",
  "Oracle Financials",
  "Bloomberg",
  "Windows / macOS",
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((label) => (
        <Col key={label} xs={6} sm={4} md={2} className="tech-icons">
          {/* Render the tool name directly for consistent display */}
          <div className="tech-icons-text">{label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
