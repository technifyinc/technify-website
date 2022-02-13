import axios from "axios";
import router from "../../router";

const baseUrl = "https://api.technifyincubator.com/api/v1";

const state = {
  blogs: [],
  blog: "",
  mainBlog: "",
  events: [],
  event: "",
  openDelModal: false,
  loadingStatus: false,
  error: false,
  err: "",
};

const getters = {
  blogs: (state) => state.blogs,
  blog: (state) => state.blog,
  mainBlog: (state) => state.mainBlog,
  events: (state) => state.events,
  event: (state) => state.event,
  openDelModal: (state) => state.openDelModal,
  loadingStatus: (state) => state.loadingStatus,
  error: (state) => state.error,
  err: (state) => state.err,
};

const actions = {
  getBlogs({ state, commit }) {
    state.loadingStatus = true;
    axios.get(`${baseUrl}/blog`).then((response) => {
      commit("getBlogs", response.data.data);
      state.loadingStatus = false;
    });
  },
  getEvents({ state, commit }) {
    state.loadingStatus = true;
    axios.get(`${baseUrl}/event`).then((response) => {
      commit("getEvents", response.data.data);
      state.loadingStatus = false;
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
  getSingleEvent({ commit }, id) {
    axios.get(`${baseUrl}/event/${id}`).then((response) => {
      commit("getSingleEvent", response.data.data);
    });
  },
  async postBlog(
    { state, commit },
    { title, author, details, image, password }
  ) {
    var formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("details", details);
    formData.append("image", image);
    try {
      const response = await axios({
        method: "post",
        url: `${baseUrl}/blog`,
        data: formData,
        headers: {
          "x-api-password": password,
          "Content-Type": "multipart/form-data",
        },
      });
      router.push({ name: "admin" });
      commit("postBlog", response.data.data);
    } catch (e) {
      state.err = e;
      state.error = true;
      setTimeout(() => {
        state.error = false;
      }, 3000);
    }
  },
  async postEvent(
    { state, commit },
    { title, date, time, medium, address, details, image, password }
  ) {
    var formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("medium", medium);
    formData.append("address", address);
    formData.append("details", details);
    formData.append("image", image);
    try {
      const response = await axios({
        method: "post",
        url: `${baseUrl}/event`,
        data: formData,
        headers: {
          "x-api-password": password,
          "Content-Type": "multipart/form-data",
        },
      });
      commit("postEvent", response.data.data);
      router.push({ name: "admin" });
    } catch (e) {
      state.err = e;
      state.error = true;
      setTimeout(() => {
        state.error = false;
      }, 3000);
    }
  },
  async updateBlog(
    { state, commit },
    { id, title, author, details, image, password }
  ) {
    var formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("details", details);
    formData.append("image", image);
    try {
      const response = await axios({
        method: "put",
        url: `${baseUrl}/blog/${id}`,
        data: formData,
        headers: {
          "x-api-password": password,
          "Content-Type": "multipart/form-data",
        },
      });
      router.push({ name: "admin" });
      commit("updateBlog", response.data.data);
    } catch (e) {
      state.err = e;
      state.error = true;
      setTimeout(() => {
        state.error = false;
      }, 3000);
    }
  },
  async updateEvent(
    { state, commit },
    { id, title, date, time, medium, address, details, image, password }
  ) {
    var formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("medium", medium);
    formData.append("address", address);
    formData.append("details", details);
    formData.append("image", image);
    try {
      const response = await axios({
        method: "put",
        url: `${baseUrl}/event/${id}`,
        data: formData,
        headers: {
          "x-api-password": password,
          "Content-Type": "multipart/form-data",
        },
      });
      commit("updateEvent", response.data.data);
      router.push({ name: "admin" });
    } catch (e) {
      state.err = e;
      state.error = true;
      setTimeout(() => {
        state.error = false;
      }, 3000);
    }
  },
  async deleteBlog({ state, commit }, { id, password }) {
    try {
      const response = axios({
        method: "delete",
        url: `${baseUrl}/blog/${id}`,
        headers: {
          "x-api-password": password,
        },
      });
      state.err = response;
      setTimeout(() => {
        router.go(0);
      }, 1000);
      commit("deleteBlog", id);
    } catch (e) {
      state.err = e;
      state.error = true;
      setTimeout(() => {
        state.error = false;
      }, 3000);
    }
  },
  async deleteEvent({ state, commit }, { id, password }) {
    try {
      const response = axios({
        method: "delete",
        url: `${baseUrl}/event/${id}`,
        headers: {
          "x-api-password": password,
        },
      });
      state.err = response;
      commit("deleteEvent", id);
      setTimeout(() => {
        router.go(0);
      }, 1000);
    } catch (e) {
      state.err = e;
      state.error = true;
      setTimeout(() => {
        state.error = false;
      }, 3000);
    }
  },
};

const mutations = {
  getBlogs(state, payload) {
    state.blogs = payload;
  },
  getEvents(state, payload) {
    state.events = payload;
  },
  getMainBlog(state, payload) {
    state.mainBlog = payload;
  },
  getSingleBlog(state, payload) {
    state.blog = payload;
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
    state.blogs = state.blogs.filter((blog) => blog._id !== id);
  },
  deleteEvent(state, id) {
    state.events = state.events.filter((event) => event._id !== id);
  },
  postBlog(state, payload) {
    state.blogs = [...state.blogs, payload];
  },
  postEvent(state, payload) {
    state.events = [...state.events, payload];
  },
  updateBlog(state, { id, payload }) {
    const index = state.blogs.findIndex((blog) => blog._id === id);
    state.blogs[index] = payload;
  },
  updateEvent(state, { id, payload }) {
    const index = state.events.findIndex((event) => event._id === id);
    state.events[index] = payload;
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
