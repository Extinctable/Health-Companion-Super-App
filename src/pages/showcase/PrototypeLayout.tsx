import { Outlet } from 'react-router-dom';
import PrototypeNav from './PrototypeNav';

export default function PrototypeLayout() {
	return (
		<div className="min-h-screen bg-background">
			<PrototypeNav />
			<Outlet />
		</div>
	);
}
