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
      <v-list-item link :to="{ name: 'UserView', params: { id: user.id } }">
        <v-list-item-content>
          <v-list-item-title class="title" v-text="user.name" />
          <v-list-item-subtitle v-text="user.role" />
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
        <v-list-item v-else link :to="item.to">
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
import router from "@/router/";
import {
  adminFields,
  managerFields,
  simpleFields,
} from "@/modules/common/menu-fields";
import { getCurrentUserRole, logout } from "@/modules/common/token-service";

export default {
  components: { LanguageSwitcher },
  name: "ToolBar",
  data: () => ({
    drawer: false,
    items: [],
    user: {
      id: 1,
      name: "Adamo",
      role: "ADMIN",
    },
  }),
  created() {
    const role = getCurrentUserRole();

    switch (role) {
      case "ROLE_ADMIN":
        this.items = adminFields;
        break;
      case "ROLE_MANAGER":
        this.items = managerFields;
        break;
      case "ROLE_SIMPLE":
        this.items = simpleFields;
        break;
      default:
        logout();
        router.push({ name: "LoginView" });
        break;
    }
  },
};
</script>
