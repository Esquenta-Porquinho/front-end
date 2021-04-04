<template>
  <div>
    <v-app-bar color="primary" class="white--text" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span
          class="title hidden-sm-and-down"
          v-text="$t('common.project.name')"
        />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <LanguageSwitcher />
    </v-app-bar>

    <v-navigation-drawer temporary v-model="drawer" app>
      <v-list-item link :to="'/user'">
        <v-list-item-content>
          <v-list-item-title class="title" v-text="'Adamo'" />
          <v-list-item-subtitle v-text="'adamo@gmail.com'" />
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list v-for="item in items" :key="item.title">
        <v-list-group :prepend-icon="item.icon" v-if="item.sub">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="$t(item.title)"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.sub"
            :key="child.title"
            link
            :to="child.to"
          >
            <v-list-item-icon>
              <v-icon v-text="child.icon" />
            </v-list-item-icon>
            <v-list-item-title v-text="$t(child.title)" />
          </v-list-item>
        </v-list-group>
        <v-list-item v-else link>
          <v-list-item-icon>
            <v-icon v-text="item.icon" />
          </v-list-item-icon>
          <v-list-item-title v-text="$t(item.title)" />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import LanguageSwitcher from "@/modules/common/LanguageSwitcher";
import { adminFields } from "@/modules/common/menu-fields";
import jwt_decode from "jwt-decode";

export default {
  components: { LanguageSwitcher },
  name: "ToolBar",
  data: () => ({
    drawer: false,
    items: [],
  }),
  created() {
    const token = localStorage.getItem("token");
    const decodedJwt = jwt_decode(token);
    const role = decodedJwt.role[0];

    switch (role) {
      case "ROLE_ADMIN":
        this.items = adminFields();
        break;
      default:
        this.items = [{ title: "common.menu.logout", icon: "mdi-logout" }];
        break;
    }
  },
};
</script>
