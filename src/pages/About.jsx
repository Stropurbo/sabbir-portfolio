import React from 'react'

function About() {
  return (
		<section
			id="about"
			className="bg-white py-16 px-4 sm:px-6 lg:px-20"
		>
			<div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
				{/* Text Section */}
				<div className="w-full md:w-2/3">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
						About Me
					</h2>
					<p className="text-gray-600 text-base sm:text-lg leading-relaxed">
						I'm <span className="text-orange-500 font-semibold">Sabbir Hasan</span>,
						a passionate and detail-oriented full-stack developer from Bangladesh. I
						specialize in building responsive and interactive web apps using modern
						technologies like <strong>React</strong>, <strong>Django</strong>,{' '}
						<strong>Tailwind CSS</strong>, and <strong>JavaScript</strong>.
						<br />
						<br />I love crafting clean, user-centric designs and turning complex
						ideas into functional applications. Whether it’s an e-commerce platform,
						admin dashboard, or a personal portfolio – I build everything with
						performance and scalability in mind.
					</p>

					{/* Skill cards */}
					<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
						<div className="bg-gray-50 shadow-sm rounded-lg p-5 border">
							<h3 className="font-semibold text-lg mb-2 text-gray-700">
								🎯 Mission
							</h3>
							<p className="text-sm text-gray-600">
								Build fast, scalable, and user-friendly solutions that empower
								people and businesses.
							</p>
						</div>
						<div className="bg-gray-50 shadow-sm rounded-lg p-5 border">
							<h3 className="font-semibold text-lg mb-2 text-gray-700">
								🛠 Tech Stack
							</h3>
							<p className="text-sm text-gray-600">
								React, Django, JavaScript, Tailwind CSS, PostgreSQL, REST API,
								Git, Cloudinary, Vercel.
							</p>
						</div>
					</div>
				</div>

				{/* Image Section */}
				<div className="w-full md:w-1/3 flex justify-center">
					<img
						src="https://i.ibb.co/cS1nNSvG/Untitled-design-1.png"
						alt="Your profile"
						className="w-60 h-60 object-cover rounded-full shadow-lg"
					/>
				</div>
			</div>
		</section>
  )
}

export default About
