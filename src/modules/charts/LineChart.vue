<script>
import { Line } from "vue-chartjs";
import { options } from "@/modules/charts/charts-options";
import { readings } from "@/modules/charts/charts-mock";

Chart.defaults.global.legend.display = false;

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      datasets: [],
    },
    options: options,
    readings: readings,
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
  methods: {
    async buildDataSets(sensors) {
      const colors = ["red", "orange", "pink", "green", "blue", "purple"];
      const readings = await this.getReadings(sensors);

      readings.forEach((element, i) => {
        this.chartdata.datasets[i] = {
          fill: false,
          borderWidth: 2,
          borderColor: colors[i],
          pointBackgroundColor: colors[i],
          data: element.data,
        };
      });
      this.renderChart(this.chartdata, this.options);
    },
    async resetDataSets() {
      this.chartdata.datasets = [];
      this.renderChart(this.chartdata, this.options);
    },
    async getReadings() {
      return this.readings;
    },
  },
};
</script>
