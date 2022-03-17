<template>
  <Header />
  <div class="event">
    <div class="container">
      <div class="event-header routes">
        <h3>Events</h3>
      </div>
      <div class="wrap" v-if="event">
        <div class="event-img">
          <img
            :src="`http://assets.hdkopyuehjd.technifyincubator.com/website/uploads/${event.image}`"
            :alt="event.title"
          />
        </div>
        <div class="event-content">
          <h3>About This Event</h3>
          <p>
            {{ event.details }}
          </p>
        </div>
        <div class="speakers">
          <h3>Speakers</h3>
          <div class="speakers-content">
            <div class="speaker" v-for="speaker in speakers" :key="speaker">
              <img :src="speaker.src" :alt="speaker" />
              <h4>{{ speaker.name }}</h4>
              <p>{{ speaker.org }}</p>
            </div>
          </div>
        </div>
        <div class="aside">
          <ul>
            <li>
              <img src="@/assets/img/events-location.svg" alt="location" />
              <div class="aside-inner">
                <h5>Location</h5>
                <p>Zoom: <a href="#">http://meet.google.com/aqe-crpo-kop</a></p>
              </div>
            </li>
            <li>
              <img src="@/assets/img/events-clock.svg" alt="location" />
              <div class="aside-inner">
                <h5>Date/Time</h5>
                <p>4:00-7:50pm</p>
                <p>17 December, 2021</p>
              </div>
            </li>
          </ul>
        </div>
        <event-form />
      </div>
      <loading-bar v-else class="loading" />
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/navbar/TheHeader.vue";
import Footer from "@/components/navbar/TheFooter.vue";
import EventForm from "@/views/events/EventForm.vue";
import LoadingBar from "@/components/reuseables/LoadingBar.vue";
import { mapActions, mapGetters } from "vuex";
import dateFormatter from "@/mixins/formatDate";
export default {
  components: {
    Header,
    EventForm,
    LoadingBar,
    Footer,
  },
  data() {
    return {
      speakers: [
        {
          src: require("@/assets/img/speaker-1.png"),
          name: "Kui Kinyanjui",
          org: "Safricon",
        },
        {
          src: require("@/assets/img/speaker-2.png"),
          name: "Kensaro Wiwa",
          org: "Facebook",
        },
        {
          src: require("@/assets/img/speaker-1.png"),
          name: "Kui Kinyanjui",
          org: "Safricon",
        },
        {
          src: require("@/assets/img/speaker-2.png"),
          name: "Kensaro Wiwa",
          org: "Facebook",
        },
        {
          src: require("@/assets/img/speaker-1.png"),
          name: "Kui Kinyanjui",
          org: "Safricon",
        },
        {
          src: require("@/assets/img/speaker-2.png"),
          name: "Kensaro Wiwa",
          org: "Facebook",
        },
        {
          src: require("@/assets/img/speaker-1.png"),
          name: "Kui Kinyanjui",
          org: "Safricon",
        },
        {
          src: require("@/assets/img/speaker-2.png"),
          name: "Kensaro Wiwa",
          org: "Facebook",
        },
      ],
    };
  },
  props: {
    id: { type: String, required: true },
  },
  mixins: [dateFormatter],
  computed: {
    ...mapGetters(["event"]),
  },
  methods: {
    ...mapActions(["getSingleEvent"]),
  },
  mounted() {
    this.getSingleEvent(this.id);
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.event {
  color: $header;
  padding: 2rem 0;
  &-header {
    margin-bottom: 2rem;
    text-align: center;
    h3 {
      margin-bottom: 1.5rem;
      color: $header;
      font-weight: 600;
      font-size: 38px;
      line-height: 51.66px;
    }
  }
  &-img img {
    height: 380px;
    object-fit: cover;
  }
  &-content {
    margin: 3rem 0;
    text-align: center;
    h3 {
      margin-bottom: 1.5rem;
      color: $header;
      font-weight: 600;
      font-size: 28px;
      line-height: 38px;
    }
    & p {
      font-weight: normal;
      font-size: 15px;
      line-height: 24.78px;
      color: $sub;
    }
  }
  .speakers {
    margin: 5rem 0;
    &-content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 1rem;
      grid-row-gap: 2rem;
    }
    .speaker {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    img {
      width: 89px;
    }
    h3 {
      margin: 1rem 0 3rem;
      color: $header;
      font-weight: 600;
      font-size: 28px;
      line-height: 38px;
      text-align: center;
    }
    h4 {
      margin: 1rem 0 0.5rem;
      color: $header;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
    }
    & p {
      color: $sub;
      font-weight: normal;
      font-size: 14px;
      line-height: 21.78px;
      margin-bottom: 2rem;
    }
  }
  .aside {
    &-inner {
      h5 {
        margin-bottom: 1rem;
        font-weight: 500;
        font-size: 22px;
        line-height: 32.01px;
        color: $sub;
      }
      p {
        margin-bottom: 1rem;
        font-weight: 500;
        font-size: 14px;
        line-height: 20.37px;
        color: $sub;
      }
      a {
        color: $sub-color;
        font-weight: 500;
        font-size: 14px;
        line-height: 20.37px;
      }
    }
    img {
      width: 25px;
      margin: 0.3rem 1rem 0 0;
    }
    ul {
      list-style: none;
    }
    li {
      display: flex;
      align-items: start;
      margin-bottom: 2rem;
    }
  }
}
@media screen and (min-width: 1000px) {
  .event {
    &-img img {
      height: 400px;
    }
    &-header {
      text-align: left;
      & h3 {
        font-weight: 600;
        font-size: 35px;
        line-height: 50px;
        width: 700px;
      }
    }
    &-content {
      & h3 {
        font-weight: 600;
        font-size: 35px;
        line-height: 50px;
      }
      & p {
        font-size: 18px;
        line-height: 40.3px;
      }
    }
    .speakers {
      width: 950px;
      margin: 5rem auto;
      &-content {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
      }
      img {
        width: 140px;
      }
      h3 {
        font-size: 30px;
        line-height: 49px;
      }
      h4 {
        font-size: 20px;
        line-height: 30px;
      }
      & p {
        font-size: 14px;
        line-height: 21.63px;
      }
    }
    .aside {
      &-inner {
        h5 {
          font-size: 22px;
          line-height: 40px;
        }
        p {
          font-weight: 400;
          font-size: 18px;
          line-height: 30px;
        }
        a {
          font-weight: 400;
          font-size: 18px;
          line-height: 30px;
        }
      }
      img {
        width: 30px;
      }
    }
  }
}

@media screen and (min-width: 1400px) {
  .event {
    &-header {
      & h3 {
        font-weight: 600;
        font-size: 43px;
        line-height: 58.48px;
      }
    }
    &-content {
      & h3 {
        font-weight: 600;
        font-size: 36px;
        line-height: 48.96px;
      }
      & p {
        font-size: 24px;
        line-height: 39.84px;
      }
    }
    .speakers {
      img {
        width: 140px;
      }
      h3 {
        font-size: 36px;
        line-height: 49px;
      }
      h4 {
        font-size: 22px;
        line-height: 30px;
      }
      & p {
        font-size: 14px;
        line-height: 21.63px;
      }
    }
    .aside {
      &-inner {
        h5 {
          margin-bottom: 1.5rem;
          font-size: 32px;
          line-height: 46.01px;
        }
        p {
          font-weight: 400;
          font-size: 22px;
          line-height: 32.37px;
        }
        a {
          font-weight: 400;
          font-size: 22px;
          line-height: 32.37px;
        }
      }
      img {
        width: 38px;
      }
    }
  }
}
</style>
