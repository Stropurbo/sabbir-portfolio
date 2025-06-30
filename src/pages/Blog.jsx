import React from 'react'
import { useParams } from 'react-router'
import blogpage from '../blogpage'

function Blog() {
	const { id } = useParams()
	const blog = blogpage.find((p) => p.id === parseInt(id))

	if (!blog) {
		return <p className="p-10 text-center text-red-500">Blog not found</p>
	}

	return (
		<div className="p-6 max-w-3xl mx-auto">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold mb-4">{blog.title}</h1>				
			</div>
			<img
				src={blog.image}
				alt={blog.title}
				className="rounded shadow mb-4 w-full"
			/>
			<p className="text-gray-800">{blog.fullDesc}</p>
		</div>
	)
}

export default Blog
