<template>
  <Header />
  <div class="lg:flex flex-none w-full bg-gray-light">
    <Sidebar />
    <router-view class="lg:px-[2.813rem] px-0 lg:py-10 py-2" />
  </div>
  <Footer />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
const Footer = defineAsyncComponent(() => import("./components/Footer.vue"));
export default {
  name: "App",
  components: {
    Header,
    Sidebar,
    Footer,
  },
};
</script>

<style lang="scss"></style>
