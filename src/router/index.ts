import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

// Life Cycle Compoents
import BeforeCreate from "@/views/BeforeCreate.vue";
import Created from "@/views/Created.vue";
import BeforeMount from "@/views/BeforeMount.vue";
import Mounted from "@/views/Mounted.vue";
import BeforeUpdate from "@/views/BeforeUpdate.vue";
import Updated from "@/views/Updated.vue";
import BeforeDestroy from "@/views/BeforeDestroy.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "BeforeCreate",
    component: BeforeCreate
  },
  {
    path: "/created",
    name: "Created",
    component: Created
  },
  {
    path: "/beforemount",
    name: "BeforeMount",
    component: BeforeMount
  },
  {
    path: "/mounted",
    name: "Mounted",
    component: Mounted
  },
  {
    path: "/beforeupdate",
    name: "BeforeUpdate",
    component: BeforeUpdate
  },
  {
    path: "/updated",
    name: "Updated",
    component: Updated
  },
  {
    path: "/beforedestroy",
    name: "BeforeDestroy",
    component: BeforeDestroy
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
