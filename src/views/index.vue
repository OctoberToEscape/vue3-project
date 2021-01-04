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
    //- 中国名师介绍
    intro(:inf="teacherIntro")
    //- 中国名师视频区域
    .teacher-area(v-for="(item,index) in teacherArea" :key="index")
        video-area(:inf="item" videoType="teacher")
    //- 名师文萃
    .article
        .article-title
            p.mb-15 名师文萃
            .line.mb-15
            .desc 一个汇集名师所有研究领域与问题的学术圣地，一个可供学友尽情汲水的阅读宝库
        .article-list
            .item
                img.avatar(src="@/assets/logo.png")
                .article-info.mb-35
                    .title.mb-15 朱海就老师文萃
                    .position.mb-25 经济学者，浙江工商大学经济学院教授
                    .info-desc 「朱海就老师文萃」由「知鸦」从朱海就老师已发表的200多篇文章中精选汇编而成，并由朱海就老师亲自审定授权，以供学友免费在线阅读。
                img.article-line.mb-35(src="@/assets/images/left-red-line.png")
                .other-list
                    .title.mb-25 市场经济的基础理论
                    ul
                        li
                            img.left.mr-20(src="@/assets/logo.png")
                            .right 
                                .list-title 
                                    span 经济学是关于合作的科学
                                    img.icon(src="@/assets/logo.png")
                                .list-desc 经济学考察的，不只是人的本身。
                .book-list
                    .item 哈哈哈哈哈
    //- 世界虽大明白就好介绍
    intro(:inf="worldIntro")
    //- 世界虽大明白就好视屏区
    video-area(:inf="worldArea" videoType="world")
</template>

<script lang="ts">
import {
    defineComponent,
    onMounted,
    ref,
    reactive,
    toRefs,
    computed,
} from "vue";
import { useRouter } from "vue-router";
import store from "@/store/index";
import {
    getFullscreenBackground,
    getPosition,
    getTeacherEvaluation,
} from "@/api/index";
import { FullScreen } from "@/utils/interface";
import videoArea from "@/components/videoArea/index.vue";
import intro from "@/components/introduce/index.vue";
export default defineComponent({
    name: "index",
    components: { videoArea, intro },
    setup() {
        const router = useRouter();

        const playerShow = ref<boolean>(false);
        const fullScreen = reactive<{ screen: object }>({ screen: {} });
        const evaluation = reactive<{ list: string[] }>({ list: [] });
        const videoArea = reactive<{
            teacherArea: object[];
            worldArea: object;
        }>({ teacherArea: [], worldArea: {} });

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

            //世界虽大明白就好视频区
            getPosition("1").then((res: object): void => {
                videoArea.worldArea = res;
            });

            //获取名师视频区
            getPosition("2-3-5-4").then((res: object[]): void => {
                videoArea.teacherArea = res;
            });
        });

        const teacherIntro = computed((): object => {
            return store.getters.done_teacherIntro;
        });

        const worldIntro = computed((): object => {
            return store.getters.done_worldIntro;
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
            ...toRefs(videoArea),
            teacherIntro,
            worldIntro,
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

    .article {
        @include Padding(0.48rem, 0.5rem);
        background: $zy_bg_black2;
        .article-title {
            margin-bottom: 1.45rem;
            p {
                @include fontColor(
                    $zy_fs_xxl,
                    $zy_col_white,
                    0.4rem,
                    true,
                    center
                );
            }
            .line {
                @include boxSize(3rem, 0rem);
                position: relative;
                display: block;
                margin: auto;
                border-bottom: 0.01rem solid #bbbdc1;
                &:after {
                    content: "";
                    @include boxSize(0.64rem, 0.06rem);
                    @include layout-flex();
                    background: $zy_bd_yellow;
                }
            }
            .desc {
                @include fontColor(
                    $zy_fs_xs,
                    $zy_col_white,
                    0.36rem,
                    false,
                    center
                );
            }
        }
        .article-list {
            &:last-child {
                margin-bottom: 0;
            }
            .item {
                @include radius(0.1rem);
                @include Padding(1.37rem, 0.24rem);
                padding-bottom: 0.65rem;
                background: $zy_bg_white;
                position: relative;
                .avatar {
                    @include radius(50%);
                    @include boxSize(2.1rem, 2.1rem);
                    @include layout-flex($top: 0%);
                    border: 0.02rem solid $zy_bd_white;
                }
                .article-info {
                    .title {
                        @include fontColor(
                            $zy_fs_default,
                            $zy_col_black_title,
                            0.4rem,
                            true,
                            left
                        );
                    }
                    .position {
                        @include fontColor(
                            $zy_fs_xs,
                            $zy_col_gray_info,
                            0.3rem,
                            false,
                            left
                        );
                    }
                    .info-desc {
                        @include fontColor(
                            $zy_fs_s,
                            $zy_col_black_desc,
                            0.36rem,
                            false,
                            left
                        );
                    }
                }
                .article-line {
                    @include boxSize(100%, 0.04rem);
                    display: block;
                }
                .other-list {
                    .title {
                        @include fontColor(
                            $zy_fs_m,
                            $zy_col_black_title,
                            0.32rem,
                            true,
                            left
                        );
                        position: relative;
                        text-indent: 0.2rem;
                        &:after {
                            content: "";
                            display: block;
                            clear: both;
                            background: $zy_bg_black2;
                            @include boxSize(0.1rem, 0.1rem);
                            @include radius(50%);
                            @include Position(absolute, 0, 30%);
                        }
                    }
                    ul {
                        li {
                            @include flex($align: left);
                            .left {
                                @include boxSize(0.48rem, 0.48rem);
                                @include radius(50%);
                            }
                            .right {
                                @include boxSize(calc(100% - 0.68rem), auto);
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
