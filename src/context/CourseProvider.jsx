import { useEffect, useState } from "react";
import { ramos2022 } from "../utils/malla-2022";
import { CourseContext } from "./CourseContext";

const storedFinishedCourses =
  JSON.parse(localStorage.getItem("finishedCourses")) || [];
const credits = JSON.parse(localStorage.getItem("credits")) || 0;

export const CourseProvider = ({ children }) => {
  const [finishedCourses, setFinishedCourses] = useState(storedFinishedCourses);
  const [totalCredits, setTotalCredits] = useState(credits);
  // use malla selected
  const data = ramos2022;

  // divide courses by semester
  const coursesBySemesterAndYear = data.reduce((acc, course) => {
    const { year, semester } = course;
    if (!acc[year]) {
      acc[year] = {};
    }
    if (!acc[year][semester]) {
      acc[year][semester] = [];
    }
    acc[year][semester].push(course);
    return acc;
  }, {});

  useEffect(() => {
    localStorage.setItem("finishedCourses", JSON.stringify(finishedCourses));
    localStorage.setItem("credits", JSON.stringify(totalCredits));
  }, [finishedCourses]);

  const handleClick = (course) => {
    const isFinished = finishedCourses.includes(course.id);
    if (!isFinished) {
      if (course.cr) setTotalCredits((state) => state + course.cr);
      setFinishedCourses((prevFinishedCourses) => [
        ...prevFinishedCourses,
        course.id,
      ]);
    } else {
      if (course.cr) setTotalCredits((state) => state - course.cr);
      setFinishedCourses((prevFinishedCourses) =>
        prevFinishedCourses.filter((id) => id !== course.id)
      );
    }
  };

  return (
    <CourseContext.Provider
      value={{
        coursesBySemesterAndYear,
        handleClick,
        finishedCourses,
        totalCredits,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
