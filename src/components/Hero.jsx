import React from 'react'

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center px-8">

  <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
        Learn Skills That  
        <span className="text-indigo-600"> Shape Your Future</span>
      </h1>

      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
        Dikota offers high-quality, practical courses designed to help students
        and professionals master real-world skills.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium shadow-md">
          Explore Courses
        </button>

        <button className="border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 px-6 py-3 rounded-full font-medium text-gray-700">
          Watch Demo
        </button>
      </div>

      {/* Stats */}
      <div className="mt-10 flex gap-8 text-sm text-gray-600">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">50+</h3>
          <p>Courses</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">10k+</h3>
          <p>Students</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">4.8★</h3>
          <p>Rating</p>
        </div>
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div className="relative">
      <div className="bg-white rounded-3xl shadow-xl p-6">

        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
          alt="Learning"
          className="rounded-2xl"
        />

        {/* Floating Card */}
        <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-2xl p-4">
          <p className="text-sm text-gray-500">Most Popular</p>
          <h4 className="font-semibold text-gray-900">UI/UX Design</h4>
          <p className="text-indigo-600 font-medium">⭐ 4.9 Rating</p>
        </div>

      </div>
    </div>

  </div>
</section>
  )
}

export default Hero