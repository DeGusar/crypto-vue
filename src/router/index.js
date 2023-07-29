import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/views/MainPage/index.vue";
import MainPageHistory from "@/views/MainPage/MainPageHistory/index.vue";
import MainPageOverview from "@/views/MainPage/MainPageOverview/index.vue";
import { urlNames, layoutNames } from "@/utils/constants";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: urlNames.MAIN_PAGE,
    component: MainPage,
    meta: {
      layout: layoutNames.MAIN_LAYOUT,
    },
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
  {
    path: "*",
    name: urlNames.ERROR_404_PAGE,
    component: () => import("@/views/Error404Page/index.vue"),
    meta: {
      layout: layoutNames.ERROR_LAYOUT,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
