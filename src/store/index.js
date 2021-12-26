import { createStore } from 'vuex'
import Events from "./modules/events"
import Blogs from "./modules/blogs"
import Testimonials from "./modules/testimonials"
import Buss from "./modules/buss"

export default createStore({
  modules: {
    Events,
    Blogs,
    Testimonials,
    Buss
  }
})
