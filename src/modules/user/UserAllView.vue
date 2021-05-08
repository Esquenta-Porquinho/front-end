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
              <v-toolbar-title v-text="$t('views.user.all.title')" />
              <v-spacer />
              <v-icon dark right v-text="'mdi-account-details'" />
            </v-toolbar>
            <div v-if="users">
              <v-simple-table>
                <template>
                  <thead>
                    <tr>
                      <th></th>
                      <th
                        class="text-center"
                        v-text="$t('views.user.all.headers.name')"
                      />
                      <th
                        class="text-center"
                        v-text="$t('views.user.all.headers.email')"
                      />
                      <th
                        class="text-center"
                        v-text="$t('views.user.all.headers.role')"
                      />
                      <th class="text-center">
                        <v-icon v-text="'mdi-pencil'" />
                      </th>
                      <th class="text-center">
                        <v-icon v-text="'mdi-file-document'" />
                      </th>
                      <th class="text-center">
                        <v-icon v-text="'mdi-close'" />
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
                      <td class="text-center" v-text="user.role" />
                      <td class="text-center">
                        <v-btn
                          x-small
                          color="success"
                          :to="{
                            name: 'UserUpdateRoleView',
                            params: { id: user.id },
                          }"
                          v-text="$t('buttons.update')"
                        />
                      </td>
                      <td class="text-center">
                        <v-btn
                          x-small
                          color="warning"
                          :to="{
                            name: 'UserLogsView',
                            params: { id: user.id },
                          }"
                          v-text="$t('buttons.logs')"
                        />
                      </td>
                      <td class="text-center">
                        <v-btn
                          x-small
                          color="error"
                          @click="deactivate(user.id)"
                          v-text="$t('buttons.deactivate')"
                        />
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <divider />
              <Pagination
                component="UsersView"
                :totalItems="totalItems"
                :itemsPerPage="itemsPerPage"
              />
            </div>
            <v-card-text v-else-if="errorLoadShow">
              <ErrorLoading error="views.user.all.error" :event="getUsers" />
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
import { getAllUsers, updateStatus } from "@/modules/api/user/user-service";

export default {
  components: { ToolBar, FooterBar, Pagination, ErrorLoading, Loading },
  data: () => ({
    users: null,
    errorLoadShow: false,
    itemsPerPage: 10,
    totalItems: 0,
  }),
  async created() {
    await this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        const params = {
          page: this.$route.params.page,
          size: this.itemsPerPage,
        };
        const response = await getAllUsers(params);
        this.users = response.elements;
        this.totalItems = response.totalElements;
      } catch (e) {
        this.errorLoadShow = true;
      }
    },
    async activate(userId) {
      try {
        await updateStatus(userId, { status: 1 });
        await this.getUsers();
      } catch (e) {
        this.errorShow = true;
      }
    },
    async deactivate(userId) {
      try {
        await updateStatus(userId, { status: 0 });
        await this.getUsers();
      } catch (e) {
        this.errorShow = true;
      }
    },
  },
  watch: {
    $route() {
      this.getUsers();
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
