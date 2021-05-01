<template>
  <v-toolbar class="white--text" color="primary">
    <v-toolbar-title class="bold headline" v-text="$t('common.project.name')" />
    <v-spacer />
    <LanguageSwitcher />
  </v-toolbar>
</template>

<script>
import LanguageSwitcher from "@/modules/common/LanguageSwitcher";

export default {
  name: "ToolBar",
  components: { LanguageSwitcher },
};
</script>
