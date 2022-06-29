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
              <v-toolbar-title v-text="$t('views.user.update_role.title')" />
              <v-spacer />
              <v-icon dark right v-text="'mdi-account-box'" />
            </v-toolbar>
            <v-card-text v-if="user">
              <v-form>
                <v-text-field
                  v-model="user.name"
                  :counter="10"
                  prepend-icon="mdi-account"
                  disabled
                >
                </v-text-field>
                <v-text-field
                  v-model="user.email"
                  :counter="30"
                  prepend-icon="mdi-email"
                  disabled
                >
                </v-text-field>
                <v-select
                  v-model="user.role"
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
                  @click="update()"
                  v-text="$t('buttons.update')"
                />
              </v-card-actions>
            </v-card-text>
            <v-card-text v-else-if="errorLoadShow">
              <ErrorLoading
                error="views.user.update_role.error"
                :event="getUser"
              />
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
import { getUserById, updateRole } from "@/modules/api/user/user-service";

export default {
  components: { ToolBar, FooterBar, ErrorLoading, Loading },
  data: () => ({
    roles: ["SIMPLE", "MANAGER", "ADMIN"],
    user: null,
    errorShow: false,
    errorLoadShow: false,
  }),
  async created() {
    await this.getUser();
  },
  methods: {
    async getUser() {
      try {
        const userId = this.$route.params.id;
        this.user = await getUserById(userId);
      } catch (e) {
        this.errorLoadShow = true;
      }
    },
    async update() {
      try {
        await updateRole(this.user.id, { role: this.user.role });
        this.user = null;
        await this.getUser();
      } catch (e) {
        this.errorShow = true;
      }
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
