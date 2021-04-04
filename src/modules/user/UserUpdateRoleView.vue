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
              <v-toolbar-title v-text="$t('views.user.updateRole.title')" />
              <v-spacer />
              <v-icon dark right v-text="'mdi-account-box'" />
            </v-toolbar>
            <v-card-text>
              <v-form ref="form">
                <v-text-field
                  v-model="information.name"
                  :counter="10"
                  prepend-icon="mdi-account"
                  disabled
                >
                </v-text-field>
                <v-text-field
                  v-model="information.email"
                  :counter="30"
                  prepend-icon="mdi-email"
                  disabled
                >
                </v-text-field>
                <v-select
                  v-model="information.role"
                  :items="roles"
                  prepend-icon="mdi-account-box"
                  standard
                ></v-select>
              </v-form>
              <v-divider />
              <v-card-actions>
                <v-btn
                  block
                  color="secondary"
                  @click="submit"
                  v-text="$t('buttons.update')"
                />
              </v-card-actions>
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

export default {
  components: { ToolBar, FooterBar },
  data: () => ({
    information: {
      name: "Jean",
      email: "jeanjms.1999@gmail.com",
      role: "ADMIN",
    },
    roles: ["SIMPLE", "MANAGER", "ADMIN"],
  }),
};
</script>

<style scoped>
.background {
  background-image: url("../../assets/background1.png");
  height: 100%;
}
</style>
