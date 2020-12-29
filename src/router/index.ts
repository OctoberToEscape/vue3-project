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
            title: "首页",
        },
    },
    {
        path: "/test",
        name: "test",
        component: () => import("@/views/test.vue"),
        meta: {
            title: "测试页面",
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
