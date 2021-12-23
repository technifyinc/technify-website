import { createStore } from 'vuex'
import Events from "./modules/events"
import Blogs from "./modules/blogs"

export default createStore({
  modules: {
    Events,
    Blogs
  }
})
