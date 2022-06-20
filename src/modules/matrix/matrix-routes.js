import MatrixAllView from "@/modules/matrix/MatrixAllView";
import MatrixNewView from "@/modules/matrix/MatrixNewView";
import MatrixUpdateView from "@/modules/matrix/MatrixUpdateView";

const matrixRoutes = [
  {
    path: "/matrices",
    name: "MatricesView",
    component: MatrixAllView,
  },
  {
    path: "/matrix/new",
    name: "MatrixNewView",
    component: MatrixNewView,
  },
  {
    path: "/matrix/update",
    name: "MatrixUpdateView",
    component: MatrixUpdateView,
  },
];

export { matrixRoutes };
