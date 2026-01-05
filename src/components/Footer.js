import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  const year = new Date().getFullYear();

  // Update LinkedIn when you have it; email is already correct from your resume.
  const links = {
    linkedin: "https://www.linkedin.com/in/jayveen-patel/",
    email: "mailto:jayveenpatel31@gmail.com",
  };

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Jayveen Patel</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} JP</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href={links.linkedin}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a href={links.email} style={{ color: "white" }}>
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
