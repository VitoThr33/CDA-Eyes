import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-7xl md:text-8xl relative z-10"
      >
        Your Clear Vision Destination
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/kuntz.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-10 "
        style={{
          backgroundImage: `url(/guy-rock1.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/trees-left.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/trees-right.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/water.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/mountains.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      
    </div>
  );
}
