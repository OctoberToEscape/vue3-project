<template lang="pug">
.video-area
    .area-list(v-for="(item,index) in list.list" :key="index")
        .title.mb-15 {{item.name}}
        .line.mb-15
        .desc.mb-35 {{item.info}}
        .item.mb-40(v-for="(ele,index) in item.list" :key="index")
            video(
                :poster="ele.cover"
                :src="ele.video"
                controls="controls"
                webkit-playsinline="true"
                x-webkit-airplay="true"
                x5-video-player-type="h5"
                x5-video-orientation="landscape"
                x5-video-player-fullscreen="true"
                x5-playsinline="true"
                playsinline="true")
            .content         
                .name.mb-20(v-if="videoType === 'teacher'") {{ele.teacher}}
                .position.mb-25(v-if="videoType === 'teacher'") {{ele.teacher_info}}
                .lines.mb-30(v-if="videoType === 'teacher'")
                p.mb-30 {{ele.info}}
                button(@click="handleUp(ele.title,ele.info)") 展开全部 
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watchEffect } from "vue";
export default defineComponent({
    name: "videoArea",
    props: {
        inf: {
            type: Object,
            default: () => {
                return {};
            },
        },
        videoType: {
            type: String,
            default: () => {
                return "teacher";
            },
        },
    },
    setup(props) {
        const course = reactive<{ list: object }>({ list: {} });
        watchEffect(() => {
            course.list = Object.assign({}, props.inf);
        });
        const handleUp = (title: string, info: string): void => {
            console.log(title, info);
        };
        return {
            ...toRefs(course),
            handleUp,
        };
    },
});
</script>
<style lang="scss" scoped>
.video-area {
    @include Padding(0.6rem, 0.38rem);
    background: #33323a;
    .area-list {
        margin-bottom: 1.2rem;
        &:last-child {
            margin-bottom: 0;
        }
        .title {
            @include fontColor(
                $zy_fs_xxl,
                $zy_col_white,
                0.44rem,
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
            @include fontColor($zy_fs_xs, $zy_col_white, 0.3rem, false, center);
            @include textEllipsis();
        }
        .item {
            @include radius(0.2rem);
            overflow: hidden;
            &:last-child {
                margin-bottom: 0;
            }
            video {
                @include boxSize(100%, 2.85rem);
                display: block;
                object-fit: fill;
            }
            .content {
                @include Padding(0.3rem, 0.25rem);
                background: $zy_bg_white;
                .name {
                    @include fontColor(
                        $zy_fs_l,
                        $zy_col_black_title,
                        0.34rem,
                        true,
                        center
                    );
                }
                .position {
                    @include fontColor(
                        $zy_fs_small,
                        $zy_col_gray_info,
                        0.24rem,
                        false,
                        center
                    );
                    @include textEllipsis();
                }
                .lines {
                    @include boxSize(0.54rem, 0.01rem);
                    background: $zy_bd_gray;
                    margin: auto;
                }
                p {
                    @include fontColor(
                        $zy_fs_m,
                        $zy_col_black_desc,
                        0.48rem,
                        false,
                        left
                    );
                    @include textEllipsis(2);
                }
                button {
                    @include fontColor($zy_fs_m, $zy_col_yellow, 0.34rem);
                    background: $zy_bg_white;
                    border: none;
                    display: block;
                    margin: auto;
                }
            }
        }
    }
}
</style>
