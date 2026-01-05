// src/components/About/AboutCard.js
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
            <span className="purple">Texas, USA</span> (open to relocate).
            <br />
            <br />
            I’m a <span className="purple">Financial Planning &amp; Analysis (FP&amp;A) Analyst</span>{" "}
            with 4+ years of experience driving financial performance, strategic planning, and
            decision support within banking and financial services.
            <br />
            <br />
            My work focuses on{" "}
            <span className="purple">budgeting, forecasting, P&amp;L and variance analysis</span>, and
            building scalable financial models that improve accuracy and accelerate planning cycles.
            I leverage <span className="purple">SQL, Python, Power BI, and advanced Excel</span> to
            automate reporting, strengthen controls, and deliver clear executive insights.
            <br />
            <br />
            Highlights include managing large operating budgets, improving forecast precision, and
            developing automated dashboards and scenarios to guide leadership decisions.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Budgeting, forecasting, and scenario modeling
            </li>
            <li className="about-activity">
              <ImPointRight /> Automated reporting with Excel (Power Query/VBA), SQL, and Python
            </li>
            <li className="about-activity">
              <ImPointRight /> Executive KPI dashboards and variance storytelling in Power BI
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Make financial insights simple, actionable, and decision-ready."
          </p>
          <footer className="blockquote-footer">Jayveen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
