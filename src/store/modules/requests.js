import axios from "axios";

const baseUrl = "https://api.technifyincubator.com/api/v1";

const state = {
  blogs: [],
  blog: "",
  mainBlog: "",
  events: [],
  event: "",
  tables: [
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      contactGroup: "Tech team",
      contactCount: 12,
      emailCount: 7,
      phoneCount: 20,
      dateAdded: "05 Jan, 2022",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      contactGroup: "Marketing team",
      contactCount: 400,
      emailCount: 70,
      phoneCount: 100,
      dateAdded: "01 Jan, 2022",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      contactGroup: "Finance team",
      contactCount: 20,
      emailCount: 10,
      phoneCount: 50,
      dateAdded: "15 Jan, 2022",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      contactGroup: "Stratehy team",
      contactCount: 12,
      emailCount: 7,
      phoneCount: 20,
      dateAdded: "20 Jan, 2022",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      contactGroup: "Tech team",
      contactCount: 2,
      emailCount: 70,
      phoneCount: 60,
      dateAdded: "29 Jan, 2022",
    },
  ],
  openDelModal: false,
};

const getters = {
  blogs: (state) => state.blogs,
  blog: (state) => state.blog,
  mainBlog: (state) => state.mainBlog,
  events: (state) => state.events,
  event: (state) => state.event,
  tables: (state) => state.tables,
  openDelModal: (state) => state.openDelModal,
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
  toggleDelModal(state) {
    state.openDelModal = !state.openDelModal;
  },
  resetDelModal(state) {
    state.openDelModal = false;
  },
  deleteTable(state, id) {
    state.tables = state.tables.filter((table) => table.id !== id);
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
