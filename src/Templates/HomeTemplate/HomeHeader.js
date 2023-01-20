/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../../Assets/Images/logo.png'

export default function HomeHeader() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
          <span className="w-28"><img className='scale-125 hover:scale-150 duration-500' src={logo} alt="logo" /></span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <button className="bg-blue-600 hover:scale-125 duration-500 flex mr-3 space-x-3 items-center px-4 py-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
            <span className="text-white text-lg font-semibold">Home</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
