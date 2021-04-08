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
              <v-toolbar-title v-text="$t('views.parameters.list.title')" />
              <v-spacer />
              <v-toolbar-items>
                <v-col mt-3>
                  <v-select
                    dark
                    :items="boxes"
                    :label="$t('views.parameters.list.header.box')"
                    outlined
                    dense
                  />
                </v-col>
              </v-toolbar-items>
            </v-toolbar>
            <v-simple-table>
              <template>
                <thead>
                  <tr>
                    <th></th>
                    <th
                      class="text-center"
                      v-text="$t('views.parameters.list.header.week')"
                    />
                    <th
                      class="text-center"
                      v-text="$t('views.parameters.list.header.box')"
                    />
                    <th
                      class="text-center"
                      v-text="$t('views.parameters.list.header.status')"
                    />
                    <th class="text-center">
                      <v-icon v-text="'mdi-pencil'" />
                    </th>
                    <th class="text-center"><v-icon v-text="'mdi-check'" /></th>
                    <th class="text-center"><v-icon v-text="'mdi-close'" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="parameter in parameters" :key="parameter.id">
                    <td class="text-center">
                      <v-icon v-text="'mdi-thermometer'" />
                    </td>
                    <td class="text-center" v-text="parameter.weeks" />
                    <td class="text-center" v-text="parameter.box.number" />
                    <td
                      class="text-center"
                      v-text="$t(`fields.${parameter.status.toLowerCase()}`)"
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
              :countItems="parameters.length"
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
    itemsPerPage: 1,
    headers: [],
    boxes: [1, 2, 3, 4],
    parameters: [
      {
        id: 1,
        weeks: 1,
        box: {
          id: 1,
          number: 1,
        },
        status: "Active",
      },
      {
        id: 2,
        weeks: 2,
        box: {
          id: 1,
          number: 1,
        },
        status: "Active",
      },
      {
        id: 3,
        weeks: 3,
        box: {
          id: 1,
          number: 1,
        },
        status: "Active",
      },
    ],
    opcoes: [0, 1],
    choice: 1,
  }),
};
</script>
