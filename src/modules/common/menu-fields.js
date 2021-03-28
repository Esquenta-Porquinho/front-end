const adminFields = [
  { title: "common.menu.charts", icon: "mdi-chart-line" },
  {
    title: "common.menu.boxes.title",
    icon: "mdi-home",
    sub: [
      { title: "common.menu.boxes.list", icon: "mdi-home-group" },
      { title: "common.menu.boxes.new", icon: "mdi-home-plus" },
    ],
  },
  {
    title: "common.menu.matrix.title",
    icon: "mdi-pig",
    sub: [
      { title: "common.menu.matrix.list", icon: "mdi-pig-variant" },
      { title: "common.menu.matrix.new", icon: "mdi-piggy-bank" },
    ],
  },
  {
    title: "common.menu.users.title",
    icon: "mdi-account",
    sub: [
      {
        title: "common.menu.users.list",
        icon: "mdi-account-details",
        to: "/users",
      },
      {
        title: "common.menu.users.requests",
        icon: "mdi-account-clock",
        to: "/users/requests",
      },
    ],
  },
  { title: "common.menu.logout", icon: "mdi-logout" },
];

export { adminFields };
