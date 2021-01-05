<template lang="pug">
van-popup.dialog(
    v-model:show="dialog" 
    position="center"
    teleport="body"
    :close-on-popstate="true"
    :safe-area-inset-bottom="true")
    .content
        video(
            ref="refs"
            poster="@/assets/images/poster.png"
            src="https://zmbai.oss-cn-beijing.aliyuncs.com/website/zhu.mp4"
            controls="controls"
            webkit-playsinline="true"
            x-webkit-airplay="true"
            x5-video-player-type="h5"
            x5-video-orientation="landscape"
            x5-video-player-fullscreen="true"
            x5-playsinline="true"
            playsinline="true")
</template>
<script lang="ts">
import { defineComponent, ref, watch, watchEffect } from "vue";
export default defineComponent({
    name: "video-player",
    props: {
        show: {
            type: Boolean,
            default: () => {
                return false;
            },
        },
    },
    setup(props) {
        const dialog = ref<boolean>(false);
        const refs = ref<any>(null);

        watchEffect((): void => {
            dialog.value = props.show;
        });

        //监听弹窗显示隐藏控制播放
        watch(
            () => dialog.value,
            (v) => {
                if (v) {
                    console.log("播放", refs.value);
                } else {
                    console.log("暂停", refs.value);
                }
            }
        );

        return { dialog, refs };
    },
});
</script>
<style lang="scss" scoped>
.dialog {
    background: $zy_bg_white;
    .content {
        @include boxSize(7.5rem, 4rem);
        video {
            @include boxSize(100%, 100%);
            display: block;
            object-fit: fill;
        }
    }
}
</style>
