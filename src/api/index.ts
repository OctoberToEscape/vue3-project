import { service } from "@/utils/request";
import { AxiosResponse } from "axios";
import { API, GCAPI } from "@/api/baseurl";

//首页大屏图片
export const getFullscreenBackground = (): Promise<any> => {
    return service({
        method: "get",
        url: `${GCAPI}/website_cover`,
    }).then(
        (res: AxiosResponse): AxiosResponse<object> => {
            return res.data;
        }
    );
};

//首页视频接口
export const getPosition = (id: string): Promise<any> => {
    return service({
        method: "get",
        url: `${API}/position/${id}`,
    }).then(
        (res: AxiosResponse): AxiosResponse<object> => {
            return res.data;
        }
    );
};

//获取老师评价
export const getTeacherEvaluation = (): Promise<any> => {
    return service({
        method: "get",
        url: "/json/evaluation.json",
    }).then(
        (res: AxiosResponse): AxiosResponse<object> => {
            return res.data;
        }
    );
};

//获取文萃列表
export const getTeacherArticle = (): Promise<any> => {
    return service({
        method: "get",
        url: `${GCAPI}/hometeacherarticle`,
    }).then(
        (res: AxiosResponse): AxiosResponse<object> => {
            return res.data;
        }
    );
};

//获取名师大家列表
export const getFamousMaster = (): Promise<any> => {
    return service({
        method: "get",
        url: `${GCAPI}/homemasterteacher`,
    }).then(
        (res: AxiosResponse): AxiosResponse<object> => {
            return res.data;
        }
    );
};
