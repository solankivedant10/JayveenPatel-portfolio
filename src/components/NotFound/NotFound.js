import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";

function NotFound() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{ paddingTop: "140px", paddingBottom: "80px" }}>
        <Row style={{ justifyContent: "center" }}>
          <Col md={10} style={{ textAlign: "center" }}>
            <h1 className="project-heading">
              Page <strong className="purple">Not Found</strong>
            </h1>
            <p style={{ color: "white", opacity: 0.9 }}>
              The link you followed doesn’t exist or has been moved.
            </p>
            <Button as={Link} to="/" variant="primary" style={{ marginTop: "10px" }}>
              Go Home
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default NotFound;
