import { defineConfig } from '@gulibs/vgrove'

export default defineConfig({
    vgrove: {
        // Auto Routes configuration
        routes: {
            dirs: [{ dir: 'src/pages', baseRoute: '/' }],
            mode: 'flat',
            cache: true
        },

        // i18n configuration
        i18n: {
            basePath: 'src/locales',
            defaultLocale: 'zh',
            extensions: ['.json', '.ts', '.js']
        },

        // UI framework configuration
        ui: {
            framework: 'none'
        },

        // Build configuration
        build: {
            target: 'es2020',
            outDir: 'dist',
            sourcemap: true,
            minify: true
        }
    },

    // Vite configuration (optional)
    vite: {
        resolve: {
            alias: {
                '@': '/src'
            }
        }
    }
})
