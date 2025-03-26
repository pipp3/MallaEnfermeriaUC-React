import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-100 via-rose-50 to-pink-100 shadow-md">
      <nav className="max-w-screen-xl mx-auto px-4 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-500 to-rose-500 bg-clip-text text-transparent 
            hover:from-rose-500 hover:to-sky-500 transition-all duration-300 transform hover:scale-105">
            Malla Enfermería UC 2022
          </h1>
          <div className="mt-2 sm:mt-0 flex items-center space-x-4">
            <a href="https://www.uc.cl" target="_blank" rel="noopener noreferrer" 
              className="text-gray-600 hover:text-sky-500 transition-colors duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L1 12h3v9h7v-6h2v6h7v-9h3L12 2zm0 2.84L19.93 12H19v7h-3v-6H8v6H5v-7H4.07L12 4.84z"/>
              </svg>
            </a>
            <a href="https://www.uc.cl/enfermeria" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 hover:text-rose-500 transition-colors duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
