import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

// Defaults views
import NotFoundPage from "@/views/404.vue";

// Get module
import HomeRouter from "../modules/home/router/index";
import AboutRouter from "../modules/about/router/index";
import LegalRouter from "../modules/legal/router/index";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  ...HomeRouter,
  ...AboutRouter,
  ...LegalRouter,
  { path: "*", component: NotFoundPage }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
