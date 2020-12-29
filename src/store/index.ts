import { createStore } from "vuex";
const userInfo: string | null = localStorage.getItem("userInfo");
export default createStore({
    state: {
        userInfo: userInfo ? JSON.parse(userInfo) : null,
    },
    mutations: {
        SET_USER_INFO(state, val) {
            state.userInfo = val;
            localStorage.userInfo = JSON.stringify(val);
        },
    },
    actions: {
        UPDATA_USER_INFO({ commit }, val) {
            commit("SET_USER_INFO", val);
        },
    },
    modules: {},
});
