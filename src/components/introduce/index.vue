<template lang="pug">
.introduce(:style="{padding : information.type === 'text' ? '0.73rem 0.5rem 0.45rem 0.5' : '0.73rem 0 0.45rem 0'}")
    .title.mb-60(:style="{width:information.width}")
        img(src="@/assets/images/double-line.png")
        span {{information.title}}
        img(src="@/assets/images/double-line.png")
    .text(v-if="information.type === 'text'")
        .desc.mb-35(v-html="information.desc")
        img.icon(src="@/assets/images/down-arrow.png")
    .teacher-list(v-else)
        .item(v-for="(item,index) in information.desc" :key="index")
            van-image.avatar(
                width="1.6rem"
                height="1.6rem"
                fit="cover"
                round
                :src="item.avatar")
            .name.mb-20 {{item.title}}
            .line
            .position {{item.introduce}}
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watchEffect, computed } from "vue";
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
    .text {
        .desc {
            @include fontColor(
                $zy_fs_m,
                $zy_col_black_desc,
                0.46rem,
                false,
                left
            );
        }
        .icon {
            @include boxSize(0.34rem, 0.34rem);
            display: block;
            margin: auto;
        }
    }
    .teacher-list {
        @include flex($justify: left);
        @include boxSize(100%, auto);
        overflow-x: scroll;
        .item {
            @include boxSize(2.76rem, 3.94rem);
            @include radius(0.1rem);
            @include Padding(0.31rem, 0.31rem);
            flex-shrink: 0;
            margin-left: 0.35rem;
            border: 0.02rem solid #dfdfdf;
            .avatar {
                display: block;
                margin: auto;
                margin-bottom: 0.25rem !important;
            }
            .name {
                @include fontColor(
                    $zy_fs_l,
                    $zy_col_black_title,
                    0.34rem,
                    true,
                    center
                );
            }
            .line {
                @include boxSize(0.34rem, 0.03rem);
                margin: auto;
                margin-bottom: 0.22rem !important;
                background: $zy_bd_gray;
            }
            .position {
                @include fontColor(
                    $zy_fs_xs,
                    $zy_col_gray_desc,
                    0.32rem,
                    false,
                    center
                );
                @include textEllipsis(2);
            }
        }
    }
}
</style>
