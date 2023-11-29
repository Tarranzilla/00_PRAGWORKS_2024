import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        "process.env.CONTENTFUL_SPACE_ID": JSON.stringify(process.env.CONTENTFUL_SPACE_ID),
        "process.env.CONTENTFUL_ACCESS_TOKEN": JSON.stringify(process.env.CONTENTFUL_ACCESS_TOKEN),
        "process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN": JSON.stringify(process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN),
    },
});
