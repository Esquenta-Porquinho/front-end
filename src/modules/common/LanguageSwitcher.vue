<template>
  <v-speed-dial absolute class="mr-12" direction="bottom" right>
    <template v-slot:activator>
      <v-btn icon large>
        <v-icon color="white" v-text="'mdi-earth'" />
      </v-btn>
    </template>
    <v-btn
      v-for="language in languages"
      :key="language.lang"
      class="title"
      rounded
      small
      @click="setLanguageTo(language.lang)"
      v-text="language.emoji"
    />
  </v-speed-dial>
</template>

<script>
export default {
  name: "LanguageSwitcher",
  data: () => ({
    languages: [
      { emoji: "🇧🇷", lang: "br" },
      { emoji: "🇺🇸", lang: "en" },
    ],
  }),
  methods: {
    setLanguageTo(language) {
      this.$i18n.locale = language;
    },
  },
};
</script>
