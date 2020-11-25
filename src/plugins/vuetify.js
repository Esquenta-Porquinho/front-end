import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        primary: '#8C2B2B',
        secondary: '#BF757B',
      },
      light: {
        primary: '#8C2B2B',
        secondary: '#BF757B',
      },
    },
  },
})
