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
              <v-toolbar-title v-text="$t('views.box.new.title')" />
              <v-spacer />
              <v-icon dark right v-text="'mdi-home-group'" />
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  :label="$t('fields.number')"
                  type="number"
                  prepend-icon="mdi-home-floor-3"
                  :rules="rules.boxRules"
                />
                <v-text-field
                  :label="$t('fields.area')"
                  type="number"
                  prepend-icon="mdi-math-compass"
                  :rules="rules.areaRules"
                />
                <v-text-field
                  :label="$t('fields.controller')"
                  type="text"
                  prepend-icon="mdi-chip"
                  :rules="rules.controllerRules"
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
import { boxRules, areaRules, controllerRules } from "@/modules/box/box-rules";

export default {
  components: { ToolBar, FooterBar },
  data: () => ({
    valid: true,
    rules: {
      boxRules: boxRules,
      areaRules: areaRules,
      controllerRules: controllerRules,
    },
  }),
};
</script>
