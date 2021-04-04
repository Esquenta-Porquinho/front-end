import { required } from "@/modules/rules/common-rules";
import i18n from "./../../plugins/i18n";

const matrixNumberRules = [(v) => required(v, i18n.t("fields.matrix"))];

export { matrixNumberRules };
