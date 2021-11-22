<template>
  <div v-if="movies" class="w-full lg:w-auto">
    <div
      v-if="!limit"
      class="
        grid
        justify-items-center
        2xl:grid-cols-4
        sm:grid-cols-3
        grid-cols-2
        gap-x-5 gap-y-10
      "
    >
      <Movie
        v-for="movie in movies"
        :key="movie.imdbID"
        :movie="movie"
        :text="text"
      />
    </div>
    <div
      v-else
      class="
        grid
        justify-items-center
        lg:grid-cols-3
        grid-cols-2
        gap-x-6 gap-y-10
        w-auto
        lg:w-max
      "
    >
      <Movie
        v-for="i in limit"
        :key="i - 1"
        :movie="movies[i - 1]"
        :text="text"
      />
    </div>
    <div v-if="withPagination" class="w-max mx-auto mt-10 mb-[3.75rem]">
      <v-pagination
        v-model="page"
        :pages="totalPages"
        active-color="#C0222E"
        @update:modelValue="getMovies(page)"
      />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import VPagination from "@hennge/vue3-pagination";
import "@/assets/css/pagination.css";
const Movie = defineAsyncComponent(() => import("@/components/partials/Movie"));
// @ is an alias to /src

export default {
  props: {
    text: {
      type: Boolean,
      default: false,
      required: false,
    },
    withPagination: {
      type: Boolean,
      default: true,
      required: false,
    },
    limit: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  data() {
    return {
      page: 1,
    };
  },
  components: {
    Movie,
    VPagination,
  },
  created() {
    this.getMovies(this.page);
  },
  computed: {
    movies() {
      return this.$store.getters.movies;
    },
    totalPages() {
      if (this.movies) {
        return Math.round(
          this.$store.state.movies.totalPages /
            this.$store.getters.movies.length
        );
      }
      return 1;
    },
  },
  methods: {
    async getMovies(page) {
      const payload = {
        title: this.$store.state.movies.searchTitle,
        page,
      };
      await this.$store.dispatch("getMovies", payload);
    },
  },
};
</script>

<style></style>
