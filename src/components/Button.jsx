import React,{useContext} from 'react'
import { CourseContext } from '../context/CourseContext'
export default function Button () {
    const {handleReset} = useContext(CourseContext)
  return (
    <div className="w-full sm:w-auto">
      <button
        type='button'
        onClick={handleReset}
        className='w-full sm:w-auto bg-rose-400 hover:bg-rose-700 text-white font-bold py-2 px-6 rounded-lg 
        transition-all duration-300 ease-in-out transform hover:scale-105 
        shadow-md hover:shadow-lg active:scale-95
        text-sm sm:text-base
        flex items-center justify-center gap-2
        border-2 border-transparent hover:border-rose-300'
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
        Limpiar Cursos
      </button>
    </div>
  )
}


