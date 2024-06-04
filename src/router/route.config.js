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
    }
]

export default constantRouterMap