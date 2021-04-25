<template>
  <div class="background">
    <ToolBar />
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col md="11" sm="14" xs="16">
          <v-card>
            <v-toolbar
              color="primary"
              class="white--text"
              height="60px"
              width="100%"
              flat
            >
              <v-toolbar-items>
                <v-row>
                  <v-col md="4" sm="3" xs="4" mt-3>
                    <v-select
                      dark
                      :items="boxes"
                      :label="$t('views.charts.labels.box')"
                      outlined
                      dense
                      reduce
                      @input="sensorsByBox"
                    />
                  </v-col>
                  <v-col md="8" sm="14" xs="16" mt-3>
                    <v-select
                      v-model="selectedSensors"
                      :label="$t('views.charts.labels.sensors')"
                      :items="sensors"
                      class="sensors"
                      small-chips
                      attach
                      multiple
                      dark
                      outlined
                      dense
                      @focusout="buildDataSets"
                    />
                  </v-col>
                </v-row>
              </v-toolbar-items>
            </v-toolbar>
            <v-divider />
            <LineChart :height="600" ref="childComponent" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <FooterBar />
  </div>
</template>

<script>
import ToolBar from "@/modules/common/ToolBar";
import FooterBar from "@/modules/common/FooterBar";
import LineChart from "@/modules/charts/LineChart";
import { sensors1, sensors2, boxes } from "@/modules/charts/charts-mock";

export default {
  components: { ToolBar, FooterBar, LineChart },
  data: () => ({
    boxes: boxes,
    sensors: [],
    selectedSensors: [],
  }),
  methods: {
    sensorsByBox(v) {
      this.resetCharts();
      if (v === 1) {
        this.sensors = sensors1;
      } else {
        this.sensors = sensors2;
      }
    },
    async buildDataSets() {
      await this.$refs.childComponent.buildDataSets(this.selectedSensors);
    },
    resetCharts() {
      this.$refs.childComponent.resetDataSets();
      this.selectedSensors = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.background {
  background-image: url("../../assets/background1.png");
  height: 100%;
}

$colors: red, orange, pink, green, blue, purple;
@for $i from 1 through length($colors) {
  .sensors::v-deep .v-chip:nth-child(#{length($colors)}n + #{$i}) {
    background-color: nth($colors, $i) !important;
    color: white !important;
  }
}
</style>
