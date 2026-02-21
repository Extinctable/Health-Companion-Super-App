import type { NavItem, SidebarNavItem } from '../types/nav';

type DocsConfig = {
	mainNav: NavItem[];
	sidebarNav: SidebarNavItem[];
};

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: 'About',
			href: '/prototype/about'
		},
		{
			title: 'Showcase',
			href: '/prototype/showcase'
		},
		{
			title: 'Deliverables',
			href: '/prototype/deliverables'
		}
	],
	sidebarNav: [
		{
			title: 'List of Deliverables',
			items: [
				{
					title: 'Research and Personas',
					href: '/deliverables/01-research-personas'
				},
				{
					title: 'User Journey Mapping',
					href: '/deliverables/02-journey-map'
				},
				{
					title: 'Wireframing and Prototypes',
					href: '/deliverables/03-wireframing-prototype-design'
				},
				{
					title: 'Usability Testing',
					href: '/deliverables/04-usability-testing'
				},
				{
					title: 'Reflection',
					href: '/deliverables/05-reflection'
				}
			]
		}
	]
};
