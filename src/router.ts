import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Layout from './components/Layout.vue';

Vue.use(Router);
const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "./views/About.vue")
      },
      {
        path: '/test',
        name: "test",
        component: () => import('./views/Test.vue')
      },
      {
        path: '/form',
        name: "form",
        component: () => import('./components/DynamicForm.vue')
      },
      {
        path: '/sites',
        name: "sites",
        component: () => import('./views/SitesList.vue')
      },
      {
        path: '/sites/create',
        name: 'sites-create',
        component: () => import('./views/SitesCreate.vue')
      },
      {
        path: '/sites/:siteId',
        name: 'site-show',
        props: true,
        component: () => import('./views/SitesShow.vue')
      }
    ]
  },

];

export default new Router({
  routes
});
