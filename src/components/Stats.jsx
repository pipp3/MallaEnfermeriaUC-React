import React, { useContext } from "react";
import { CourseContext } from "../context/CourseContext";

export default function Stats() {
  const { totalCredits, finishedCourses } = useContext(CourseContext);

  return (
    <div className="flex flex-col sm:flex-row justify-center text-center ml-2 items-center text-sky-500 font-semibold bg-rose-100 rounded-md p-2 hover:bg-rose-700 hover:text-white cursor-pointer sm:py-2 md:px-8">
      <div className="flex mr-12 mb-2 sm:mb-0 sm:mr-8">
        <p className="mr-2">Total creditos: {totalCredits} de 515</p>{""}
        <p>({((totalCredits * 100) / 515).toFixed(1)}%)</p>
      </div>

      <div className="flex">
        <p className="mr-2">Ramos aprobados: {finishedCourses.length}</p>
        <p>({((finishedCourses.length * 100) / 43).toFixed(1)}%)</p>
      </div>
    </div>
  );
};