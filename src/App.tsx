import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
import ShowcaseHome from './pages/showcase/ShowcaseHome';
import Appointments from './pages/showcase/Appointments';
import Medications from './pages/showcase/Medications';
import Dashboard from './pages/showcase/Dashboard';
import Reminders from './pages/showcase/Reminders';
import Settings from './pages/showcase/Settings';
import Logout from './pages/showcase/Logout';
import './App.css';

export default function App() {
	useEffect(() => {
		// Initialize dark mode from system preference or localStorage
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		if (prefersDark) {
			document.documentElement.classList.add('dark');
		}
	}, []);

	return (
		<BrowserRouter basename="/Health-Companion-Super-App/">
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/showcase-home" element={<ShowcaseHome />} />
				<Route path="/appointments" element={<Appointments />} />
				<Route path="/medications" element={<Medications />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/reminders" element={<Reminders />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/logout" element={<Logout />} />
			</Routes>
		</BrowserRouter>
	);
};
