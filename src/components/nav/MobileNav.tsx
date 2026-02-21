import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { docsConfig } from '../../lib/config/docs';
import { siteConfig } from '../../lib/config/site';
import Button from '../ui/Button';
import { Hamburger, Logo } from '../icons';

export default function MobileNav() {
	const [open, setOpen] = useState(false);
	const location = useLocation();

	const close = () => setOpen(false);

	return (
		<div className="mr-auto md:hidden">
			<Button
				variant="ghost"
				className="-ml-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
				onClick={() => setOpen(!open)}
			>
				<Hamburger className="h-5 w-5" />
				<span className="sr-only">Toggle Menu</span>
			</Button>
			{open && (
				<div className="fixed inset-0 z-50 bg-background/95 p-6">
					<div className="flex items-center justify-between">
						<Link to="/" className="flex items-center" onClick={close}>
							<Logo className="mr-2 h-4 w-4" />
							<span className="font-bold">{siteConfig.name}</span>
						</Link>
						<Button variant="ghost" onClick={close} className="px-2">
							Close
						</Button>
					</div>
					<div className="my-6 flex flex-col space-y-3">
						{docsConfig.mainNav.map((navItem) => (
							<Link
								key={navItem.title}
								to={navItem.href ?? '#'}
								onClick={close}
								className={
									location.pathname === navItem.href
										? 'text-foreground'
										: 'text-foreground/80'
								}
							>
								{navItem.title}
							</Link>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
