import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Jayveen Patel</span>, based in{" "}
            <span className="purple">Texas, USA</span>.
            <br />
            <br />
            I’m a <span className="purple">Strategic FP&A and Business Analyst</span>{" "}
            with <span className="purple">4+ years of experience</span> supporting
            financial planning, budgeting, forecasting, and profitability optimization
            across banking and financial services.
            <br />
            <br />
            I specialize in translating complex financial data into{" "}
            <span className="purple">clear, decision-ready insights</span> by combining
            strong financial fundamentals with{" "}
            <span className="purple">
              SQL, Python, Power BI, SAP FICO, and advanced Excel
            </span>.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Budgeting, forecasting, and P&amp;L analysis for large-scale
              banking portfolios
            </li>
            <li className="about-activity">
              <ImPointRight /> Variance, trend, and cost-driver analysis to improve
              financial performance
            </li>
            <li className="about-activity">
              <ImPointRight /> Automation of reporting workflows and executive KPI
              dashboards
            </li>
          </ul>

          <p
            style={{
              color: "#a8dadc",
              fontStyle: "italic",
              marginTop: "20px",
            }}
          >
            “Turning financial complexity into clarity for better decisions.”
          </p>

          <footer className="blockquote-footer">Jayveen Patel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
