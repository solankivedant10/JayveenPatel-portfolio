// src/components/Home/Type.js
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Strategic FP&A Analyst",
          "Business Analytics Professional",
          "Forecasting, Budgeting & Variance Analysis",
          "SQL • Python • Power BI • Advanced Excel",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        delay: 60,
      }}
    />
  );
}

export default Type;
