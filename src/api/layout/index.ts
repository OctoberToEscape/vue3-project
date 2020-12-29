import { service } from "@/utils/request";
import { AxiosResponse } from "axios";

//首页大屏图片
export const getFullscreenBackground = (): Promise<AxiosResponse<object>> => {
    return service({
        method: "get",
        url: "/website_cover",
    }).then(
        (res: AxiosResponse): AxiosResponse<object> => {
            return res.data;
        }
    );
};

export const getPosition = (id: string): Promise<AxiosResponse<object>> => {
    return service({
        method: "get",
        url: `/position/${id}`,
    }).then(
        (res: AxiosResponse): AxiosResponse<object> => {
            return res.data;
        }
    );
};
