import { createRouter, createWebHistory } from "vue-router";
import CalculateView from "../views/CalculateView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "calculate",
      component: CalculateView,
    },
    {
      path: "/convert",
      name: "convert",
      component: () => import("../views/ConvertView.vue"),
    },
  ],
});

export default router;
