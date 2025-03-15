"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { useEffect } from "react";
const getRandomPosition = () => `${Math.random() * 100 - 50}%`;

const GradientAI = () => {
  const [randomX, setRandomX] = useState("0%");
  const [randomY, setRandomY] = useState("0%");

  useEffect(() => {
    setRandomX(getRandomPosition());
    setRandomY(getRandomPosition());
  }, []);

  return (
    <div className="absolute z-20 inset-0 w-full overflow-hidden pointer-events-none">
      <motion.div
        className="absolute bg-gradient-to-br from-blue-300 via-blue-400 to-orange-300 opacity-40 blur-3xl"
        initial={{
          x: randomX,
          y: randomY,
          scale: 0.8,
          rotate: 0,
          borderRadius: "50%",
        }}
        animate={{
          x: ["0%", "70%", "20%", "80%", "0%"],
          y: ["-40%", "70%", "-30%", "30%", "-40%"],
          scale: [0.8, 1.1, 0.9, 1.2, 0.8],
          rotate: [0, 90, 180, 270, 360],
          borderRadius: ["30%", "50%", "70%", "40%", "60%"],
          width: ["400px", "500px", "450px", "550px", "480px"],
          height: ["400px", "500px", "450px", "550px", "480px"],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default GradientAI;
