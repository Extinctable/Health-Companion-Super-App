import { useMemo, useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Label from '../../components/ui/Label';
import Breadcrumb from '../../components/Breadcrumb';
import SiteFooter from '../../components/SiteFooter';

const initialData = [
	{ id: '3u4v5w', date: new Date(Date.UTC(2026, 1, 5, 10, 0, 0, 0)), status: 'in progress', task: 'Track daily water intake', remind_me: '1 day before' },
	{ id: '7o8p9q', date: new Date(Date.UTC(2026, 1, 5, 12, 0, 0, 0)), status: 'in progress', task: 'Order medical supplies', remind_me: '5 minutes before' },
	{ id: '1i2j3k', date: new Date(Date.UTC(2026, 1, 5, 14, 30, 0, 0)), status: 'complete', task: 'Book dermatology appointment', remind_me: '2 hours before' },
	{ id: '5c6d7e', date: new Date(Date.UTC(2026, 1, 5, 13, 0, 0, 0)), status: 'complete', task: 'Schedule routine blood work', remind_me: '2 hours before' },
	{ id: '9w0x1y', date: new Date(Date.UTC(2026, 1, 6, 10, 30, 0, 0)), status: 'in progress', task: 'Pick up allergy medication', remind_me: '1 day before' },
	{ id: '3q4r5s', date: new Date(Date.UTC(2026, 1, 7, 8, 30, 0, 0)), status: 'in progress', task: 'Get cholesterol test', remind_me: '5 minutes before' },
	{ id: '7k8l9m', date: new Date(Date.UTC(2026, 1, 8, 15, 0, 0, 0)), status: 'in progress', task: 'Confirm specialist appointment', remind_me: '5 minutes before' },
	{ id: '1e2f3g', date: new Date(Date.UTC(2026, 1, 9, 9, 30, 0, 0)), status: 'in progress', task: 'Renew health insurance', remind_me: '5 minutes before' },
	{ id: '5y6z7a', date: new Date(Date.UTC(2026, 1, 10, 16, 0, 0, 0)), status: 'in progress', task: 'Get flu shot', remind_me: '5 minutes before' },
	{ id: '9s0t1u', date: new Date(Date.UTC(2026, 1, 11, 13, 0, 0, 0)), status: 'in progress', task: 'Pick up new eyeglasses', remind_me: '2 hours before' },
	{ id: '3m4n5o', date: new Date(Date.UTC(2026, 1, 12, 11, 0, 0, 0)), status: 'in progress', task: 'Follow up with cardiologist', remind_me: '2 hours before' },
	{ id: '7g8h9i', date: new Date(Date.UTC(2026, 1, 13, 10, 0, 0, 0)), status: 'in progress', task: 'Refill prescription', remind_me: '2 hours before' },
	{ id: '4d5e6f', date: new Date(Date.UTC(2026, 1, 14, 14, 30, 0, 0)), status: 'overdue', task: 'Completed annual checkup', remind_me: '2 hours before' },
	{ id: '1a2b3c', date: new Date(Date.UTC(2026, 1, 15, 8, 0, 0, 0)), status: 'complete', task: 'Take morning medication', remind_me: '1 day before' },
	{ id: '0j1k2l', date: new Date(Date.UTC(2026, 1, 16, 9, 0, 0, 0)), status: 'complete', task: 'Schedule dental cleaning', remind_me: '1 day before' },
	{ id: '6p7q8r', date: new Date(Date.UTC(2026, 1, 17, 7, 30, 0, 0)), status: 'complete', task: 'Take blood pressure reading', remind_me: '2 hours before' },
	{ id: '2v3w4x', date: new Date(Date.UTC(2026, 1, 18, 8, 45, 0, 0)), status: 'complete', task: 'Check blood sugar levels', remind_me: '1 day before' },
	{ id: '8b9c0d', date: new Date(Date.UTC(2026, 1, 19, 10, 30, 0, 0)), status: 'complete', task: 'Attend physical therapy', remind_me: '1 day before' },
	{ id: '4h5i6j', date: new Date(Date.UTC(2026, 1, 20, 14, 0, 0, 0)), status: 'complete', task: 'Schedule vision test', remind_me: '2 hours before' },
	{ id: '0n1o2p', date: new Date(Date.UTC(2026, 1, 21, 11, 45, 0, 0)), status: 'complete', task: 'Review medical test results', remind_me: '2 hours before' },
	{ id: '6t7u8v', date: new Date(Date.UTC(2026, 1, 22, 9, 15, 0, 0)), status: 'complete', task: 'Follow up with primary doctor', remind_me: '5 minutes before' },
	{ id: '2z3a4b', date: new Date(Date.UTC(2026, 1, 23, 18, 0, 0, 0)), status: 'complete', task: 'Take evening medication', remind_me: '5 minutes before' },
	{ id: '8f9g0h', date: new Date(Date.UTC(2026, 1, 24, 8, 0, 0, 0)), status: 'complete', task: 'Call for prescription refill', remind_me: '2 hours before' },
	{ id: '4l5m6n', date: new Date(Date.UTC(2026, 1, 25, 7, 45, 0, 0)), status: 'complete', task: 'Check vaccination records', remind_me: '5 minutes before' },
	{ id: '0r1s2t', date: new Date(Date.UTC(2026, 1, 26, 15, 0, 0, 0)), status: 'complete', task: 'Confirm physiotherapy session', remind_me: '1 day before' },
	{ id: '6x7y8z', date: new Date(Date.UTC(2026, 1, 27, 8, 30, 0, 0)), status: 'complete', task: 'Monitor heart rate', remind_me: '5 minutes before' }
];

export default function Reminders() {
	const [reminders, setReminders] = useState(initialData);
	const [filter, setFilter] = useState('');
	const [showAddForm, setShowAddForm] = useState(false);
	const [editingId, setEditingId] = useState<string | null>(null);
	const [formData, setFormData] = useState({
		task: '',
		remind_me: '5 minutes before',
		status: 'in progress',
		date: ''
	});

	const filtered = useMemo(() => {
		return reminders.filter((item) => item.task.toLowerCase().includes(filter.toLowerCase()));
	}, [reminders, filter]);

	const formatter = new Intl.DateTimeFormat('en-US', {
		weekday: 'long',
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	});

	const handleAddReminder = () => {
		if (formData.task.trim()) {
			if (editingId) {
				setReminders(
					reminders.map((reminder) =>
						reminder.id === editingId
							? { ...reminder, task: formData.task, remind_me: formData.remind_me, status: formData.status as any, date: formData.date ? new Date(formData.date) : reminder.date }
							: reminder
					)
				);
				setEditingId(null);
			} else {
				const newReminder = {
					id: Math.random().toString(36).substr(2, 9),
					date: formData.date ? new Date(formData.date) : new Date(),
					task: formData.task,
					remind_me: formData.remind_me,
					status: formData.status as any
				};
				setReminders([newReminder, ...reminders]);
			}
			setFormData({ task: '', remind_me: '5 minutes before', status: 'in progress', date: '' });
			setShowAddForm(false);
		}
	};

	const handleEditReminder = (reminder: any) => {
		setEditingId(reminder.id);
		const dateStr = reminder.date instanceof Date ? reminder.date.toISOString().split('T')[0] : '';
		setFormData({
			task: reminder.task,
			remind_me: reminder.remind_me,
			status: reminder.status,
			date: dateStr
		});
		setShowAddForm(true);
	};

	const handleDeleteReminder = (id: string) => {
		setReminders(reminders.filter((reminder) => reminder.id !== id));
	};

	return (
		<div className="flex min-h-screen flex-col">
			<Breadcrumb />
			<div className="flex-1">
				<div className="space-y-8 px-6 py-8 sm:px-8">
					<div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
						<div>
							<h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
							<p className="text-muted-foreground">
								Here's a list of your reminders and tasks for this month! Select a date range to see other
								reminders you've set.
							</p>
						</div>

						<Button
							variant="default"
							className="gap-2"
							onClick={() => {
								setEditingId(null);
							setFormData({ task: '', remind_me: '5 minutes before', status: 'in progress', date: '' });
								setShowAddForm(!showAddForm);
							}}
						>
							<Plus size={16} />
							<span className="inline">Add New Reminder</span>
						</Button>
					</div>

					{/* Add/Edit Form */}
					{showAddForm && (
						<div className="space-y-4 rounded-lg border bg-muted p-6">
							<h3 className="font-semibold">{editingId ? 'Edit Reminder' : 'Add New Reminder'}</h3>
							<div className="space-y-4">
								<div>
									<Label htmlFor="task">Task Description</Label>
									<Input
										id="task"
										placeholder="Enter task description..."
										value={formData.task}
										onChange={(e) => setFormData({ ...formData, task: e.target.value })}
									/>
								</div>							<div>
								<Label htmlFor="date">Date</Label>
								<Input
									id="date"
									type="date"
									value={formData.date}
									onChange={(e) => setFormData({ ...formData, date: e.target.value })}
									required
								/>
							</div>								<div className="grid grid-cols-2 gap-4">
									<div>
										<Label htmlFor="status">Status</Label>
										<select
											id="status"
											className="w-full rounded-md border border-input bg-background px-3 py-2"
											value={formData.status}
											onChange={(e) => setFormData({ ...formData, status: e.target.value })}
										>
											<option value="in progress">In Progress</option>
											<option value="complete">Complete</option>
											<option value="overdue">Overdue</option>
										</select>
									</div>
									<div>
										<Label htmlFor="remind">Remind Me</Label>
										<select
											id="remind"
											className="w-full rounded-md border border-input bg-background px-3 py-2"
											value={formData.remind_me}
											onChange={(e) => setFormData({ ...formData, remind_me: e.target.value })}
										>
											<option value="5 minutes before">5 minutes before</option>
											<option value="1 day before">1 day before</option>
											<option value="2 hours before">2 hours before</option>
										</select>
									</div>
								</div>
								<div className="flex gap-2">
									<Button size="sm" onClick={handleAddReminder}>
										{editingId ? 'Update' : 'Add'} Reminder
									</Button>
									<Button
										size="sm"
										variant="outline"
										onClick={() => {
											setShowAddForm(false);
											setEditingId(null);
										setFormData({ task: '', remind_me: '5 minutes before', status: 'in progress', date: '' });
										}}
									>
										Cancel
									</Button>
								</div>
							</div>
						</div>
					)}

					<div>
						<div className="flex flex-col items-center justify-between gap-2 py-4 sm:flex-row sm:gap-4">
							<Input
								placeholder="Filter tasks..."
								value={filter}
								onChange={(e) => setFilter(e.target.value)}
								className="w-full sm:max-w-sm"
							/>
						</div>
						<div className="rounded-md border">
							<table className="w-full text-left">
								<thead>
									<tr className="border-b bg-muted">
										<th className="p-3">Date</th>
										<th className="p-3">Task</th>
										<th className="p-3">Status</th>
										<th className="p-3">Remind</th>
										<th className="p-3">Actions</th>
									</tr>
								</thead>
								<tbody>
									{filtered.map((reminder) => (
										<tr key={reminder.id} className="border-t hover:bg-muted/50">
											<td className="p-3 text-sm">{formatter.format(reminder.date)}</td>
											<td className="p-3 text-sm">{reminder.task}</td>
											<td className="p-3 text-sm capitalize">{reminder.status}</td>
											<td className="p-3 text-sm text-muted-foreground">{reminder.remind_me}</td>
											<td className="p-3 text-sm">
												<div className="flex gap-2">
													<Button
														size="sm"
														variant="outline"
														onClick={() => handleEditReminder(reminder)}
														className="h-8 w-8 p-0"
													>
														<Pencil size={16} />
													</Button>
													<Button
														size="sm"
														variant="outline"
														onClick={() => handleDeleteReminder(reminder.id)}
														className="h-8 w-8 p-0"
													>
														<Trash2 size={16} />
													</Button>
												</div>
											</td>
										</tr>
									))}
									{filtered.length === 0 && (
										<tr>
											<td colSpan={5} className="h-24 text-center">
												No results.
											</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<SiteFooter />
		</div>
	);
}
