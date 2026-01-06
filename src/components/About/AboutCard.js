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
            I’m a <span className="purple">FP&A Analyst</span> with 4+ years of experience 
            driving financial performance and strategic planning within banking.
            <br />
            <br />
            I leverage <span className="purple">SQL, Python, Power BI, and advanced Excel</span> to
            automate reporting and deliver executive insights.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Budgeting, forecasting, and scenario modeling
            </li>
            <li className="about-activity">
              <ImPointRight /> Automated reporting (Power Query/VBA/Python)
            </li>
            <li className="about-activity">
              <ImPointRight /> Power BI KPI dashboards
            </li>
          </ul>

          {/* Updated this color to a lighter teal-grey for better contrast */}
          <p style={{ color: "#a8dadc", fontStyle: "italic", marginTop: "20px" }}>
            "Make financial insights simple, actionable, and decision-ready."
          </p>
          <footer className="blockquote-footer">Jayveen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;