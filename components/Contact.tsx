"use client";
import React from "react";

interface ContactProps {
  handleModal: () => void;
}

const Contact: React.FC<ContactProps> = ({ handleModal }) => {
  return (
    <div className="max-w-[460px] bg-white shadow-lg py-2 rounded-md mx-auto">
      <h2 className="text-sm font-medium text-gray-900 border-b border-gray-300 py-3 px-4 mb-4">
        Contact
      </h2>
      <div className="px-4 pb-4">
        <p className="text-sm font-medium text-gray-700">Rayed152@gmail.com</p>
      </div>
      <div className="border-t border-gray-300 flex justify-between items-center px-4 pt-2">
        <button
          type="button"
          className="h-8 px-2 text-sm rounded-md bg-gray-700 text-white"
          onClick={handleModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Contact;
