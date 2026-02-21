import React from 'react';
import { cn } from '../../lib/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'default' | 'outline' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
	href?: string;
	children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant = 'default', size = 'md', href, children, ...props }, ref) => {
		const buttonClass = cn(
			'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors',
			size === 'sm' && 'h-8 px-3 text-xs',
			size === 'md' && 'h-10 px-4 py-2',
			size === 'lg' && 'h-11 px-8',
			variant === 'default' && 'bg-primary text-primary-foreground hover:bg-primary/90',
			variant === 'outline' &&
				'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
			variant === 'ghost' && 'hover:bg-accent hover:text-accent-foreground',
			className
		);

		if (href) {
			return (
				<a href={href} className={buttonClass}>
					{children}
				</a>
			);
		}

		return (
			<button ref={ref} className={buttonClass} {...props}>
				{children}
			</button>
		);
	}
);

Button.displayName = 'Button';

export default Button;
