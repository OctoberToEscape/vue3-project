<template lang="pug">
.layout-index
    .top-banner
    van-button(type="primary" @click="handle") 主要按钮
</template>

<script lang="ts">
import { defineComponent, provide, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
interface userInfo {
    nickname: string;
    telephone: number | string;
    avatar?: string;
    isFirst: boolean;
    isVip: boolean;
}

export default defineComponent({
    name: "index",
    setup() {
        const router = useRouter();
        const userInfo = reactive<userInfo>({
            nickname: "regret",
            telephone: 15502277096,
            avatar: require("@/assets/logo.png"),
            isFirst: false,
            isVip: true,
        });
        const handle = () => {
            router.push({ name: "test" });
        };
        return {
            ...toRefs(userInfo),
            userInfo,
            handle,
        };
    },
});
</script>
<style lang="scss" scoped>
.layout-index {
    min-height: 100vh;
    background: $zy_bg_white;
    .top-banner {
        @include boxSize(100%, 8.6rem);
        @include settingBackground($url: "../assets/logo.png");
    }
}
</style>
