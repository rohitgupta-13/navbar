import React from 'react'
import Hero from './components/hero'
import { About } from './components/About'
import Courses from './components/Courses'

const App = () => {
  return (
    <div className='h-screen w-full bg-black relative'>
      <nav className="w-full h-20 bg-white flex items-center justify-between px-8 shadow-md sticky top-0 z-50 object-cover">

{/* Logo */}
<div className="flex items-center gap-3 cursor-pointer">
  <div className="h-11 w-11 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-lg">
    <img className='overflow-hidden h-13 w-13 object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST3-Nk5kaGl4Va2uS0dpgWw5TEuMZxpv416A&s" alt="" />
  </div>
  <h1 className="text-2xl font-bold text-gray-800">Dikota</h1>
</div>

{/* Links */}
<ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
  <li className="hover:text-indigo-600 cursor-pointer">Home</li>
  <li className="  hover:text-indigo-600 cursor-pointer">Courses</li>
  <li className="hover:text-indigo-600 cursor-pointer">About</li>
  <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
</ul>

{/* Right Section */}
<div className="flex items-center gap-4">

  {/* Search */}
  <div className="hidden lg:block">
    <input
      type="text"
      placeholder="Search courses..."
      className="bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />
  </div>

  {/* Login */}
  <button className="text-gray-600 hover:text-indigo-600 font-medium">
    Login
  </button>

  {/* CTA */}
  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-medium shadow-sm">
    Get Started
  </button>

</div>
</nav>
      <Hero />
      <About />
      <Courses />
    </div>
  )
}

export default App