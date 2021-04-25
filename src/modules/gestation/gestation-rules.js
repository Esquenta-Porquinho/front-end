import { required } from "@/modules/rules/common-rules";

const expectedParturitionRules = [
  (v) => required(v, "The date of the expected parturition"),
];

const numberParturitionRules = [
  (v) => required(v, "The number of the pregnant's number "),
];

const matrixRules = [(v) => required(v, "The matrix ")];

const boxRules = [(v) => required(v, "The box")];

export {
  expectedParturitionRules,
  numberParturitionRules,
  matrixRules,
  boxRules,
};
