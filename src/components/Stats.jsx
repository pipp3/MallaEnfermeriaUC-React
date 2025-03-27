import React, { useContext } from "react";
import { CourseContext } from "../context/CourseContext";

export default function Stats() {
  const { totalCredits, finishedCourses } = useContext(CourseContext);

  return (
    <div className="flex flex-col sm:flex-row justify-center text-center ml-2 items-center gap-4 sm:gap-6 p-4 bg-gradient-to-r from-rose-50 to-rose-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-rose-600">{totalCredits}</div>
          <div className="text-xs text-gray-600">de 510 créditos</div>
        </div>
        <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
          <svg className="transform -rotate-90 w-full h-full">
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-gray-200"
            />
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-rose-500"
              strokeDasharray={`${(totalCredits / 510) * 226} 226`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-semibold text-rose-600">
            {((totalCredits * 100) / 510).toFixed(1)}%
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-rose-600">{finishedCourses.length}</div>
          <div className="text-xs text-gray-600">de 43 ramos</div>
        </div>
        <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
          <svg className="transform -rotate-90 w-full h-full">
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-gray-200"
            />
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-rose-500"
              strokeDasharray={`${(finishedCourses.length / 43) * 226} 226`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-semibold text-rose-600">
            {((finishedCourses.length * 100) / 43).toFixed(1)}%
          </div>
        </div>
      </div>
    </div>
  );
};