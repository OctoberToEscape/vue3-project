import router from "@/router";

const handleBack = () => {
    const onClickLeft = () => {
        router.back();
    };
    return { onClickLeft };
};

export default handleBack;
