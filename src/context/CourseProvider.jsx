import React, { useEffect, useState } from "react";
import { CourseContext } from "./CourseContext";
import {ramos2022} from "../utils/malla-2022"

//get info from localStorage
const storedFinishedCourses =
  JSON.parse(localStorage.getItem("finishedCourses")) || [];
const credits = JSON.parse(localStorage.getItem("credits")) || 0;

export const CourseProvider = ({ children }) => {
  //set info from localStorage
  const [finishedCourses, setFinishedCourses] = useState(storedFinishedCourses);
  const [totalCredits, setTotalCredits] = useState(credits);

  const data=ramos2022;

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

  //To store finishedCourse and credits
  useEffect(() => {
    localStorage.setItem("finishedCourses", JSON.stringify(finishedCourses));
    localStorage.setItem("credits", JSON.stringify(totalCredits));
  }, [finishedCourses]);

  
  //To reset everything
  const handleReset = () => {
    setTotalCredits(0);
    setFinishedCourses([]);
  };

  //TAKE A COURSE

  const handleClick = course => {
    const isFinished = finishedCourses.includes(course.id);
    if (!isFinished) {
      if (course.cr) setTotalCredits(state => state + course.cr);

      setFinishedCourses(prevFinishedCourses => [
        ...prevFinishedCourses,
        course.id,
      ]);
    } else {
      if (course.cr) setTotalCredits(state => state - course.cr);
      setFinishedCourses(prevFinishedCourses =>
        prevFinishedCourses.filter(id => id != course.id)
      );
    }
  };

  return (
    <CourseContext.Provider
      value={{
        handleReset,
        totalCredits,
        setTotalCredits,
        finishedCourses,
        setFinishedCourses,
        coursesBySemesterAndYear,
        handleClick,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};