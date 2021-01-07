import { service } from "@/utils/request";
import { AxiosResponse } from "axios";
import { GCAPI } from "@/api/baseurl";
import { LocationQueryValue } from "vue-router";

export const getPrivacy = (
    id: string | LocationQueryValue[] | null
): Promise<any> => {
    return service({
        method: "get",
        url: `${GCAPI}/privacy/${id}`,
    }).then(
        (res: AxiosResponse): AxiosResponse<object> => {
            return res.data;
        }
    );
};
