// src/components/About/Toolstack.js
import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="Operating System" className="tech-icon-images" />
        <div className="tech-icons-text">Workstation</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={chrome} alt="Browser" className="tech-icon-images" />
        <div className="tech-icons-text">Browser</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="Editor" className="tech-icon-images" />
        <div className="tech-icons-text">Automation Scripts</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={intelliJ} alt="IDE" className="tech-icon-images" />
        <div className="tech-icons-text">Data Tooling</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
