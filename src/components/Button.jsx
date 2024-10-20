import React,{useContext} from 'react'
import { CourseContext } from '../context/CourseContext'
export default function Button () {
    const {handleReset} = useContext(CourseContext)
  return (
    <div>
      <button
      type='button'
        onClick={handleReset}
        className='bg-rose-400 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded sm:w-auto w-full sm:py-8 sm:px-8 md:py-2 md:px-10'
      >
        Limpiar Cursos
      </button>
    </div>
  )
}


