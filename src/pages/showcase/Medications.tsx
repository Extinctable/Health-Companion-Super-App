import { useEffect, useState } from 'react';
import { Edit2, Pill, PlusCircle, Search, Check } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import SiteHeader from '../../components/SiteHeader';
import Breadcrumb from '../../components/Breadcrumb';
import SiteFooter from '../../components/SiteFooter';

const initialMedications = [
	{
		id: 1,
		name: 'Aspirin',
		dosage: '100mg',
		schedule: 'Morning',
		status: 'Active'
	},
	{
		id: 2,
		name: 'Metformin',
		dosage: '500mg',
		schedule: 'Twice a day',
		status: 'Active'
	},
	{
		id: 3,
		name: 'Lisinopril',
		dosage: '10mg',
		schedule: 'Evening',
		status: 'Paused'
	}
];

export default function Medications() {
	const [medications, setMedications] = useState(initialMedications);
	const [searchQuery, setSearchQuery] = useState('');
	const [newMedName, setNewMedName] = useState('');
	const [newMedDosage, setNewMedDosage] = useState('');
	const [newMedSchedule, setNewMedSchedule] = useState('');
	const [editingId, setEditingId] = useState<number | null>(null);
	const [filteredMedications, setFilteredMedications] = useState(initialMedications);

	useEffect(() => {
		setFilteredMedications(medications);
	}, [medications]);

	const searchMedications = (query: string) => {
		setSearchQuery(query);
		setFilteredMedications(
			medications.filter((med) => med.name.toLowerCase().includes(query.toLowerCase()))
		);
	};

	const addMedication = () => {
		if (!newMedName || !newMedDosage || !newMedSchedule) return;

		const next = {
			id: medications.length + 1,
			name: newMedName,
			dosage: newMedDosage,
			schedule: newMedSchedule,
			status: 'Active'
		};

		setMedications((prev) => [...prev, next]);
		setNewMedName('');
		setNewMedDosage('');
		setNewMedSchedule('');
	};

	const startEditing = (id: number) => {
		setEditingId(id);
	};

	const saveEdit = () => {
		setEditingId(null);
	};

	const updateMedication = (id: number, field: 'name' | 'dosage' | 'schedule' | 'status', value: string) => {
		setMedications((prev) =>
			prev.map((med) => (med.id === id ? { ...med, [field]: value } : med))
		);
	};

	return (
		<div className="flex min-h-screen flex-col bg-background">
			<SiteHeader />
			<Breadcrumb />
			<div className="flex-1 space-y-8 px-6 py-8 sm:px-8">
				<div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
					<div>
						<h2 className="text-2xl font-bold tracking-tight">Medication Tracker</h2>
						<p className="text-muted-foreground">Track and manage your medications.</p>
					</div>
				<div className="flex w-full items-center gap-2 sm:w-auto">
					<Input
						type="text"
						placeholder="Search medication..."
						value={searchQuery}
						onChange={(e) => searchMedications(e.target.value)}
						className="w-full sm:w-64"
					/>
					<Search size={20} className="text-neutral-500" />
				</div>
			</div>
			<div className="rounded-lg bg-background/90 p-4">
				<h3 className="mb-2 text-lg font-semibold">Add New Medication</h3>
				<div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
					<Input
						type="text"
						placeholder="Medication Name"
						value={newMedName}
						onChange={(e) => setNewMedName(e.target.value)}
					/>
					<Input
						type="text"
						placeholder="Dosage (e.g., 100mg)"
						value={newMedDosage}
						onChange={(e) => setNewMedDosage(e.target.value)}
					/>
					<Input
						type="text"
						placeholder="Schedule (e.g., Morning, Night)"
						value={newMedSchedule}
						onChange={(e) => setNewMedSchedule(e.target.value)}
					/>
				</div>
				<Button className="mt-3 flex w-full items-center gap-2 sm:w-auto" onClick={addMedication}>
					<PlusCircle size={16} />
					Add Medication
				</Button>
			</div>

			<div className="w-full overflow-x-auto">
				<table className="w-full rounded-lg border bg-background/90 text-left">
					<thead className="bg-background/80">
						<tr>
							<th className="p-3">Medication</th>
							<th className="p-3">Dosage</th>
							<th className="p-3">Schedule</th>
							<th className="p-3">Status</th>
							<th className="p-3 text-right">Manage</th>
						</tr>
					</thead>
					<tbody>
						{filteredMedications.map((med) => (
							<tr key={med.id} className="border-t border-foreground/80">
								<td className="flex items-center gap-2 p-3">
									<Pill size={16} className="text-neutral-500" />
									{editingId === med.id ? (
										<Input
											type="text"
											value={med.name}
											onChange={(e) => updateMedication(med.id, 'name', e.target.value)}
											className="w-full text-sm"
										/>
									) : (
										med.name
									)}
								</td>
								<td className="p-3">
									{editingId === med.id ? (
										<Input
											type="text"
											value={med.dosage}
											onChange={(e) => updateMedication(med.id, 'dosage', e.target.value)}
											className="w-full text-sm"
										/>
									) : (
										med.dosage
									)}
								</td>
								<td className="p-3">
									{editingId === med.id ? (
										<Input
											type="text"
											value={med.schedule}
											onChange={(e) => updateMedication(med.id, 'schedule', e.target.value)}
											className="w-full text-sm"
										/>
									) : (
										med.schedule
									)}
								</td>
								<td className="p-3">
								{editingId === med.id ? (
									<select
										value={med.status}
										onChange={(e) => updateMedication(med.id, 'status', e.target.value)}
										className="w-full rounded border border-input bg-background px-2 py-1 text-sm"
									>
										<option value="Active">Active</option>
										<option value="Paused">Paused</option>
										<option value="Inactive">Inactive</option>
									</select>
								) : (
									<>
										{med.status === 'Active' && (
											<span className="font-semibold text-green-500">Active</span>
										)}
										{med.status === 'Paused' && (
											<span className="font-semibold text-yellow-500">Paused</span>
										)}
										{med.status === 'Inactive' && (
											<span className="font-semibold text-gray-500">Inactive</span>
										)}
									</>
								)}
								</td>
								<td className="p-3 text-right">
									{editingId === med.id ? (
										<Button className="px-2 py-1" onClick={() => saveEdit()}>
											<Check size={16} />
										</Button>
									) : (
										<Button variant="ghost" className="px-2 py-1" onClick={() => startEditing(med.id)}>
											<Edit2 size={16} />
										</Button>
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
