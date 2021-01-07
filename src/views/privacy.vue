<template lang="pug">
.privacy
    van-nav-bar( 
        left-arrow
        :title="info.title ? info.title : '加载中...'"
        :fixed="true"
        :safe-area-inset-top="true"
        @click-left="onClickLeft")
    van-skeleton(title :row="15" :loading="loading") 
        .rich(v-html="info.content")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onActivated, ref } from "vue";
import { getPrivacy } from "@/api/privacy";
import { useRoute } from "vue-router";
import { richImageWidth } from "@/utils/common";
import handleBack from "@/hooks/handleBack";
import backTop from "@/components/back-top/index.vue";
export default defineComponent({
    name: "privacy",
    components: { backTop },
    setup() {
        const route = useRoute();
        const privacy = reactive<{ info: object }>({ info: {} });
        const loading = ref<boolean>(true);
        const { onClickLeft } = handleBack();

        onActivated((): void => {
            getPrivacy(route.query.type).then((res: any): void => {
                res.content = richImageWidth(res.content);
                privacy.info = res;
                document.title = res.title;
                loading.value = false;
            });
        });
        return {
            ...toRefs(privacy),
            onClickLeft,
            loading,
        };
    },
});
</script>
<style lang="scss" scoped>
.privacy {
    min-height: 100vh;
    background: $zy_bg_white;
    @include Padding(1.42rem, 0.46rem);
    padding-bottom: 0.3rem;
    .rich {
        font-size: $zy_fs_default;
    }
}
</style>
