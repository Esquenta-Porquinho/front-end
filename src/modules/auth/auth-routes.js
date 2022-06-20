import LoginView from "@/modules/auth/Login";
import RegisterView from "@/modules/auth/Register";

const authRoutes = [
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/register",
    name: "RegisterView",
    component: RegisterView,
  },
];

export { authRoutes };
