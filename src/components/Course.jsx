import React, { useState, useContext, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CourseContext } from "../context/CourseContext";

export default function Course({ course }) {
  const { finishedCourses, totalCredits, handleClick } =
    useContext(CourseContext);

  const [takeCourse, setTakeCourse] = useState(false);

  useEffect(() => {
    const isCreditRequired = "rc" in course;
    const creditCheck = isCreditRequired && totalCredits >= 400;

    const reqCheck = course.req.every((req) => {
      const isCompleted = finishedCourses.includes(req.id);
      return isCompleted && (!isCreditRequired || creditCheck);
    });

    if ("rc" in course) {
      setTakeCourse(reqCheck && creditCheck);
    } else {
      setTakeCourse(reqCheck);
    }
  }, [finishedCourses]);

  const isFinished = finishedCourses.includes(course.id);

  return (
    <div className="relative">
      <div
        className={`rounded-lg shadow-sm mb-2 w-32 hover:cursor-pointer ${
          isFinished ? "opacity-50" : ""
        } ${!takeCourse ? "opacity-25" : ""} mx-1`}
        onClick={() => handleClick(course)}
      >
        {/* Línea diagonal tachada */}
        {isFinished && (
          <div className="absolute inset-0 flex items-center justify-center">
            <AiOutlineClose className="w-24 h-24" />
          </div>
        )}
        <div className="flex justify-between bg-slate-400 font-bold px-2 py-1 items-center h-6">
          <p className="text-xs pl-1 text-white">{course.code}</p>
          <div className="relative inline-block">
            <div className="rounded-full bg-blue-500 h-5 w-5 flex items-center justify-center">
              <p className="text-xs text-white">{course.id}</p>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center text-center py-2 ${course.cc} w-full h-12 items-center`}
        >
          <p className="line-clamp-2 text-sm text-white font-medium">
            {course.course}
          </p>
        </div>
        <div className="flex justify-between p-1 bg-slate-400">
          <div className="flex justify-start">
            {course.req.map((r) => (
              <div
                key={r.id}
                className="mx-[1px] bg-sky-700 text-white p-[1px]"
              >
                <p className="text-xs">{r.id}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            {/* creditos */}
            <p className="h-4 w-4 text-center text-xs text-white font-semibold">
              {course.cr}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
