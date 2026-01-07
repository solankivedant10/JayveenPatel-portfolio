import React, { useMemo, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";

const INTEREST_OPTIONS = [
  { key: "budgeting", label: "Budgeting & Forecasting" },
  { key: "dashboards", label: "Power BI Dashboards" },
  { key: "modeling", label: "Financial Modeling" },
  { key: "automation", label: "Reporting Automation" },
  { key: "kpi", label: "KPI & Variance Analysis" },
  { key: "other", label: "Other" },
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    interests: {},
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  // Memoizing the selected interests so it only recalculates when the interests object changes
  const selectedInterests = useMemo(() => {
    return INTEREST_OPTIONS.filter((opt) => form.interests[opt.key]).map((o) => o.label);
  }, [form.interests]);

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleInterest(key) {
    setForm((prev) => ({
      ...prev,
      interests: {
        ...prev.interests,
        [key]: !prev.interests[key],
      },
    }));
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const { name, email, message } = form;

    // First Principles: Validate before attempting any network requests
    if (!name.trim()) {
      return setStatus({ type: "danger", message: "Please enter your name." });
    }
    if (!isValidEmail(email)) {
      return setStatus({ type: "danger", message: "Please enter a valid email address." });
    }
    if (message.trim().length < 15) {
      return setStatus({
        type: "danger",
        message: "Please provide a bit more detail (at least 15 characters).",
      });
    }

    setSubmitting(true);

    try {
      // REAL INTEGRATION: Sending data to your serverless API
      // This endpoint will use the Resend SDK on the server side
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          interests: selectedInterests.length > 0 ? selectedInterests.join(", ") : "None specified",
        }),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent via Resend. I will get back to you shortly.",
        });
        // Clear form on success
        setForm({ name: "", email: "", message: "", interests: {} });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({ 
        type: "danger", 
        message: "Oops! Something went wrong while sending. Please try again or email me directly." 
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Let’s <strong className="purple">Talk</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Have a project in mind or a position to discuss? Drop me a message.
        </p>

        <Row style={{ justifyContent: "center", paddingTop: "25px", paddingBottom: "60px" }}>
          <Col md={10} lg={8}>
            <div className="contact-card">
              {status.message && (
                <Alert variant={status.type} style={{ borderRadius: "10px" }}>
                  {status.message}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="contactName">
                      <Form.Label className="form-label">Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        disabled={submitting}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="contactEmail">
                      <Form.Label className="form-label">Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        disabled={submitting}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="contactMessage">
                  <Form.Label className="form-label">Requirement Details</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Describe the role, project, or general inquiry..."
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    disabled={submitting}
                  />
                </Form.Group>

                <div className="contact-interests">
                  <div className="contact-interests-title">I’m interested in…</div>
                  <Row>
                    {INTEREST_OPTIONS.map((opt) => (
                      <Col xs={12} md={6} key={opt.key} className="mb-2">
                        <Form.Check
                          type="checkbox"
                          id={`interest-${opt.key}`}
                          label={opt.label}
                          checked={!!form.interests[opt.key]}
                          onChange={() => toggleInterest(opt.key)}
                          className="custom-checkbox"
                          disabled={submitting}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>

                {selectedInterests.length > 0 && (
                  <div className="contact-preview" style={{ marginTop: "15px", fontSize: "0.9rem" }}>
                    <span className="purple">Selected Focus:</span> {selectedInterests.join(", ")}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="contact-submit mt-4"
                  style={{ width: "100%", padding: "10px", fontWeight: "bold" }}
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </Button>

                <div className="contact-fallback">
                  Or email directly at{" "}
                  <a href="mailto:jayveenpatel31@gmail.com" className="purple">
                    jayveenpatel31@gmail.com
                  </a>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;