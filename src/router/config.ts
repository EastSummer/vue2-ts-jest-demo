import { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/vue',
    name: 'VueExample',
    component: () => import(/* webpackChunkName: "vueExample" */ '../views/vueExample/index.vue'),
    meta: {
      title: 'this is app',
      description: 'asdasd',
    },
    // 路由独享的守卫
    beforeEnter(to, from, next) {
      console.log('app route before enter')
      next()
    },
    children: [
      {
        path: 'test',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        // path: '/test/:id', // /test/xxx
        // props: true,
        // props: (route) => ({ id: route.query.b }),
      },
    ],
  },
]

export default routes
