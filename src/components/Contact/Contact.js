import React, { useMemo, useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";

const INTEREST_OPTIONS = [
  { key: "budgeting", label: "Budgeting & Forecasting" },
  { key: "dashboards", label: "Power BI Dashboards & KPI Reporting" },
  { key: "modeling", label: "Scenario / Sensitivity Modeling" },
  { key: "automation", label: "Reporting Automation (VBA / Power Query)" },
  { key: "analysis", label: "Variance, Trend & Cost-Driver Analysis" },
  { key: "other", label: "Other" },
];

// Basic client-side rate limit to reduce accidental spam/retries.
// This is not security (server must still validate), but it improves UX and reduces noise.
const MIN_SECONDS_BETWEEN_SUBMITS = 20;

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    interests: {},
    // Honeypot field (bots often fill everything). Keep it hidden via inline style below.
    website: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const lastSubmitTsRef = useRef(0);

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

  function canSubmitNow() {
    const now = Date.now();
    const diffSeconds = (now - lastSubmitTsRef.current) / 1000;
    return diffSeconds >= MIN_SECONDS_BETWEEN_SUBMITS;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    // Honeypot: if filled, silently act like success (do not tell bot it was caught).
    if (form.website && form.website.trim().length > 0) {
      setStatus({ type: "success", message: "Thank you! Your message has been sent." });
      setForm({ name: "", email: "", message: "", interests: {}, website: "" });
      return;
    }

    if (!canSubmitNow()) {
      return setStatus({
        type: "danger",
        message: `Please wait a moment before sending another message.`,
      });
    }

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    // Validate before network request
    if (!name) {
      return setStatus({ type: "danger", message: "Please enter your name." });
    }
    if (!isValidEmail(email)) {
      return setStatus({ type: "danger", message: "Please enter a valid email address." });
    }
    if (message.length < 20) {
      return setStatus({
        type: "danger",
        message: "Please provide a bit more detail (at least 20 characters).",
      });
    }

    setSubmitting(true);
    lastSubmitTsRef.current = Date.now();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          interests: selectedInterests.length > 0 ? selectedInterests.join(", ") : "None specified",
          // include metadata that can help you on the backend (optional; harmless if ignored)
          source: "portfolio-site",
        }),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you — your message has been sent. I’ll get back to you shortly.",
        });
        setForm({ name: "", email: "", message: "", interests: {}, website: "" });
        return;
      }

      // Attempt to parse server error; fallback to generic message
      let errText = "Failed to send message.";
      try {
        const errorData = await response.json();
        errText = errorData?.message || errText;
      } catch {
        // ignore JSON parsing errors
      }
      throw new Error(errText);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        type: "danger",
        message:
          "Something went wrong while sending. Please try again, or email me directly using the link below.",
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
          Let’s <strong className="purple">Connect</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Interested in FP&amp;A, business analytics, or dashboarding support? Send a note below.
        </p>

        <Row style={{ justifyContent: "center", paddingTop: "25px", paddingBottom: "60px" }}>
          <Col md={10} lg={8}>
            <div className="contact-card">
              {status.message && (
                <Alert
                  variant={status.type}
                  style={{ borderRadius: "10px" }}
                  role="status"
                  aria-live="polite"
                >
                  {status.message}
                </Alert>
              )}

              <Form onSubmit={handleSubmit} noValidate>
                {/* Honeypot field (hidden) */}
                <div style={{ position: "absolute", left: "-9999px", top: "auto" }} aria-hidden="true">
                  <label htmlFor="contactWebsite">Website</label>
                  <input
                    id="contactWebsite"
                    type="text"
                    value={form.website}
                    onChange={(e) => updateField("website", e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

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
                        autoComplete="name"
                        aria-required="true"
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
                        autoComplete="email"
                        aria-required="true"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="contactMessage">
                  <Form.Label className="form-label">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Share the role, team, project, or context — and what you’d like to discuss."
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    disabled={submitting}
                    aria-required="true"
                  />
                </Form.Group>

                <div className="contact-interests">
                  <div className="contact-interests-title">Topics</div>
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
