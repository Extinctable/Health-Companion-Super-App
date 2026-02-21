import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../icons';
import { siteConfig } from '../../lib/config/site';
import { cn } from '../../lib/utils/cn';

export default function MainNav() {
	const location = useLocation();

	return (
		<div className="mr-4 hidden md:flex">
			<Link to="/" className="mr-6 flex items-center space-x-2">
				<Logo className="h-6 w-6" />
				<span className="hidden font-bold md:inline-block">{siteConfig.name}</span>
			</Link>
			<nav className="flex items-center gap-6 text-sm">
				<Link
					to="/prototype/about"
					className={cn(
						'transition-colors hover:text-foreground/80',
						location.pathname === '/prototype/about' ? 'text-foreground' : 'text-foreground/60'
					)}
				>
					About
				</Link>
				<Link
					to="/prototype/showcase"
					className={cn(
						'transition-colors hover:text-foreground/80',
						location.pathname.startsWith('/prototype/showcase') ? 'text-foreground' : 'text-foreground/60'
					)}
				>
					Showcase
				</Link>
				<Link
					to="/prototype/deliverables"
					className={cn(
						'transition-colors hover:text-foreground/80',
						location.pathname === '/prototype/deliverables' ? 'text-foreground' : 'text-foreground/60'
					)}
				>
					Deliverables
				</Link>
			</nav>
		</div>
	);
}
