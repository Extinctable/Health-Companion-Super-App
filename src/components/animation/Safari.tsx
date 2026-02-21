import { Globe } from 'lucide-react';

interface SafariProps {
	url: string;
	imageSrc: string;
}

export default function Safari({ url, imageSrc }: SafariProps) {
	return (
		<div className="w-full max-w-4xl">
			{/* Safari frame */}
			<div className="rounded-lg border border-gray-300 bg-gray-50 shadow-lg dark:border-gray-700 dark:bg-gray-900">
				{/* Address bar */}
				<div className="flex items-center gap-2 border-b border-gray-300 px-4 py-3 dark:border-gray-700">
					<div className="flex items-center gap-2">
						<button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
							←
						</button>
						<button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
							→
						</button>
					</div>
					<Globe size={16} className="text-gray-400" />
					<div className="flex-1 rounded bg-white px-3 py-2 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-400">
						{url}
					</div>
				</div>

				{/* Content */}
				<div className="overflow-hidden bg-white dark:bg-black">
					<img src={imageSrc} alt="Safari screenshot" className="w-full" />
				</div>
			</div>
		</div>
	);
}
