import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";

function NotFound() {
  return (
    <Container fluid className="project-section" role="main">
      <Particle />
      <Container style={{ paddingTop: "140px", paddingBottom: "80px" }}>
        <Row className="justify-content-center">
          <Col md={10} style={{ textAlign: "center" }}>
            <h1 className="project-heading">
              404 — <strong className="purple">Page Not Found</strong>
            </h1>

            <p style={{ color: "white", opacity: 0.9, marginBottom: "18px" }}>
              The page you’re looking for doesn’t exist, or the link may have changed.
            </p>

            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Button as={Link} to="/" variant="primary">
                Go Home
              </Button>

              <Button as={Link} to="/resume" variant="outline-light">
                View Resume
              </Button>

              <Button as={Link} to="/contact" variant="outline-light">
                Contact
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default NotFound;
