<template>
  <div class="background">
    <ToolBar />
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col md="8" sm="10" xs="12">
          <v-card>
            <v-toolbar
              color="primary"
              class="white--text"
              height="60px"
              width="100%"
              flat
            >
              <v-toolbar-title v-text="$t('views.user.logs.title')" />
              <v-spacer />
              <v-icon dark right v-text="'mdi-file-document'" />
            </v-toolbar>
            <div v-if="logs && totalItems">
              <v-simple-table>
                <template>
                  <thead>
                    <tr>
                      <th></th>
                      <th
                        class="text-center"
                        v-text="$t('views.user.logs.headers.user')"
                      />
                      <th
                        class="text-center"
                        v-text="$t('views.user.logs.headers.date')"
                      />
                      <th
                        class="text-center"
                        v-text="$t('views.user.logs.headers.action')"
                      />
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="log in logs" :key="log.id">
                      <td class="text-center">
                        <v-icon v-text="'mdi-file-document'" />
                      </td>
                      <td class="text-center" v-text="user.name" />
                      <td class="text-center" v-text="log.datetime" />
                      <td class="text-center" v-text="log.description" />
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <divider />
              <Pagination
                component="UserLogsView"
                :totalItems="totalItems"
                :itemsPerPage="itemsPerPage"
              />
            </div>
            <div v-else-if="totalItems == 0">
              <p
                class="title"
                align="center"
                v-text="$t('views.user.logs.empty')"
              />
            </div>
            <v-card-text v-else-if="errorLoadShow">
              <ErrorLoading error="view.user.logs.error" :event="getLogs" />
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
import { getUserLogs, getUserById } from "@/modules/api/user/user-service";

export default {
  components: { ToolBar, FooterBar, ErrorLoading, Loading },
  data: () => ({
    logs: null,
    user: null,
    errorLoadShow: false,
    itemsPerPage: 10,
    totalItems: null,
  }),
  async created() {
    await this.getLogs();
  },
  methods: {
    async getLogs() {
      try {
        const userId = this.$route.params.id;
        this.user = await getUserById(userId);
        const response = await getUserLogs(userId);
        this.logs = response.elements;
        this.totalItems = response.totalElements;
      } catch (e) {
        this.errorLoadShow = false;
      }
    },
  },
};
</script>

<style>
html {
  overflow-y: auto !important;
}

.background {
  background-image: url("../../assets/background1.png");
  height: 100%;
}
</style>
