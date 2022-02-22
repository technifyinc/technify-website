import axios from 'axios'

const baseUrl = 'https://www.api.re.technifyincubator.com/api/v1'

const state = {
  recommendations: [
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require('@/assets/img/blog-01.png'),
      title:
        "The European Union's competition regulator has given the all-clear to Microsoft's $19.7BN purchase of transcription tech firm Nuance",
      btn: 'Read'
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require('@/assets/img/blog-02.png'),
      title:
        'Dogecoin spikes more than 20% after Elon Musk says Tesla will accept it as payment for merch',
      btn: 'Read'
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require('@/assets/img/blog-03.png'),
      title:
        'A Bluetooth bug in a popular at-home COVID-19 test could falsify results',
      btn: 'Read'
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require('@/assets/img/blog-01.png'),
      title:
        "The European Union's competition regulator has given the all-clear to Microsoft's $19.7BN purchase of transcription tech firm Nuance",
      btn: 'Read'
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require('@/assets/img/blog-02.png'),
      title:
        'Dogecoin spikes more than 20% after Elon Musk says Tesla will accept it as payment for merch',
      btn: 'Read'
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require('@/assets/img/blog-03.png'),
      title:
        'A Bluetooth bug in a popular at-home COVID-19 test could falsify results',
      btn: 'Read'
    }
  ],
  videos: [],
  reports: [
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require('@/assets/img/blog-01.png'),
      title:
        "The European Union's competition regulator has given the all-clear to Microsoft's $19.7BN purchase of transcription tech firm Nuance",
      btn: 'Read'
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require('@/assets/img/blog-02.png'),
      title:
        'Dogecoin spikes more than 20% after Elon Musk says Tesla will accept it as payment for merch',
      btn: 'Read'
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require('@/assets/img/blog-03.png'),
      title:
        'A Bluetooth bug in a popular at-home COVID-19 test could falsify results',
      btn: 'Read'
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require('@/assets/img/blog-01.png'),
      title:
        "The European Union's competition regulator has given the all-clear to Microsoft's $19.7BN purchase of transcription tech firm Nuance",
      btn: 'Read'
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require('@/assets/img/blog-02.png'),
      title:
        'Dogecoin spikes more than 20% after Elon Musk says Tesla will accept it as payment for merch',
      btn: 'Read'
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require('@/assets/img/blog-03.png'),
      title:
        'A Bluetooth bug in a popular at-home COVID-19 test could falsify results',
      btn: 'Read'
    }
  ]
}

const getters = {
  recommendations: (state) => state.recommendations,
  videos: (state) => state.videos,
  reports: (state) => state.reports
}

const actions = {
  getVideos({ commit }) {
    axios.get(`${baseUrl}/rec/?size=18`).then((response) => {
      commit('getVideos', response.data.data)
    })
  },
  getSinglevideo({ commit }, id) {
    axios.get(`${baseUrl}/video/${id}`).then((response) => {
      commit('getSingleVideo', response.data.data)
    })
  }
}

const mutations = {
  getVideos(state, payload) {
    state.videos = payload
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
