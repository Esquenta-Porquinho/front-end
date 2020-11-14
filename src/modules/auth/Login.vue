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
                    prepend-icon="mdi-account-circle"
                    required
                    type="text"
                >
                </v-text-field>
                <v-text-field
                    v-model="credentials.password"
                    :rules="rules.password"
                    label="Password"
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
              >Login
              </v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn
                  block
                  color="secondary"
                  @click="register()"
              >Create account
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <FooterBar/>
  </div>
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
