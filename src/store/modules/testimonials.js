const state = {
  testimonials: [
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      avatar: require("@/assets/img/avatar.svg"),
      company_icon: require("@/assets/img/test-gig.svg"),
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
      role: "Operation Manager",
      name: "Jumong Kiyasoki",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      avatar: require("@/assets/img/avatar.svg"),
      company_icon: require("@/assets/img/test-first.svg"),
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
      role: "Operation Manager",
      name: "Shoo Lung",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      avatar: require("@/assets/img/avatar.svg"),
      company_icon: require("@/assets/img/test-glo.svg"),
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
      role: "Operation Manager",
      name: "Jumong Kiyasoki",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      avatar: require("@/assets/img/avatar.svg"),
      company_icon: require("@/assets/img/test-gig.svg"),
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
      role: "Operation Manager",
      name: "Jumong Kiyasoki",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      avatar: require("@/assets/img/avatar.svg"),
      company_icon: require("@/assets/img/test-first.svg"),
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
      role: "Operation Manager",
      name: "Shoo Lung",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      avatar: require("@/assets/img/avatar.svg"),
      company_icon: require("@/assets/img/test-glo.svg"),
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
      role: "Operation Manager",
      name: "Jumong Kiyasoki",
    },
  ]
}

const getters = {
  testimonials: (state) => state.testimonials,
}

const actions = {
  
}

const mutations = {
  
}

export default {
  state,
  actions,
  getters,
  mutations
}