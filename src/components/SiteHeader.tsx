import { Figma, Github } from 'lucide-react';
import ModeToggle from './ModeToggle';
import MainNav from './nav/MainNav';
import MobileNav from './nav/MobileNav';
import Button from './ui/Button';
import { siteConfig } from '../lib/config/site';
import { useTheme } from '../lib/hooks/useTheme';

export default function SiteHeader() {
	const { isDark, toggle } = useTheme();

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-4">
				<MainNav />
				<MobileNav />
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<nav className="ml-auto flex items-center space-x-1">
						<a href={siteConfig.links.figma} target="_blank" rel="noreferrer">
							<Button variant="ghost" size="sm" className="h-8 w-8 px-0">
								<Figma className="h-4 w-4" />
								<span className="sr-only">Figma</span>
							</Button>
						</a>
						<a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
							<Button variant="ghost" size="sm" className="h-8 w-8 px-0">
								<Github className="h-4 w-4" />
								<span className="sr-only">GitHub</span>
							</Button>
						</a>
						<ModeToggle isDark={isDark} onChange={toggle} />
					</nav>
				</div>
			</div>
		</header>
	);
}
