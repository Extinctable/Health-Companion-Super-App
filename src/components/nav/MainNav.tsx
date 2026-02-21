import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../icons';
import { siteConfig } from '../../lib/config/site';
import { cn } from '../../lib/utils/cn';

export default function MainNav() {
	const location = useLocation();

	return (
		<div className="mr-4 hidden md:flex">
			<Link to="/home" className="mr-6 flex items-center space-x-2">
				<Logo className="h-6 w-6" />
				<span className="hidden font-bold md:inline-block">{siteConfig.name}</span>
			</Link>
			<nav className="flex items-center gap-6 text-sm">
				<Link
					to="/dashboard"
					className={cn(
						'transition-colors hover:text-foreground/80',
						location.pathname === '/dashboard' ? 'text-foreground' : 'text-foreground/60'
					)}
				>
					Dashboard
				</Link>
				<Link
					to="/appointments"
					className={cn(
						'transition-colors hover:text-foreground/80',
						location.pathname === '/appointments' ? 'text-foreground' : 'text-foreground/60'
					)}
				>
					Appointments
				</Link>
				<Link
					to="/medications"
					className={cn(
						'transition-colors hover:text-foreground/80',
						location.pathname === '/medications' ? 'text-foreground' : 'text-foreground/60'
					)}
				>
					Medications
				</Link>
				<Link
					to="/reminders"
					className={cn(
						'transition-colors hover:text-foreground/80',
						location.pathname === '/reminders' ? 'text-foreground' : 'text-foreground/60'
					)}
				>
					Reminders
				</Link>
			</nav>
		</div>
	);
}
