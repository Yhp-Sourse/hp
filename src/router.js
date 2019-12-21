import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import login from "./components/login.vue";
import home from "./components/home.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path: '/', 
        redirect: '/login' 
    },
    {
        path:"/login",
        component: login
    },
    {
        path: "/home",
        component: home
    },
    {
        path: '/', 
        redirect: '/map' 
    }
]

var router =  new VueRouter({
    routes
})
export default router;
