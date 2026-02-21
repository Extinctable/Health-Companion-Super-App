import { useLocation, Link } from 'react-router-dom';

export default function Breadcrumb() {
	const location = useLocation();
	const pathname = location.pathname;

	// Remove zero-length tokens
	const tokens = pathname.split('/').filter((t) => t !== '');

	// Create { label, href } pairs for each token
	let tokenPath = '';
	const crumbs = tokens.map((t) => {
		tokenPath += '/' + t;
		const label = t.charAt(0).toUpperCase() + t.slice(1);
		return { label, href: tokenPath };
	});

	// Add a way to get home too
	crumbs.unshift({ label: 'Home', href: '/' });

	return (
		<div className="mx-6 px-8 py-4 text-xs sm:text-sm md:text-base lg:text-lg">
			{crumbs.map((c, i) => (
				<span key={i}>
					{i === crumbs.length - 1 ? (
						<span className="text-primary">{c.label}</span>
					) : (
						<>
							<Link to={c.href} className="text-foreground hover:underline">
								{c.label}
							</Link>
							{' > '}
						</>
					)}
				</span>
			))}
		</div>
	);
}
