import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "main",
    component: () => import("../views/MainView.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/ProjectsView.vue"),
  },
  {
    path: "/projects/:projectId",
    name: "projects-id",
    component: () => import("../views/ProjectsView.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/BlogView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
