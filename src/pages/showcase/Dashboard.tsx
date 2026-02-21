import { Activity, Calendar, Download, Pill, Users } from 'lucide-react';
import Button from '../../components/ui/Button';
import SiteHeader from '../../components/SiteHeader';
import Breadcrumb from '../../components/Breadcrumb';
import SiteFooter from '../../components/SiteFooter';
import DatePickerWithRange from './components/DatePickerWithRange';
import OverviewChart from './components/OverviewChart';
import RecentAppointments from './components/RecentAppointments';

export default function Dashboard() {
	return (
		<div className="flex min-h-screen flex-col bg-background">
			<SiteHeader />
			<Breadcrumb />
			<div className="flex-1 space-y-4 px-6 py-8 sm:px-8">
				<div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-2">
					<h2 className="text-3xl font-bold tracking-tight">Healthcare Dashboard</h2>
					<div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-2">
						<DatePickerWithRange />
						<Button size="sm">
							<Download className="mr-2 h-4 w-4" />
							Download Report as .PDF
						</Button>
					</div>
				</div>

				<div className="space-y-4">
					<div className="flex gap-2 border-b pb-2 text-sm">
						<button className="rounded-md bg-muted px-3 py-1">Overview</button>
						<button className="rounded-md px-3 py-1 text-muted-foreground" disabled>
							Personal
						</button>
						<button className="rounded-md px-3 py-1 text-muted-foreground" disabled>
							Miscellaneous
						</button>
					</div>

					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
						<div className="rounded-lg border bg-card p-4">
							<div className="flex items-center justify-between space-y-0 pb-2">
								<p className="text-sm font-medium">Upcoming Appointments</p>
								<Calendar className="h-4 w-4 text-muted-foreground" />
							</div>
							<div className="text-2xl font-bold">March 2, 2026</div>
							<p className="text-xs text-muted-foreground">Kinesiologist: 9:00 AM at Terrebonne, QC</p>
						</div>
						<div className="rounded-lg border bg-card p-4">
							<div className="flex items-center justify-between space-y-0 pb-2">
								<p className="text-sm font-medium">Medications</p>
								<Pill className="h-4 w-4 text-muted-foreground" />
							</div>
							<div className="text-2xl font-bold">5 Active</div>
							<p className="text-xs text-muted-foreground">2 need refills soon</p>
						</div>
						<div className="rounded-lg border bg-card p-4">
							<div className="flex items-center justify-between space-y-0 pb-2">
								<p className="text-sm font-medium">Active Zone</p>
								<Activity className="h-4 w-4 text-muted-foreground" />
							</div>
							<div className="text-2xl font-bold">2,500 Kcal</div>
							<p className="text-xs text-muted-foreground">+200 more burned up from yesterday</p>
						</div>
						<div className="rounded-lg border bg-card p-4">
							<div className="flex items-center justify-between space-y-0 pb-2">
								<p className="text-sm font-medium">Family Member Overview</p>
								<Users className="h-4 w-4 text-muted-foreground" />
							</div>
							<div className="text-2xl font-bold">4 Members</div>
							<p className="text-xs text-muted-foreground">Last updated: yesterday</p>
						</div>
					</div>

					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
						<div className="col-span-4 rounded-lg border bg-card p-4">
							<h3 className="text-lg font-semibold">Daily Steps Overview</h3>
							<div className="pt-4">
								<OverviewChart />
							</div>
						</div>
						<div className="col-span-3 rounded-lg border bg-card p-4">
							<h3 className="text-lg font-semibold">Family Plan Overview</h3>
							<p className="text-sm text-muted-foreground">4 appointments scheduled this month.</p>
							<div className="pt-4">
								<RecentAppointments />
							</div>
						</div>
					</div>
				</div>
			</div>
			<SiteFooter />
		</div>
	);
}
