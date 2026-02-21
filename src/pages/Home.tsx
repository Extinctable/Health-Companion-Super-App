import { ArrowRight, ClipboardList, Pill, Calendar } from 'lucide-react';
import Button from '../components/ui/Button';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import IPhone15Pro from '../components/animation/IPhone15Pro';
import Safari from '../components/animation/Safari';
import { siteConfig } from '../lib/config/site';
import homepageScreen from '../lib/assets/homepage-light.png';
import homepageScreenDark from '../lib/assets/homepage-dark.png';
import homepageScreenDesktop from '../lib/assets/desktop-homepage-light.png';
import homepageScreenDarkDesktop from '../lib/assets/desktop-homepage-dark.png';
import { useState } from 'react';

export default function Home() {
	const [isDark] = useState(() => {
		if (typeof window !== 'undefined') {
			return document.documentElement.classList.contains('dark');
		}
		return false;
	});

	return (
		<div className="relative flex min-h-screen flex-col bg-background">
			<SiteHeader />
			<main className="container relative flex-1 border-b py-16">
				<section className="py-16">
					<div className="container mx-auto px-4 text-center">
						<h1 className="mb-4 text-4xl font-bold">
							Introducing <span className="animate-pulse text-red-500 dark:text-red-400">Health Companion &#x2661;</span>
						</h1>
						<p className="mb-6 text-lg text-foreground/80">
							A case study for a "super app" to help manage personal healthcare with ease.
						</p>
						<div className="flex justify-center space-x-4">
							<Button href="/prototype/showcase">
								Explore Prototype
								<ArrowRight className="ml-1 h-4 w-4" />
							</Button>
							<Button variant="outline" href="/prototype/deliverables">
								Deliverable Reports
							</Button>
						</div>
					</div>
				</section>

				<div className="mb-16 flex justify-center items-center">
					<div className="hidden lg:flex">
						<Safari
							url={siteConfig.url}
							imageSrc={isDark ? homepageScreenDarkDesktop : homepageScreenDesktop}
						/>
					</div>
					<div className="lg:hidden">
						<IPhone15Pro src={isDark ? homepageScreenDark : homepageScreen} />
					</div>
				</div>

				<section className="py-16">
					<div className="container mx-auto px-4 text-center">
						<h2 className="mb-4 text-3xl font-bold">Figma Showcase</h2>
						<p className="mb-6 text-lg text-foreground/80">
							Explore the personas, user journey and early prototype mockups.
						</p>
						<div className="flex items-center justify-center">
							<iframe
								title="figma showcase"
								style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
								className="rounded-sm"
								width={800}
								height={450}
								src="https://embed.figma.com/board/jzcSctJtZTzZmrwf0H0fdr/User-Journey-Maps?embed-host=share"
								allowFullScreen
							/>
						</div>
					</div>
				</section>

				<section className="rounded-sm bg-gray-200 py-16 dark:bg-gray-700">
					<div className="container mx-auto px-4 text-center">
						<h2 className="mb-6 text-3xl font-bold">Application Features</h2>
						<div className="grid gap-8 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
							<div className="rounded-lg bg-white p-6 shadow dark:bg-gray-900">
								<div className="flex items-center justify-center">
									<Calendar size={20} />
								</div>
								<h3 className="text-xl font-semibold">Appointment Management</h3>
								<p className="mt-2 text-gray-600 dark:text-gray-400">
									Book, reschedule, and manage healthcare appointments effortlessly.
								</p>
							</div>
							<div className="rounded-lg bg-white p-6 shadow dark:bg-gray-900">
								<div className="flex items-center justify-center">
									<Pill size={20} />
								</div>
								<h3 className="text-xl font-semibold">Medication Tracking</h3>
								<p className="mt-2 text-gray-600 dark:text-gray-400">
									Set reminders and track daily medications with ease.
								</p>
							</div>
							<div className="rounded-lg bg-white p-6 shadow dark:bg-gray-900">
								<div className="flex items-center justify-center">
									<ClipboardList size={20} />
								</div>
								<h3 className="text-xl font-semibold">Health Dashboard</h3>
								<p className="mt-2 text-gray-600 dark:text-gray-400">
									Monitor your vitals, sync with wearable devices, and keep track of your family plan.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="py-16">
					<div className="container mx-auto px-4 text-center">
						<h2 className="mb-6 text-3xl font-bold">What users are saying</h2>
						<div className="grid gap-8 items-center justify-center sm:grid-cols-1 lg:grid-cols-2">
							<div className="rounded-lg bg-gray-200 p-6 shadow dark:bg-gray-700">
								<p className="text-lg font-semibold text-foreground">
									"The health companion super app has been a game-changer for me. I can easily track my medications, schedule appointments, and stay on top of my health goals!"
								</p>
								<p className="mt-2 text-foreground/80">- Josh Allen, Athlete</p>
							</div>
							<div className="rounded-lg bg-gray-200 p-6 shadow dark:bg-gray-700">
								<p className="text-lg font-semibold text-foreground">
									"As a nurse, this app has made it so much easier to manage my patients' care plans and coordinate with other healthcare providers. It's like having a personal assistant for healthcare!"
								</p>
								<p className="mt-2 text-foreground/80">- Sofia Hernandez, Nurse</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<SiteFooter />
		</div>
	);
}
