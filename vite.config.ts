import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@lib': path.resolve(__dirname, './src/lib'),
			'@components': path.resolve(__dirname, './src/lib/components'),
			'@ui': path.resolve(__dirname, './src/lib/components/ui'),
			'@hooks': path.resolve(__dirname, './src/lib/hooks'),
			'@utils': path.resolve(__dirname, './src/lib/utils'),
			'@assets': path.resolve(__dirname, './src/lib/assets'),
			'@config': path.resolve(__dirname, './src/lib/config'),
			'@types': path.resolve(__dirname, './src/lib/types')
		}
	}
});
