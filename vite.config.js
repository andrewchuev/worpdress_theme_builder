import {defineConfig} from 'vite';
import path from 'path';
import fullReload from 'vite-plugin-full-reload';

export default defineConfig( {
    base: '/',
    root: path.resolve( __dirname, './' ),
    build: {
        outDir: path.resolve( __dirname, './dist' ),
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
            input: {
                main: path.resolve( __dirname, './src/main.js' ),
            },
            output: {
                entryFileNames: 'assets/[name].[hash].js',
                chunkFileNames: 'assets/[name].[hash].js',
                assetFileNames: 'assets/[name].[hash].[ext]',
            },
        },
    },
    server: {
        host: '0.0.0.0',
        port: 3000,
        strictPort: true,
        cors: true,
        secure: false,
        wss: true,
    },
    plugins: [
        fullReload( [ '../../../wp-content/themes/ncode/**/*.php' ], { root: __dirname } ),
    ],
} );
