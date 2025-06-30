import React from 'react'
import Mainlayout from '../layout/MainLayout'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router'
import AllProjects from '../pages/AllProjects'
import ProjectDetails from '../pages/ProjectDetails'
import Blog from '../pages/Blog'
import About from '../pages/About'

const AppRoutes = () => {
	return (
		<div className="overflow-hidden">
			<Routes>
				<Route element={<Mainlayout />}>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="projects"
						element={<AllProjects />}
					/>
					<Route
						path="projects/:id"
						element={<ProjectDetails />}
					/>
					<Route
						path="blog/:id"
						element={<Blog />}
					/>
					<Route
						path="about"
						element={<About />}
					/>
				</Route>
			</Routes>
		</div>
	)
}

export default AppRoutes
