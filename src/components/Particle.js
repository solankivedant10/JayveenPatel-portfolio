import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  // First Principle: Performance Optimization
  // Reduce the number of moving elements on mobile (width < 768px)
  // to prevent CPU lag and improve battery life.
  const particleCount = window.innerWidth < 768 ? 45 : 140;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: particleCount,
            density: {
              enable: true,
              area: 1100,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: { min: 0.15, max: 0.75 },
            animation: {
              enable: true,
              speed: 0.8,
              minimumValue: 0.12,
              sync: false,
            },
          },
          size: {
            value: { min: 0.6, max: 1.6 },
            random: true,
          },
          move: {
            enable: true,
            speed: 0.4, // Reduced slightly for a more professional, "calm" feel
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: false, // Disabled to prevent blocking clicks on your content
            },
            onClick: {
              enable: false,
            },
            resize: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;