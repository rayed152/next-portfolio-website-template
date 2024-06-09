"use client";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Project from "@/components/Project";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const backdropVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const modalVariants = {
  open: { y: 0, opacity: 1 },
  closed: { y: "100%", opacity: 0 },
};

export default function Home() {
  const [openModal, setModal] = useState(false);

  const handleModal = () => {
    setModal((prevState) => !prevState);
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-[#222831] to-[#76ABAE]">
      <div className="pl-6 md:pl-28 bg-[] text-white h-1/2 flex justify-center">
        <Header />
      </div>
      <div className="h-full bg-[] overflow-y-auto">
        <Project />
      </div>

      <AnimatePresence mode="wait">
        {openModal && (
          <motion.div
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/50 z-40"
            onClick={handleModal}
          />
        )}
        {openModal && (
          <motion.div
            variants={modalVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed bottom-1/2 left-0 right-0 p-4 rounded-t-xl z-50"
          >
            <Contact handleModal={handleModal} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Small button for SM screens */}
      <motion.div className="fixed top-13 right-2 sm:hidden">
        <button
          className="w-10 h-10 flex justify-center items-center rounded-full bg-slate-400 text-black text-[10px] hover:scale-110 hover:shadow-lg hover:shadow-orange-300 border border-solid border-sky-700"
          style={{
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          }}
          type="button"
          onClick={handleModal}
        >
          Contact
        </button>
      </motion.div>

      {/* Existing button for larger screens */}
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        className="fixed bottom-10 right-8 hidden sm:block" // Show on non-SM screens
      >
        <button
          className="w-36 h-36 flex justify-center items-center rounded-full bg-slate-400 text-black text-xl hover:scale-110 hover:shadow-lg hover:shadow-orange-300 border border-solid border-sky-700"
          style={{
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          }}
          type="button"
          onClick={handleModal}
        >
          Contact
        </button>
      </motion.div>
    </div>
  );
}
