import { onActivated, onDeactivated, ref } from "vue";

const backTop = () => {
    const scrollTop = ref<number>(0);

    onActivated((): void => {
        window.addEventListener("scroll", handleScroll);
    });

    const handleScroll = (): void => {
        scrollTop.value = document.documentElement.scrollTop / 100;
    };
    onDeactivated((): void => {
        window.removeEventListener("scroll", handleScroll);
    });

    return { scrollTop, handleScroll };
};

export default backTop;
