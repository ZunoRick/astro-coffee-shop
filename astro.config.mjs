// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},

	image: {
		domains: ['coffeeshop.local', 'plum-tiger-200350.hostingersite.com'],
		remotePatterns: [{ protocol: 'http', hostname: 'localhost' }],
	},

	adapter: netlify(),
});
