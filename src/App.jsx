import React from 'react'
import Hero from './components/Hero'
import { About } from './components/About'
import Courses from './components/Courses'

const App = () => {
  return (
    <div className='h-screen w-full bg-black'>
  <nav className='w-full h-[10%] bg-white flex items-center justify-evenly'>

    <div className='flex items-center justify-start gap-2'>
      <div className='flex items-center justify-center rounded-full bg-blue-200 h-12 w-12'>
        <img
          className='object-cover h-12 w-12'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST3-Nk5kaGl4Va2uS0dpgWw5TEuMZxpv416A&s"
          alt=""
        />
      </div>
      <div className='font-medium text-4xl'>
        <h1>Dikota</h1>
      </div>
    </div>

    <div className='w-96 h-10 rounded-3xl bg-fuchsia-100 px-4'>
      <input type="text" className='h-full w-full bg-transparent outline-none' />
    </div>

    <ul className='flex items-center justify-center gap-10 font-medium'>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Courses</li>
    </ul>

    <button className='bg-purple-500 rounded-3xl px-4 py-2 text-white font-medium'>
      <h3>Login</h3>
    </button>

  </nav>
      <Hero />
      <About />
      <Courses />
    </div>
  )
}

export default App