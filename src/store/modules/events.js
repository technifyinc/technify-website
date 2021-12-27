const state = {
  events: [
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require("@/assets/img/events-01.png"),
      event_icon: require("@/assets/img/events-zoom.svg"),
      body: "Africa Tech Summit Conference",
      month: "Dec",
      day: "17th",
      time: "9:30AM",
      venue: "Zoom",
      btn_value: "Buy Ticket",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require("@/assets/img/events-02.png"),
      event_icon: require("@/assets/img/events-zoom.svg"),
      body: "Keeping Up Carrer in Tech",
      month: "Dec",
      day: "17th",
      time: "9:30AM",
      venue: "Zoom",
      btn_value: "Attend",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require("@/assets/img/events-03.png"),
      event_icon: require("@/assets/img/events-location.svg"),
      body: "Technify Tech Conference In Lagos",
      month: "Dec",
      day: "17th",
      time: "9:30AM",
      venue: "Sheraton hotel Lagos, Nigeria.",
      btn_value: "Attend",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require("@/assets/img/events-01.png"),
      event_icon: require("@/assets/img/events-zoom.svg"),
      body: "Africa Tech Summit Conference",
      month: "Dec",
      day: "17th",
      time: "9:30AM",
      venue: "Zoom",
      btn_value: "Buy Ticket",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require("@/assets/img/events-02.png"),
      event_icon: require("@/assets/img/events-zoom.svg"),
      body: "Keeping Up Carrer in Tech",
      month: "Dec",
      day: "17th",
      time: "9:30AM",
      venue: "Zoom",
      btn_value: "Attend",
    },
    {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      src: require("@/assets/img/events-03.png"),
      event_icon: require("@/assets/img/events-location.svg"),
      body: "Technify Tech Conference In Lagos",
      month: "Dec",
      day: "17th",
      time: "9:30AM",
      venue: "Sheraton hotel Lagos, Nigeria.",
      btn_value: "Attend",
    },
  ],
};

const getters = {
  events: (state) => state.events,
};

const actions = {};

const mutations = {};

export default {
  state,
  actions,
  getters,
  mutations,
};
