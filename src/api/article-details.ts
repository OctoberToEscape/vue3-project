import { service } from "@/utils/request";
import { AxiosResponse } from "axios";
import { API, GCAPI } from "@/api/baseurl";

export function getTeacherArticle(id: object): Promise<any> {
    return service({
        method: "get",
        url: `${GCAPI}/hometeacherarticle_info`,
        params: id,
    }).then(
        (res: AxiosResponse): AxiosResponse<object> => {
            return res.data;
        }
    );
}
