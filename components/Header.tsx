"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const bounceTransition = {
  y: {
    duration: 1,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

function Header() {
  return (
    <div className="flex flex-col md:flex-row w-full md:p-0">
      <div className="md:w-1/2 md:pl-32 flex flex-col justify-center text-center md:text-left mb-4 md:mb-0">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mahmud Rayed
        </motion.h2>
        <motion.h3
          className="text-xl md:text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Love To Make Real Life Problems Into Digital Solutions
        </motion.h3>
      </div>

      <div className="md:w-1/2 flex items-center justify-center text-base md:text-xl text-center md:text-left">
        <div className="flex gap-6 md:gap-10">
          <Link
            href="#"
            className="hover:scale-110 hover:text-[#76ABAE] transition duration-300 text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 10 }}
              transition={bounceTransition}
            >
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </motion.div>
          </Link>
          <Link
            href="#"
            className="hover:scale-110 hover:text-[#76ABAE] transition duration-300 text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: -110 }}
              animate={{ opacity: 1, y: 10 }}
              transition={bounceTransition}
            >
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </motion.div>
          </Link>
          <Link
            href="https://www.facebook.com/mahmud.rayed.152/"
            className="hover:scale-110 hover:text-[#76ABAE] transition duration-300 text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: -120 }}
              animate={{ opacity: 1, y: 10 }}
              transition={bounceTransition}
            >
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </motion.div>
          </Link>
          <Link
            href="#"
            className="hover:scale-110 hover:text-[#76ABAE] transition duration-300 text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: -130 }}
              animate={{ opacity: 1, y: 10 }}
              transition={bounceTransition}
            >
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
