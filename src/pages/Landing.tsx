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

	if (isLoading) {
		return (
			<div className="flex h-screen items-center justify-center bg-white dark:bg-slate-950">
				<div className="text-center">
					<div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-emerald-600 dark:border-slate-700 dark:border-t-emerald-500"></div>
					<p className="text-slate-600 dark:text-slate-400">Loading...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-white dark:bg-slate-950">
			{/* Top Navigation */}
			<nav className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
				<div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
					<h1 className="text-2xl font-bold text-slate-900 dark:text-white">Health Companion</h1>
				</div>
			</nav>

			{/* Main Content */}
			<div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
				<article className="prose prose-slate max-w-none dark:prose-invert">
					<ReactMarkdown
						components={{
							h1: ({ ...props }) => <h1 className="scroll-m-20 text-4xl font-bold tracking-tight" {...props} />,
							h2: ({ ...props }) => <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0" {...props} />,
							h3: ({ ...props }) => <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight" {...props} />,
							p: ({ ...props }) => <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />,
							ul: ({ ...props }) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
							li: ({ ...props }) => <li {...props} />,
							strong: ({ ...props }) => <strong className="font-semibold" {...props} />,
							em: ({ ...props }) => <em className="italic" {...props} />,
							hr: () => <hr className="my-8 border-t border-slate-200 dark:border-slate-700" />,
						}}
					>
						{markdownContent}
					</ReactMarkdown>
				</article>

				{/* Call to Action Button */}
				<div className="mt-12 flex justify-center">
					<button
						onClick={() => navigate('/prototype')}
						className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
					>
						🚀 Start Interactive Prototype
					</button>
				</div>
			</div>

			{/* Footer */}
			<footer className="border-t border-slate-200 bg-slate-50 py-8 dark:border-slate-800 dark:bg-slate-900">
				<div className="mx-auto max-w-4xl px-4 text-center text-sm text-slate-600 dark:text-slate-400 sm:px-6 lg:px-8">
					<p>Health Companion UX Strategy Case Study • Built with React & Tailwind CSS</p>
				</div>
			</footer>
		</div>
	);
}
