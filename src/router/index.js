import Vue from "vue";
import VueRouter from "vue-router";
import { MainLayout, ErrorLayout } from "@/layouts";
import { urlNames, layoutNames } from "@/utils/constants";

Vue.use(VueRouter);

const Error404Page = () => import("@/views/Error404Page/index.vue");
const MainPage = () => import("@/views/MainPage/index.vue");
const MainPageHistory = () =>
  import("@/views/MainPage/MainPageHistory/index.vue");
const MainPageOverview = () =>
  import("@/views/MainPage/MainPageOverview/index.vue");

const routes = [
  {
    path: "/",
    name: layoutNames.MAIN_LAYOUT,
    component: MainLayout,
    redirect: { name: urlNames.MAIN_PAGE },
    children: [
      {
        path: "main",
        name: urlNames.MAIN_PAGE,
        component: MainPage,
        children: [
          {
            path: "overview/:id",
            name: urlNames.OVERVIEW,
            component: MainPageOverview,
          },
          {
            path: "history/:id",
            name: urlNames.HISTORY,
            component: MainPageHistory,
          },
        ],
      },
    ],
  },
  {
    path: "/error",
    component: ErrorLayout,
    name: layoutNames.ERROR_LAYOUT,
    children: [
      {
        path: "404",
        name: urlNames.ERROR_404_PAGE,
        component: Error404Page,
      },
    ],
  },
  {
    path: "*",
    redirect: { name: urlNames.ERROR_404_PAGE },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
