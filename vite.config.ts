import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const PORT = 3000;

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: PORT,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
