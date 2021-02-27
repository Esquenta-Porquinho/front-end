<template>
  <div class="background">
    <ToolBar/>
    <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <v-col md="4" sm="8" xs="12">
          <v-card>
            <v-toolbar class="white--text" color="primary" flat>
              <v-toolbar-title display-3 v-text="$t('views.auth.login.title')"/>
              <v-spacer/>
              <v-icon dark right v-text="'mdi-login'"/>
            </v-toolbar>
            <v-card-text>
              <v-form ref="form">
                <v-alert
                    v-show="errorShow"
                    outlined
                    text
                    type="error"
                    v-text="$t('views.auth.login.error')"
                />
                <v-text-field
                    v-model="credentials.email"
                    :rules="rules.email"
                    :label="$t('fields.email')"
                    prepend-icon="mdi-account-circle"
                    required
                    type="text"
                >
                </v-text-field>
                <v-text-field
                    v-model="credentials.password"
                    :rules="rules.password"
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
                  v-text="$t('views.auth.login.buttons.login')"
              />
            </v-card-actions>
            <v-card-actions>
              <v-btn
                  block
                  color="secondary"
                  @click="register()"
                  v-text="$t('views.auth.login.buttons.create')"
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
import {login} from '../api/auth/auth-service';
import router from "@/router/";
import {emailRules, passwordRules} from "@/modules/auth/auth-rules";


export default {
  components: {FooterBar, ToolBar},
  name: "Login",
  data: () => ({
    credentials: {
      email: '',
      password: ''
    },
    errorShow: false,
    rules: {
      email: emailRules,
      password: passwordRules
    }
  }),
  methods: {
    async send() {
      if (!this.$refs.form.validate()) {
        this.errorShow = true;
      }

      try {
        await login(this.credentials)
        router.push("/home");
      } catch (e) {
        this.errorShow = true;
      }
    },
    register() {
      router.push('/register')
    }
  }
};
</script>

<style scoped>
.background {
  background-image: url("../../assets/background.png");
  height: 100%;
}
</style>
