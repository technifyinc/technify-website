import axios from "axios";

const baseUrl = "https://api.technifyincubator.com/api/v1";

const state = {
  blogs: [],
  blog: "",
  mainBlog: "",
  events: [],
  event: "",
};

const getters = {
  blogs: (state) => state.blogs,
  blog: (state) => state.blog,
  mainBlog: (state) => state.mainBlog,
  events: (state) => state.events,
  event: (state) => state.event,
};

const actions = {
  getBlogs({ commit }) {
    axios.get(`${baseUrl}/blog`).then((response) => {
      commit("getBlogs", response.data.data);
    });
  },
  getMainBlog({ commit }) {
    axios.get(`${baseUrl}/blog`).then((response) => {
      const sliceRange = response.data.data.slice(0, 1);
      commit("getMainBlog", sliceRange[0]);
    });
  },
  getSingleBlog({ commit }, id) {
    axios.get(`${baseUrl}/blog/${id}`).then((response) => {
      commit("getSingleBlog", response.data.data);
    });
  },
  getEvents({ commit }) {
    axios.get(`${baseUrl}/event`).then((response) => {
      commit("getEvents", response.data.data);
    });
  },
  getSingleEvent({ commit }, id) {
    axios.get(`${baseUrl}/event/${id}`).then((response) => {
      commit("getSingleEvent", response.data.data);
    });
  },
};

const mutations = {
  getBlogs(state, payload) {
    state.blogs = payload;
  },
  getMainBlog(state, payload) {
    state.mainBlog = payload;
  },
  getSingleBlog(state, payload) {
    state.blog = payload;
  },
  getEvents(state, payload) {
    state.events = payload;
  },
  getSingleEvent(state, payload) {
    state.event = payload;
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
