<template>
  <Movies :text="true" />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
const Movies = defineAsyncComponent(() => import("@/components/Movies.vue"));

export default {
  components: {
    Movies,
  },
  created() {
    this.$store.commit("setSearchTitle", "");
  },
};
</script>
