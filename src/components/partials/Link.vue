<template>
  <router-link
    :to="href"
    :class="className"
    :exact-active-class="exactActiveClass"
    >{{ text }}</router-link
  >
</template>

<script>
export default {
  name: "Link",
  props: {
    text: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "sidebar",
    },
  },
  computed: {
    className() {
      switch (this.type) {
        case "sidebar":
          return "inline-block px-10 py-5 min-w-full text-left hover:bg-gray-light";
        case "navbar":
          return "";
        default:
          return "";
      }
    },
    exactActiveClass() {
      switch (this.type) {
        case "sidebar":
          return "bg-gray-light";
        case "navbar":
          return "";
        default:
          return "";
      }
    },
  },
};
</script>
