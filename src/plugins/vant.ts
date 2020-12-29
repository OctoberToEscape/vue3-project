import { Button, Image as VanImage } from "vant";

export default {
    install(Vue: any) {
        Vue.use(Button);
        Vue.use(VanImage);
    },
};
