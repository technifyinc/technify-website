import axios from "axios";

const baseUrl = "http://api.technifyincubator.com/api/v1";

const state = {
  blogs: [],
  blog: "",
  mainBlog: "",
  events: [],
};

const getters = {
  blogs: (state) => state.blogs,
  blog: (state) => state.blog,
  mainBlog: (state) => state.mainBlog,
  events: (state) => state.events,
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
};

export default {
  state,
  actions,
  getters,
  mutations,
};
