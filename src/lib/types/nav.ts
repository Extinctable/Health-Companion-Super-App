export type NavItem = {
	title: string;
	href?: string;
	disabled?: boolean;
};

export type SidebarNavItem = {
	title: string;
	items?: NavItem[];
};
