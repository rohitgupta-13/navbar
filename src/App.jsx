import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-full bg-black'>
      <nav className='w-full h-[10%] bg-white flex items-center justify-evenly'>

        <div className='flex items-center justify-start gap-2'>
        <div className='flex items-center justify-center rounded-full border-0 bg-blue-200 h-12.5 w-12.5'>
          <img className='object-cover h-13 w-13 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST3-Nk5kaGl4Va2uS0dpgWw5TEuMZxpv416A&s" alt="" />
        </div>
        <div className='font-medium text-4xl'><h1>Dikota</h1></div>
        </div>

        <div className='w-100 h-10 rounded-3xl bg-fuchsia-100 pl-4 pr-4'>
          <input type="text" name="" id="" className='h-full w-full' />
        </div>

        <ul className='flex items-center justify-center gap-10 font-medium'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Courses</li>
        </ul>

        <button className='bg-purple-500 rounded-3xl pl-4 pr-4 pt-2 pb-2 text-white font-medium'><h3>login</h3></button>
      </nav>
    </div>
  )
}

export default App