import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import Breadcrumb from '../components/Breadcrumb';
import SiteFooter from '../components/SiteFooter';

const deliverables = [
	{
		number: '01',
		title: 'Research and Personas',
		description: 'An in-depth analysis of target users and the development of detailed personas.',
		icon: '👥'
	},
	{
		number: '02',
		title: 'User Journey Mapping',
		description: 'Visualization of user interactions and touchpoints throughout the application lifecycle.',
		icon: '🗺️'
	},
	{
		number: '03',
		title: 'Wireframing and Prototype Design',
		description: 'Low and high-fidelity mockups showcasing the application structure and visual design.',
		icon: '🎨'
	},
	{
		number: '04',
		title: 'Usability Testing',
		description: 'Comprehensive testing results and feedback from target users.',
		icon: '✅'
	},
	{
		number: '05',
		title: 'Reflection',
		description: 'A thorough analysis of the design process, outcomes, and key learnings.',
		icon: '💭'
	}
];

export default function Deliverables() {
	return (
		<div className="relative flex min-h-screen flex-col bg-background">
			<SiteHeader />
			<Breadcrumb />
			<main className="flex-1 border-b">
				<section className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
					<div className="mb-12">
						<h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl">
							Project Deliverables
						</h1>
						<p className="mb-6 text-lg font-normal text-foreground/80 lg:text-xl">
							Explore the key deliverables from the Health Companion design project. Each deliverable represents
							a critical phase in the UX/UI design process.
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{deliverables.map((deliverable) => (
							<div
								key={deliverable.number}
								className="flex flex-col rounded-lg border border-border p-6 shadow-md transition-all hover:shadow-lg hover:border-primary"
							>
								<div className="mb-4 text-4xl">{deliverable.icon}</div>
								<div className="mb-2 flex items-baseline gap-2">
									<span className="text-2xl font-bold text-primary">{deliverable.number}</span>
									<h3 className="text-lg font-semibold text-foreground">{deliverable.title}</h3>
								</div>
								<p className="mb-4 flex-1 text-sm text-foreground/80">{deliverable.description}</p>
								<Link
									to={`/prototype/deliverables/${deliverable.number}-${deliverable.title.toLowerCase().replace(/\s+/g, '-')}`}
									className="text-sm font-medium text-primary hover:underline"
								>
									View Details →
								</Link>
							</div>
						))}
					</div>
				</section>
			</main>
			<SiteFooter />
		</div>
	);
}
