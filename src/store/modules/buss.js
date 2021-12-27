const state = {
  recommendations: [
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require("@/assets/img/blog-01.png"),
      title:
        "The European Union's competition regulator has given the all-clear to Microsoft's $19.7BN purchase of transcription tech firm Nuance",
      btn: "Read",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require("@/assets/img/blog-02.png"),
      title:
        "Dogecoin spikes more than 20% after Elon Musk says Tesla will accept it as payment for merch",
      btn: "Read",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require("@/assets/img/blog-03.png"),
      title:
        "A Bluetooth bug in a popular at-home COVID-19 test could falsify results",
      btn: "Read",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require("@/assets/img/blog-01.png"),
      title:
        "The European Union's competition regulator has given the all-clear to Microsoft's $19.7BN purchase of transcription tech firm Nuance",
      btn: "Read",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require("@/assets/img/blog-02.png"),
      title:
        "Dogecoin spikes more than 20% after Elon Musk says Tesla will accept it as payment for merch",
      btn: "Read",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require("@/assets/img/blog-03.png"),
      title:
        "A Bluetooth bug in a popular at-home COVID-19 test could falsify results",
      btn: "Read",
    },
  ],
  vids: [
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      title:
        "The European Union's competition regulator has given the all-clear to Microsoft's $19.7BN purchase of transcription tech firm Nuance",
      src: "https://www.youtube.com/embed/N7CUoJ-cdEE",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      title:
        "The European Union's competition regulator has given the all-clear to Microsoft's $19.7BN purchase of transcription tech firm Nuance",
      src: "https://www.youtube.com/embed/gElfIo6uw4g",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      title:
        "The European Union's competition regulator has given the all-clear to Microsoft's $19.7BN purchase of transcription tech firm Nuance",
      src: "https://www.youtube.com/embed/cLnFSqpyQDg",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      title:
        "The European Union's competition regulator has given the all-clear to Microsoft's $19.7BN purchase of transcription tech firm Nuance",
      src: "https://www.youtube.com/embed/gElfIo6uw4g",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      title:
        "The European Union's competition regulator has given the all-clear to Microsoft's $19.7BN purchase of transcription tech firm Nuance",
      src: "https://www.youtube.com/embed/cLnFSqpyQDg",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      title:
        "The European Union's competition regulator has given the all-clear to Microsoft's $19.7BN purchase of transcription tech firm Nuance",
      src: "https://www.youtube.com/embed/N7CUoJ-cdEE",
    },
  ],
  reports: [
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require("@/assets/img/blog-01.png"),
      title:
        "The European Union's competition regulator has given the all-clear to Microsoft's $19.7BN purchase of transcription tech firm Nuance",
      btn: "Read",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require("@/assets/img/blog-02.png"),
      title:
        "Dogecoin spikes more than 20% after Elon Musk says Tesla will accept it as payment for merch",
      btn: "Read",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require("@/assets/img/blog-03.png"),
      title:
        "A Bluetooth bug in a popular at-home COVID-19 test could falsify results",
      btn: "Read",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require("@/assets/img/blog-01.png"),
      title:
        "The European Union's competition regulator has given the all-clear to Microsoft's $19.7BN purchase of transcription tech firm Nuance",
      btn: "Read",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require("@/assets/img/blog-02.png"),
      title:
        "Dogecoin spikes more than 20% after Elon Musk says Tesla will accept it as payment for merch",
      btn: "Read",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require("@/assets/img/blog-03.png"),
      title:
        "A Bluetooth bug in a popular at-home COVID-19 test could falsify results",
      btn: "Read",
    },
  ],
};

const getters = {
  recommendations: (state) => state.recommendations,
  vids: (state) => state.vids,
  reports: (state) => state.reports,
};

const actions = {};

const mutations = {};

export default {
  state,
  actions,
  getters,
  mutations,
};
