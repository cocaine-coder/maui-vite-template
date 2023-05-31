import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//@ts-ignore
const watch = process.argv.indexOf("--watch") > -1;

// https://vitejs.dev/config/
export default defineConfig({
    mode: "mobile",
    plugins: [vue()],
    build: {
        outDir: "../wwwroot",
        watch: watch ? {} : null
    }
})
