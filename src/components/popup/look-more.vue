<template lang="pug">
van-popup.dialog(
    round
    v-model:show="dialog" 
    position="bottom"
    teleport="body"
    :close-on-popstate="true"
    :safe-area-inset-bottom="true"
    @close="close")
    .content
        .title.mb-30 {{title}}
        .desc {{desc}}
</template>
<script lang="ts">
import { defineComponent, watchEffect, ref, reactive, toRefs } from "vue";
export default defineComponent({
    name: "look-more-popup",
    props: {
        show: {
            type: Boolean,
            default: () => {
                return false;
            },
        },
        inf: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
    setup(props, { emit }) {
        const dialog = ref<Boolean>(false);
        const info = reactive<{ title: string; desc: string }>({
            title: "",
            desc: "",
        });
        watchEffect(() => {
            dialog.value = props.show;
            info.title = props.inf.title;
            info.desc = props.inf.desc;
        });

        const close = (): void => {
            emit("close");
        };

        return { dialog, ...toRefs(info), close };
    },
});
</script>
<style lang="scss" scoped>
.dialog {
    .content {
        background: $zy_bg_white;
        @include Padding(0.4rem, 0.32rem);
        .title {
            @include fontColor(
                $zy_fs_xxl,
                $zy_col_black_title,
                0.52rem,
                true,
                center
            );
            @include textEllipsis();
        }
        .desc {
            @include fontColor(
                $zy_fs_default,
                $zy_col_black_title,
                0.46rem,
                false,
                left
            );
        }
    }
}
</style>
