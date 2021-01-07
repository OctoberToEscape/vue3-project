//是否超过可视区域
export const isInVisibleArea = (elem: any): boolean => {
    if (!elem || !elem.getBoundingClientRect) return false;
    var rect = elem.getBoundingClientRect();
    if (
        rect.top < window.innerHeight &&
        rect.bottom > 0 &&
        rect.left < window.innerWidth &&
        rect.right > 0
    )
        return true;
    else return false;
};

//富文本图片100%宽
export const richImageWidth = (rich: string): string => {
    const reg = new RegExp("<img", "gi");
    return rich.replace(reg, `<img style="width:100%";height:auto`);
};
