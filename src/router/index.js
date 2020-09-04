import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: { name: "Users" }
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("@/views/Users.vue")
  },
  {
    path: "/users/:id/todos",
    name: "Todos",
    props: true,
    component: () => import("@/views/Todos")
  }
];

const router = new VueRouter({
  routes
});

export default router;
