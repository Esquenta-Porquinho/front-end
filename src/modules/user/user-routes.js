import UserView from "@/modules/user/UserView";
import UserUpdateView from "@/modules/user/UserUpdateView";
import UserLogsView from "@/modules/user/UserLogsView";
import UserUpdateRoleView from "@/modules/user/UserUpdateRoleView";
import UserRequestsView from "@/modules/user/UserRequestsView";
import UserAllView from "@/modules/user/UserAllView";

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
    path: "/user/logs",
    name: "UserLogsView",
    component: UserLogsView,
  },
  {
    path: "/user/role",
    name: "UserUpdateRoleView",
    component: UserUpdateRoleView,
  },
  {
    path: "/users/requests",
    name: "UserRequestsView",
    component: UserRequestsView,
  },
  {
    path: "/users",
    name: "UserAllView",
    component: UserAllView,
  },
];

export { userRoutes };
