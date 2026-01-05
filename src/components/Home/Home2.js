// src/components/Home/Home2.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m an <b className="purple">FP&amp;A Analyst</b> with 4+ years of experience
              supporting <b className="purple">banking and financial services</b> through
              budgeting, forecasting, and data-driven financial modeling.
              <br />
              <br />
              I specialize in translating complex financial and operational data into
              <b className="purple"> actionable insights</b> for leadership—using robust
              variance analysis, KPI tracking, and scenario planning.
              <br />
              <br />
              I’m proficient in{" "}
              <i>
                <b className="purple">Advanced Excel, SQL, Python, and Power BI</b>
              </i>{" "}
              to automate reporting, improve forecast accuracy, and scale decision-ready
              dashboards.
              <br />
              <br />
              Whenever possible, I focus on building{" "}
              <i>
                <b className="purple">repeatable financial workflows</b>
              </i>{" "}
              that reduce manual effort, improve data reliability, and accelerate planning cycles.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
