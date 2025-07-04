import React, { useEffect } from 'react'
import projects from '../projects'
import { Link, useLocation } from 'react-router'
import blogpage from '../blogpage'

function Banner() {

	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const id = location.hash.replace('#', '');
			const element = document.getElementById(id);
			if (element) {
				setTimeout(() => {
					element.scrollIntoView({ behavior: 'smooth' })
				}, 100)
			}
		}
	}, [location]);

	return (
		<div className="px-5">
			<section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white py-10">
				<div className="space-y-6">
					<h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
						FULL-STACK <br />
						DEVELOPER
					</h1>
					<p className="max-w-xl text-gray-300">
						Hi! I'm Sabbir Hasan. A passionate developer crafting full-stack web
						applications with modern technologies like React, Tailwind, Django, and
						PostgreSQL.
					</p>
					<a
						href="https://drive.google.com/file/d/1W6qRIfy7m1Xf664Ahf5TTvHS6SeBGqO-/view"
						target="_blank"
						className="btn btn-primary"
					>
						Download Resume
					</a>
				</div>

				<div className="flex justify-center">
					<img
						src="https://i.ibb.co/cS1nNSvG/Untitled-design-1.png"
						alt="Developer Illustration"
						className="max-w-[300px] md:max-w-[400px]"
					/>
				</div>
			</section>

			<section className="py-12">
				<h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent w-fit mx-auto">
					EDUCATION
				</h2>
				<div className="flex justify-center">
					<ul className="ml-5 text-gray-200 items-center">
						<li>MBA in Management - National University (2017 - 2018)</li>
						<li>BBA in Management - National University (2021 - 2022)</li>
					</ul>
				</div>
			</section>

			<section className="mt-16">
				<h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent w-fit mx-auto">
					SKILLS
				</h2>

				<div className="flex flex-wrap gap-3 text-white justify-center mt-7">
					<span className="badge badge-info">React</span>
					<span className="badge badge-success">Tailwind CSS</span>
					<span className="badge badge-warning">Django</span>
					<span className="badge badge-accent">PostgreSQL</span>
					<span className="badge badge-secondary">JavaScript</span>
					<span className="badge badge-primary">Python</span>
				</div>
			</section>

			<section
				className="py-12"
				id="portfolio"
			>
				<div className="flex justify-between items-center">
					<h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent w-fit mx-auto">
						PORTFOLIO
					</h2>
					<a
						href="projects"
						className="text-sm font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent w-fit"
					>
						All Projects
					</a>
				</div>
				<div className="flex flex-wrap gap-6 justify-center mt-7">
					{projects.map((project) => (
						<div
							key={project.id}
							className="pevent-card min-w-[256px] md:w-96 bg-white shadow-lg rounded-lg p-3 group"
						>
							<div className="pevent-image relative flex items-center justify-center overflow-hidden rounded">
								<img
									src={project.image}
									alt={project.title}
									className="h-60 w-full object-cover rounded transition-transform duration-500 group-hover:scale-110"
								/>
							</div>
							<div className="pevent-info mt-2">
								<h2 className="font-bold text-lg text-center line-clamp-1">
									{project.title}
								</h2>
								<p className="text-center p-2 text-yellow-500">
									{'★'.repeat(project.rating)}
									{'☆'.repeat(5 - project.rating)}
								</p>
								<p className="text-sm text-gray-600 text-center line-clamp-2">
									{project.shortDesc}
								</p>
								<div className="flex justify-center p-2">
									<Link
										to={`/projects/${project.id}`}
										className="border border-orange-500 rounded-md hover:bg-gray-500 w-24 p-2 text-sm text-black text-center"
									>
										View Details
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			<section
				id="blog"
				className="py-12"
			>
				<div className="flex justify-between">
					<h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent w-fit mx-auto">
						LATEST BLOG
					</h2>
				</div>
				<div className="flex flex-wrap gap-6 justify-center mt-7">
					{blogpage.map((blog) => (
						<div
							key={blog.id}
							className="pevent-card min-w-[256px] md:w-96 bg-white shadow-lg rounded-lg p-3 group"
						>
							<div className="pevent-image relative flex items-center justify-center overflow-hidden rounded">
								<img
									src={blog.image}
									alt={blog.title}
									className="h-60 w-full object-cover rounded transition-transform duration-500 group-hover:scale-110"
								/>
							</div>
							<div className="pevent-info mt-2">
								<h2 className="w-50 font-bold text-lg text-start px-5 py-3">
									{blog.title}
								</h2>

								<div className="flex justify-start px-5 ">
									<Link
										to={`/blog/${blog.id}`}
										className="font-bold text-orange-500 text-start"
									>
										Read More <span className="text-lg">→</span>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			<section
				id="contactme"
				className="py-12 px-4 md:px-10"
			>
				<h2 className="text-3xl font-semibold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent w-fit mx-auto text-center">
					I WANT TO HEAR FROM YOU
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
					{/* Contact Form */}
					<form className="space-y-4 w-full">
						<input
							type="text"
							placeholder="Your Name"
							className="input input-bordered w-full"
						/>
						<input
							type="email"
							placeholder="Your Email"
							className="input input-bordered w-full"
						/>
						<textarea
							className="textarea textarea-bordered w-full"
							rows={4}
							placeholder="Your Message"
						></textarea>
						<button
							type="submit"
							className="btn btn-primary"
						>
							Send Message
						</button>
					</form>

					{/* Contact Info */}
					<div className="flex flex-col gap-6 justify-center">
						<div className="flex items-start gap-4">
							<img
								src="https://i.ibb.co/WNqZM8V8/image-removebg-preview.png"
								alt="Address Icon"
								className="h-10 w-10"
							/>
							<div>
								<h3 className="text-xl font-bold">Address</h3>
								<p className="text-sm font-normal">
									Mirpur 10, Dhaka, Bangladesh
								</p>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<img
								src="https://i.ibb.co/wFc83Dpy/image-removebg-preview.png"
								alt="Phone Icon"
								className="h-10 w-10"
							/>
							<div>
								<h3 className="text-xl font-bold">Phone</h3>
								<p className="text-sm font-normal">+8801751056077</p>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<img
								src="https://i.ibb.co/dsft3WY1/image-removebg-preview.png"
								alt="Email Icon"
								className="h-10 w-10"
							/>
							<div>
								<h3 className="text-xl font-bold">E-mail</h3>
								<p className="text-sm font-normal">sabbir.hasan.ca@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Banner
