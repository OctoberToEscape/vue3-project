<template lang="pug">
van-popup.dialog(
    v-model:show="dialog" 
    position="center"
    teleport="body"
    :close-on-popstate="true"
    :safe-area-inset-bottom="true"
    :close-on-click-overlay="false"
    @open="open"
    @close="close")
    .content
        img.close(src="@/assets/images/close.png" @click="handleClose")
        video(
            ref="video"
            poster="@/assets/images/poster.png"
            src="https://zmbai.oss-cn-beijing.aliyuncs.com/website/zhu.mp4"
            controls="controls"
            webkit-playsinline="true"
            x-webkit-airplay="true"
            x5-video-player-type="h5"
            x5-video-orientation="landscape"
            x5-video-player-fullscreen="true"
            x5-playsinline="true"
            playsinline="true"
            autoplay)
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch, watchEffect } from "vue";
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
    setup(props, { emit }) {
        const dialog = ref<boolean>(false);
        const video = ref<HTMLVideoElement | null>(null);

        watchEffect((): void => {
            dialog.value = props.show;
        });

        onMounted(() => {
            video.value = document.querySelector("video");
        });

        const open = (): void => {
            if (video.value) video.value.play();
        };

        const close = (): void => {
            if (video.value) video.value.pause();
        };

        const handleClose = (): void => {
            emit("handleClose");
        };

        return { dialog, video, open, close, handleClose };
    },
});
</script>
<style lang="scss" scoped>
.dialog {
    .content {
        @include boxSize(7.5rem, auto);
        .close {
            @include boxSize(0.44rem, 0.44rem);
            display: block;
            margin: 0rem auto 0.6rem;
        }
        video {
            @include boxSize(100%, 4.24rem);
            display: block;
            object-fit: fill;
        }
    }
}
</style>
