import axios from "axios";

const baseUrl = "https://www.api.re.technifyincubator.com/api/v1";

const state = {
  articles: [],
  news: [],
  videos: [],
  reports: [],
};

const getters = {
  articles: (state) => state.articles,
  news: (state) => state.news,
  videos: (state) => state.videos,
  reports: (state) => state.reports,
};

const actions = {
  getVideos({ commit }) {
    axios.get(`${baseUrl}/rec`).then((response) => {
      const responses = response.data.data;
      const articles = responses
        .filter((res) => res.type === "ARTICLE")
        .slice(0, 6);
      const videos = responses
        .filter((res) => res.source === "Youtube")
        .slice(0, 6);
      const news = responses.filter((res) => res.type === "NEWS").slice(0, 6);
      state.videos = videos;
      state.articles = articles;
      state.news = news;
      commit("getVideos", videos);
    });
  },
};

const mutations = {
  getVideos(state, payload) {
    state.videos = payload;
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
