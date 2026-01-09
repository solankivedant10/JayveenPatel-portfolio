import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />

      <Container>
        <Row className="justify-content-center" style={{ padding: "10px" }}>
          <Col
            md={7}
            className="d-flex flex-column justify-content-center"
            style={{ paddingTop: "30px", paddingBottom: "50px" }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>

            <AboutCard />
          </Col>

          <Col
            md={5}
            className="about-img"
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
          >
            <img src={laptopImg} alt="About section visual" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I Use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
