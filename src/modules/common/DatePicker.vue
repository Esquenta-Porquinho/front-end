<template>
  <v-menu
    v-model="menu2"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        :label="label"
        prepend-icon="mdi-calendar"
        :rules="expectedParturitionRules"
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      @change="pickDate()"
      v-model="date"
      @input="menu = false"
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: "DataPicker",
  props: {
    label: {
      type: String,
      required: true,
    },
    rules: {
      type: Array,
      required: false,
    },
  },
  data: (props) => ({
    date: null,
    label: props.label,
    expectedParturitionRules: props.rules,
    menu: false,
  }),
  methods: {
    pickDate() {
      this.$emit("pickDate", this.date);
    },
  },
};
</script>
