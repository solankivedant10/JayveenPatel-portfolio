import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  const year = new Date().getFullYear();

  const links = {
    linkedin: "https://www.linkedin.com/in/jayveen-patel/",
    email: "mailto:jayveenpatel31@gmail.com",
  };

  return (
    <Container fluid className="footer" role="contentinfo">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Jayveen Patel — Portfolio</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>© {year} Jayveen Patel</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons" aria-label="Social links">
            <li className="social-icons">
              <a
                href={links.linkedin}
                aria-label="LinkedIn profile"
                title="LinkedIn"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href={links.email}
                aria-label="Send email"
                title="Email"
                style={{ color: "white" }}
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
