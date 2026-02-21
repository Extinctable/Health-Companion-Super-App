import type { NavItem, SidebarNavItem } from '../types/nav';

type DocsConfig = {
	mainNav: NavItem[];
	sidebarNav: SidebarNavItem[];
};

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: 'Home',
			href: '/home'
		},
		{
			title: 'About',
			href: '/about'
		},
		{
			title: 'Appointments',
			href: '/appointments'
		},
		{
			title: 'Medications',
			href: '/medications'
		},
		{
			title: 'Dashboard',
			href: '/dashboard'
		},
		{
			title: 'Reminders',
			href: '/reminders'
		}
	],
	sidebarNav: [
		{
			title: 'Features',
			items: [
				{
					title: 'Home',
					href: '/home'
				},
				{
					title: 'Appointments',
					href: '/appointments'
				},
				{
					title: 'Medications',
					href: '/medications'
				},
				{
					title: 'Dashboard',
					href: '/dashboard'
				},
				{
					title: 'Reminders',
					href: '/reminders'
				},
				{
					title: 'Settings',
					href: '/settings'
				}
			]
		}
	]
};
