<template>
  <div v-if="movie">
    <h1 class="mx-2 text-center lg:text-left">{{ movie.Title }}</h1>
    <div
      class="
        flex flex-col
        items-center
        lg:items-stretch lg:flex-row
        gap-x-4
        my-5
      "
    >
      <Movie :movie="movie" />
      <div class="lg:w-2/5 w-full flex flex-col justify-between lg:p-0 p-6">
        <div class="flex flex-col gap-y-5">
          <div>
            <p>Release Date: {{ movie.Released }}</p>
            <p>Language: {{ movie.Language }}</p>
            <p>Genre: {{ movie.Genre }}</p>
            <p>Cast & Crew: {{ movie.Writer }}, {{ movie.Actors }}</p>
            <p>Director: {{ movie.Director }}</p>
            <p>Length: {{ movie.Runtime }}</p>
          </div>
          <h2 class="uppercase font-bold text-2xl text-center lg:text-left">
            Sinopsis
          </h2>
          <div>
            <p>{{ movie.Plot }}</p>
          </div>
        </div>
        <div class="flex gap-x-5 justify-center lg:justify-start py-6 lg:py-0">
          <Button text="Buy Ticket" @pressed="buyTicket" />
          <Button text="Watch Trailer" @pressed="watchTrailer" />
        </div>
      </div>
    </div>
    <div class="mt-[3.75rem]">
      <h1 class="lg:mx-2 mx-6">Now Playing</h1>
      <Movies :withPagination="false" :limit="3" class="my-10" />
    </div>
  </div>
  <div v-else>
    <h1 class="text-2xl mb-6">Invalid Film</h1>
    Back to <router-link to="/" class="underline">Home</router-link>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { useToast } from "vue-toastification";
const Movie = defineAsyncComponent(() => import("@/components/partials/Movie"));
import Button from "@/components/partials/Button";
const Movies = defineAsyncComponent(() => import("@/components/Movies.vue"));

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  components: {
    Movie,
    Button,
    Movies,
  },
  async beforeCreate() {
    await this.$store.dispatch("getMovie", this.$route.params.id);
  },
  computed: {
    movie() {
      return this.$store.getters.movie;
    },
  },
  methods: {
    buyTicket() {
      this.toast.success("Comming Soon");
    },
    watchTrailer() {
      this.toast.success("Comming Soon");
    },
  },
};
</script>
