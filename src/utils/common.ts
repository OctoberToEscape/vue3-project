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
