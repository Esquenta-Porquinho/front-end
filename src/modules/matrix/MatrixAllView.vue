<template>
  <div class="background">
    <ToolBar />
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col md="8" sm="10" xs="14">
          <v-card>
            <v-toolbar
              color="primary"
              class="white--text"
              height="60px"
              width="100%"
              flat
            >
              <v-toolbar-title v-text="$t('views.matrix.all.title')" />
              <v-spacer />
              <v-toolbar-items>
                <v-flex mt-5>
                  <v-checkbox
                    dark
                    input-value="true"
                    value
                    hide-details
                    label="Status"
                  />
                </v-flex>
              </v-toolbar-items>
            </v-toolbar>
            <v-simple-table>
              <template>
                <thead>
                  <tr>
                    <th />
                    <th
                      class="text-center"
                      v-text="$t('views.matrix.all.headers.matrix')"
                    />
                    <th class="text-center" v-text="'Status'" />
                    <th class="text-center">
                      <v-icon v-text="'mdi-pencil'" />
                    </th>
                    <th class="text-center"><v-icon v-text="'mdi-check'" /></th>
                    <th class="text-center"><v-icon v-text="'mdi-close'" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="matrix in matrices" :key="matrix.id">
                    <td class="text-center"><v-icon v-text="'mdi-pig'" /></td>
                    <td class="text-center" v-text="matrix.matrix" />
                    <td
                      class="text-center"
                      v-text="$t(`fields.${matrix.status.toLowerCase()}`)"
                    />
                    <td class="text-center">
                      <v-btn
                        x-small
                        color="secondary"
                        class="white--text"
                        :to="''"
                        v-text="$t('buttons.update')"
                      />
                    </td>
                    <td class="text-center">
                      <v-btn
                        x-small
                        color="success"
                        :to="''"
                        v-text="$t('buttons.activate')"
                      />
                    </td>
                    <td class="text-center">
                      <v-btn
                        x-small
                        color="error"
                        :to="''"
                        v-text="$t('buttons.deactivate')"
                      />
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <v-divider />
            <Pagination
              :countItems="matrices.length"
              :itemsPerPage="itemsPerPage"
            />
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
import Pagination from "@/modules/common/Pagination.vue";

export default {
  components: { ToolBar, FooterBar, Pagination },
  data: () => ({
    itemsPerPage: 3,
    matrices: [
      {
        id: 1,
        matrix: 39,
        status: "Active",
      },
      {
        id: 2,
        matrix: 34,
        status: "Active",
      },
      {
        id: 3,
        matrix: 93,
        status: "Inactive",
      },
      {
        id: 4,
        matrix: 43,
        status: "Active",
      },
    ],
    opcoes: [0, 1],
    choice: 1,
  }),
};
</script>

<style scoped>
.background {
  background-image: url("../../assets/background1.png");
  height: 100%;
}
</style>
