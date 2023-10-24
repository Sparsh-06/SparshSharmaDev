import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='px-10'>
      <ul className="h-20 flex justify-between items-center text-white">
        <div className="text-3xl font-bold md:flex-1">Sparsh <span className="text-red-700">Sharma</span></div>
        <div className=" justify-around gap-8 md:flex hidden">
            <Link to={'/'}>Home</Link>
            <Link to='/techs'>Gearings</Link>
            <Link to='/contact'>Contact me</Link>
            <Link to='/projects'>Projects</Link>
        </div>
      </ul>
    </div>
  )
}

export default Navigation

