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
                    <th class="text-center"><v-icon v-text="'mdi-close'" /></th>
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
                        v-text="$t('buttons.update')"
                      />
                    </td>
                    <td class="text-center">
                      <v-btn
                        x-small
                        color="warning"
                        v-text="$t('buttons.logs')"
                      />
                    </td>
                    <td class="text-center">
                      <v-btn
                        x-small
                        color="error"
                        v-text="$t('buttons.deactivate')"
                      />
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
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
    users: [
      {
        id: 1,
        name: "Adamo Cornão",
        email: "adamo@gmail.com",
        role: "ADMIN",
      },
      {
        id: 2,
        name: "Adamo Cornão",
        email: "adamo@gmail.com",
        role: "ADMIN",
      },
      {
        id: 3,
        name: "Adamo Cornão",
        email: "adamo@gmail.com",
        role: "ADMIN",
      },
      {
        id: 4,
        name: "Adamo Cornão",
        email: "adamo@gmail.com",
        role: "ADMIN",
      },
    ],
  }),
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
