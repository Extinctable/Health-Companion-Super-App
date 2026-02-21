import SiteHeader from '../components/SiteHeader';
import Breadcrumb from '../components/Breadcrumb';
import SiteFooter from '../components/SiteFooter';

export default function Deliverables() {
	return (
		<div className="relative flex min-h-screen flex-col bg-background">
			<SiteHeader />
			<Breadcrumb />
			<main className="flex-1 border-b">
				{/* Breadcrumbs content area */}
			</main>
			<SiteFooter />
		</div>
	);
}
