import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center font-mono text-sm text-sky-600 bg-pink-100 pb-2 pt-2">
      <p>
        Created by{" "}
        <a
          href="https://portafolio-felipe-munozve.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold cursor-pointer hover:text-sky-800"
        >
          pipp3
        </a>
      </p>
      <img src="/portafolio.svg" alt="github logo" className="w-5 ml-1" />
    </footer>
  );
};

export default Footer;
