<template lang="pug">
.home-page
    //- 首屏视频
    .top-fullscreen
        van-image(
            width="100%"
            height="8.9rem"
            fit="cover"
            :src="screen.h5_video_cover"
            @load="fullScreenLoaded")
        img.play-icon(
            src="@/assets/images/player.png" 
            alt="播放" 
            v-if="playerShow" 
            @click="handlePlayer")
    //- 人是会思想的芦苇
    .golden-words
        .small-size.mb-10 在古希腊，
        .large-size.mb-15 接受通识教育是为了成为城邦的好公民
        .small-size.mb-10 在现代社会
        .large-size.mb-40 通识是合格的现代公民应当掌握的常识通识是合格的现代公民应当掌握的常识
        .line
        .small-size.mb-40 我们首先应该知道在人类历史中，最重要的事情只有两件。
        .small-size.mb-40 第一件，人类从1万年前开始的农业定居生活。人类这个物种的数量迅速增长，并在全球各个角落营造城市，发明文字，形成文明。
        .small-size.mb-50 第二件，近500年来，人类社会突破农耕桎梏，跃迁到现代社会的变化。这短短500年里，人类生活的方方面面都发生了翻天覆地的巨变，并且以几何级数的方式在狂飙突进。请你和我们一起，以此为思考的起点，重新认识我们身处的世界。
        .bottom-icon 「人是会思考的苇草」
    //- 老师评价
    .teacher-evaluation
        .item.mb-65(v-for="(item,index) in list" :key="index")
            .desc.mb-35 {{item.desc}}
            .name --- {{item.name}}
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import {
    getFullscreenBackground,
    getPosition,
    getTeacherEvaluation,
} from "@/api/index";
import { FullScreen } from "@/utils/interface";

export default defineComponent({
    name: "index",
    setup() {
        const router = useRouter();
        const playerShow = ref<boolean>(false);
        const fullScreen = reactive<{ screen: object }>({ screen: {} });
        const evaluation = reactive<{ list: string[] }>({ list: [] });

        onMounted((): void => {
            //获取首屏图片和视屏
            getFullscreenBackground().then((res: FullScreen): void => {
                res.h5_video_cover = res.h5_video_cover
                    ? res.h5_video_cover
                    : require("@/assets/images/fullscreen-bg.png");
                fullScreen.screen = res;
            });

            //获取老师评价
            getTeacherEvaluation().then((res: string[]): void => {
                evaluation.list = res;
            });
        });

        //监听首屏图片加载完成
        const fullScreenLoaded = (e: object): void => {
            playerShow.value = true;
        };

        //首屏点击播放
        const handlePlayer = (): void => {
            console.log("player");
        };

        return {
            ...toRefs(fullScreen),
            ...toRefs(evaluation),
            playerShow,

            fullScreenLoaded,
            handlePlayer,
        };
    },
});
</script>
<style lang="scss" scoped>
.home-page {
    min-height: 100vh;
    background: $zy_bg_white;
    .top-fullscreen {
        @include boxSize(100%, 8.9rem);
        position: relative;
        .play-icon {
            @include boxSize(0.88rem, 0.88rem);
            @include layout-flex();
        }
    }
    .golden-words {
        @include Padding(0.65rem, 0.65rem);
        @include settingBackground($url: "../assets/images/white-bg.png");
        .small-size {
            @include fontColor($zy_fs_l, $zy_col_black_title, 0.46rem);
        }
        .large-size {
            @include fontColor($zy_fs_xl, $zy_col_black_title, 0.5rem, true);
        }
        .bottom-icon {
            @include boxSize(3.26rem, 0.52rem);
            @include fontColor($zy_fs_l, $zy_col_white, 0.52rem, false, center);
            background: $zy_bg_black3;
            margin: auto;
        }
    }
    .teacher-evaluation {
        @include Padding(0.83rem, 0.45rem);
        @include settingBackground($url: "../assets/images/black-bg.png");
        .item {
            &:last-child {
                margin-bottom: 0 !important;
            }
            .desc {
                @include fontColor($zy_fs_l, $zy_col_white, 0.46rem);
            }
            .name {
                @include fontColor(
                    $zy_fs_m,
                    $zy_col_yellow,
                    0.36rem,
                    true,
                    right
                );
            }
        }
    }
}
</style>
