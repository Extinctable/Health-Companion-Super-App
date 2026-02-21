import type { NavItem, SidebarNavItem } from '../types/nav';

type DocsConfig = {
	mainNav: NavItem[];
	sidebarNav: SidebarNavItem[];
};

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: 'Dashboard',
			href: '/dashboard'
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
			title: 'Reminders',
			href: '/reminders'
		}
	],
	sidebarNav: [
		{
			title: 'Features',
			items: [
				{
					title: 'Dashboard',
					href: '/dashboard'
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
					title: 'Reminders',
					href: '/reminders'
				}
			]
		}
	]
};
