<template lang="pug">
.privacy
    van-nav-bar( 
        :title="info.title"
        left-arrow
        :fixed="true"
        :safe-area-inset-top="true"
        @click-left="onClickLeft")
    .rich(v-html="info.content")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onActivated } from "vue";
import { getPrivacy } from "@/api/privacy";
import { useRoute } from "vue-router";
import { richImageWidth } from "@/utils/common";
import handleBack from "@/hooks/handleBack";
export default defineComponent({
    name: "privacy",
    setup() {
        const route = useRoute();
        const privacy = reactive<{ info: object }>({ info: {} });
        const { onClickLeft } = handleBack();

        onActivated((): void => {
            getPrivacy(route.query.type).then((res: any): void => {
                res.content = richImageWidth(res.content);
                privacy.info = res;
                document.title = res.title;
            });
        });
        return {
            ...toRefs(privacy),
            onClickLeft,
        };
    },
});
</script>
<style lang="scss" scoped>
.privacy {
    min-height: 100vh;
    background: $zy_bg_white;
    .rich {
        @include Padding(1.42rem, 0.46rem);
        padding-bottom: 0.3rem;
        font-size: $zy_fs_default;
    }
}
</style>
