import React from "react";

const InfoSection = () => {
  return (
    <div className="flex flex-col sm:flex-row my-4 items-center mx-auto justify-center px-5">
      <div className="w-full sm:w-80 text-center sm:text-left mb-4 sm:mb-0">
        <p className="text-sm sm:text-base">
          Puedes tachar tus ramos aprobados haciendo click en ellos. A medida que
          vas aprobando ramos, se van liberando los que tienen prerrequisitos.
        </p>
      </div>
      <div className="w-full sm:w-[480px]">
        <img src="/info.png" alt="Información Ramo" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default InfoSection;
