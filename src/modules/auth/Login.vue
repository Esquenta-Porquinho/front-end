<template>
  <v-app
  >
    <v-main
        :style="{'background-image': 'url(' + require('../../assets/background.png') + ')'}"
    >
      <ToolBar/>
      <v-container
          fill-height
          fluid
      >
        <v-layout
            align-center
            justify-center
        >
          <v-flex
              md4
              sm8
              xs12
          >
            <v-card>
              <v-toolbar
                  class="white--text"
                  color="#8C2B2B"
                  flat
                  height="60px"
                  width="100%"
              >
                <v-toolbar-title display-3> Login</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-icon dark right>mdi-login</v-icon>
              </v-toolbar>
              <v-card-text>
                <v-form
                    ref="form"
                >
                  <v-alert
                      v-show="errorShow"
                      outlined
                      text
                      type="error"
                  >
                    Login or password are wrong !
                  </v-alert>
                  <v-text-field
                      v-model="credentials.email"
                      :rules="rules.email"
                      label="E-mail"
                      name="email"
                      prepend-icon="mdi-account-circle"
                      required
                      type="text"
                  >
                  </v-text-field>
                  <v-text-field
                      v-model="credentials.password"
                      :rules="rules.password"
                      label="Password"
                      name="password"
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
                    class="white--text"
                    color="#BF757B"
                    elevation="2"
                    type="text"
                    @click="send()"
                >Login
                </v-btn>
              </v-card-actions>
              <v-card-actions>
                <v-btn
                    block
                    class="white--text"
                    color="#BF757B"
                    elevation="2"
                    @click="register()"
                >Create account
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <FooterBar/>
    </v-main>
  </v-app>
</template>

<script>
import FooterBar from '@/modules/auth/FooterBar';
import ToolBar from '@/modules/auth/ToolBar';
import {login} from '../api/auth/auth-service';
import router from "@/router/";

export default {
  components: {FooterBar, ToolBar},
  name: "Login",
  data: () => ({
    credentials: {},
    errorShow: false,
    rules: {
      email: [
        v => !!v || "Usuário é obrigatório.",
        v => (/@/.test(v)) || "O e-mail precisa ser válido",
      ],
      password: [
        v => !!v || "Senha é obrigatória.",
        v => (v && v.length >= 5) || "A senha deve ser maior que 5 caracteres."
      ]
    }
  }),
  methods: {
    async send() {
      if (this.$refs.form.validate() && await login(this.credentials)) {
        router.push("/home");
      }
      this.errorShow = true;
    },
    register() {
      router.push('/register')
    }
  }
};
</script>

<style>
html {
  overflow-y: hidden !important;
}
</style>
