import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    rediract: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginPage.vue")
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/SignupPage.vue")
  },
  {
    path: "/main",
    name: "mane",
    component: () => import("@/views/MainPage.vue")
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("@/views/NotFoundPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
