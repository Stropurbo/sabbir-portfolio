// src/data/projects.js
const projects = [
	{
		id: 1,
		title: 'Genz Shop',
		link: 'https://genzshop-frontend-vak6.vercel.app/',
		image: 'https://i.ibb.co/GvPBdF7s/image.png',
		rating: 5,
		features: [
			'User authentication and JWT login',
			'Role-based access control (Admin/User)',
			'Protected routes with JWT middleware',
			'Email verification and password reset functionality',
			'Add to cart and checkout',
			'Admin dashboard with analytics charts',
			'sslcommerz payment gateway integration',
			'Responsive design with Tailwind CSS and DaisyUI components',
			'Product filtering by category, price, and rating',
			'Search functionality with instant suggestions',
			'User reviews and star ratings',
			'Dynamic product management by admin (CRUD)',
			'Order history tracking for users',
			'Order status update (Pending, Confirmed, Shipped, Delivered)',
		],
		technologies: [
			'React',
			'Tailwind CSS',
			'Django',
			'PostgreSQL',
			'JWT',
			'SSLCommerz',
			'DaisyUI',
		],
		shortDesc: 'A modern e-commerce website...',
		fullDesc: `Genz Shop is a modern and responsive full-stack e-commerce web application built to offer users a seamless online shopping experience. It features dynamic product listings, secure user authentication, a real-time shopping cart system, and SSLCommerz-integrated payment gateway for safe and fast transactions. 

The admin panel provides complete control over product management, order tracking, and customer handling. This project supports both desktop and mobile responsiveness, ensuring accessibility across all devices.

Key features include:
- Product filtering and searching by category
- Add-to-cart and remove-from-cart functionality
- Secure login & registration system
- Checkout page with payment integration (SSLCommerz)
- Order history and invoice generation
- Admin dashboard with product CRUD operations
- Clean, minimal UI with Tailwind CSS

Ideal for small to medium businesses looking to go online, this project is scalable, well-structured, and production-ready.`,
	},
	{
		id: 2,
		title: 'SEvent',
		link: 'https://event-management-c8i3.onrender.com/',
		image: 'https://i.ibb.co/TDXtmv2V/image.png',
		features: [
			'User authentication and JWT login',
			'Add to cart and checkout for event booking',
			'Admin panel with event and user management',
			'Event creation, editing, and deletion by admin',
			'Event search and category-based filtering',
			'SSLCommerz payment gateway integration',
			'Dynamic ticket quantity and real-time availability check',
			'User dashboard with booking history',
			'Email confirmation on successful booking',
			'Mobile-responsive UI with Tailwind CSS and DaisyUI',
		],
		technologies: ['Django (MVT)', 'React', 'Tailwind CSS', 'PostgreSQL', 'JWT'],
		rating: 5,
		shortDesc: 'A dynamic event management platform...',
		fullDesc: `SEvent is a powerful and user-friendly event management platform designed to streamline the process of creating, managing, and attending events. It enables users to register, browse events, book tickets, and receive real-time updates — all through a responsive and intuitive interface.

The admin dashboard offers complete control over event creation, participant tracking, and analytics, making it an ideal solution for organizers of conferences, webinars, meetups, and corporate events.

Key features include:
- User registration and login system
- Event browsing by category, date, or popularity
- One-click event booking with confirmation
- Real-time status updates and countdown timers
- Admin dashboard for event CRUD (Create, Read, Update, Delete)
- Participant management and booking list
- Mobile-friendly, fast, and lightweight UI built with Tailwind CSS
- Deployed with backend integration and database support

SEvent is built to be scalable and secure, making it suitable for any individual or organization looking to manage digital or in-person events with ease.`,
	},
	{
		id: 3,
		title: 'Scimart',
		link: 'https://scimart-client.vercel.app/',
		image: 'https://i.ibb.co/1GYzP473/image.png',
		features: [
			'User authentication and JWT login',
			'Add to cart and checkout',
			'Admin dashboard with analytics',
			'sslcommerz payment gateway integration',
		],
		technologies: [
			'React',
			'Tailwind CSS',
			'Django',
			'PostgreSQL',
			'JWT',
			'SSLCommerz',
			'DaisyUI',
		],
		rating: 5,
		shortDesc: 'A full-stack e-commerce site...',
		fullDesc: `Scimart is a robust, full-stack e-commerce platform developed with Django for the backend and React.js for the frontend. Designed to provide a smooth and secure shopping experience, Scimart includes everything from dynamic product listings to a fully functional cart, checkout system, and real-time order tracking.

The project features complete CRUD (Create, Read, Update, Delete) operations for product and category management through a powerful admin panel. Admins can manage product inventory, view orders, and analyze customer activity with ease.

Key features include:
- User authentication (registration, login, logout) with email verification
- Product listing with category-based filtering and search functionality
- Add-to-cart, update-quantity, and remove-from-cart options
- Secure checkout system with SSLCOMMERZ payment gateway integration
- Order tracking with status updates (pending, processing, delivered)
- Admin dashboard with full control over products, categories, and orders
- Responsive UI using Tailwind CSS for modern device compatibility
- Backend RESTful API built with Django REST Framework (DRF)
- Media handling using Cloudinary for optimized image storage

Scimart is ideal for startups or small businesses wanting a ready-to-deploy online store with real-world e-commerce capabilities, performance optimization, and security at its core.`,
	},
]

export default projects
