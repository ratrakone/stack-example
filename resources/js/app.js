import "./bootstrap";
import { createInertiaApp } from "@inertiajs/svelte";
import { mount } from "svelte";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./pages/**/*.svelte", { eager: true });
        return pages[`./pages/${name}.svelte`];
        // const pages = import.meta.glob("./pages/**/*.svelte", { eager: true });
        // let page = pages[`./pages/${name}.svelte`];
        // return {
        //     default: page.default,
        //     layout: page.layout || MasterLayout,
        // };
    },
    setup({ el, App, props }) {
        mount(App, { target: el, props });
    },
});
