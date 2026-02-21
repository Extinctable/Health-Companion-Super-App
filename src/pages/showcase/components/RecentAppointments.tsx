const items = [
	{
		initials: 'OT',
		name: 'Mom',
		detail: 'Next Appointment: Feb 15, 2026 - 10:00 AM',
		status: 'Check-in Pending',
		statusClass: 'text-green-600'
	},
	{
		initials: 'JT',
		name: 'Dad',
		detail: 'Medication Reminder: Blood Pressure Meds - 8:00 AM',
		status: 'Taken',
		statusClass: 'text-blue-400 dark:text-blue-200'
	},
	{
		initials: 'IT',
		name: 'Isabella Thompson',
		detail: 'Next Appointment: Feb 20, 2026 - 3:30 PM',
		status: 'Reschedule Needed',
		statusClass: 'text-red-600'
	},
	{
		initials: 'WT',
		name: 'William Thompson',
		detail: 'Upcoming Test: Blood Work - Mar 22, 2026',
		status: 'Preparation Required',
		statusClass: 'text-yellow-600 dark:text-yellow-400'
	},
	{
		initials: 'ST',
		name: 'Sofia Thompson',
		detail: 'Medication Reminder: Insulin - 7:00 PM',
		status: 'Confirmed',
		statusClass: 'text-green-600'
	}
];

export default function RecentAppointments() {
	return (
		<div className="space-y-8">
			{items.map((item) => (
				<div key={item.name} className="flex items-center">
					<div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-xs font-medium">
						{item.initials}
					</div>
					<div className="ml-4 space-y-1">
						<p className="text-sm font-medium leading-none">{item.name}</p>
						<p className="text-muted-foreground text-sm">{item.detail}</p>
					</div>
					<div className={`ml-auto font-medium ${item.statusClass}`}>{item.status}</div>
				</div>
			))}
		</div>
	);
}
