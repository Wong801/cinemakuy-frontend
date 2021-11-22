import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "CinemaKuy - Home",
      metaTags: [
        {
          name: "description",
          content: "Home page",
        },
      ],
    },
  },
  {
    path: "/movie/detail/:id",
    name: "movieDetail",
    meta: {
      title: "CinemaKuy - Film",
      metaTags: [
        {
          name: "description",
          content: "Detail page",
        },
      ],
    },
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/Detail.vue"),
  },
  {
    path: "/coming-soon",
    name: "coming-soon",
    meta: {
      title: "CinemaKuy - Coming Soon",
      metaTags: [
        {
          name: "description",
          content: "Coming Soon page",
        },
      ],
    },
    component: () =>
      import(/* webpackChunkName: "coming-soon" */ "../views/ComingSoon.vue"),
  },
  {
    path: "/theatre",
    name: "theatre",
    meta: {
      title: "CinemaKuy - Theatre",
      metaTags: [
        {
          name: "description",
          content: "Theatre page",
        },
      ],
    },
    component: () =>
      import(/* webpackChunkName: "theatre" */ "../views/Theatre.vue"),
  },
  {
    path: "/promotion",
    name: "promotion",
    meta: {
      title: "CinemaKuy - Promotion",
      metaTags: [
        {
          name: "description",
          content: "Promotion page",
        },
      ],
    },
    component: () =>
      import(/* webpackChunkName: "promotion" */ "../views/Promotion.vue"),
  },
  {
    path: "/informations",
    name: "informations",
    meta: {
      title: "CinemaKuy - Informations",
      metaTags: [
        {
          name: "description",
          content: "Informations page",
        },
      ],
    },
    component: () =>
      import(
        /* webpackChunkName: "informations" */ "../views/Informations.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
