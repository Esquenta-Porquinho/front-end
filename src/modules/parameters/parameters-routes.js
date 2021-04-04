import ParametersAllView from "@/modules/parameters/ParametersAllView";
import ParametersNewView from "@/modules/parameters/ParametersNewView";
import ParametersUpdateView from "@/modules/parameters/ParametersUpdateView";

const parametersRoutes = [
  {
    path: "/parameters",
    name: "ParametersView",
    component: ParametersAllView,
  },
  {
    path: "/parameters/new",
    name: "ParametersNewView",
    component: ParametersNewView,
  },
  {
    path: "/parameters/update",
    name: "ParametersUpdateView",
    component: ParametersUpdateView,
  },
];

export { parametersRoutes };
