import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeView },
    { path: "/tech", component: () => import("../views/TechView.vue") },
    {
      path: "/components",
      component: () => import("../views/ComponentView.vue"),
    },
    { path: "/design", component: () => import("../views/DesignView.vue") },
  ],
});

export default router;
