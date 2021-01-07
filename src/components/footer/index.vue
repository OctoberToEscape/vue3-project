<template lang="pug">
.warp-footer
    .top-rule.mb-30
        .item(v-for="(item,index) in nav" :key="index" @click="handleRouter(item.type)") {{item.title}}
    .cooperation 商务合作电话：010-82146770  京ICP备17065032号-12
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
    name: "warp-footer",
    setup() {
        const router = useRouter();
        const bar = reactive<{ nav: object[] }>({
            nav: [
                { title: "服务协议", type: 1 },
                { title: "隐私政策", type: 2 },
            ],
        });

        const handleRouter = (type: number): void => {
            router.push({
                name: "privacy",
                query: { type },
            });
        };
        return {
            ...toRefs(bar),
            handleRouter,
        };
    },
});
</script>
<style lang="scss" scoped>
.warp-footer {
    @include Padding(0.5rem, 0.75rem);
    background: $zy_bg_black2;
    .top-rule {
        @include flex($justify: center);
        .item {
            @include fontColor($zy_fs_xs, $zy_col_white, 0.28rem, true, center);
            @include Padding(0, 0.2rem);
            &:first-child {
                border-right: 0.02rem solid #fff;
            }
        }
    }
    .cooperation {
        @include fontColor($zy_fs_xs, $zy_col_white, 0.28rem, true, center);
    }
}
</style>
