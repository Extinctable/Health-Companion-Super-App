import { Link } from 'react-router-dom';

export default function SiteFooter() {
	return (
		<footer className="border-t bg-background py-8">
			<div className="container mx-auto px-4 text-center text-sm text-foreground/80">
				<p>&copy; {new Date().getFullYear()} 
                    <a href="https://www.github.com/extinctable"> <u>Massimo Caruso</u>.</a> All rights reserved.
                </p>
				<div className="mt-4 flex justify-center space-x-4">
					<Link to="/prototype/about" className="hover:text-foreground">
						Privacy
					</Link>
					<span>•</span>
					<Link to="/prototype/about" className="hover:text-foreground">
						Terms
					</Link>
					<span>•</span>
					<Link to="/prototype/about" className="hover:text-foreground">
						Contact
					</Link>
				</div>
			</div>
		</footer>
	);
}
