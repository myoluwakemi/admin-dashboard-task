import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "LandingPageLayout",
    component: () => import("../Layouts/LandingPageLayout.vue"),
    children: [
      {
        path: "/",
        name: "HomePage",
        component: () => import("../views/HomePage.vue"),
      },
      {
        path: "/users",
        name: "UsersPage",
        component: () => import("../views/UsersPage.vue"),
      },
    ],
  },
  {
    path: "/dashboard",
    name: "DashboardLayout",
    component: () => import("../Layouts/DashboardLayout.vue"),
    children: [
      {
        path: ":userId",
        name: "PostPage",
        component: () => import("../views/PostPage.vue"),
      },
      {
        path: "album/:userId",
        name: "AlbumPage",
        component: () => import("../views/AlbumPage.vue"),
      },

      {
        path: "todo/:userId",
        name: "TodoList",
        component: () => import("../views/TodoList.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-link",
  linkExactActiveClass: "exact-active-link",
});
export default router;
