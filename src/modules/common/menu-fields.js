const fields = [
  {
    title: "common.menu.charts",
    icon: "mdi-chart-line",
    to: { name: "ChartsView" },
  },
  {
    title: "common.menu.box.title",
    icon: "mdi-home",
    sub: [
      {
        title: "common.menu.box.all",
        icon: "mdi-home-group",
        to: { name: "BoxesView" },
      },
      {
        title: "common.menu.box.new",
        icon: "mdi-home-plus",
        to: { name: "BoxNewView" },
      },
    ],
  },
  {
    title: "common.menu.matrix.title",
    icon: "mdi-pig",
    sub: [
      {
        title: "common.menu.matrix.all",
        icon: "mdi-pig-variant",
        to: { name: "MatricesView" },
      },
      {
        title: "common.menu.matrix.new",
        icon: "mdi-piggy-bank",
        to: { name: "MatrixNewView" },
      },
    ],
  },
  {
    title: "common.menu.gestation.title",
    icon: "mdi-human-pregnant",
    sub: [
      {
        title: "common.menu.gestation.all",
        icon: "mdi-human-female-girl",
        to: { name: "GestationsView" },
      },
      {
        title: "common.menu.gestation.new",
        icon: "mdi-pig-variant",
        to: { name: "GestationNewView" },
      },
    ],
  },
  {
    title: "common.menu.parameters.title",
    icon: "mdi-thermometer",
    sub: [
      {
        title: "common.menu.parameters.all",
        icon: "mdi-thermometer-chevron-down",
        to: { name: "ParametersView" },
      },
      {
        title: "common.menu.parameters.new",
        icon: "mdi-thermometer-plus",
        to: { name: "ParametersNewView" },
      },
    ],
  },
  {
    title: "common.menu.users.title",
    icon: "mdi-account",
    sub: [
      {
        title: "common.menu.users.profile",
        icon: "mdi-account-circle",
        to: { name: "UserView" },
      },
      {
        title: "common.menu.users.all",
        icon: "mdi-account-details",
        to: { name: "UsersView" },
      },
      {
        title: "common.menu.users.requests",
        icon: "mdi-account-clock",
        to: { name: "UserRequestsView" },
      },
    ],
  },
  { title: "common.menu.logout", icon: "mdi-logout" },
];

const adminFields = fields;
const managerFields = [
  ...fields.slice(1, 6),
  {
    title: "common.menu.users.title",
    icon: "mdi-account",
    sub: [
      {
        title: "common.menu.users.profile",
        icon: "mdi-account-circle",
        to: { name: "UserView" },
      },
      {
        title: "common.menu.users.requests",
        icon: "mdi-account-clock",
        to: { name: "UserRequestsView" },
      },
    ],
  },
  ...fields.slice(-1),
];
const simpleFields = [
  ...fields.slice(1, 6),
  {
    title: "common.menu.users.title",
    icon: "mdi-account",
    sub: [
      {
        title: "common.menu.users.profile",
        icon: "mdi-account-circle",
        to: { name: "UserView" },
      },
    ],
  },
  ...fields.slice(-1),
];

export { adminFields, managerFields, simpleFields };
