/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				base: '#1c1d26',
				basegray: '#282a36',
				primary: '#8be9fd',
				secondary: '#bd93f9',
				accent: '#50fa7b'
			}
		}
	},
	plugins: []
};
