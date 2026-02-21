import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../icons';
import ModeToggle from '../ModeToggle';
import { useTheme } from '../../lib/hooks/useTheme';

export default function PrototypeNavbar() {
	const { isDark, toggle } = useTheme();
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const buttonRef = useRef<HTMLButtonElement | null>(null);

	useEffect(() => {
		function handleClick(event: MouseEvent) {
			const target = event.target as Node;
			if (
				dropdownRef.current &&
				buttonRef.current &&
				!dropdownRef.current.contains(target) &&
				!buttonRef.current.contains(target)
			) {
				setDropdownOpen(false);
			}
		}
		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick);
	}, []);

	return (
		<nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
				<Link to="/showcase" className="flex items-center space-x-3 rtl:space-x-reverse">
					<Logo className="h-6 w-6" />
					<span className="self-center whitespace-nowrap text-md font-semibold sm:text-lg">App Prototype</span>
				</Link>

				<button
					type="button"
					className="flex h-10 w-10 items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
					onClick={() => setMobileMenuOpen((prev) => !prev)}
				>
					<span className="sr-only">Open main menu</span>
					<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
					</svg>
				</button>

				<div className="hidden space-x-8 rtl:space-x-reverse md:flex">
					<Link to="/showcase" className="text-foreground transition-colors hover:text-primary">
						Home
					</Link>
					<Link to="/showcase/appointments" className="text-foreground transition-colors hover:text-primary">
						Appointments
					</Link>
					<Link to="/showcase/medications" className="text-foreground transition-colors hover:text-primary">
						Medications
					</Link>
					<Link to="/showcase/dashboard" className="text-foreground transition-colors hover:text-primary">
						Dashboard
					</Link>
					<Link to="/showcase/reminders" className="text-foreground transition-colors hover:text-primary">
						Reminders
					</Link>
				</div>

				<div className="relative flex items-center space-x-4 rtl:space-x-reverse">
					<ModeToggle isDark={isDark} onChange={toggle} />

					<button
						id="user-menu-button"
						type="button"
						ref={buttonRef}
						onClick={() => setDropdownOpen((prev) => !prev)}
						className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
						aria-expanded={dropdownOpen}
					>
						<span className="sr-only">Open user menu</span>
						<img
							className="aspect-square h-10 w-10 rounded-full border-2 border-white object-cover dark:border-gray-600"
							src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="default user logo"
						/>
					</button>

					{dropdownOpen && (
						<div
							ref={dropdownRef}
							id="user-dropdown"
							className="absolute right-0 top-0.5 mt-2 w-48 divide-y divide-foreground/10 rounded-lg bg-background shadow-lg"
						>
							<div className="px-4 py-3">
								<span className="block text-sm text-foreground">Sarah Thompson</span>
								<span className="block truncate text-sm text-muted-foreground">name@example.ca</span>
							</div>
							<ul className="py-2">
								<li>
									<Link
										to="/showcase/settings"
										className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground"
									>
										Settings
									</Link>
								</li>
								<li>
									<Link
										to="/showcase/logout"
										className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground"
									>
										Sign out
									</Link>
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>

			{mobileMenuOpen && (
				<div className="space-y-2 bg-background/95 p-4 md:hidden">
					<Link to="/showcase" className="block text-foreground/80 hover:text-foreground">
						Home
					</Link>
					<Link to="/showcase/appointments" className="block text-foreground/80 hover:text-foreground">
						Appointments
					</Link>
					<Link to="/showcase/medications" className="block text-foreground/80 hover:text-foreground">
						Medications
					</Link>
					<Link to="/showcase/dashboard" className="block text-foreground/80 hover:text-foreground">
						Dashboard
					</Link>
					<Link to="/showcase/reminders" className="block text-foreground/80 hover:text-foreground">
						Reminders
					</Link>
				</div>
			)}
		</nav>
	);
}
