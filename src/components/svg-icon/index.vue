<template lang="pug">
svg(:class="svgClass" aria-hidden="true")
    use(:xlink:href="iconName")
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
    name: "svg-icon",
    props: {
        iconClass: {
            type: String,
            required: true,
            default: () => {
                return "";
            },
        },
        className: {
            type: String,
            default: () => {
                return "";
            },
        },
    },
    setup(props) {
        const iconName = computed((): string => {
            return `#icon-${props.iconClass}`;
        });
        const svgClass = computed((): string => {
            if (props.className) return `svg-icon ${props.className}`;
            else return "svg-icon";
        });
        return {
            iconName,
            svgClass,
        };
    },
});
</script>

<style scoped lang="scss">
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
