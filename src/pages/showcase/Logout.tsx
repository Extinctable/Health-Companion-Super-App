import { useState } from 'react';
import { Loader2, Chrome } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Label from '../../components/ui/Label';
import Breadcrumb from '../../components/Breadcrumb';
import SiteFooter from '../../components/SiteFooter';

export default function Logout() {
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	};

	return (
		<div className="flex min-h-screen flex-col">
			<Breadcrumb />
			<div className="flex-1 px-6 py-12 sm:px-8 md:px-12">
				<div className="grid gap-16 lg:grid-cols-2">
					{/* Left Column - Image */}
					<div className="relative hidden flex-col justify-between rounded-lg bg-muted p-8 dark:border-r lg:flex">
				<div
					className="absolute inset-0 rounded-md bg-cover grayscale"
					style={{
						backgroundImage:
							'url(https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
					}}
				/>
				<div className="relative z-20 flex items-center text-lg font-medium text-neutral-800">HealthCare Super Inc.</div>
				<div className="relative z-20 mt-auto">
					<blockquote className="space-y-2 rounded-md bg-background p-4">
						<p className="text-lg">
							“This app has saved me countless hours and made it so much easier to manage my appointments and
							medications. It helps me stay on top of my health. Highly recommended!”
						</p>
						<footer className="text-sm">Alex Carter</footer>
					</blockquote>
				</div>
				</div>

				{/* Right Column - Form */}
				<div className="flex flex-col justify-center space-y-6">
					<div className="flex flex-col space-y-2">
						<h1 className="text-2xl font-semibold tracking-tight">Example Logout/Login page</h1>
						<p className="text-muted-foreground text-sm">Enter your email below to create your account.</p>
					</div>
					<div className="grid gap-6">
						<form onSubmit={onSubmit} className="space-y-4">
							<div className="space-y-2">
								<Label className="sr-only" htmlFor="email">
									Email
								</Label>
								<Input
									id="email"
									placeholder="name@example.ca"
									type="email"
									autoCapitalize="none"
									autoComplete="email"
									autoCorrect="off"
									disabled={isLoading}
								/>
							</div>
							<Button type="submit" disabled={isLoading} className="w-full">
								{isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
								Sign Up with Email
							</Button>
						</form>
						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<span className="w-full border-t" />
							</div>
							<div className="relative flex justify-center text-xs uppercase">
								<span className="bg-background px-2 text-muted-foreground">Or continue with</span>
							</div>
						</div>
						<Button variant="outline" type="button" disabled={isLoading} className="w-full">
							{isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Chrome className="mr-2 h-4 w-4" />}
							Google Account
						</Button>
					</div>
					<p className="text-muted-foreground text-center text-sm">
						By clicking continue, you agree to our{' '}
						<a href="#" className="underline underline-offset-4 hover:text-primary">
							Terms of Service
						</a>{' '}
						and{' '}
						<a href="#" className="underline underline-offset-4 hover:text-primary">
							Privacy Policy
						</a>
						.
					</p>
				</div>
				</div>
			</div>
			<SiteFooter />
		</div>
	);
}
