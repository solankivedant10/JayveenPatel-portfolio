import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const name = "Jayveen Patel";

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hello{" "}
                <span className="wave" role="img" aria-label="Waving hand">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I’m <strong className="main-name"> {name}</strong>
              </h1>

              <p style={{ color: "white", marginTop: "12px", marginBottom: 0 }}>
                Strategic FP&amp;A and Business Analyst focused on forecasting accuracy,
                cost optimization, and executive-ready insights.
              </p>

              <div style={{ paddingLeft: 45, paddingTop: 24, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="Financial analytics illustration"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                loading="eager"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
