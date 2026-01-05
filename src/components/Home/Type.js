// src/components/Home/Type.js
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "FP&A Analyst",
          "Financial Planning & Forecasting",
          "Variance & KPI Analysis",
          "SQL • Python • Power BI • Advanced Excel",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
