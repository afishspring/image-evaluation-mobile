const constantRouterMap = [
    {
        path: '/',
        redirect: '/login',
        meta: {
            title: '首页',
            keepAlive: true
        }
    },
    {
        path: '/login',
        name: "login",
        component: () => import("@/views/loginPage.vue"),
        meta: {
            title: "登录",
        },
    },
    {
        path: '/menuHome',
        name: "menuHome",
        component: () => import("@/views/menuHome.vue"),
        meta: {
            title: "菜单页",
        },
    },
    {
        path: '/creation',
        name: "creation",
        component: () => import("@/views/creationPage.vue"),
        meta: {
            title: "作品",
        },
    },
    {
        path: '/evaluation',
        name: "evaluation",
        component: () => import("@/views/evaluationPage.vue"),
        meta: {
            title: "评估",
        },
    },
    {
        path: '/user',
        name: "user",
        component: () => import("@/views/userPage.vue"),
        meta: {
            title: "个人主页",
        },
    },
    {
        path: '/userPage',
        name: "userPage",
        component: () => import("@/views/userPage.vue"),
        meta: {
            title: "个人主页",
        },
    }
]

export default constantRouterMap