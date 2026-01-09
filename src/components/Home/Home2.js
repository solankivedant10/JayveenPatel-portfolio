import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A bit <span className="purple">about me</span>
            </h1>

            <p className="home-about-body">
              I’m a <b className="purple">Strategic FP&amp;A and Business Analyst</b> with{" "}
              <b className="purple">4+ years</b> of experience across{" "}
              <b className="purple">banking and financial services</b>.
              <br />
              <br />
              I help teams make better decisions by improving forecast accuracy, identifying cost drivers,
              and building leadership-ready KPI reporting. My work includes managing large operating budgets,
              performing variance and trend analysis, and creating scenario models for strategic planning.
              <br />
              <br />
              I work hands-on with{" "}
              <i>
                <b className="purple">Advanced Excel, SQL, Python, Power BI, SAP FICO, and Oracle</b>
              </i>{" "}
              to automate reporting workflows and deliver clear, decision-ready insights.
            </p>
          </Col>

          <Col md={4} className="myAvtar d-flex justify-content-center">
            <Tilt
              tiltMaxAngleX={prefersReducedMotion ? 0 : 10}
              tiltMaxAngleY={prefersReducedMotion ? 0 : 10}
              perspective={1000}
              glareEnable={!prefersReducedMotion}
              glareMaxOpacity={0.15}
              scale={prefersReducedMotion ? 1 : 1.02}
            >
              <img
                src={myImg}
                alt="Jayveen Patel profile"
                className="img-fluid rounded-circle"
                style={{
                  maxWidth: "240px",
                  border: "4px solid var(--imp-text-color)",
                  boxShadow: "0 0 25px rgba(47, 230, 208, 0.35)",
                }}
                loading="lazy"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
