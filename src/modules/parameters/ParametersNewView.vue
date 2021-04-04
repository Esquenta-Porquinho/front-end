<template>
  <div class="background">
    <ToolBar />
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col md="6" sm="8" xs="12">
          <v-card>
            <v-toolbar
              color="primary"
              class="white--text"
              height="60px"
              width="100%"
              flat
            >
              <v-toolbar-title v-text="$t('views.parameters.new.title')" />
              <v-spacer />
              <v-icon dark right v-text="'mdi-thermometer'" />
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  type="number"
                  required
                  prepend-icon="mdi-thermometer-plus"
                  :label="$t('fields.maximum_ambient_temperature')"
                  :rules="rules.maxAmbientRules"
                  light
                />
                <v-text-field
                  type="number"
                  required
                  prepend-icon="mdi-thermometer-minus"
                  :label="$t('fields.minimum_ambient_temperature')"
                  :rules="rules.minAmbientRules"
                />
                <v-text-field
                  type="number"
                  :label="$t('fields.maximum_floor_temperature')"
                  required
                  prepend-icon="mdi-thermometer-plus"
                  :rules="rules.maxFloorRules"
                />
                <v-text-field
                  type="number"
                  :label="$t('fields.minimum_floor_temperature')"
                  required
                  prepend-icon="mdi-thermometer-minus"
                  :rules="rules.minFloorRules"
                />
                <v-text-field
                  type="number"
                  :label="$t('fields.week')"
                  required
                  prependIcon="mdi-calendar-month"
                  :rules="rules.weekRules"
                />
                <v-select
                  :items="boxes"
                  :label="$t('fields.box')"
                  outlined
                  dense
                  :rules="rules.boxRules"
                  prepend-icon="mdi-home"
                />
              </v-form>
            </v-card-text>
            <v-divider />
            <v-card-actions>
              <v-btn
                color="secondary"
                class="white--text"
                block
                elevation="2"
                type="text"
                @click="submit"
                :disabled="!valid"
                v-text="$t('buttons.create')"
              />
            </v-card-actions>
            <v-card-actions>
              <v-btn
                color="secondary"
                class="white--text"
                block
                elevation="2"
                type="text"
                @click="reset"
                v-text="$t('buttons.reset')"
              />
            </v-card-actions>
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
import {
  maxAmbientRules,
  minAmbientRules,
  maxFloorRules,
  minFloorRules,
  weekRules,
  boxRules,
} from "@/modules/parameters/parameters-rules";

export default {
  components: { ToolBar, FooterBar },
  data: () => ({
    valid: true,
    boxes: [1, 2],
    rules: {
      maxAmbientRules: maxAmbientRules,
      minAmbientRules: minAmbientRules,
      maxFloorRules: maxFloorRules,
      minFloorRules: minFloorRules,
      weekRules: weekRules,
      boxRules: boxRules,
    },
  }),
};
</script>
