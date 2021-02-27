<template>
  <div class="background">
    <ToolBar/>
    <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <v-col md="4" sm="8" xs="12">
          <v-card>
            <v-toolbar
                class="white--text"
                color="primary"
                flat
            >
              <v-toolbar-title v-text="$t('views.auth.register.title')"/>
              <v-spacer/>
              <v-icon dark right v-text="'mdi-account-plus'" />
            </v-toolbar>
            <v-card-text>
              <v-form ref="form">
                <v-alert
                    v-show="errorShow"
                    outlined
                    text
                    type="error"
                >
                  Failed to register
                </v-alert>
                <v-text-field
                    v-model="information.name"
                    :counter="30"
                    :rules="rules.nameRules"
                    :label="$t('fields.name')"
                    prepend-icon="mdi-account"
                    required
                >
                </v-text-field>
                <v-text-field
                    v-model="information.email"
                    :counter="45"
                    :rules="rules.emailRules"
                    :label="$t('fields.email')"
                    prepend-icon="mdi-email"
                    required
                >
                </v-text-field>
                <v-text-field
                    v-model="information.password"
                    :counter="16"
                    :rules="rules.passwordRules"
                    :label="$t('fields.password')"
                    prepend-icon="mdi-lock"
                    required
                    type="password"
                >
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn
                  block
                  color="secondary"
                  @click="send()"
                  v-text="$t('views.auth.register.buttons.register')"
              />
            </v-card-actions>
            <v-card-actions>
              <v-btn
                  block
                  color="secondary"
                  @click="reset()"
                  v-text="$t('views.auth.register.buttons.reset')"
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
import FooterBar from '@/modules/common/FooterBar';
import ToolBar from '@/modules/auth/ToolBar';
import {create} from '../api/auth/auth-service';
import router from "@/router/";
import {emailRules, nameRules, passwordRules} from "@/modules/auth/auth-rules";

export default {
  components: {FooterBar, ToolBar},
  name: "Register",
  data: () => ({
    information: {},
    errorShow: false,
    rules: {
      nameRules: nameRules,
      emailRules: emailRules,
      passwordRules: passwordRules
    },
  }),
  methods: {
    async send() {
      if (!this.$refs.form.validate()) {
        this.errorShow = true;
      }

      try {
        await create(this.information)
        router.push("/login");
      } catch (e) {
        this.errorShow = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
}
</script>


<style scoped>
.background {
  background-image: url("../../assets/background1.png");
  height: 100%;
}
</style>
