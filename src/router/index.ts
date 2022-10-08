import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movies/:id",
    name: "MovieDetails",
    component: () => import("../views/MovieDetailsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
