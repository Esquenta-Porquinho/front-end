import {
  required,
  sizeBiggerThan,
  sizeLessThan,
} from "@/modules/rules/common-rules";

const boxRules = [(v) => required(v, "Box")];

const maxAmbientRules = [
  (v) => required(v, "The maximum ambient temperature"),
  (v) => sizeBiggerThan(v, 45, "The maximum ambient temperature"),
];

const minAmbientRules = [
  (v) => required(v, "The minimum ambient temperature"),
  (v) => sizeLessThan(v, 25, "The maximum ambient temperature"),
];

const minFloorRules = [
  (v) => required(v, "The minimum floor temperature"),
  (v) => sizeBiggerThan(v, 25, "The minimum floor temperature"),
];

const maxFloorRules = [
  (v) => required(v, "The maximum floor temperature"),
  (v) => sizeLessThan(v, 45, "The maximum floor temperature"),
];

const weekRules = [
  (v) => required(v, "The reference week"),
  (v) => sizeBiggerThan(v, 4, "The reference week"),
  (v) => sizeLessThan(v, 1, "The reference week"),
];

export {
  maxAmbientRules,
  minAmbientRules,
  maxFloorRules,
  minFloorRules,
  weekRules,
  boxRules,
};
