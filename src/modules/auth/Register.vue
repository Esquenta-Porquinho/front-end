<template>
  <div class="background">
    <ToolBar />
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col md="4" sm="8" xs="12">
          <v-card>
            <v-toolbar class="white--text" color="primary" flat>
              <v-toolbar-title v-text="$t('views.auth.register.title')" />
              <v-spacer />
              <v-icon dark right v-text="'mdi-account-plus'" />
            </v-toolbar>
            <v-card-text>
              <v-form ref="form">
                <v-alert
                  v-show="errorShow"
                  outlined
                  text
                  type="error"
                  v-text="$t('views.auth.register.error')"
                />
                <v-text-field
                  v-model="user.name"
                  :counter="30"
                  :rules="rules.nameRules"
                  :label="$t('fields.name')"
                  prepend-icon="mdi-account"
                  required
                >
                </v-text-field>
                <v-text-field
                  v-model="user.email"
                  :counter="45"
                  :rules="rules.emailRules"
                  :label="$t('fields.email')"
                  prepend-icon="mdi-email"
                  required
                >
                </v-text-field>
                <v-text-field
                  v-model="user.password"
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
                v-text="$t('buttons.register')"
              />
            </v-card-actions>
            <v-card-actions>
              <v-btn
                block
                color="secondary"
                @click="reset()"
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
import FooterBar from "@/modules/common/FooterBar";
import ToolBar from "@/modules/auth/ToolBar";
import { create } from "../api/auth/auth-service";
import router from "@/router/";
import {
  emailRules,
  nameRules,
  passwordRules,
} from "@/modules/auth/auth-rules";

export default {
  components: { FooterBar, ToolBar },
  data: () => ({
    user: {},
    errorShow: false,
    rules: {
      nameRules,
      emailRules,
      passwordRules,
    },
  }),
  methods: {
    async send() {
      if (!this.$refs.form.validate()) {
        this.errorShow = true;
      }
      try {
        await create(this.user);
        router.push({ name: "LoginView" });
      } catch (e) {
        this.errorShow = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.background {
  background-image: url("../../assets/background1.png");
  height: 100%;
}
</style>
