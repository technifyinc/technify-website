import { createStore } from "vuex";
import requests from "./modules/requests";
import Buss from "./modules/buss";

export default createStore({
  modules: {
    requests,
    Buss,
  },
});
