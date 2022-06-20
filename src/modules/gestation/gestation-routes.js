import GestationAllView from "@/modules/gestation/GestationAllView";
import GestationNewView from "@/modules/gestation/GestationNewView";
import GestationUpdateView from "@/modules/gestation/GestationUpdateView";

const gestationRoutes = [
  {
    path: "/gestations",
    name: "GestationsView",
    component: GestationAllView,
  },
  {
    path: "/gestation/new",
    name: "GestationNewView",
    component: GestationNewView,
  },
  {
    path: "/gestation/update",
    name: "GestationUpdateView",
    component: GestationUpdateView,
  },
];

export { gestationRoutes };
