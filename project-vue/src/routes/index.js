import * as vueRouter from "vue-router";
import Home from "../pages/Home.vue";

const routes = [{ path: "/", component: Home }];

const router = vueRouter.createRouter({
	history: vueRouter.createWebHashHistory(),
	routes,
});

export default router;
