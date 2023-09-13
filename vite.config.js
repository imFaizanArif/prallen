import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-plugin-pages-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), Pages({
        onRoutesGenerated: routes => (generateSitemap({routes})),
    })],
    optimizeDeps: {
        include: ["@emailjs/browser",
            "framer-motion",
            "framer-motion-ticker",
            "localforage",
            "match-sorter",
            "react",
            "react-dom",
            "react-icons",
            "react-intersection-observer",
            "react-router-dom",
            "react-toastify",
            "sort-by",
            "swiper",
            "tailwindcss-animated",
            "vite-plugin-pages",
            "vite-plugin-pages-sitemap"],
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            }
        }
    }
})
