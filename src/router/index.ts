import {
    createRouter,
    createWebHistory,
    RouteRecordRaw,
    RouteLocationNormalized,
    RouteLocationNormalizedLoaded,
    NavigationGuardNext,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "index",
        component: () => import("@/views/index.vue"),
        meta: {
            title: "知鸦官网",
        },
    },
    {
        path: "/article-details",
        name: "article-details",
        component: () => import("@/views/article-details.vue"),
        meta: {
            title: "文萃精选",
        },
    },
    {
        path: "/privacy",
        name: "privacy",
        component: () => import("@/views/privacy.vue"),
        meta: {
            title: "隐私政策与服务协议",
        },
    },
];

const scrollBehavior = (
    to: RouteLocationNormalized,
    from: RouteLocationNormalizedLoaded,
    savedPosition: object | null
): object => {
    if (savedPosition) return savedPosition;
    else return { left: 0, top: 0 };
};

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior,
});

router.beforeEach(
    (
        to: RouteLocationNormalized,
        from: RouteLocationNormalizedLoaded,
        next: NavigationGuardNext
    ): void => {
        if (to.meta.title) {
            document.title = to.meta.title;
        }
        next();
    }
);

export default router;
