import React, { useEffect, useMemo, useState } from "react";
import Particles from "react-tsparticles";

function Particle() {
  const [particleCount, setParticleCount] = useState(120);

  useEffect(() => {
    const computeCount = () => (window.innerWidth < 768 ? 45 : 140);

    // Initialize once on mount
    setParticleCount(computeCount());

    // Update on resize (debounced lightly by the browser event loop)
    const onResize = () => setParticleCount(computeCount());
    window.addEventListener("resize", onResize, { passive: true });

    return () => window.removeEventListener("resize", onResize);
  }, []);

  const options = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 50,
      particles: {
        number: {
          value: particleCount,
          density: { enable: true, area: 1100 },
        },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.15, max: 0.75 },
          animation: {
            enable: true,
            speed: 0.8,
            minimumValue: 0.12,
            sync: false,
          },
        },
        size: { value: { min: 0.6, max: 1.6 }, random: true },
        move: {
          enable: true,
          speed: 0.4,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
          resize: true,
        },
      },
      detectRetina: true,
    }),
    [particleCount]
  );

  return <Particles id="tsparticles" options={options} />;
}

export default Particle;
