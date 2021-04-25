const sensors1 = [
  { text: "Piso 1", value: 1 },
  { text: "Piso 2", value: 2 },
  { text: "Piso 3", value: 3 },
  { text: "Piso 4", value: 4 },
  { text: "Boiler", value: 5 },
  { text: "Bomba", value: 6 },
];
const sensors2 = [
  { text: "Ambiente 1", value: 7 },
  { text: "Ambiente 2", value: 8 },
];
const boxes = [
  { text: "1", value: 1 },
  { text: "2", value: 2 },
];
const readings = [
  {
    sensor: "Piso 1",
    data: [
      { x: new Date("December 17, 1995 03:24:00"), y: 35 },
      { x: new Date("December 17, 1995 08:24:00"), y: 15 },
    ],
  },
  {
    sensor: "Piso 2",
    data: [
      { x: new Date("December 17, 1995 03:24:00"), y: 25 },
      { x: new Date("December 17, 1995 08:24:00"), y: 10 },
    ],
  },
  {
    sensor: "Piso 3",
    data: [
      { x: new Date("December 17, 1995 03:24:00"), y: 30 },
      { x: new Date("December 17, 1995 08:24:00"), y: 20 },
    ],
  },
  {
    sensor: "Piso 4",
    data: [
      { x: new Date("December 17, 1995 03:24:00"), y: 40 },
      { x: new Date("December 17, 1995 08:24:00"), y: 5 },
    ],
  },
  {
    sensor: "Bomba",
    data: [
      { x: new Date("December 17, 1995 03:24:00"), y: 45 },
      { x: new Date("December 17, 1995 08:24:00"), y: 25 },
    ],
  },
  {
    sensor: "Boiler",
    data: [
      { x: new Date("December 17, 1995 03:24:00"), y: 35 },
      { x: new Date("December 17, 1995 08:24:00"), y: 15 },
    ],
  },
];

export { sensors1, sensors2, boxes, readings };
