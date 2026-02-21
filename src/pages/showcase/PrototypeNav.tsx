import { Link } from 'react-router-dom';
import { User, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const navItems = [
	{ label: 'Home', path: '/prototype/showcase' },
	{ label: 'Appointments', path: '/prototype/showcase/appointments' },
	{ label: 'Medications', path: '/prototype/showcase/medications' },
	{ label: 'Dashboard', path: '/prototype/showcase/dashboard' },
	{ label: 'Reminders', path: '/prototype/showcase/reminders' },
	{ label: 'Settings', path: '/prototype/showcase/settings' },
	{ label: 'Logout', path: '/prototype/showcase/logout' }
];

export default function PrototypeNav() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="border-b bg-background">
			<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					{/* Left: App Name/Logo */}
					<div className="flex items-center">
						<Link to="/prototype" className="flex items-center gap-2 font-semibold text-foreground hover:text-primary">
							<span className="text-lg">Health Companion</span>
						</Link>
					</div>

					{/* Center: Navigation Links (Desktop) */}
					<div className="hidden md:flex items-center gap-1">
						{navItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
							>
								{item.label}
							</Link>
						))}
					</div>

					{/* Right: User Profile */}
					<div className="flex items-center gap-4">
						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent"
						>
							<ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
						</button>

						{/* Profile */}
						<div className="flex items-center gap-2 border-l pl-4">
							<div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
								<User className="h-5 w-5 text-primary" />
							</div>
							<span className="hidden sm:inline text-sm font-medium text-foreground">Patient</span>
						</div>
					</div>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="md:hidden border-t bg-muted">
						<div className="flex flex-col gap-1 px-2 py-4">
							{navItems.map((item) => (
								<Link
									key={item.path}
									to={item.path}
									onClick={() => setIsOpen(false)}
									className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
								>
									{item.label}
								</Link>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
