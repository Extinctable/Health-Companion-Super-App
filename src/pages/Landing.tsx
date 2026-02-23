import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

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

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		// Check if this is an internal prototype link
		if (href.includes('extinctable.github.io/Health-Companion-Super-App/prototype')) {
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
					<div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-slate-800 border-t-emerald-500"></div>
					<p className="text-slate-400">Loading...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-black">
			{/* Top Navigation */}
			<nav className="border-b border-slate-800 bg-slate-950">
				<div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
					<h1 className="text-2xl font-bold text-white">Health Companion</h1>
				</div>
			</nav>

			{/* Main Content */}
			<div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
				<article className="prose prose-slate max-w-none prose-invert prose-headings:text-white prose-p:text-white prose-li:text-white prose-strong:text-white prose-a:text-emerald-400 hover:prose-a:text-emerald-300">
					<ReactMarkdown
						components={{
							h1: ({ ...props }) => <h1 className="scroll-m-20 text-4xl font-bold tracking-tight text-white" {...props} />,
							h2: ({ ...props }) => <h2 className="scroll-m-20 border-b border-slate-800 pb-2 text-3xl font-semibold tracking-tight text-white first:mt-0" {...props} />,
							h3: ({ ...props }) => <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-white" {...props} />,
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
									className="text-emerald-400 hover:text-emerald-300 underline"
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
						className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black"
					>
						🚀 Start Interactive Prototype
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
