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
              <v-toolbar-title v-text="$t('views.gestation.list.title')" />
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
                    <th></th>
                    <th
                      class="text-center"
                      v-text="$t('views.gestation.list.header.box')"
                    />
                    <th
                      class="text-center"
                      v-text="$t('views.gestation.list.header.matrix')"
                    />
                    <th
                      class="text-center"
                      v-text="$t('views.gestation.list.header.status')"
                    />
                    <th class="text-center">
                      <v-icon v-text="'mdi-pencil'" />
                    </th>
                    <th class="text-center"><v-icon v-text="'mdi-check'" /></th>
                    <th class="text-center"><v-icon v-text="'mdi-close'" /></th>
                    <th class="text-center"><v-icon v-text="'mdi-eye'" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="gestation in gestations" :key="gestation.id">
                    <td class="text-center">
                      <v-icon v-text="'mdi-human-pregnant'" />
                    </td>
                    <td class="text-center" v-text="gestation.box.number" />
                    <td class="text-center" v-text="gestation.matrix.number" />
                    <td
                      class="text-center"
                      v-text="$t(`fields.${gestation.status.toLowerCase()}`)"
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
            <divider />
            <Pagination
              :countItems="gestations.length"
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
import Pagination from "@/modules/common/Pagination";

export default {
  components: { ToolBar, FooterBar, Pagination },
  data: () => ({
    itemsPerPage: 4,
    gestations: [
      {
        id: 1,
        expectedParturition: "22/10/2020",
        effectiveParturition: "30/12/2020",
        numberParturition: 4,
        livePigs: 10,
        deadPigs: 5,
        weaning: "15/01/2021",
        box: {
          id: 1,
          number: 1,
        },
        matrix: {
          id: 1,
          number: 39,
        },
        status: "Active",
      },
      {
        id: 2,
        expectedParturition: "27/10/2020",
        effectiveParturition: "30/12/2020",
        numberParturition: 4,
        livePigs: 10,
        deadPigs: 5,
        weaning: "15/01/2021",
        box: {
          id: 2,
          number: 2,
        },
        matrix: {
          id: 2,
          number: 43,
        },
        status: "Active",
      },
      {
        id: 3,
        expectedParturition: "19/10/2020",
        effectiveParturition: "30/12/2020",
        numberParturition: 4,
        livePigs: 10,
        deadPigs: 5,
        weaning: "15/01/2021",
        box: {
          id: 1,
          number: 1,
        },
        matrix: {
          id: 3,
          number: 93,
        },
        status: "Inactive",
      },
      {
        id: 4,
        expectedParturition: "01/10/2020",
        effectiveParturition: "30/12/2020",
        numberParturition: 4,
        livePigs: 10,
        deadPigs: 5,
        weaning: "15/01/2021",
        box: {
          id: 2,
          number: 2,
        },
        matrix: {
          id: 4,
          number: 34,
        },
        status: "Inactive",
      },
    ],
    options: [0, 1],
    choice: 1,
  }),
};
</script>
