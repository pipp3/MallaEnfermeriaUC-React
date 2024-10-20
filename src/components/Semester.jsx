import React, { useContext } from "react";
import Course from "./Course.jsx";
import { CourseContext } from "../context/CourseContext.jsx";

const Semester = ({ semester, courses }) => {
  const { handleClick } = useContext(CourseContext);
  const handleSemesterClick = () => {
    courses.map((course) => handleClick(course));
  };

  return (
    <div className="ml-1 w-full">
      <div className="bg-rose-400">
        <h2
          className="font-semibold mb-2 text-center mt-2 text-white rounded-md hover:cursor-pointer"
          onClick={() => handleSemesterClick(courses)}
        >
          {semester}
        </h2>
      </div>

      <div className="space-y-1">
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Semester;
