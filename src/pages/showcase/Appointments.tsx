import { useMemo, useState } from 'react';
import { Calendar, MapPin, MessageCircle, Search, X } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import SiteHeader from '../../components/SiteHeader';
import Breadcrumb from '../../components/Breadcrumb';
import SiteFooter from '../../components/SiteFooter';

const initialAppointments = [
	{
		id: 1,
		date: '2026-03-10',
		time: '10:00 AM',
		doctor: 'Dr. Smith',
		location: 'Trois-Lacs Clinic',
		status: 'Booked'
	},
	{
		id: 2,
		date: '2026-03-12',
		time: '02:30 PM',
		doctor: 'Dr. Johnson',
		location: 'Downtown Medical Center',
		status: 'Available'
	},
	{
		id: 3,
		date: '2026-03-15',
		time: '11:00 AM',
		doctor: 'Dr. Lee',
		location: 'Green Valley Hospital',
		status: 'Scheduled'
	},
	{
		id: 4,
		date: '2026-03-20',
		time: '09:00 AM',
		doctor: 'Dr. Patel',
		location: 'Sunrise Family Care',
		status: 'Available'
	},
	{
		id: 5,
		date: '2026-04-15',
		time: '03:00 PM',
		doctor: 'Dr. Wilson',
		location: 'Harbor Medical Complex',
		status: 'Unavailable'
	}
];

export default function Appointments() {
	const [appointments, setAppointments] = useState(initialAppointments);
	const [searchQuery, setSearchQuery] = useState('');

	const filteredAppointments = useMemo(() => {
		return appointments.filter((appt) =>
			appt.doctor.toLowerCase().includes(searchQuery.toLowerCase()) ||
			appt.location.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}, [appointments, searchQuery]);

	const bookAppointment = (id: number) => {
		setAppointments((prev) =>
			prev.map((appt) =>
				appt.id === id
					? {
							...appt,
							status: appt.status === 'Available' ? 'Scheduled' : 'Booked'
						}
					: appt
			)
		);
	};

	const messageDoctor = (id: number) => {
		alert(`Opening chat with doctor for appointment ID: ${id}`);
	};

	const cancelAppointment = (id: number) => {
		setAppointments((prev) =>
			prev.map((appt) =>
				appt.id === id
					? {
							...appt,
							status: 'Available'
						}
					: appt
			)
		);
	};

	return (
		<div className="flex min-h-screen flex-col">
			<Breadcrumb />
			<div className="flex-1 space-y-8 px-6 py-8 sm:px-8">
				<div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
					<div>
						<h2 className="text-2xl font-bold tracking-tight">Available Appointments</h2>
						<p className="text-muted-foreground">
							Search and book available appointments with doctors in your area! Send a message if you have
							any questions about your booked appointments. Requests to cancel appointments must be sent 48
							hours in advance.
						</p>
					</div>

				<div className="flex w-full items-center gap-3 sm:w-auto">
					<Input
						type="text"
						placeholder="Search another doctor or location..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="w-full sm:w-64"
					/>
					<Search size={20} className="text-neutral-500" />
				</div>
			</div>

			<div className="w-full overflow-x-auto">
				<table className="w-full rounded-lg border border-background/90 text-left">
					<thead className="bg-background/80">
						<tr>
							<th className="p-3">Date</th>
							<th className="p-3">Time</th>
							<th className="p-3">Doctor</th>
							<th className="p-3">Location</th>
							<th className="p-3">Status</th>
							<th className="p-3 text-right">Action</th>
						</tr>
					</thead>
					<tbody>
						{filteredAppointments.map((appt) => (
							<tr key={appt.id} className="border-t border-background/80">
								<td className="p-3">{appt.date}</td>
								<td className="p-3">{appt.time}</td>
								<td className="p-3">{appt.doctor}</td>
								<td className="flex items-center gap-1 p-3">
									<MapPin size={16} className="text-neutral-500" />
									{appt.location}
								</td>
								<td className="p-3">
									{appt.status === 'Booked' && <span className="font-semibold text-red-500">Booked</span>}
									{appt.status === 'Scheduled' && (
										<span className="font-semibold text-blue-500">Scheduled</span>
									)}
									{appt.status === 'Available' && (
										<span className="font-semibold text-green-500">Available</span>
									)}								{appt.status === 'Unavailable' && (
									<span className="font-semibold text-gray-500">Unavailable</span>
								)}								</td>
								<td className="flex justify-end gap-2 p-3 text-right">
									{appt.status === 'Available' && (
										<Button className="gap-2" onClick={() => bookAppointment(appt.id)}>
											<Calendar size={16} />
											Book Appointment
										</Button>
									)}
									{appt.status === 'Scheduled' && (
										<>
											<Button variant="outline" className="gap-2" onClick={() => messageDoctor(appt.id)}>
												<MessageCircle size={16} />
												Live Message
											</Button>
											<Button variant="outline" className="gap-2" onClick={() => cancelAppointment(appt.id)}>
												<X size={16} />
												Cancel
											</Button>
										</>
									)}
									{appt.status === 'Booked' && (
										<Button variant="outline" className="gap-2" onClick={() => cancelAppointment(appt.id)}>
											<X size={16} />
											Cancel
										</Button>
									)}
									{appt.status === 'Unavailable' && (
										<span className="text-sm text-muted-foreground">No actions available</span>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			</div>
			<SiteFooter />
		</div>
	);
}
