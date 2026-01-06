import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpg"; 
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m an <b className="purple">FP&A Analyst</b> with 4+ years of experience
              supporting <b className="purple">banking and financial services</b>.
              <br />
              <br />
              I specialize in translating complex financial data into
              <b className="purple"> actionable insights</b> using variance analysis, KPI tracking, and scenario planning.
              <br />
              <br />
              I’m proficient in{" "}
              <i>
                <b className="purple">Advanced Excel, SQL, Python, and Power BI</b>
              </i>{" "}
              to automate reporting and scale decision-ready dashboards.
            </p>
          </Col>

          <Col md={4} className="myAvtar d-flex justify-content-center">
            {/* Tilt gives a subtle 3D effect to your profile picture */}
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
              <img
                src={myImg}
                alt="Jayveen Patel"
                className="img-fluid rounded-circle"
                style={{
                  maxWidth: "240px",
                  border: "4px solid var(--imp-text-color)",
                  boxShadow: "0 0 25px rgba(47, 230, 208, 0.35)",
                }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;