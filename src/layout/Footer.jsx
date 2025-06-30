import React from 'react'

function Footer() {
	return (
		<div>
			<footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10  shadow-lg">
				<nav className="flex flex-col space-y-4 sm:space-y-6 sm:mr-12">
					<h6 className="footer-title text-lg font-semibold uppercase tracking-wide mb-2 text-orange-400">
						Services
					</h6>
					<a
						href="#"
						className="link link-hover text-gray-300 hover:text-orange-400 transition-colors duration-300"
					>
						Branding
					</a>
					<a
						href="#"
						className="link link-hover text-gray-300 hover:text-orange-400 transition-colors duration-300"
					>
						Design
					</a>
					<a
						href="#"
						className="link link-hover text-gray-300 hover:text-orange-400 transition-colors duration-300"
					>
						Marketing
					</a>
					<a
						href="#"
						className="link link-hover text-gray-300 hover:text-orange-400 transition-colors duration-300"
					>
						Advertisement
					</a>
				</nav>

				<nav className="flex flex-col space-y-4 sm:space-y-6 sm:mr-12">
					<h6 className="footer-title text-lg font-semibold uppercase tracking-wide mb-2 text-orange-400">
						Company
					</h6>
					<a
						href="about"
						className="link link-hover text-gray-300 hover:text-orange-400 transition-colors duration-300"
					>
						About us
					</a>
					<a
						href="/#contactme"
						className="link link-hover text-gray-300 hover:text-orange-400 transition-colors duration-300"
					>
						Contact
					</a>
					<a
						href="#"
						className="link link-hover text-gray-300 hover:text-orange-400 transition-colors duration-300"
					>
						Jobs
					</a>
				</nav>

				<nav className="flex flex-col space-y-4 sm:space-y-6">
					<h6 className="footer-title text-lg font-semibold uppercase tracking-wide mb-2 text-orange-400">
						Follow Me
					</h6>
					<div className="flex space-x-4">
						<a
							href="https://facebook.com/stropurbo7"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook"
							className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M22 12a10 10 0 10-11.5 9.8v-6.9h-2.1v-2.9h2.1v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.3v1.9h2.3l-.4 2.9h-1.9v6.9A10 10 0 0022 12z" />
							</svg>
						</a>
						<a
							href="https://twitter.com/stropurbo"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Twitter"
							className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.14 9.14 0 01-2.88 1.1 4.5 4.5 0 00-7.66 4.1A12.8 12.8 0 013 4.1a4.48 4.48 0 001.4 6 4.4 4.4 0 01-2-.56v.05a4.5 4.5 0 003.6 4.4 4.5 4.5 0 01-2 .07 4.5 4.5 0 004.2 3.1A9 9 0 012 19.54 12.8 12.8 0 008.29 21c7.55 0 11.68-6.25 11.68-11.68 0-.18-.01-.36-.02-.53A8.34 8.34 0 0023 3z" />
							</svg>
						</a>
						<a
							href="https://linkedin.com/in/stropurbo"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2zM4 3a2 2 0 110 4 2 2 0 010-4z" />
							</svg>
						</a>
						<a
							href="https://instagram.com/stropurboyt"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
							className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
							>
								<rect
									width="20"
									height="20"
									x="2"
									y="2"
									rx="5"
									ry="5"
								/>
								<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
								<line
									x1="17.5"
									y1="6.5"
									x2="17.5"
									y2="6.5"
								/>
							</svg>
						</a>
					</div>
				</nav>

				<nav className="flex flex-col space-y-4 sm:space-y-6">
					<h6 className="footer-title text-lg font-semibold uppercase tracking-wide mb-2 text-orange-400">
						Contact Info
					</h6>
					<p className="text-gray-300">
						📞 Phone:{' '}
						<a
							href="tel:+1234567890"
							className="hover:text-orange-400"
						>
							+8801751056077
						</a>
					</p>
					<p className="text-gray-300">
						✉️ Email:{' '}
						<a
							href="mailto:email@example.com"
							className="hover:text-orange-400"
						>
							sabbir.hasan.ca@gmail.com
						</a>
					</p>
					<p className="text-gray-300">📍 Address: Mirpur 10, Dhaka, Bangladesh</p>
				</nav>
			</footer>
		</div>
	)
}

export default Footer
