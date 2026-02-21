import { Moon, Sun } from 'lucide-react';

interface ModeToggleProps {
	isDark: boolean;
	onChange: (isDark: boolean) => void;
}

export default function ModeToggle({ isDark, onChange }: ModeToggleProps) {
	const handleToggle = () => {
		const newValue = !isDark;
		onChange(newValue);
	};

	return (
		<button
			onClick={handleToggle}
			className="rounded-md p-2 hover:bg-accent"
			aria-label="Toggle dark mode"
		>
			{isDark ? <Sun size={20} /> : <Moon size={20} />}
		</button>
	);
}
