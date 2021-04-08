import { required } from "@/modules/rules/common-rules";

const boxRules = [(v) => required(v, "The number of the box")];

const areaRules = [(v) => required(v, "The area of the box")];

const controllerRules = [(v) => required(v, "The controller of the box")];

export { boxRules, areaRules, controllerRules };
