import Vue from "vue";
import VueRouter from "vue-router";
import { authRoutes } from "@/modules/auth/auth-routes";
import { userRoutes } from "@/modules/user/user-routes";
import { matrixRoutes } from "@/modules/matrix/matrix-routes";
import { parametersRoutes } from "../modules/parameters/parameters-routes";

Vue.use(VueRouter);

const routes = [
  ...authRoutes,
  ...userRoutes,
  ...matrixRoutes,
  ...parametersRoutes,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
