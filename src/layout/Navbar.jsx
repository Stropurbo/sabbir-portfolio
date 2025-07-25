import React from 'react'

function Navbar() {
	return (
		<div>
			<div className="navbar bg-black text-white">

				<div className="navbar-start text-black">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{' '}
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>{' '}
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
						>
							<a
								href="/"
								className="hover:text-orange-500 px-2"
							>
								Home
							</a>

							<a
								href="about"
								className="hover:text-orange-500 px-2"
							>
								About
							</a>

							<a
								href="https://drive.google.com/file/d/1W6qRIfy7m1Xf664Ahf5TTvHS6SeBGqO-/view"
								target="_blank"
								className="hover:text-orange-500 px-2"
							>
								Resume
							</a>

							<a
								href="/#portfolio"
								className="hover:text-orange-500 px-2"
							>
								Portfolio
							</a>

							<a
								href="/#blog"
								className="hover:text-orange-500 px-2"
							>
								Blog
							</a>
						</ul>
					</div>
					<a
						href="/"
						className="btn btn-ghost text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
					>
						SABBIR
					</a>
				</div>

				<div className="navbar-end px-3 hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<a
							href="/"
							className="hover:text-orange-500 px-2"
						>
							Home
						</a>

						<a
							href="about"
							className="hover:text-orange-500 px-2"
						>
							About
						</a>

						<a
							href="https://drive.google.com/file/d/1W6qRIfy7m1Xf664Ahf5TTvHS6SeBGqO-/view"
							target="_blank"
							className="hover:text-orange-500 px-2"
						>
							Resume
						</a>

						<a
							href="/#portfolio"
							className="hover:text-orange-500 px-2"
						>
							Portfolio
						</a>

						<a
							href="/#blog"
							className="hover:text-orange-500 px-2"
						>
							Blog
						</a>
						<a
							href="/#contactme"
							className="hover:text-orange-500"
						>
							Contact Us
						</a>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar
