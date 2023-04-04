import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='p-5 flex gap-3 bg-gray-200'>
        <Link className= {"hover:underline"} to={"/"}> Todo </Link>
    </div>
  )
}

export default Header