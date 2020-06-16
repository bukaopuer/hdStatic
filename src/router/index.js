import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: (resolve) =>
      require(["@/views/home/index.vue"], resolve),
    children: [
      {
        path: 'WorkStatic',
        name: 'WorkStatic',
        component: (resolve) =>
          require(["@/views/WorkStatic/WorkStatic.vue"], resolve),
      },
      {
        path: 'CheckStatic',
        name: 'CheckStatic',
        component: (resolve) =>
          require(["@/views/CheckStatic/CheckStatic.vue"], resolve),
      }

    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
