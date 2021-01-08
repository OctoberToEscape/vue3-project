import { Button, Image as VanImage, Popup, NavBar, Skeleton, Icon } from "vant";

export default {
    install(Vue: any) {
        Vue.use(Button);
        Vue.use(VanImage);
        Vue.use(Popup);
        Vue.use(NavBar);
        Vue.use(Skeleton);
        Vue.use(Icon);
    },
};
