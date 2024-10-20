import React from "react";

const InfoSection = () => {
  return (
    <div className="flex my-4 items-center mx-auto justify-center px-5">
      <div className="w-80 sm:justify-start sm:block hidden">
        Puedes tachar tus ramos aprobados haciendo click en ellos. A medida que
        vas aprobando ramos, se van liberando los que tienen prerrequisitos.
      </div>
      <div className="w-[480px]">
        <img src="/info.png" alt="Información Ramo" />
      </div>
    </div>
  );
};

export default InfoSection;
