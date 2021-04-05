import BoxAllView from "@/modules/box/BoxAllView";
import BoxNewView from "@/modules/box/BoxNewView";
import BoxUpdateView from "@/modules/box/BoxUpdateView";

const boxRoutes = [
  {
    path: "/boxes",
    name: "BoxesView",
    component: BoxAllView,
  },
  {
    path: "/box/new",
    name: "BoxNewView",
    component: BoxNewView,
  },
  {
    path: "/box/update",
    name: "BoxUpdateView",
    component: BoxUpdateView,
  },
];

export { boxRoutes };
