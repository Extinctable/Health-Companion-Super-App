import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
import Deliverables from './pages/Deliverables';
import NotFound from './pages/NotFound';
import PrototypeLayout from './pages/showcase/PrototypeLayout';
import ShowcaseHome from './pages/showcase/ShowcaseHome';
import Appointments from './pages/showcase/Appointments';
import Medications from './pages/showcase/Medications';
import Dashboard from './pages/showcase/Dashboard';
import Reminders from './pages/showcase/Reminders';
import Settings from './pages/showcase/Settings';
import Logout from './pages/showcase/Logout';
import './App.css';

function AppRoutes() {
	const navigate = useNavigate();

	useEffect(() => {
		// Handle 404.html redirects by checking sessionStorage for pending paths
		const pendingPath = sessionStorage.getItem('pendingPath');
		if (pendingPath) {
			sessionStorage.removeItem('pendingPath');
			navigate(pendingPath);
		}
	}, [navigate]);

	useEffect(() => {
		// Initialize dark mode from system preference or localStorage
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		if (prefersDark) {
			document.documentElement.classList.add('dark');
		}
	}, []);

	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/prototype" element={<Home />} />
			<Route path="/prototype/about" element={<About />} />
			<Route path="/prototype/deliverables" element={<Deliverables />} />
			<Route path="/prototype/showcase" element={<PrototypeLayout />}>
				<Route index element={<ShowcaseHome />} />
				<Route path="appointments" element={<Appointments />} />
				<Route path="medications" element={<Medications />} />
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="reminders" element={<Reminders />} />
				<Route path="settings" element={<Settings />} />
				<Route path="logout" element={<Logout />} />
			</Route>
			{/* Catch-all route for 404 errors */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default function App() {
	return (
		<BrowserRouter basename="/Health-Companion-Super-App/">
			<AppRoutes />
		</BrowserRouter>
	);
}
