"use client";
import React from "react";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="flex justify-center items-center max-w-4xl text-xl text-white ">
          Hey There!👋
          <br /> I’m Mahmud Rayed, a student of Computer Science at North South
          University in Dhaka, Bangladesh. I’m on a constant quest for
          knowledge, always eager to explore new ideas and deepen my
          understanding. I thrive at the intersection of creativity and
          technology, where I use code to craft engaging experiences and solve
          complex problems. Whether it’s building sleek interfaces with
          React.js, Next.js, Hugo, and React Native, or diving into the backend
          world with Node.js and databases like MongoDB and MySQL, I love
          bringing ideas to life through software. When it comes to programming
          languages, I’m a bit of a polyglot! From the flexibility of JavaScript
          to the versatility of Python, and from the robustness of Java to the
          efficiency of C++ and C, I enjoy navigating the diverse landscapes of
          software development. Beyond coding, I’m a perpetual learner, always
          seeking new ways to innovate and make a positive impact with
          technology. Every project is an opportunity for growth, and I embrace
          challenges as stepping stones to mastery. Join me as we journey
          through the exciting possibilities of the digital realm, one line of
          code at a time. Let’s collaborate, create, and shape the future
          together!
        </p>
      </motion.div>
    </div>
  );
}

export default AboutMe;
