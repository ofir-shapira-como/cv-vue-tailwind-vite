import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcssForms from '@tailwindcss/forms';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), tailwindcssForms],
    server: {
        port: 3500
    }
})
