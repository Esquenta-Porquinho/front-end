<template>
  <v-app>
    <v-main
        :style="{'background-image': 'url(' + require('../../assets/background1.png') + ')'}"
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
                <v-toolbar-title> Register</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-icon dark right>mdi-account-plus</v-icon>
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
                      label="Name"
                      prepend-icon="mdi-account"
                      required
                  >
                  </v-text-field>
                  <v-text-field
                      v-model="information.email"
                      :counter="45"
                      :rules="rules.emailRules"
                      label="E-mail"
                      prepend-icon="mdi-email"
                      required
                  >
                  </v-text-field>
                  <v-text-field
                      v-model="information.password"
                      :counter="16"
                      :rules="rules.passwordRules"
                      label="Password"
                      name="password"
                      prepend-icon="mdi-lock"
                      required
                      type="password"
                  >
                  </v-text-field>
                </v-form>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn
                      block
                      class="white--text"
                      color="#BF757B"
                      elevation="2"

                      type="text"
                      @click="send()"
                  >Register
                  </v-btn>
                </v-card-actions>
                <v-card-actions>
                  <v-btn
                      block
                      class="white--text"
                      color="#BF757B"
                      elevation="2"
                      @click="reset()"
                  >Reset
                  </v-btn>
                </v-card-actions>
              </v-card-text>
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
import {create} from '../api/auth/auth-service';
import router from "@/router/";

export default {
  components: {FooterBar, ToolBar},
  data: () => ({
    information: {},
    errorShow: false,
    rules: {
      nameRules: [
        v => !!v || 'Name is required !',
        v => (v && v.length >= 3) || 'Name must be more than 3 characters !',
      ],
      emailRules: [
        v => !!v || 'E-mail is required !',
        v => /@/.test(v) || 'E-mail must be valid !',
      ],
      passwordRules: [
        v => !!v || "Password is required !",
        v => (v && v.length >= 8) || "The password must be more than 8 characters.",
        v => (v && v.length <= 16) || "The password must be less than 8 characters."
      ]
    },
  }),
  methods: {
    async send() {
      if (this.$refs.form.validate() && await create(this.information)) {
        router.push("/login");
      }
      this.errorShow = true;
    },
    reset() {
      this.$refs.form.reset();
    }
  }
}
</script>

<style>
html {
  overflow-y: hidden !important;
}
</style>
