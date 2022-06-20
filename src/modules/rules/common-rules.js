import i18n from "./../../plugins/i18n";

const required = (v, field) => {
  return !!v || i18n.t("rules.required", { field });
};

const lengthBiggerThan = (v, field, length) => {
  return (
    v?.length >= length || i18n.t("rules.length_bigger_than", { field, length })
  );
};

const lengthLessThan = (v, field, length) => {
  return (
    v?.length <= length || i18n.t("rules.length_less_than", { field, length })
  );
};

const sizeBiggerThan = (v, field, size) => {
  return v?.value >= size || i18n.t("rules.size_bigger_than"), { field, size };
};

const sizeLessThan = (v, field, size) => {
  return v?.value <= size || i18n.t("rules.size_less_than"), { field, size };
};

const email = (v) => {
  return (
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
    i18n.t("rules.invalid", { field: "Email" })
  );
};

export {
  required,
  lengthBiggerThan,
  lengthLessThan,
  email,
  sizeBiggerThan,
  sizeLessThan,
};
