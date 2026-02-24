import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Github, Figma, Rocket } from 'lucide-react';

export default function Landing() {
	const navigate = useNavigate();
	const [markdownContent, setMarkdownContent] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Fetch the markdown file
		fetch('/Health-Companion-Super-App/landing.md')
			.then(response => response.text())
			.then(text => {
				setMarkdownContent(text);
				setIsLoading(false);
			})
			.catch(error => {
				console.error('Error loading markdown:', error);
				setIsLoading(false);
			});
	}, []);

	// Handle hash navigation after markdown content loads
	useEffect(() => {
		if (!isLoading && window.location.hash) {
			// Small delay to ensure markdown is rendered
			setTimeout(() => {
				scrollToHash(window.location.hash);
			}, 100);
		}
	}, [markdownContent, isLoading]);

	// Convert heading text to slug (matching ReactMarkdown's default behavior)
	const slugify = (text: string) => {
		return text
			.toLowerCase()
			.replace(/[^\w\s-]/g, '') // Remove special chars except spaces and hyphens
			.replace(/\s+/g, '-') // Replace spaces with hyphens
			.replace(/-+/g, '-') // Replace multiple hyphens with single
			.trim();
	};

	const scrollToHash = (hash: string) => {
		const id = hash.slice(1); // Remove # prefix
		// Try to find element by id first, then by anchor name
		const element = document.getElementById(id) || document.querySelector(`a[name="${id}"]`);
		
		if (element) {
			const navHeight = 80; // Fixed nav height + some padding
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - navHeight;
			
			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	};

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		// Handle hash/anchor links for TOC navigation
		if (href.startsWith('#')) {
			e.preventDefault();
			scrollToHash(href);
			// Update URL without page reload
			window.history.pushState(null, '', href);
		}
		// Check if this is an internal prototype link
		else if (href.includes('extinctable.github.io/Health-Companion-Super-App/prototype')) {
			e.preventDefault();
			// Extract the path after /Health-Companion-Super-App
			const path = href.split('/Health-Companion-Super-App')[1];
			navigate(path);
		}
	};

	if (isLoading) {
		return (
			<div className="flex h-screen items-center justify-center bg-black">
				<div className="text-center">
					<div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-slate-800 border-t-red-500"></div>
					<p className="text-slate-400">Loading...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-black">
			{/* Top Navigation */}
			<nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950">
				<div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between">
						<h1 className="text-xl font-bold text-white">
							<a 
								href="/" 
								onClick={(e) => {
									e.preventDefault();
									window.scrollTo({ top: 0, behavior: 'smooth' });
									window.history.pushState(null, '', window.location.pathname);
								}}
								className="hover:text-red-400 transition-colors"
							>
								Massimo Caruso
							</a>
						</h1>
						<div className="flex items-center gap-4">
							<button
								onClick={() => navigate('/prototype')}
								className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-red-400"
							>
								<Rocket className="h-4 w-4" />
								<span className="hidden sm:inline">Prototype</span>
							</button>
							<a
								href="https://www.figma.com/board/HR6b0IrzITP1YSyyUXwuAo/SOEN-357---Mini-Project?node-id=16-77&t=NAw4MkTIvme063TG-1"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-red-400"
							>
								<Figma className="h-4 w-4" />
								<span className="hidden sm:inline">Figma</span>
							</a>
							<a
								href="https://github.com/Extinctable/Health-Companion-Super-App"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-red-400"
							>
								<Github className="h-4 w-4" />
								<span className="hidden sm:inline">GitHub</span>
							</a>
						</div>
					</div>
				</div>
			</nav>

			{/* Main Content */}
			<div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
				<article className="prose prose-slate max-w-none prose-invert prose-headings:text-white prose-p:text-white prose-li:text-white prose-strong:text-white prose-a:text-red-400 hover:prose-a:text-red-300">
					<ReactMarkdown
						components={{
							h1: ({ children, ...props }) => {
								const text = children?.toString() || '';
								const id = slugify(text);
								return <h1 id={id} className="scroll-m-20 text-4xl font-bold tracking-tight text-white" {...props}>{children}</h1>;
							},
							h2: ({ children, ...props }) => {
								const text = children?.toString() || '';
								const id = slugify(text);
								return <h2 id={id} className="scroll-m-20 border-b border-slate-800 pb-2 text-3xl font-semibold tracking-tight text-white first:mt-0" {...props}>{children}</h2>;
							},
							h3: ({ children, ...props }) => {
								const text = children?.toString() || '';
								const id = slugify(text);
								return <h3 id={id} className="scroll-m-20 text-2xl font-semibold tracking-tight text-white" {...props}>{children}</h3>;
							},
							p: ({ ...props }) => <p className="leading-7 text-white [&:not(:first-child)]:mt-6" {...props} />,
							ul: ({ ...props }) => <ul className="my-6 ml-6 list-disc text-white [&>li]:mt-2" {...props} />,
							li: ({ ...props }) => <li className="text-white" {...props} />,
							strong: ({ ...props }) => <strong className="font-semibold text-white" {...props} />,
							em: ({ ...props }) => <em className="italic text-white" {...props} />,
							hr: () => <hr className="my-8 border-t border-slate-800" />,
							a: ({ href, children, ...props }) => (
								<a
									href={href}
									onClick={(e) => href && handleLinkClick(e, href)}
									className="text-red-400 hover:text-red-300 underline"
									{...props}
								>
									{children}
								</a>
							),
						}}
					>
						{markdownContent}
					</ReactMarkdown>
				</article>

				{/* Call to Action Button */}
				<div className="mt-12 flex justify-center">
					<button
						onClick={() => navigate('/prototype')}
						className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
					>
						Start Interactive Prototype
					</button>
				</div>
			</div>

			{/* Footer */}
			<footer className="border-t border-slate-800 bg-slate-950 py-8">
				<div className="mx-auto max-w-4xl px-4 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
					<p>Health Companion UX Strategy Case Study • Built with React & Tailwind CSS</p>
				</div>
			</footer>
		</div>
	);
}
