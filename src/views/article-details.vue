<template lang="pug">
.article-details
    van-nav-bar( 
        title="文萃精编"
        left-arrow
        :fixed="true"
        :safe-area-inset-top="true"
        @click-left="onClickLeft")
    .details
        van-skeleton(title :row="3" :loading="loading") 
            .article-info.mb-40
                .title.mb-40 {{info.title}}
                .date.mb-20 {{info.from_to}}
                .author {{info.authorization}}
        van-skeleton(:row="3" :loading="loading") 
            .sentence.mb-70
                img.icon-left.mb-15(src="@/assets/images/left-quotes.png")
                p.mb-15 {{info.brief_introduction}}
                img.icon-right(src="@/assets/images/right-quotes.png")
        van-skeleton(title :row="10" :loading="loading") 
            .rich-content(v-html="info.content")
    warp-footer
    back-top(mode="square" duration="smooth" :scrollTop="scrollTop")
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs, onActivated } from "vue";
import { useRoute } from "vue-router";
import { getTeacherArticle } from "@/api/article-details";
import { richImageWidth } from "@/utils/common";
import handleBack from "@/hooks/handleBack";
import warpFooter from "@/components/footer/index.vue";
import backTop from "@/components/back-top/index.vue";
import handleBackTop from "@/hooks/backTop";
export default defineComponent({
    name: "article-details",
    components: { warpFooter, backTop },
    setup() {
        const route = useRoute();
        const loading = ref<boolean>(true);
        const details = reactive<{ info: object }>({ info: {} });
        const { onClickLeft } = handleBack();
        const { scrollTop, handleScroll } = handleBackTop();
        onActivated((): void => {
            //获取详情
            getTeacherArticle({
                article_id: route.query.id,
            }).then((res: any): void => {
                res.content = richImageWidth(res.content);
                details.info = res;
                loading.value = false;
            });
        });

        return {
            ...toRefs(details),
            onClickLeft,
            scrollTop,
            loading,
            handleScroll,
        };
    },
});
</script>
<style lang="scss" scoped>
.article-details {
    background: $zy_bg_white;
    .details {
        @include Padding(0.5rem, 0.32rem);
        padding-top: 1.42rem;
        min-height: 100vh;
        .article-info {
            .title {
                @include fontColor(
                    $zy_fs_l,
                    $zy_col_black_title,
                    0.44rem,
                    true
                );
            }
            .date {
                @include fontColor($zy_fs_xs, $zy_col_gray_desc, 0.28rem);
            }
            .author {
                @include fontColor($zy_fs_xs, $zy_col_red, 0.28rem);
            }
        }
        .sentence {
            @include Padding(0.15rem, 0.2rem);
            @include radius(0.05rem);
            background: $zy_bg_gray;
            overflow: hidden;
            img {
                @include boxSize(0.13rem, 0.17rem);
                display: block;
            }
            .icon-right {
                float: right;
            }
            p {
                @include Padding(0, 0.2rem);
                @include fontColor(
                    $zy_fs_m,
                    $zy_col_gray_desc,
                    0.42rem,
                    $align: center
                );
            }
        }
        .rich-content {
            font-size: $zy_fs_default;
        }
    }
}
</style>
