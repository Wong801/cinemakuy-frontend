<template>
  <div
    class="
      min-w-[17rem]
      max-w-[17rem]
      bg-gray-dark
      min-h-screen
      py-5
      hidden
      lg:block
    "
  >
    <Link text="Now Playing" type="sidebar" href="/" />
    <Link text="Coming Soon" type="sidebar" href="/coming-soon" />
    <Link text="Theatre" type="sidebar" href="/theatre" />
    <Link text="Promotion" type="sidebar" href="/promotion" />
    <Link text="Informations" type="sidebar" href="/informations" />
  </div>
  <div class="absolute bg-gray-dark w-full h-full" :class="className">
    <button class="mx-6 my-4 h-4 lg:hidden" @click="toggleMenu">
      <div class="bg-white w-9 h-1 absolute rotate-45"></div>
      <div class="bg-white w-9 h-1 absolute -rotate-45"></div>
    </button>
    <Link text="Now Playing" type="sidebar" href="/" />
    <Link text="Coming Soon" type="sidebar" href="/coming-soon" />
    <Link text="Theatre" type="sidebar" href="/theatre" />
    <Link text="Promotion" type="sidebar" href="/promotion" />
    <Link text="Informations" type="sidebar" href="/informations" />
  </div>
  <div class="mx-6 py-2 lg:hidden bg-gray-light">
    <button @click="toggleMenu">
      <div class="bg-gray-dark my-1.5 w-9 h-1"></div>
      <div class="bg-gray-dark my-1.5 w-9 h-1"></div>
      <div class="bg-gray-dark my-1.5 w-9 h-1"></div>
    </button>
  </div>
</template>

<script>
import Link from "./partials/Link.vue";

export default {
  name: "Sidebar",
  data() {
    return {
      className: " hidden",
    };
  },
  components: {
    Link,
  },
  methods: {
    toggleMenu() {
      this.className = this.className === "hidden" ? "block" : "hidden";
    },
  },
};
</script>
