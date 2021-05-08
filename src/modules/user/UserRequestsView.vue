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
              <v-toolbar-title v-text="$t('views.user.requests.title')" />
              <v-spacer />
              <v-icon dark right v-text="'mdi-account-clock'" />
            </v-toolbar>
            <div v-if="users && totalItems">
              <v-simple-table>
                <template>
                  <thead>
                    <tr>
                      <th></th>
                      <th
                        class="text-center"
                        v-text="$t('views.user.requests.headers.name')"
                      />
                      <th
                        class="text-center"
                        v-text="$t('views.user.requests.headers.email')"
                      />
                      <th class="text-center">
                        <v-icon v-text="'mdi-check'" />
                      </th>
                      <th class="text-center">
                        <v-icon v-text="'mdi-delete'" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="user in users" :key="user.id">
                      <td class="text-center">
                        <v-icon v-text="'mdi-account'" />
                      </td>
                      <td class="text-center" v-text="user.name" />
                      <td class="text-center" v-text="user.email" />
                      <td class="text-center">
                        <v-btn
                          x-small
                          color="success"
                          v-text="$t('buttons.accept')"
                          @click="accept(user.id)"
                        />
                      </td>
                      <td class="text-center">
                        <v-btn
                          x-small
                          color="error"
                          v-text="$t('buttons.exclude')"
                          @click="exclude(user.id)"
                        />
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <v-divider />
              <Pagination
                component="UserRequestsView"
                :totalItems="totalItems"
                :itemsPerPage="itemsPerPage"
              />
            </div>
            <div v-else-if="totalItems == 0">
              <!-- TODO: Extract to a common component -->
              <p
                class="title"
                align="center"
                v-text="$t('views.user.requests.empty')"
              />
            </div>
            <v-card-text v-else-if="errorLoadShow">
              <ErrorLoading
                error="views.user.requests.error"
                :event="getRequests"
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
import Pagination from "@/modules/common/Pagination";
import ErrorLoading from "@/modules/common/ErrorLoading";
import Loading from "@/modules/common/Loading";
import router from "@/router/";
import {
  getUserRequests,
  updateRole,
  deleteUser,
} from "@/modules/api/user/user-service";

export default {
  components: { ToolBar, FooterBar, Pagination, ErrorLoading, Loading },
  data: () => ({
    users: null,
    errorLoadShow: false,
    itemsPerPage: 10,
    totalItems: null,
  }),
  async created() {
    await this.getRequests();
  },
  methods: {
    async getRequests() {
      try {
        const params = {
          page: this.$route.params.page,
          size: this.itemsPerPage,
        };
        const response = await getUserRequests(params);
        this.users = response.elements;
        this.totalItems = response.totalElements;
      } catch (e) {
        this.errorLoadShow = true;
      }
    },
    async accept(userId) {
      try {
        await updateRole(userId, { role: "SIMPLE" });
        router.push({ name: "UsersView", params: { page: 1 } });
      } catch (e) {
        this.errorShow = true;
      }
    },
    async exclude(userId) {
      try {
        await deleteUser(userId);
        await this.getRequests();
      } catch (e) {
        this.errorShow = true;
      }
    },
  },
  watch: {
    $route() {
      this.getRequests();
    },
  },
};
</script>

<style>
html {
  overflow-y: auto !important;
}

.background {
  background-image: url("../../assets/background.png");
  height: 100%;
}
</style>
