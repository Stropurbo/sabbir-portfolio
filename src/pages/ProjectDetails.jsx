import React from 'react'
import { useParams } from 'react-router'
import projects from '../projects'

function ProjectDetails() {    

    const { id } = useParams()
    const project = projects.find((p) => p.id === parseInt(id))

    if (!project) {
		return <p className="p-10 text-center text-red-500">Project not found</p>
	}

  return (
		<div className="p-6 max-w-5xl mx-auto space-y-10">
			{/* Header */}
			<div className="flex justify-between items-center flex-wrap gap-4">
				<a href='/' className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
					{project.title}
				</a>
				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					className="text-sm font-semibold text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
				>
					View Live Project
				</a>
			</div>

			{/* Image */}
			<img
				src={project.image}
				alt={project.title}
				className="rounded-lg shadow-md w-full object-cover"
			/>

			{/* Overview */}
			<div>
				<h2 className="text-2xl font-semibold mb-2 text-blue-600">Project Overview</h2>
				<p className="text-gray-800 leading-relaxed">{project.fullDesc}</p>
			</div>

			{/* Features */}
			<div>
				<h2 className="text-2xl font-semibold mb-2 text-purple-600">Major Features</h2>
				<ul className="list-disc pl-6 text-gray-700 space-y-2">
					{project.features?.map((feature, index) => (
						<li key={index}>{feature}</li>
					))}
				</ul>
			</div>

			{/* Technologies */}
			<div>
				<h2 className="text-2xl font-semibold mb-2 text-pink-600">Technologies Used</h2>
				<div className="flex flex-wrap gap-3 mt-3">
					{project.technologies?.map((tech, index) => (
						<span
							key={index}
							className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow"
						>
							{tech}
						</span>
					))}
				</div>
			</div>

			{/* Rating */}
			<div className="text-gray-700">
				⭐ <span className="text-yellow-500 font-semibold">{project.rating} / 5</span>
			</div>
		</div>
  )
}

export default ProjectDetails
