<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list>
        <template v-for="sideMenuLink in sideMenuLinks">
          <v-list-item exact :key="$t(sideMenuLink.text)" :to="{name: sideMenuLink.link}">
            <v-list-item-action>
              <v-icon v-text="sideMenuLink.icon"/>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="$t(sideMenuLink.text)"/>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="primary"
      dark
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="title hidden-sm-and-down" v-text="$t('common.title')"/>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        :label="$t('common.search')"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer/>
      <LanguageSwitcher />
      <v-btn icon exact :to="{name: 'HomeView'}">
        <v-icon v-text="'mdi-apps'"/>
      </v-btn>
    </v-app-bar>
    <v-container v-if="shouldShowFeaturesMenu">
      <v-row align="start" justify="center">
        <v-col cols="9" sm="8">
          <v-col v-for="feature in features" :key="feature.link">
            <v-card outlined :to="{name: feature.link}">
              <v-card-title v-text="$t(feature.text)"/>
              <v-divider/>
              <v-card-text v-text="$t(feature.description)" />
            </v-card>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
    <router-view v-else/>
  </v-app>
</template>

<script>
  import LanguageSwitcher from "@/modules/home/LanguageSwitcher";
  export default {
    components: {LanguageSwitcher},
    data() {
      return {
        drawer: false,
        sideMenuLinks: [
          {
            link: 'HomeView',
            icon: 'mdi-home',
            text: 'common.home'
          },
          {
            link: 'SettingsView',
            icon: 'mdi-cog',
            text: 'common.settings'
          }
        ],
        features: [
          {
            link: 'Some0View',
            text: 'some.view0.title',
            description: 'some.view0.description'
          },
          {
            link: 'Some1View',
            text: 'some.view1.title',
            description: 'some.view1.description'
          },
          {
            link: 'Some2View',
            text: 'some.view2.title',
            description: 'some.view2.description'
          },
        ]
      }
    },
    computed: {
      shouldShowFeaturesMenu() {
        return this.$route.name === 'HomeView'
      }
    }
  }
</script>
