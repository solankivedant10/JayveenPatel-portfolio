import React from "react";
import Particles from "react-tsparticles";

function Particle() {
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
            value: 140,
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
              speed: 0.8,          // <-- faster twinkle (visible)
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
            speed: 0.6,            // <-- THIS is the main fix (visible floating)
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
              enable: false,
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
