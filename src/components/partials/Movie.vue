<template>
  <div
    v-if="movie"
    class="
      md:max-w-[18rem]
      max-w-[10rem]
      flex flex-col
      justify-between
      cursor-pointer
      gap-y-[1.125rem]
      mx-6
      lg:mx-0
    "
    @click="openMovieDetail(movie.imdbID)"
  >
    <img v-lazy="props.movie.Poster" alt="" class="poster" />
    <p v-if="text" class="text-center hover:underline lg:text-base text-xs">
      {{ props.movie.Title }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import store from "../../store";
import router from "../../router";

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
  text: {
    type: Boolean,
    default: false,
  },
});

const openMovieDetail = async (id) => {
  await store.dispatch("getMovie", id);
  router.push({ name: "movieDetail", params: { id } });
};
</script>

<style lang="scss" scoped>
.poster {
  box-shadow: 0px 2px 6px rgba(255, 255, 255, 0.3);
  border-radius: 20px;
}
</style>
