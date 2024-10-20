import React, { useContext } from "react";
import { CourseContext } from "../context/CourseContext";

export default function Stats() {
  const { totalCredits, finishedCourses } = useContext(CourseContext);

  return (
    <div className="flex justify-center text-center ml-2 items-center text-sky-500 font-semibold bg-rose-100 rounded-md p-2 hover:bg-rose-700 hover:text-white cursor-pointer">
      <div className="flex mr-12">
        <p className="mr-2">Total creditos: {totalCredits}</p>{" "}
        <p>({((totalCredits * 100) / 515).toFixed(1)}%)</p>
      </div>

      <div className="flex">
        <p className="mr-2">Ramos aprobados: {finishedCourses.length}</p>
        <p>({((finishedCourses.length * 100) / 43).toFixed(1)}%)</p>
      </div>
    </div>
  );
};