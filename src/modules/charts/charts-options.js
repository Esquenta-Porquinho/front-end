import i18n from "./../../plugins/i18n";

const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 10,
  },
  title: {
    display: true,
    text: i18n.t("views.charts.labels.monitoring"),
    fontColor: "black",
    lineHeight: 2,
    fontSize: 18,
  },
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: i18n.t("views.charts.labels.temperature"),
          lineHeight: 2,
          fontColor: "black",
          fontSize: 14,
        },
        ticks: {
          stepSize: 5,
          suggestedMin: 0,
          suggestedMax: 60,
          callback: (value) => value + "°C",
        },
      },
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: i18n.t("views.charts.labels.datetime"),
          lineHeight: 2,
          fontColor: "black",
          fontSize: 14,
        },
        type: "time",
        time: {
          unit: "hour",
        },
        gridLines: {
          display: true,
        },
      },
    ],
  },
};

export { options };
