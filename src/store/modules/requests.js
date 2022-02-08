import axios from "axios";

const baseUrl = "https://api.technifyincubator.com/api/v1";

const state = {
  blogs: [],
  blog: "",
  mainBlog: "",
  events: [],
  event: "",
  openDelModal: false,
  loading: false,
};

const getters = {
  blogs: (state) => state.blogs,
  blog: (state) => state.blog,
  mainBlog: (state) => state.mainBlog,
  events: (state) => state.events,
  event: (state) => state.event,
  blogTables: (state) => state.blogTables,
  eventTables: (state) => state.eventTables,
  openDelModal: (state) => state.openDelModal,
  loading: (state) => state.loading,
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
  async postBlog(
    { state, commit },
    { title, author, details, image, password }
  ) {
    try {
      const response = await axios.post(`${baseUrl}/blog`, {
        title,
        author,
        details,
        image,
        password,
        createdAt: new Date(),
      });
      console.log(response.data.data);
      state.loading = true;
      commit("postBlog", response.data.data);
    } catch (e) {
      console.log(e.response.data);
    }
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
  toggleDelModal(state) {
    state.openDelModal = !state.openDelModal;
  },
  resetDelModal(state) {
    state.openDelModal = false;
  },
  deleteBlog(state, id) {
    state.blogTables = state.blogTables.filter((table) => table.id !== id);
  },
  deleteEvent(state, id) {
    state.eventTables = state.eventTables.filter((table) => table.id !== id);
  },
  postBlog(state, payload) {
    state.blogs = [...state.blogs, payload];
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
