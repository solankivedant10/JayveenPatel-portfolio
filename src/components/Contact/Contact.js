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

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name) return setStatus({ type: "danger", message: "Please enter your name." });
    if (!email || !isValidEmail(email))
      return setStatus({ type: "danger", message: "Please enter a valid email address." });
    if (!message || message.length < 15)
      return setStatus({
        type: "danger",
        message: "Please enter a message (at least 15 characters).",
      });

    // For now: UI-only mock submit. Later: send via Resend API or open Cal.com.
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 650));
      setStatus({
        type: "success",
        message:
          "Message ready. Next step: we will connect this form to Resend or Cal.com for real submissions.",
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

        <Row style={{ justifyContent: "center", paddingTop: "25px", paddingBottom: "60px" }}>
          <Col md={10} lg={8}>
            <div className="contact-card">
              {status.message && <Alert variant={status.type}>{status.message}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="contactName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="contactEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="contactMessage">
                  <Form.Label>Tell me about your requirement</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Share context, timeline, and what you'd like to achieve..."
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
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
                        />
                      </Col>
                    ))}
                  </Row>
                </div>

                {/* Optional preview (helps you verify values while testing) */}
                {selectedInterests.length > 0 && (
                  <div className="contact-preview">
                    <span className="purple">Selected:</span> {selectedInterests.join(", ")}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="contact-submit"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </Button>

                {/* Temporary fallback: mailto (remove once Resend/Cal is integrated) */}
                <div className="contact-fallback">
                  Prefer email?{" "}
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
