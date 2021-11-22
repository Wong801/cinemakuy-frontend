<template>
  <header
    class="
      bg-red-primary
      lg:pl-10 lg:pr-[3.75rem]
      px-6
      flex
      justify-between
      lg:justify-center
      items-center
      py-5
      lg:sticky lg:top-0
    "
  >
    <img
      v-lazy="logoPath('cinemakuy')"
      alt="cinemakuy_logo"
      class="cursor-pointer w-20 lg:w-auto"
      @click="$router.push('/')"
    />
    <Search
      :query="title"
      text="Search Title / Theatre Here"
      @search="searchMovies"
    />
    <div class="flex items-center gap-x-2 lg:gap-x-8 lg:w-max justify-end">
      <img
        v-lazy="logoPath('imax')"
        alt="imax_logo"
        class="cursor-pointer w-20 lg:w-auto"
        @click="openLink('https://www.imax.com/')"
      />
      <img
        v-lazy="logoPath('dolby')"
        alt="dolby_logo"
        class="cursor-pointer w-20 lg:w-auto"
        @click="openLink('https://www.dolby.com/technologies/dolby-atmos/')"
      />
    </div>
  </header>
  <Search
    :query="title"
    text="Search Title / Theatre Here"
    @search="searchMovies"
    :isMobile="true"
  />
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Search from "./partials/Search";

const store = useStore();
const router = useRouter();

const title = computed(() => store.state.movies.searchTitle);

const logoPath = (name) => {
  try {
    return require(`@/assets/images/logos/${name}.png`);
  } catch (e) {
    return "";
  }
};
const searchMovies = async (title) => {
  const payload = {
    title,
    page: 1,
  };
  await store.dispatch("getMovies", payload);
  store.commit("setSearchTitle", title);
  router.push("/");
};
const openLink = (url) => {
  window.open(url, "_blank"), focus();
};
</script>
