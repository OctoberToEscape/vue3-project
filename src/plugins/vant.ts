import { Button, Image as VanImage, Popup } from "vant";

export default {
    install(Vue: any) {
        Vue.use(Button);
        Vue.use(VanImage);
        Vue.use(Popup);
    },
};
