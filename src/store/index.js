import { createStore } from "vuex";
import requests from "./modules/requests";
import Testimonials from "./modules/testimonials";
import Buss from "./modules/buss";

export default createStore({
  modules: {
    requests,
    Testimonials,
    Buss,
  },
});
