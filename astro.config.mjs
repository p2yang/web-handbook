// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/web-handbook/',
	integrations: [
		starlight({
			title: 'My Docs',
			logo: {
				src: './src/assets/logo.png',
			},
			lastUpdated: true,
			social: {
				github: 'https://github.com/p2yang/web-handbook',
			},
			editLink: {
        baseUrl: 'https://github.com/p2yang/web-handbook/edit/main/docs/',
      },
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
