<template lang="pug">
.back-top(
    @click="backTop"
    :style="{bottom:`${bottom}rem`,right:`${right}rem`,borderRadius:mode === 'circle' ? '50%' : '0.08rem',opacity:opacity,zIndex: ZIndex}")
    van-icon(:name="icon" :color="color" :size="`${iconSize}rem`" @click="backTop")
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch, watchEffect } from "vue";
export default defineComponent({
    name: "back-top",
    props: {
        //返回顶部形状，circle-圆形，square-方形
        mode: {
            type: String,
            default: (): string => {
                return "circle";
            },
        },
        //定位底部位置
        bottom: {
            type: Number,
            default: (): number => {
                return 1;
            },
        },
        //定位右边位置
        right: {
            type: Number,
            default: (): number => {
                return 0.4;
            },
        },
        //已经滚动的距离
        scrollTop: {
            type: Number,
            default: (): number => {
                return 0;
            },
        },
        //滚动多少展示
        top: {
            type: Number,
            default: (): number => {
                return 4;
            },
        },
        //icon图标名字
        icon: {
            type: String,
            default: (): string => {
                return "back-top";
            },
        },
        //icon图标颜色
        color: {
            type: String,
            default: (): string => {
                return "rgb(144, 147, 153)";
            },
        },
        //icon大小
        iconSize: {
            type: Number,
            default: (): number => {
                return 0.48;
            },
        },
        // 返回顶部滚动的方式smooth(平滑滚动),instant(瞬间滚动),默认值auto
        duration: {
            type: String,
            default: (): string => {
                return "auto";
            },
        },
    },
    setup(props) {
        // 不透明度，为了让组件有一个显示和隐藏的过渡动画
        const opacity = ref<number>(0.6);
        // 组件的z-index值，隐藏时设置为-1，就会看不到
        const ZIndex = ref<number>(-1);
        const behavior = ref<any>("auto");
        const is_scrollTop = ref<number>(0);
        const is_top = ref<number>(0);

        watchEffect((): void => {
            behavior.value = props.duration;
            is_scrollTop.value = props.scrollTop;
            is_top.value = props.top;
        });

        //返回顶部
        const backTop = (): void => {
            window.scrollTo({
                top: 0,
                behavior: behavior.value,
            });
        };

        const showBackTop = computed((): boolean => {
            // 如果滚动条到顶的距离大于设定的距离，就显示返回顶部的按钮
            return is_scrollTop.value > is_top.value;
        });

        watch(
            (): boolean => showBackTop.value,
            (nVal, oVal): void => {
                if (nVal) {
                    ZIndex.value = 999;
                    opacity.value = 1;
                } else {
                    opacity.value = 0;
                    setTimeout((): void => {
                        ZIndex.value = -1;
                    }, 500);
                }
            }
        );

        return {
            opacity,
            ZIndex,
            is_scrollTop,
            is_top,
            showBackTop,
            behavior,
            backTop,
        };
    },
});
</script>
<style lang="scss" scoped>
.back-top {
    @include boxSize(0.8rem, 0.8rem);
    @include flex();
    flex-direction: column;
    position: fixed;
    z-index: 9;
    background-color: #e1e1e1;
    transition: opacity 0.4s;
}
</style>
