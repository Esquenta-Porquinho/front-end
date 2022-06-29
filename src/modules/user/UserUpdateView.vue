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
              <v-toolbar-title v-text="$t('views.user.update.title')" />
              <v-spacer />
              <v-icon dark right v-text="'mdi-account-check'" />
            </v-toolbar>
            <v-card-text v-if="user">
              <v-form ref="form">
                <v-alert
                  v-show="errorShow"
                  outlined
                  text
                  type="error"
                  v-text="$t('views.user.update.error')"
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
                  :label="$t('fields.password')"
                  :rules="rules.passwordRules"
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
                  color="secondary"
                  @click="updateUser()"
                  v-text="$t('buttons.update')"
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
            </v-card-text>
            <v-card-text v-else-if="errorLoadShow">
              <ErrorLoading error="views.user.update.error" :event="getUser" />
            </v-card-text>
            <v-card-text v-else>
              <Loading />
            </v-card-text>
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
import ErrorLoading from "@/modules/common/ErrorLoading";
import Loading from "@/modules/common/Loading";
import { update, getCurrentUser } from "@/modules/api/user/user-service";
import router from "@/router/";
import {
  emailRules,
  nameRules,
  passwordRules,
} from "@/modules/auth/auth-rules";

export default {
  components: { ToolBar, FooterBar, ErrorLoading, Loading },
  data: () => ({
    user: null,
    errorShow: false,
    errorLoadShow: false,
    rules: {
      nameRules,
      emailRules,
      passwordRules,
    },
  }),
  async created() {
    await this.getUser();
  },
  methods: {
    async getUser() {
      try {
        this.user = await getCurrentUser();
      } catch (e) {
        this.errorLoadShow = true;
      }
    },
    async updateUser() {
      if (!this.$refs.form.validate()) {
        this.errorShow = true;
      }

      try {
        await update(this.user.id, this.user);
        router.push("/user");
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
  background-image: url("../../assets/background.png");
  height: 100%;
}
</style>
