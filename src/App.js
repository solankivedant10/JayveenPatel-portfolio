// src/App.js
import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound/NotFound";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ProjectDetail from "./components/Projects/ProjectDetails/ProjectDetails";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";

// ✅ Priority A: HashRouter prevents refresh/deep-link 404 on static hosting (GitHub Pages/Vercel static)
// If you deploy on a server with rewrites, you can swap back to BrowserRouter.
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />

          {/* ✅ Canonical list route */}
          <Route path="/projects" element={<Projects />} />

          {/* ✅ Backward-compatible alias */}
          <Route path="/project" element={<Navigate to="/projects" replace />} />

          {/* ✅ Detail route aligned under /projects */}
          <Route path="/projects/:slug" element={<ProjectDetail />} />

          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />

          {/* Keep wildcard last. We'll add a real 404 in Priority B. */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
