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
              <v-toolbar-title v-text="$t('views.user.profile.title')" />
              <v-spacer />
              <v-icon dark right v-text="'mdi-account'" />
            </v-toolbar>
            <v-card-text v-if="user">
              <v-list>
                <v-list-item-group color="primary">
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon v-text="'mdi-account'" />
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="user.name" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon v-text="'mdi-email'" />
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="user.email" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon v-text="'mdi-account-box'" />
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="user.role" />
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
              <v-card-actions>
                <v-btn
                  block
                  color="secondary"
                  v-text="$t('buttons.update')"
                  :to="{ name: 'UserUpdateView' }"
                />
              </v-card-actions>
            </v-card-text>
            <v-card-text v-else-if="errorShow">
              <ErrorLoading error="views.user.profile.error" :event="profile" />
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
import { getCurrentUser } from "@/modules/api/user/user-service";

export default {
  components: { ToolBar, FooterBar, ErrorLoading, Loading },
  data: () => ({
    user: null,
    errorShow: false,
  }),
  async created() {
    await this.profile();
  },
  methods: {
    async profile() {
      try {
        this.user = await getCurrentUser();
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
