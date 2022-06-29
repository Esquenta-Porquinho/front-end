import UserView from "@/modules/user/UserView";
import UserUpdateView from "@/modules/user/UserUpdateView";
import UserLogsView from "@/modules/user/UserLogsView";
import UserUpdateRoleView from "@/modules/user/UserUpdateRoleView";
import UserRequestsView from "@/modules/user/UserRequestsView";
import UserAllView from "@/modules/user/UserAllView";
import { getCurrentUserRole } from "../common/token-service";

const userRoutes = [
  {
    path: "/user",
    name: "UserView",
    component: UserView,
  },
  {
    path: "/user/update",
    name: "UserUpdateView",
    component: UserUpdateView,
  },
  {
    path: "/user/:id/logs",
    name: "UserLogsView",
    component: UserLogsView,
  },
  {
    path: "/user/:id/role",
    name: "UserUpdateRoleView",
    component: UserUpdateRoleView,
  },
  {
    path: "/users/requests/page/:page",
    name: "UserRequestsView",
    component: UserRequestsView,
    beforeEnter: (to, from, next) => {
      const role = getCurrentUserRole();
      role == "SIMPLE" ? next({ name: "UserView" }) : next();
    },
  },
  {
    path: "/users/page/:page",
    name: "UsersView",
    component: UserAllView,
    beforeEnter: (to, from, next) => {
      const role = getCurrentUserRole();
      role == "ADMIN" ? next() : next({ name: "UserView" });
    },
  },
];

export { userRoutes };
