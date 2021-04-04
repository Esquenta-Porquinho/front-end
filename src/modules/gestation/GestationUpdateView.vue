<template>
  <div class="background">
    <ToolBar />
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col md="4" sm="8" xs="12">
          <v-card>
            <v-toolbar
              color="primary"
              class="white--text"
              height="60px"
              width="100%"
              flat
            >
              <v-toolbar-title v-text="$t('views.gestation.update.title')" />
              <v-spacer />
              <v-icon dark right v-text="'mdi-human-pregnant'" />
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  :label="$t('fields.expected_parturition')"
                  type="date"
                  prepend-icon="mdi-calendar-month"
                  :rules="rules.expectedParturitionRules"
                />
                <v-text-field
                  :label="$t('fields.effective_parturition')"
                  type="date"
                  prepend-icon="mdi-calendar-month"
                />
                <v-text-field
                  :label="$t('fields.number_parturition')"
                  type="number"
                  prepend-icon="mdi-human-pregnant"
                  :rules="rules.numberParturitionRules"
                />
                <v-text-field
                  :label="$t('fields.live_pigs')"
                  type="number"
                  prepend-icon="mdi-pig-variant"
                />
                <v-text-field
                  :label="$t('fields.dead_pigs')"
                  type="number"
                  prepend-icon="mdi-skull"
                />
                <v-text-field
                  :label="$t('fields.weaning')"
                  type="date"
                  prepend-icon="mdi-calendar-month"
                />
                <v-select
                  :items="boxes"
                  :label="$t('fields.box')"
                  outlined
                  dense
                  :rules="rules.boxRules"
                />
                <v-select
                  :items="matrixes"
                  :label="$t('fields.matrix')"
                  outlined
                  dense
                  :rules="rules.matrixRules"
                />
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn
                color="secondary"
                class="white--text"
                block
                elevation="2"
                type="text"
                v-text="$t('buttons.create')"
                @click="submit"
                :disabled="!valid"
              />
            </v-card-actions>
            <v-card-actions>
              <v-btn
                color="secondary"
                class="white--text"
                block
                elevation="2"
                type="text"
                v-text="$t('buttons.reset')"
                @click="reset"
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
  expectedParturitionRules,
  numberParturitionRules,
  matrixRules,
  boxRules,
} from "@/modules/gestation/gestation-rules";

export default {
  components: { ToolBar, FooterBar },
  data: () => ({
    valid: true,
    boxes: {},
    matrixes: {},
    rules: {
      expectedParturitionRules: expectedParturitionRules,
      numberParturitionRules: numberParturitionRules,
      matrixRules: matrixRules,
      boxRules: boxRules,
    },
  }),
};
</script>
