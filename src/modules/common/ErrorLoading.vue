<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col>
        <p class="title" align="center" v-text="$t(props.error)" />
        <v-btn
          block
          color="primary"
          @click="props.event"
          v-text="$t('buttons.retry')"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      required: true,
    },
    event: {
      type: Function,
      required: true,
    },
  },
  data: (props) => ({
    props,
  }),
};
</script>
