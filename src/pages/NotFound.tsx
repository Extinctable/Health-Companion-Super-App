import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Home } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

export default function NotFound() {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-950 to-black">
			{/* Breadcrumbs */}
			<Breadcrumb />

			{/* Main Content */}
			<div className="flex flex-col items-center justify-center px-4 py-6 sm:py-8">
				<div className="text-center">
					{/* 404 Error Code */}
					<h1 className="text-7xl font-bold text-red-600 drop-shadow-lg sm:text-8xl">404</h1>

					{/* Error Message */}
					<h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Page Not Found</h2>
					<p className="mt-2 text-base text-slate-300 sm:text-lg">
						Sorry, the page you're looking for doesn't exist or has been moved.
					</p>

					{/* Description */}
					<div className="mx-auto mt-4 max-w-md rounded-lg border border-slate-800 bg-slate-900 p-4">
						<p className="text-center text-sm text-slate-400 sm:text-base">
							The URL you entered might be incorrect, or the page may have been renamed or deleted.
						</p>
					</div>

					{/* Action Buttons */}
					<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
						<button
							onClick={() => navigate(-1)}
							className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-6 py-2 font-semibold text-slate-200 transition-colors hover:bg-slate-800 hover:text-white"
						>
							<ChevronLeft className="h-4 w-4" />
							Go Back
						</button>
						<button
							onClick={() => navigate('/')}
							className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-red-700"
						>
							<Home className="h-4 w-4" />
							Return Home
						</button>
					</div>
				</div>

				{/* Helpful Links */}
				<div className="mt-8 max-w-2xl">
					<h3 className="mb-4 text-center text-lg font-semibold text-white">Helpful Links</h3>
					<div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
						<NavLink href="/" label="Home" />
						<NavLink href="/prototype" label="Prototype" />
						<NavLink href="/prototype/about" label="About" />
						<NavLink href="/prototype/deliverables" label="Deliverables" />
						<NavLink href="/prototype/showcase" label="Showcase" />
						<a
							href="https://github.com/Extinctable/Health-Companion-Super-App"
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-center text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
						>
							GitHub
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

function NavLink({ href, label }: { href: string; label: string }) {
	const navigate = useNavigate();
	return (
		<button
			onClick={() => navigate(href)}
			className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-center text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
		>
			{label}
		</button>
	);
}
