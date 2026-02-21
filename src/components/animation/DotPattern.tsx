import React, { useMemo } from 'react';
import { cn } from '../../lib/utils/cn';

interface DotPatternProps extends React.SVGAttributes<SVGElement> {
	width?: string | number;
	height?: string | number;
	x?: number;
	y?: number;
	cx?: number;
	cy?: number;
	cr?: number;
	fillColor?: string;
	className?: string;
}

export default function DotPattern({
	width = 16,
	height = 16,
	x = 0,
	y = 0,
	cx = 1,
	cy = 1,
	cr = 1,
	fillColor = 'rgb(163 163 163 / 0.8)',
	className,
	...props
}: DotPatternProps) {
	const id = useMemo(() => crypto.randomUUID().toString().slice(0, 10), []);

	return (
		<svg
			aria-hidden="true"
			className={cn('pointer-events-none absolute inset-0 h-full w-full', className)}
			fill={fillColor}
			{...props}
		>
			<defs>
				<pattern
					id={id}
					width={width}
					height={height}
					patternUnits="userSpaceOnUse"
					patternContentUnits="userSpaceOnUse"
					x={x}
					y={y}
				>
					<circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
		</svg>
	);
}
