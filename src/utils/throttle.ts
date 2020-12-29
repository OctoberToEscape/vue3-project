/**
 * 防抖
 * @param func 需要包装的函数
 * @param delay 延迟时间，单位ms
 * @param immediate 是否默认执行一次(第一次不延迟)
 */

class Debounced {
    public use = (
        func: Function,
        delay: number,
        immediate: boolean = false
    ): Function => {
        let timer: number | undefined;
        return (...args: any[]): void => {
            if (immediate) {
                func.apply(this, args);
                immediate = false;
                return;
            }
            clearTimeout(timer);
            timer = setTimeout((): void => {
                func.apply(this, args);
            }, delay);
        };
    };
}

/**
 * 节流
 * @param func 需要包装的函数
 * @param delay 延迟时间，单位ms
 * @param immediate 是否默认执行一次(第一次不延迟)
 */

class Throttle {
    public use(
        func: Function,
        delay: number,
        immediate: boolean = false
    ): Function {
        let flag: boolean = true;
        return (...args: any[]): void => {
            if (immediate) {
                func.apply(this, args);
                immediate = false;
                return;
            }
            if (flag) {
                func.apply(this, args);
                flag = false;
                setTimeout((): void => {
                    flag = true;
                }, delay);
            }
        };
    }
}

const debounced = new Debounced();
const throttle = new Throttle();

export { debounced, throttle };
