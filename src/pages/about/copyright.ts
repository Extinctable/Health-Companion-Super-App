export type Resource = {
	name: string;
	url: string;
	licenseUrl: string;
	licenseText: string;
	fullLicenseName: string;
};

export const resources: Resource[] = [
	{
		name: 'Baymard Institute - Free UX Research',
		url: 'https://baymard.com/free-ux-research',
		licenseUrl: 'https://baymard.com/terms-and-conditions',
		licenseText:
			'Baymard Institute has an online platform with access to industry-specific UX insights and design examples.',
		fullLicenseName: 'Baymard Institute Terms and Conditions'
	},
	{
		name: 'Flowbite',
		url: 'https://flowbite.com/docs/',
		licenseUrl: 'https://flowbite.com/docs/getting-started/license/',
		licenseText: 'Flowbite is a free and open-source HTML, Tailwind CSS and vanilla JS UI kit.',
		fullLicenseName: 'MIT License'
	},
	{
		name: 'Lifestyle icons created by Andrean Prabowo - Flaticon',
		url: 'https://www.flaticon.com/free-icons/lifestyle',
		licenseUrl: 'https://www.flaticon.com/legal',
		licenseText: 'Andrean Prabowo is the creator of the favicon used on this website.',
		fullLicenseName: 'Flaticon Basic License'
	},
	{
		name: 'React',
		url: 'https://react.dev/',
		licenseUrl: 'https://github.com/facebook/react/blob/main/LICENSE',
		licenseText:
			'React is a JavaScript library for building user interfaces with reusable components.',
		fullLicenseName: 'MIT License'
	},
	{
		name: 'TailwindCSS',
		url: 'https://tailwindcss.com/',
		licenseUrl: 'https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE',
		licenseText:
			"Tailwind CSS is a utility-first CSS framework that's great for prototyping because it promotes rapid development and easily customizable styles.",
		fullLicenseName: 'MIT License'
	},
	{
		name: 'Lucide React',
		url: 'https://lucide.dev/',
		licenseUrl: 'https://github.com/lucide-icons/lucide/blob/main/LICENSE',
		licenseText: 'Lucide React provides a beautiful set of SVG icons for React applications.',
		fullLicenseName: 'ISC License'
	},
	{
		name: 'Unsplash',
		url: 'https://unsplash.com/',
		licenseUrl: 'https://unsplash.com/license',
		licenseText: 'Unsplash is a website dedicated to sharing stock photography.',
		fullLicenseName: 'Unsplash License'
	},
	/* 
	{
		name: 'Vercel',
		url: 'https://vercel.com/',
		licenseUrl: 'https://github.com/vercel/vercel/blob/main/LICENSE',
		licenseText: 'Vercel is a cloud platform for deploying web applications and handling serverless functions.',
		fullLicenseName: 'Apache License 2.0'
	}
	*/
];
