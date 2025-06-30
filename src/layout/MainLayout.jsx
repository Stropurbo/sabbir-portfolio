import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router'

const Mainlayout = () => {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />

			<main className="flex-1">
				<Outlet />
			</main>
      
			<Footer />
		</div>
	)
}

export default Mainlayout
