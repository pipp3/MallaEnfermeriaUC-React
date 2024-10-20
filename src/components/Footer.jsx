import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center font-mono text-sm text-sky-600 bg-pink-100 pb-2 pt-2">
      <p>
        Created by <span className="font-bold cursor-pointer">pipp3</span>
      </p>
      <img src="/github.svg" alt="github logo" className="w-5" />
    </footer>
  );
};

export default Footer;
