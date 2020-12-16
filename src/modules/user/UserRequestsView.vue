<template>
  <div class="background">
    <ToolBar />
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col md="6" sm="8" xs="12">
          <v-card>
            <v-toolbar 
              color="primary"
              class="white--text" 
              height="60px" 
              width="100%" 
              flat
            >
              <v-toolbar-title v-text="$t('views.user.requests.title')"/>
              <v-spacer/>
              <v-icon dark right v-text="'mdi-account-clock'"/>
            </v-toolbar>
              <v-simple-table>
                <template>
                  <tbody>
                    <tr v-for="user in users" :key="user.id">
                      <td><v-icon v-text="'mdi-account'"/>
                      <td>{{ user.name }}</td>
                      <td>{{ user.email }}</td>
                      <td><v-btn x-small color="success" v-text="$t('buttons.activate')"/></td>
                      <td><v-btn x-small color="error" v-text="$t('buttons.exclude')"/></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
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
  data:() =>({
      users:[
        {
          id:1,
          name:"Adamo Cornão",
          email:"adamo@gmail.com",
          role:"ADMIN"
        },
        {
          id:2,
          name:"Adamo Cornão",
          email:"adamo@gmail.com",
          role:"ADMIN"
        },
        {
          id:3,
          name:"Adamo Cornão",
          email:"adamo@gmail.com",
          role:"ADMIN"
        },
        {
          id:4,
          name:"Adamo Cornão",
          email:"adamo@gmail.com",
          role:"ADMIN"
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
    background-image: url("../../assets/background.png");
    height: 100%;
  }
</style>