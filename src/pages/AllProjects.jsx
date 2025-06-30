import React from 'react'
import projects from '../projects'
import { Link } from 'react-router'

function AllProjects() {
	return (
		<div className="p-8">
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
		</div>
	)
}

export default AllProjects
