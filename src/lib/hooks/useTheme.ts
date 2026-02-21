import { useEffect, useState } from 'react';

export function useTheme() {
	const [isDark, setIsDark] = useState(() =>
		typeof window !== 'undefined'
			? document.documentElement.classList.contains('dark')
			: false
	);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		if (isDark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [isDark]);

	const toggle = () => {
		setIsDark((prev) => !prev);
	};

	const enable = () => {
		setIsDark(true);
	};

	const disable = () => {
		setIsDark(false);
	};

	return { isDark, toggle, enable, disable };
}
