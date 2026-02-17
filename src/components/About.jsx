import React from 'react'

export const About = () => {
  return (
    <section className="w-full py-24 bg-white px-8">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* IMAGE SIDE */}
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978"
        alt="About Dikota"
        className="rounded-3xl shadow-xl"
      />

      {/* Floating Badge */}
      <div className="absolute -top-6 -right-6 bg-indigo-600 text-white px-5 py-3 rounded-2xl shadow-lg">
        <h4 className="font-semibold">Trusted by 10k+ Students</h4>
      </div>
    </div>

    {/* TEXT SIDE */}
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        About <span className="text-indigo-600">Dikota</span>
      </h2>

      <p className="mt-6 text-gray-600 text-lg leading-relaxed">
        Dikota is a modern learning platform dedicated to helping students and
        professionals gain real-world, job-ready skills. We believe education
        should be practical, engaging, and accessible to everyone.
      </p>

      <p className="mt-4 text-gray-600 text-lg leading-relaxed">
        Our courses are designed by industry experts to ensure you learn what
        truly matters — not just theory, but skills you can apply immediately.
      </p>

      {/* Features */}
      <div className="mt-8 space-y-4">

        <div className="flex items-start gap-3">
          <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            ✓
          </div>
          <p className="text-gray-700">Expert-led practical courses</p>
        </div>

        <div className="flex items-start gap-3">
          <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            ✓
          </div>
          <p className="text-gray-700">Hands-on projects & assignments</p>
        </div>

        <div className="flex items-start gap-3">
          <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            ✓
          </div>
          <p className="text-gray-700">Career-focused learning paths</p>
        </div>

      </div>

      {/* CTA */}
      <button className="mt-10 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium shadow-md">
        Learn More
      </button>
    </div>

  </div>
</section>
  )
}

export default About