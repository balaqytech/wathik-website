/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	
	theme: {
		extend: {			
			fontFamily:{
				'sans': ['GESS', 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'],
			},
			colors:{
				'primary': '#478CDB',
				'accent': '#01BACE'
			}
		},
	},
	plugins: [],
}
