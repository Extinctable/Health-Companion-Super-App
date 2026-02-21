import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ModeToggle from '../ModeToggle';
import { useTheme } from '../../lib/hooks/useTheme';
import Logo from '../icons/Logo';

const navLinks = [
	{ label: 'Appointments', href: '/prototype/showcase/appointments' },
	{ label: 'Medications', href: '/prototype/showcase/medications' },
	{ label: 'Dashboard', href: '/prototype/showcase/dashboard' },
	{ label: 'Reminders', href: '/prototype/showcase/reminders' }
];

export default function PrototypeNavbar() {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const { isDark, toggle } = useTheme();

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setDropdownOpen(false);
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	}, []);

	return (
		<nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				{/* Logo */}
				<Link to="/" className="flex items-center space-x-2">
					<Logo className="w-6 h-6" />
					<span className="self-center text-md sm:text-lg font-semibold whitespace-nowrap">
						Health Companion
					</span>
				</Link>

				{/* Mobile Menu Button */}
				<div className="flex md:hidden items-center gap-2">
					<button
						onClick={toggleMobileMenu}
						className="p-2 w-10 h-10 flex items-center justify-center text-foreground rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent"
					>
						<span className="sr-only">Open main menu</span>
						{mobileMenuOpen ? (
							<X className="w-6 h-6" />
						) : (
							<Menu className="w-6 h-6" />
						)}
					</button>
				</div>

				{/* Desktop Navigation Links */}
				<div className="hidden md:flex space-x-8">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							to={link.href}
							className="text-foreground hover:text-primary transition-colors"
						>
							{link.label}
						</Link>
					))}
				</div>

				{/* User Profile Menu */}
				<div className="relative flex items-center space-x-4">
					<ModeToggle isDark={isDark} onChange={toggle} />

					<button
						id="user-menu-button"
						onClick={toggleDropdown}
						className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
						aria-expanded={dropdownOpen}
					>
						<span className="sr-only">Open user menu</span>
						<img
							className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-600 object-cover aspect-square"
							src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="default user logo"
						/>
					</button>

					{/* User Dropdown */}
					{dropdownOpen && (
						<div
							ref={dropdownRef}
							id="user-dropdown"
							className="absolute top-full right-0 mt-0 w-48 bg-background divide-y divide-foreground/10 rounded-lg shadow-xl border border-border z-50"
						>
							<div className="px-4 py-3">
								<span className="block text-sm text-foreground font-medium">
									Sarah Thompson
								</span>
								<span className="block text-sm text-muted-foreground truncate">
									name@example.ca
								</span>
							</div>
							<ul className="py-2">
								<li>
									<Link
										to="/prototype/showcase/settings"
										onClick={() => setDropdownOpen(false)}
										className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent"
									>
										Settings
									</Link>
								</li>
								<li>
									<Link
										to="/prototype/showcase/logout"
										onClick={() => setDropdownOpen(false)}
										className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent"
									>
										Sign out
									</Link>
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			{mobileMenuOpen && (
				<div className="md:hidden bg-background/95 p-4 space-y-2 border-t border-border/40">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							to={link.href}
							onClick={() => setMobileMenuOpen(false)}
							className="block text-foreground/80 hover:text-foreground py-2"
						>
							{link.label}
						</Link>
					))}
				</div>
			)}
		</nav>
	);
}
