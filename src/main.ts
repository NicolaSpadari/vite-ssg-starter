import { ViteSSG } from "vite-ssg";
import routes from "virtual:generated-pages";
import App from "@/App.vue";
import "@/assets/css/bs-grid.min.css";
import "virtual:windi-base.css";
import "virtual:windi-utilities.css";
import "virtual:windi-devtools";

export const createApp = ViteSSG(App, { routes });
