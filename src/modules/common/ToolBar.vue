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

    <v-navigation-drawer temporary v-model="drawer" app v-if="user">
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
        <v-list-item v-else-if="item.to" link :to="item.to">
          <v-list-item-icon>
            <v-icon v-text="item.icon" />
          </v-list-item-icon>
          <v-list-item-title v-text="$t(item.title)" />
        </v-list-item>
        <v-list-item v-else link @click="logout()">
          <v-list-item-icon>
            <v-icon v-text="item.icon" />
          </v-list-item-icon>
          <v-list-item-title v-text="$t(item.title)" />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer app temporary v-model="drawer" v-else-if="errorShow">
      <ErrorLoading error="common.menu.error" :event="menu" />
    </v-navigation-drawer>
    <v-navigation-drawer app temporary v-model="drawer" v-else>
      <Loading />
    </v-navigation-drawer>
  </div>
</template>

<script>
import LanguageSwitcher from "@/modules/common/LanguageSwitcher";
import ErrorLoading from "@/modules/common/ErrorLoading";
import Loading from "@/modules/common/Loading";
import {
  adminFields,
  managerFields,
  simpleFields,
} from "@/modules/common/menu-fields";
import { logout } from "@/modules/common/token-service";
import { getCurrentUser } from "@/modules/api/user/user-service";

export default {
  components: { LanguageSwitcher, ErrorLoading, Loading },
  name: "ToolBar",
  data: () => ({
    drawer: false,
    items: [],
    logout: logout,
    user: null,
    errorShow: false,
  }),
  async created() {
    this.menu();
  },
  methods: {
    async menu() {
      try {
        this.user = await getCurrentUser();
        switch (this.user.role) {
          case "ADMIN":
            this.items = adminFields;
            break;
          case "MANAGER":
            this.items = managerFields;
            break;
          case "SIMPLE":
            this.items = simpleFields;
            break;
          default:
            break;
        }
      } catch (e) {
        this.errorShow = true;
      }
    },
  },
};
</script>
