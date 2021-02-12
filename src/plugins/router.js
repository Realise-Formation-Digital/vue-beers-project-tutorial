import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "@/components/pages/home/home";
import gridListBeers from "@/components/pages/listBeers/gridListBeers";
import tableListBeers from "@/components/pages/listBeers/tableListBeers";
import aboutUs from "@/components/pages/aboutUs/aboutUs";
import contactUs from "@/components/pages/contactUs/contactUs";

Vue.use(VueRouter)

const routes = [
  { path: '/', component: home },
  { path: '/grid-list-beers', component: gridListBeers },
  { path: '/table-list-beers', component: tableListBeers },
  { path: '/about-us', component: aboutUs },
  { path: '/contact-us', component: contactUs }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes // short for `routes: routes`
})

export default router

/**
 * Main library of my router
 */
