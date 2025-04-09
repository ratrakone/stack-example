import laravel from "laravel-vite-plugin";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
        svelte({
            onwarn: (warning, handler) => {
                if (warning.message.includes("'route' is not defined")) return;
                handler(warning);
            },
        }),
    ],
    resolve: {
        alias: {
            $lib: "./resources/js",
        },
    },
});
