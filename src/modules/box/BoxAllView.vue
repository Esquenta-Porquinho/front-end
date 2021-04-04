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
              <v-toolbar-title v-text="$t('views.box.list.title')" />
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
                      v-text="$t('views.box.list.header.number')"
                    />
                    <th
                      class="text-center"
                      v-text="$t('views.box.list.header.area')"
                    />
                    <th
                      class="text-center"
                      v-text="$t('views.box.list.header.status')"
                    />
                    <th
                      class="text-center"
                      v-text="$t('views.box.list.header.controller')"
                    />
                    <th class="text-center">
                      <v-icon v-text="'mdi-pencil'" />
                    </th>
                    <th class="text-center"><v-icon v-text="'mdi-check'" /></th>
                    <th class="text-center"><v-icon v-text="'mdi-close'" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="box in boxes" :key="box.id">
                    <td class="text-center"><v-icon v-text="'mdi-home'" /></td>
                    <td class="text-center" v-text="box.number" />
                    <td class="text-center" v-text="box.area" />
                    <td
                      class="text-center"
                      v-text="$t(`fields.${box.status.toLowerCase()}`)"
                    />
                    <td
                      class="text-center"
                      v-text="$t(`fields.${box.controller.toLowerCase()}`)"
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
              :countItems="boxes.length"
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
    headers: [],
    boxes: [
      {
        id: 1,
        number: 1,
        area: "12m²",
        controller: "lamp",
        status: "Active",
      },
      {
        id: 2,
        number: 2,
        area: "12m²",
        controller: "lamp",
        status: "Active",
      },
      {
        id: 3,
        number: 3,
        area: "12m²",
        controller: "lamp",
        status: "Active",
      },
      {
        id: 4,
        number: 4,
        area: "12m²",
        controller: "lamp",
        status: "Active",
      },
    ],
    opcoes: [0, 1],
    choice: 1,
  }),
};
</script>
