<template lang="pug">
.introduce
    .title.mb-60(:style="{width:information.width}")
        img(src="@/assets/images/double-line.png")
        span {{information.title}}
        img(src="@/assets/images/double-line.png")
    .desc.mb-35(v-html="information.desc")
    img.icon(src="@/assets/images/down-arrow.png")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watchEffect } from "vue";
export default defineComponent({
    name: "introduce",
    props: {
        inf: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
    setup(props) {
        const info = reactive<{ information: object }>({
            information: {},
        });

        watchEffect((): void => {
            info.information = Object.assign({}, props.inf);
        });
        return { ...toRefs(info) };
    },
});
</script>
<style lang="scss" scoped>
.introduce {
    @include Padding(0.45rem, 0.5rem);
    padding-top: 0.73rem;
    .title {
        @include flex($justify: space-between);
        margin: auto;
        img {
            @include boxSize(0.96rem, 0.06rem);
        }
        span {
            @include fontColor(
                $zy_fs_xl,
                $zy_col_black_title,
                0.4rem,
                true,
                center
            );
        }
    }
    .width-60 {
        width: 60%;
    }
    .desc {
        @include fontColor($zy_fs_m, $zy_col_black_desc, 0.46rem, false, left);
    }
    .icon {
        @include boxSize(0.34rem, 0.34rem);
        display: block;
        margin: auto;
    }
}
</style>
