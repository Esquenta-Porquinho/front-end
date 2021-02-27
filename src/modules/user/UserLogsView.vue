<template>
  <div class="background">
    <ToolBar subtitle="User"/>
    <v-container fluid >
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
              <v-toolbar-title v-text="$t('views.user.logs.title')" />
              <v-spacer/>
              <v-icon dark right v-text="'mdi-file-document'"/>
            </v-toolbar>
              <v-data-table
                :headers="headers"
                :items="logs"
                :items-per-page="5"
                class="elevation-1"
              ></v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <FooterBar/>
  </div>
</template>

<script>
import ToolBar from "@/modules/common/ToolBar";
import FooterBar from "@/modules/common/FooterBar";

export default {
  components: {ToolBar, FooterBar},
  data:()=> ({
    headers: [
      {
        text: "User",
        align: 'start',
        sortable: false,
        value:"name"
      },
      { text: "Date", value:"date"},
      { text: "Action", value:"action"},
    ],
    logs: [
      {
        name: 'Jean Moraes',
        date:'22/06/2014',
        action:'Create new box'
      },
      {
        name: 'Jean Moraes',
        date:'22/06/2014',
        action:'Create new box'
      },
      {
        name: 'Jean Moraes',
        date:'22/06/2014',
        action:'Create new box'
      },
      {
        name: 'Jean Moraes',
        date:'22/06/2014',
        action:'Create new box'
      },
      {
        name: 'Jean Moraes',
        date:'22/06/2014',
        action:'Create new box'
      },
      {
        name: 'Jean Moraes',
        date:'22/06/2014',
        action:'Create new box'
      },
      {
        name: 'Jean Moraes',
        date:'22/06/2014',
        action:'Create new box'
      },
      {
        name: 'Jean Moraes',
        date:'22/06/2014',
        action:'Create new box'
      },
      {
        name: 'Jean Moraes',
        date:'22/06/2014',
        action:'Create new box'
      },
    ],
  }),
}
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