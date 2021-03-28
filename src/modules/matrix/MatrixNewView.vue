<template>
  <div class="background">
    <ToolBar/>
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
                <v-toolbar-title v-text="$t('views.matrix.new.title')"/>
                <v-spacer/>
                <v-icon dark right v-text="'mdi-pig'" />
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid">   
                  <v-text-field
                    :label="$t('fields.matrix')"
                    type="number"
                    prepend-icon="mdi-pig"
                    :rules="rules.matrix"
                  >
                  </v-text-field>
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
                   v-text="$t('buttons.add')"
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
    <FooterBar/>
  </div>
</template>

<script>
import ToolBar from "@/modules/common/ToolBar";
import FooterBar from "@/modules/common/FooterBar";
import { matrixNumberRules } from "@/modules/matrix/matrix-rules";

export default {
  components: {ToolBar, FooterBar},
  data:() => ({
    valid: true,
    rules:{
      matrix:matrixNumberRules
    }
  })
}
</script>

<style scoped>
  .background {
    background-image: url("../../assets/background.png");
    height: 100%;
  }
</style>
