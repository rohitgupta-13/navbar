import React from 'react'

export const Courses = () => {
  return (
    <section className="w-full py-24 bg-gray-50 px-8">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Explore Our <span className="text-indigo-600">Courses</span>
      </h2>
      <p className="mt-4 text-gray-600 text-lg">
        Practical, industry-focused learning designed for real careers.
      </p>
    </div>

    {/* Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Course Card */}
      <div className="grid-rows-subgrid bg-white rounded-3xl shadow-md hover:shadow-xl transition p-5">
        <img
          src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
          alt="UI/UX"
          className="rounded-2xl mb-4"
        />

        <div className="flex justify-between text-sm text-gray-500">
          <span>Beginner</span>
          <span>⭐ 4.9</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-2">
          UI/UX Design Mastery
        </h3>

        <p className="text-gray-600 text-sm mt-2">
          Learn wireframing, prototyping, and modern design systems.
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-indigo-600 font-bold text-lg">₹2,999</span>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm">
            Enroll Now
          </button>
        </div>
      </div>

      {/* Course Card */}
      <div className="grid-rows-subgrid bg-white rounded-3xl shadow-md hover:shadow-xl transition p-5">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Web Dev"
          className="rounded-2xl mb-4"
        />

        <div className="flex justify-between text-sm text-gray-500">
          <span>Intermediate</span>
          <span>⭐ 4.8</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-2">
          Full Stack Web Development
        </h3>

        <p className="text-gray-600 text-sm mt-2">
          Build real projects using React, Node, and databases.
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-indigo-600 font-bold text-lg">₹4,999</span>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm">
            Enroll Now
          </button>
        </div>
      </div>

      {/* Course Card */}
      <div className="grid-rows-subgrid bg-white rounded-3xl shadow-md hover:shadow-xl transition p-5">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
          alt="Marketing"
          className="rounded-2xl mb-4"
        />

        <div className="flex justify-between text-sm text-gray-500">
          <span>Beginner</span>
          <span>⭐ 4.7</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-2">
          Digital Marketing Essentials
        </h3>

        <p className="text-gray-600 text-sm mt-2">
          SEO, Ads, Social Media & growth strategies.
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-indigo-600 font-bold text-lg">₹1,999</span>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm">
            Enroll Now
          </button>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-14">
      <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-full font-medium transition">
        View All Courses
      </button>
    </div>

  </div>
</section>
  )
}

export default Courses