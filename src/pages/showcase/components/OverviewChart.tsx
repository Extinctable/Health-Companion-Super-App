import { useMemo } from 'react';
import { scaleLinear } from 'd3-scale';

const data = [
	{ name: 'Feb 14', total: Math.floor(Math.random() * 9000) + 2000 },
	{ name: 'Feb 15', total: Math.floor(Math.random() * 9000) + 2000 },
	{ name: 'Feb 16', total: Math.floor(Math.random() * 9000) + 2000 },
	{ name: 'Feb 17', total: Math.floor(Math.random() * 9000) + 2000 },
	{ name: 'Feb 18', total: Math.floor(Math.random() * 9000) + 2000 },
	{ name: 'Feb 19', total: Math.floor(Math.random() * 9000) + 2000 },
	{ name: 'Feb 20', total: Math.floor(Math.random() * 9000) + 2000 },
	{ name: 'Feb 21', total: Math.floor(Math.random() * 9000) + 2000 },
	{ name: 'Feb 22', total: Math.floor(Math.random() * 9000) + 2000 },
	{ name: 'Feb 23', total: Math.floor(Math.random() * 9000) + 2000 },
	{ name: 'Feb 24', total: Math.floor(Math.random() * 9000) + 2000 },
	{ name: 'Feb 25', total: Math.floor(Math.random() * 9000) + 2000 }
];

const yTicks = [3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000];
const padding = { top: 20, right: 15, bottom: 20, left: 45 };

export default function OverviewChart() {
	const width = 500;
	const height = 200;

	const xTicks = useMemo(() => data.map((d) => d.name), []);
	const xScale = scaleLinear().domain([0, xTicks.length]).range([padding.left, width - padding.right]);
	const yScale = scaleLinear().domain([0, Math.max(...yTicks)]).range([height - padding.bottom, padding.top]);
	const innerWidth = width - (padding.left + padding.right);
	const barWidth = innerWidth / xTicks.length;

	const formatMobile = (tick: string | number) => `'${tick.toString().slice(-2)}`;

	return (
		<div className="chart">
			<svg className="relative h-[280px] w-full" viewBox="0 0 500 200" preserveAspectRatio="xMidYMid meet">
				<g className="axis y-axis">
					{yTicks.map((tick) => (
						<g key={tick} className="text-xs" transform={`translate(0, ${yScale(tick)})`}>
							<text
								stroke="none"
								fontSize={12}
								width="60"
								height="310"
								x="57"
								y="-4"
								fill="#888888"
								textAnchor="end"
							>
								<tspan x="36" dy="0.355em">
									{tick}
								</tspan>
							</text>
						</g>
					))}
				</g>

				<g className="axis x-axis">
					{data.map((point, i) => (
						<g key={point.name} className="text-xs" transform={`translate(${xScale(i)}, ${height})`}>
							<text
								stroke="none"
								fontSize={10}
								width="531"
								height="30"
								x={barWidth / 2}
								y="-15"
								fill="#888888"
								textAnchor="middle"
							>
								<tspan x={barWidth / 2} dy="0.71em">
									{width > 380 ? point.name : formatMobile(point.name)}
								</tspan>
							</text>
						</g>
					))}
				</g>

				<g>
					{data.map((point, i) => (
						<rect
							key={point.name}
							className="bg-primary-foreground"
							x={xScale(i) + 2}
							y={yScale(point.total)}
							width={barWidth - 8}
							height={yScale(0) - yScale(point.total)}
							fill="currentColor"
							rx={4}
							ry={4}
						/>
					))}
				</g>
			</svg>
			<style>{`
				.chart { width: 100%; margin: 0 auto; }
				rect { max-width: 51px; }
			`}</style>
		</div>
	);
}
