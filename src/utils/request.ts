import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";
import store from "@/store";
import router from "@/router";
import { Toast } from "vant";
import { VanToast } from "vant/types/toast";

interface PendingType {
    url?: string;
    method?: Method;
    params: any;
    data: any;
    cancel: Function;
}

let loading: VanToast | null = null;
const pendingList: Array<PendingType> = [];
const CancelToken = axios.CancelToken;

//取消重复请求
const removePending = (config: AxiosRequestConfig): void => {
    for (const key in pendingList) {
        const item: number = +key;
        const list: PendingType = pendingList[key];
        // 当前请求在数组中存在时执行函数体
        if (
            list.url === config.url &&
            list.method === config.method &&
            JSON.stringify(list.params) === JSON.stringify(config.params) &&
            JSON.stringify(list.data) === JSON.stringify(config.data)
        ) {
            // 执行取消操作
            list.cancel("操作太频繁，请稍后再试");
            // 从数组中移除记录
            pendingList.splice(item, 1);
        }
    }
};

const service = axios.create({
    timeout: 5000,
    headers: {
        Accept: "application/json; charset=utf-8",
        "Content-Type": "application/json; charset=utf-8",
    },
});

service.interceptors.request.use(
    (config: any): Promise<AxiosRequestConfig> | AxiosRequestConfig => {
        if (!loading) {
            loading = Toast.loading({
                message: "请稍等...",
                forbidClick: false,
                duration: 0,
            });
        }
        removePending(config);
        config.cancelToken = new CancelToken((c): void => {
            pendingList.push({
                url: config.url,
                method: config.method,
                params: config.params,
                data: config.data,
                cancel: c,
            });
        });

        if (config.isToken) {
            if (localStorage.userInfo) {
                config.headers.authorization = JSON.parse(
                    localStorage.userInfo
                ).authorization;
            }
        }
        if (config.isCreateOrder) {
            config.headers.platform = "web";
            config.headers.appversion = "web";
            config.headers.imei = "web";
            config.headers.phonemodel = "web";
            config.headers.systemversion = "web";
        }

        return config;
    },
    (error: Error): Promise<never> => {
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    (
        response: AxiosResponse
    ): AxiosResponse<object> | Promise<AxiosResponse<object>> => {
        // 先行删除再取消loading否则loading会一直存在
        removePending(response.config);
        if (loading && pendingList.length == 0) {
            Toast.clear();
            loading = null;
        }
        let { data } = response;

        //token 过期退出去登陆页
        if (response.data.code == 100401 || response.data.code == 100410) {
            store.dispatch("UPDATA_USER_INFO", null);
            localStorage.clear();
            setTimeout((): void => {
                router.replace({ name: "login" });
            }, 1000);
            response.data.msg = "登录状态已过期，请重新登录";
        }

        return Promise.resolve(data);
    },
    (error: Error): Promise<never> => {
        // 判断请求异常信息中是否含有超时timeout字符串;
        if (error.message && error.message.includes("timeout")) {
            Toast.fail({
                message: "请求超时",
                duration: 2500,
            });
        } else {
            Toast.fail({
                message: "请求失败" + error.message,
                duration: 2500,
            });
        }
        return Promise.reject(error);
    }
);
export { axios, service };
