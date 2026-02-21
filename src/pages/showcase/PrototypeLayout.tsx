import { Outlet } from 'react-router-dom';
import PrototypeNavbar from '../../components/prototype/PrototypeNavbar';

export default function PrototypeLayout() {
	return (
		<div className="min-h-screen bg-background">
			<PrototypeNavbar />
			<Outlet />
		</div>
	);
}
