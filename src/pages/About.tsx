import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { resources } from './about/copyright';

export default function About() {
	return (
		<div className="relative flex min-h-screen flex-col bg-background">
			<SiteHeader />
			<main className="flex-1 border-b">
				<section className="mx-auto max-w-screen-xl px-4 py-8 text-justify lg:px-6 lg:py-16">
					<div className="mb-16">
						<h1
							id="about"
							className="mb-6 text-4xl font-bold leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl"
						>
							About this Application
						</h1>
						<p className="mb-4 indent-5 text-lg font-normal text-foreground/80 lg:text-xl">
							This case study / mini-project explores the design of a mobile application aimed at assisting
							individuals with chronic health conditions. The app would provide tools for managing medications,
							scheduling doctor appointments, and communicating with healthcare professionals. By focusing on
							UI/UX design principles, the goal is to develop a visual prototype that addresses the unique needs
							and challenges of various target audiences.
						</p>
						<p className="indent-5 text-lg font-normal text-foreground/80 lg:text-xl">
							The study includes research, persona creation, user journey mapping, wireframing, prototyping,
							and usability testing — all of which are part of the interaction design process. One motivation
							for taking the time to carefully make good choices in the Design Model is to hopefully mitigate
							the cost of engineering resources down the line. Another motivation is to ensure the best possible
							experience for end users, clients, and stakeholders.
						</p>
					</div>

					<div className="mb-16">
						<h1
							id="tech-stack"
							className="mb-6 text-4xl font-bold leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl"
						>
							Technology Stack
						</h1>
						<p className="mb-4 indent-5 text-lg font-normal text-foreground/80 lg:text-xl">
							This React-based interactive prototype was built with modern web technologies to provide a seamless user experience. The application uses 
							<strong> React</strong> for component-based UI development, <strong>TypeScript</strong> for type safety, and 
							<strong> React Router DOM</strong> for client-side navigation. Styling is accomplished with <strong>Tailwind CSS</strong>, 
							a utility-first CSS framework that enables rapid prototyping and customization. The UI components are enhanced with icons from 
							<strong> Lucide React</strong>, providing a comprehensive and consistent icon library throughout the application.
						</p>
						<p className="indent-5 text-lg font-normal text-foreground/80 lg:text-xl">
							The prototype is built with <strong>Vite</strong> as the build tool for fast development and optimized production builds. 
							Data visualization components leverage <strong>D3.js</strong> for creating interactive charts. The application supports 
							both light and dark modes, enabling accessibility preferences for all users.
						</p>
					</div>

					<div className="mb-16">
						<h1
							id="copyright"
							className="mb-6 text-4xl font-bold leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl"
						>
							Copyright
						</h1>
						<p className="mb-6 text-lg font-normal text-foreground/80 lg:text-xl">
							The creation of this app would not be possible without the following third-party materials:
						</p>
						<ul>
							{resources.map((resource) => (
								<li key={resource.name}>
									<a
										href={resource.url}
										target="_blank"
										rel="noreferrer"
										className="text-2xl text-primary text-primary/80 underline-offset-2 hover:underline"
									>
										{resource.name}
									</a>
									<p className="mb-6 font-light">
										{resource.licenseText} It is used under the terms of the{' '}
										<a
											href={resource.licenseUrl}
											target="_blank"
											rel="noreferrer"
											className="text-primary text-primary/80 underline-offset-2 hover:underline"
										>
											{resource.fullLicenseName}
										</a>
										.
									</p>
								</li>
							))}
						</ul>
					</div>
				</section>
			</main>
			<SiteFooter />
		</div>
	);
}
