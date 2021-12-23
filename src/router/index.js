import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  },
  {
    path: '/solution',
    name: 'solution',
    component: () => import(/* webpackChunkName: "solution" */ '../views/SolutionView.vue')
  },
  {
    path: '/blog',
    name: 'blogs',
    component: () => import(/* webpackChunkName: "blog" */ '../views/blogs/BlogView.vue')
  },
  {
    path: '/events',
    name: 'events',
    component: () => import(/* webpackChunkName: "events" */ '../views/events/EventsView.vue')
  },
  {
    path: '/blog/:id',
    name: 'blog',
    props: true,
    component: () => import(/* webpackChunkName: "single-blog" */ '../views/blogs/SingleBlog.vue')
  },
  {
    path: '/event/:id',
    name: 'event',
    props: true,
    component: () => import(/* webpackChunkName: "single-event" */ '../views/events/SingleEvent.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior () {
    return { top: 0 }
  }
})

export default router
