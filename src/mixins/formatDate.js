import moment from "moment";
export default {
  methods: {
    formatDate(date) {
      return moment(date).format("DD MMMM YYYY");
    },
    getDay(day) {
      return moment(day).format("Do");
    },
    getMonth(month) {
      return moment(month).format("MMM");
    },
  },
};
