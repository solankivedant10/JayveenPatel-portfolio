// src/components/About/Techstack.js
import React from "react";
import { Col, Row } from "react-bootstrap";

// Reusing available icons in this template repo.
// This section is re-labeled via text to reflect FP&A / analytics tooling.
import Python from "../../Assets/TechIcons/Python.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="AWS" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Kafka} alt="Kafka" className="tech-icon-images" />
        <div className="tech-icons-text">Kafka</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">APIs</div>
      </Col>
    </Row>
  );
}

export default Techstack;
