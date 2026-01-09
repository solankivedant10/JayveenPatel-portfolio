// src/App.js
import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import ProjectDetail from "./components/Projects/ProjectDetails/ProjectDetails";
import Resume from "./components/Resume/ResumeNew";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />

      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />

        {/* Optional: avoid rendering pages under the preloader */}
        {!load && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />

            <Route path="/projects" element={<Projects />} />
            <Route path="/project" element={<Navigate to="/projects" replace />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />

            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        )}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
