import { Calendar } from 'lucide-react';
import Button from '../../../components/ui/Button';

export default function DatePickerWithRange() {
	return (
		<div className="grid gap-2">
			<Button variant="outline">
				<Calendar className="mr-2 h-4 w-4" />
				Feb 5, 2026 - Mar 2, 2026
			</Button>
		</div>
	);
}
