<template>
  <v-pagination v-model="page" :length="length" @input="next"></v-pagination>
</template>

<script>
import router from "@/router/";

export default {
  name: "Pagination",
  props: {
    component: {
      type: String,
      required: true,
    },
    totalItems: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      required: true,
    },
  },
  data: (props) => ({
    page: 1,
    name: props.component,
    length: Math.ceil(props.totalItems / props.itemsPerPage),
  }),
  methods: {
    next() {
      router.push({ name: this.name, params: { page: this.page } });
    },
  },
};
</script>
