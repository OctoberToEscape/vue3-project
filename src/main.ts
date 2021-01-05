import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "@/plugins/vant";
import svgIcon from "@/icons";
import "vant/lib/index.css";
import "@/utils/rem";
import "default-passive-events";

createApp(App)
    .use(store)
    .use(router)
    .use(Vant)
    .component("svg-icon", svgIcon)
    .mount("#app");
