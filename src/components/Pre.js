// src/components/Pre.js
import React from "react";

function Pre({ load }) {
  // When load === false, the element still exists,
  // but CSS will fully remove it from interaction.
  return <div id={load ? "preloader" : "preloader-none"} />;
}

export default Pre;
