import { createStore } from "vuex";
const userInfo: string | null = localStorage.getItem("userInfo");
export default createStore({
    state: {
        userInfo: userInfo ? JSON.parse(userInfo) : null,
        teacherIntro: {
            width: "60%",
            title: "中国名师",
            desc:
                " 知鸦将聚集人文社科及自然科学领域600余位顶尖名师，形成独一无二的名师社区，他们毕生治学的精华，都在这里一一呈现。无论你是哪个领域的学习者，都能在这里找到该领域的权威。他们会告诉你，这个学科该如何入门，如何提高，如何拓展，以及如何阅读一本经典。也会告诉你，他们的治学心得和人生经验。",
            type: "text",
        },
        worldIntro: {
            width: "85%",
            title: "世界虽大 明白就好",
            desc:
                "每一个合格的现代公民，都应该身怀通识，对现代社会的基石满怀信心，但，不是所有的课程都能叫做通识课程。<br /><br />知鸦独家原创的知识体系，以视频课程形式，燃起每个现代公民对现代世界源起的好奇心，严肃的通识内容，为你开启寻找现代世界的纵深之旅。",
            type: "text",
        },
        famousIntro: {
            width: "60%",
            title: "名师大家",
            desc: "",
            type: "list",
        },
    },
    getters: {
        done_teacherIntro: (state): object => {
            return state.teacherIntro;
        },
        done_worldIntro: (state): object => {
            return state.worldIntro;
        },
    },
    mutations: {
        SET_USER_INFO(state, val) {
            state.userInfo = val;
            localStorage.userInfo = JSON.stringify(val);
        },
        SET_INTRO(state, val) {
            state.famousIntro.desc = val;
        },
    },
    actions: {
        UPDATA_USER_INFO({ commit }, val) {
            commit("SET_USER_INFO", val);
        },
        UPDATA_INTRO({ commit }, val) {
            commit("SET_INTRO", val);
        },
    },
    modules: {},
});
