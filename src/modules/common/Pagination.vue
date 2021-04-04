<template>
  <v-pagination :length="length" />
</template>

<script>
export default {
  name: "Pagination",
  props: {
    countItems: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      required: true,
    },
  },
  data: (props) => ({
    length: Math.ceil(props.countItems / props.itemsPerPage),
  }),
};
</script>
