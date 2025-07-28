import React from 'react'
import { useParams } from 'react-router'
import blogpage from '../blogpage'
import ReactMarkdown from 'react-markdown'

function Blog() {
	const { id } = useParams()
	const blog = blogpage.find((p) => p.id === parseInt(id))

	if (!blog) {
		return <p className="p-10 text-center text-red-500">Blog not found</p>
	}

	return (
		<div className="px-4 py-10 max-w-4xl mx-auto text-white">
			{/* Title */}
			<h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
				{blog.title}
			</h1>

			{/* Image */}
			<img
				src={blog.image}
				alt={blog.title}
				className="rounded-lg shadow-lg mb-8 w-full object-cover"
			/>

			{/* Blog Content */}
			<article className="prose prose-invert prose-lg max-w-none text-black">
				{blog.fullDesc.split('\n').map((line, i) =>
					line.trim() ? (
						<p
							key={i}							
						>
							{line}
						</p>
					) : (
						<br key={`br-${i}`} />
					),					
				)}				
			</article>

			{/* Optional footer */}
			<div className="mt-10 text-sm text-gray-400 border-t border-gray-700 pt-6 flex justify-between items-center">
				<span>📅 Published: July 2025</span>
				<a
					href="#"
					className="text-blue-400 hover:underline"
				>
					← Back to All Blogs
				</a>
			</div>
		</div>
	)
}

export default Blog
