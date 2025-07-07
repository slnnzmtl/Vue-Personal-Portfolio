import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "main",
    component: () => import("../views/MainView.vue"),

    meta: {
      title: "Home",
      keepAlive: true,
    },
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import(/* webpackChunkName: "projects" */ "@/views/ProjectsView.vue"),
    meta: {
      title: "Projects",
    },
    props: true,
  },
  {
    path: "/projects/:projectId",
    name: "projects-id",
    component: () => import(/* webpackChunkName: "projects" */ "@/views/ProjectsView.vue"),
    meta: {
      title: "Project Details",
    },
    props: true,
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/BlogView.vue"),
    meta: {
      title: "Blog",
    },
  },
  {
    path: "/automations",
    name: "automations",
    component: () => import("../views/AutomationsView.vue"),
    meta: {
      title: "Automations",
    },
  },
  {
    path: "/services/ai-sales-analytics",
    name: "ai-sales-analytics",
    component: () => import("../views/AIAnalyticsView.vue"),
    meta: {
      title: "AI Analytics for Sales",
    },
  },
  {
    path: "/services",
    name: "services",
    component: () => import("../views/ServicesView.vue"),
    meta: {
      title: "Services",
    },
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: () => import("../views/PrivacyPolicy.vue"),
    meta: {
      title: "Privacy Policy",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return new Promise((resolve) => {
        const scrollToElement = () => {
          const element = document.querySelector(to.hash);
          if (element) {
            resolve({
              el: to.hash,
              behavior: "smooth"
            });
          } else {
            setTimeout(scrollToElement, 100);
          }
        };
        
        setTimeout(scrollToElement, 50);
      });
    }
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title || "Portfolio"} | Daniel Kazansky`;

  next();
});

router.afterEach(() => {});

export default router;
