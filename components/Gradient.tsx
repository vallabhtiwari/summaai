"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { useEffect } from "react";

const GradientAI = () => {
  const getRandomPosition = () => `${Math.floor(Math.random() * 100)}%`;

  const [randomX1, setRandomX1] = useState("0%");
  const [randomY1, setRandomY1] = useState("0%");
  const [randomX2, setRandomX2] = useState("0%");
  const [randomY2, setRandomY2] = useState("0%");

  useEffect(() => {
    setRandomX1(getRandomPosition());
    setRandomY1(getRandomPosition());
    setRandomX2(getRandomPosition());
    setRandomY2(getRandomPosition());
  }, []);

  const generateAnimation = (x: string, y: string) => ({
    initial: {
      x,
      y,
      scale: 0.6,
      rotate: 0,
      borderRadius: "50%",
    },
    animate: {
      x: ["0%", "60%", "10%", "80%", "0%"],
      y: ["-30%", "50%", "-20%", "40%", "-30%"],
      scale: [0.6, 0.8, 0.7, 0.9, 0.6],
      rotate: [0, 120, 240, 360],
      borderRadius: ["40%", "60%", "30%", "50%"],
      width: ["200px", "250px", "220px"],
      height: ["200px", "250px", "220px"],
    },
    transition: { duration: 25, repeat: Infinity, ease: "easeInOut" },
  });

  return (
    <div className="absolute inset-0 w-full overflow-hidden pointer-events-none z-2">
      <motion.div
        className="absolute bg-gradient-to-br from-blue-300 via-blue-400 to-orange-300 opacity-40 blur-3xl"
        {...generateAnimation(randomX1, randomY1)}
      />

      {/* Second Gradient Element */}
      <motion.div
        className="absolute bg-gradient-to-br from-purple-300 via-pink-400 to-yellow-300 opacity-40 blur-3xl"
        {...generateAnimation(randomX2, randomY2)}
      />
    </div>
  );
};

export default GradientAI;
