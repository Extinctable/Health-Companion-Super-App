import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
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
				<Route path="/prototype" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
};
