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
		<div className="p-6 max-w-3xl mx-auto">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold mb-4">{project.title}</h1>
				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					live project
				</a>
			</div>
			<img
				src={project.image}
				alt={project.title}
				className="rounded shadow mb-4 w-full"
			/>
			<p className="text-gray-700 mb-2">⭐ {project.rating} stars</p>
			<p className="text-gray-800">{project.fullDesc}</p>
		</div>
  )
}

export default ProjectDetails
