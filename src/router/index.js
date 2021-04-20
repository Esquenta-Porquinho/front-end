import Vue from "vue";
import VueRouter from "vue-router";
import { authRoutes } from "@/modules/auth/auth-routes";
import { userRoutes } from "@/modules/user/user-routes";
import { matrixRoutes } from "@/modules/matrix/matrix-routes";
import { gestationRoutes } from "@/modules/gestation/gestation-routes";
import { parametersRoutes } from "../modules/parameters/parameters-routes";
import { boxRoutes } from "../modules/box/box-routes";

Vue.use(VueRouter);

const routes = [
  ...authRoutes,
  ...userRoutes,
  ...matrixRoutes,
  ...gestationRoutes,
  ...parametersRoutes,
  ...boxRoutes,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
