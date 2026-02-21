interface IPhone15ProProps {
	src: string;
}

export default function IPhone15Pro({ src }: IPhone15ProProps) {
	return (
		<div className="flex items-center justify-center">
			<div className="relative h-[600px] w-[300px] rounded-[40px] border-[12px] border-gray-800 bg-gray-900 shadow-2xl">
				{/* Notch */}
				<div className="absolute left-1/2 top-0 z-10 h-7 w-40 -translate-x-1/2 rounded-b-3xl bg-gray-900"></div>

				{/* Screen */}
				<div className="relative h-full w-full overflow-hidden rounded-[32px] bg-white">
					<img src={src} alt="iPhone screenshot" className="h-full w-full object-cover" />
				</div>
			</div>
		</div>
	);
}
