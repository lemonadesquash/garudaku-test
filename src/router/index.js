import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/news/:id",
    name: "detail",
    // route level code-splitting
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/DetailView.vue"),
  },
  {
    path: "/news/:id/edit",
    name: "edit",
    // route level code-splitting
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/EditView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, _, savedPosition) {
    console.log(savedPosition);
    if (savedPosition) {
      return savedPosition;
    }

    return { x: 0, y: 0 };
  },
});

export default router;
