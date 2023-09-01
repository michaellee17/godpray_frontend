import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/latest",
    name: "Latest",
    component: () => import("@/views/Latest.vue")
  },
  {
    path: "/allTemple",
    name: "AllTemple",
    component: () => import("@/views/AllTemple.vue")
  },
  {
    path: "/mainGod",
    name: "MainGod",
    component: () => import("@/views/MainGod.vue")
  },
  {
    path: "/service",
    name: "Service",
    component: () => import("@/views/Service.vue")
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("@/views/Product.vue")
  },
  {
    path: "/qa",
    name: "QA",
    component: () => import("@/views/QA.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue")
  },
  {
    path: "/details",
    name: "Details",
    component: () => import("@/views/Details.vue")
  },
  {
    path: "/process",
    name: "Process",
    component: () => import("@/views/Process.vue")
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: () => import("@/views/Privacy.vue")
  },
  {
    path: "/customerService",
    name: "CustomerService",
    component: () => import("@/views/CustomerService.vue")
  },
  {
    path: "/searchPage",
    name: "SearchPage",
    component: () => import("@/views/SearchPage.vue")
  },
  {
    path: "/temple",
    name: "Temple",
    component: () => import("@/views/temple/inner.vue")
  },
  {
    path: "/latest/inner",
    name: "LastestInner",
    component: () => import("@/views/latest/inner.vue")
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router