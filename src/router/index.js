import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/ContactView.vue"),
  },
  {
    path: "/solution",
    name: "solution",
    component: () =>
      import(/* webpackChunkName: "solution" */ "../views/SolutionView.vue"),
  },
  {
    path: "/blog",
    name: "blogs",
    component: () =>
      import(/* webpackChunkName: "blog" */ "../views/blogs/BlogView.vue"),
  },
  {
    path: "/events",
    name: "events",
    component: () =>
      import(/* webpackChunkName: "events" */ "../views/events/EventsView.vue"),
  },
  {
    path: "/blog/:id",
    name: "blog",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "single-blog" */ "../views/blogs/SingleBlog.vue"
      ),
  },
  {
    path: "/event/:id",
    name: "event",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "single-event" */ "../views/events/SingleEvent.vue"
      ),
  },
  {
    path: "/business",
    name: "business",
    component: () =>
      import(
        /* webpackChunkName: "business" */ "../views/solutions/BusinessView.vue"
      ),
  },
  {
    path: "/custom",
    name: "custom",
    component: () =>
      import(
        /* webpackChunkName: "custom" */ "../views/solutions/CustomView.vue"
      ),
  },
  {
    path: "/software-int",
    name: "software-int",
    component: () =>
      import(
        /* webpackChunkName: "software-int" */ "../views/solutions/SoftwareIntView.vue"
      ),
  },
  {
    path: "/it",
    name: "it",
    component: () =>
      import(/* webpackChunkName: "it" */ "../views/solutions/ItView.vue"),
  },
  {
    path: "/enterprise",
    name: "enterprise",
    component: () =>
      import(
        /* webpackChunkName: "enterprise" */ "../views/solutions/EnterpriseView.vue"
      ),
  },
  {
    path: "/industry",
    name: "industry",
    component: () =>
      import(
        /* webpackChunkName: "industry" */ "../views/solutions/IndustryView.vue"
      ),
  },
  {
    path: "/dedicated",
    name: "dedicated",
    component: () =>
      import(
        /* webpackChunkName: "dedicated" */ "../views/solutions/DedicatedView.vue"
      ),
  },
  {
    path: "/software-port",
    name: "software-port",
    component: () =>
      import(
        /* webpackChunkName: "software-port" */ "../views/solutions/SoftwarePortView.vue"
      ),
  },
  {
    path: "/testimonial",
    name: "testimonial",
    component: () =>
      import(
        /* webpackChunkName: "testimonial" */ "../views/TestimonialView.vue"
      ),
  },
  {
    path: "/faq",
    name: "faq",
    component: () =>
      import(/* webpackChunkName: "faq" */ "../views/FaqView.vue"),
  },
  {
    path: "/policy",
    name: "policy",
    component: () =>
      import(/* webpackChunkName: "policy" */ "../views/PolicyView.vue"),
  },
  {
    path: "/terms",
    name: "terms",
    component: () =>
      import(/* webpackChunkName: "terms" */ "../views/TermsView.vue"),
  },
  {
    path: "/career",
    name: "career",
    component: () =>
      import(/* webpackChunkName: "career" */ "../views/CareerView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/AdminView.vue"),
  },
  {
    path: "/add-blog",
    name: "add-blog",
    component: () =>
      import(/* webpackChunkName: "add-blog" */ "../views/AddBlog.vue"),
  },
  {
    path: "/add-event",
    name: "add-event",
    component: () =>
      import(/* webpackChunkName: "add-event" */ "../views/AddEvent.vue"),
  },
  {
    path: "/edit-blog/:id",
    name: "edit-blog",
    component: () =>
      import(/* webpackChunkName: "edit-blog" */ "../views/EditBlog.vue"),
    props: true,
  },
  {
    path: "/edit-event/:id",
    name: "edit-event",
    component: () =>
      import(/* webpackChunkName: "edit-event" */ "../views/EditEvent.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;
