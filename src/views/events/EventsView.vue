<template>
  <Header />
  <div class="event">
    <div class="container">
      <div class="event-content routes">
        <h3>Events</h3>
      </div>
    </div>
  </div>
  <loading-bar v-if="loadingStatus" class="loading" />
  <empty-content v-else-if="events.length === 0">
    <h3>No Events yet</h3>
    <p>Opps!, we don't have any events yet kindly check back next time</p>
  </empty-content>
  <div v-else class="events">
    <div class="container">
      <div class="events-content">
        <div v-for="event in events" :key="event" class="blg">
          <img
            :src="`http://assets.hdkopyuehjd.technifyincubator.com/website/uploads/${event.image}`"
            :alt="event.title"
          />
          <div class="event-body">
            <div class="date">
              <p>{{ getMonth(event.month) }}</p>
              <p>{{ getDay(event.day) }}</p>
            </div>
            <div class="content">
              <h4>{{ event.title }}</h4>
              <p>{{ event.time }}</p>
              <div class="event-icon">
                <!-- <img :src="event.event_icon" alt="event" /> -->
                <a :href="event.address" target="_blank">{{ event.address }}</a>
              </div>
              <button @click="viewEvent(event._id)" class="btn">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/navbar/TheHeader.vue";
import Footer from "@/components/navbar/TheFooter.vue";
import { mapActions, mapGetters } from "vuex";
import dateFormatter from "@/mixins/formatDate";
import EmptyContent from "@/components/reuseables/EmptyContent.vue";
import LoadingBar from "@/components/reuseables/LoadingBar.vue";
export default {
  components: {
    Header,
    Footer,
    EmptyContent,
    LoadingBar,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["events", "loadingStatus"]),
  },
  methods: {
    ...mapActions(["getEvents"]),
    viewEvent(id) {
      this.$router.push({ name: "event", params: { id } });
    },
    concatenate(value) {
      return value.substring(0, 100) + "...";
    },
  },
  mixins: [dateFormatter],
  mounted() {
    this.getEvents();
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.event {
  color: $header;
  padding: 3rem 0 0;
  &-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    & h3 {
      font-weight: bold;
      font-size: 24px;
      line-height: 32.64px;
      color: $header;
      margin-bottom: 2rem;
      text-transform: capitalize;
    }
    & ul {
      display: flex;
      list-style: none;
      & .active {
        margin-right: 1rem;
        border-bottom: solid 3px $sec-color;
        padding-bottom: 5px;
        font-weight: bold;
      }
    }
  }
}

.events {
  margin: 1rem 0 5rem;
  & .blg {
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.08);
    border-radius: 17px;
    background: $white;
    margin: 1rem 0.2rem;
    img {
      height: 180px;
      object-fit: cover;
      border-radius: 17px 17px 0 0;
    }
  }
  & .event-body {
    padding: 1rem;
    display: flex;
    & .content {
      h4,
      p {
        text-transform: capitalize;
      }
    }
    & .date {
      margin-right: 2rem;
      & p {
        margin: 0;
        font-weight: normal;
        font-size: 13px;
        line-height: 22.55px;
        &:nth-child(2) {
          font-weight: normal;
          font-size: 18px;
          line-height: 31.23px;
          color: $sec-color;
        }
      }
    }
    & .event-icon {
      display: flex;
      align-items: center;
      color: $sub;
      font-weight: normal;
      font-size: 14px;
      line-height: 20.37px;
      margin-bottom: 1rem;
      text-transform: capitalize;
      a {
        text-transform: lowercase;
        color: $sec-color;
        font-weight: normal;
      }
    }
    & img {
      width: 20px;
      margin-right: 0.8rem;
    }
    & h3 {
      font-weight: bold;
      font-size: 24px;
      line-height: 32.64px;
      color: $header;
      text-transform: capitalize;
    }
    & p {
      color: $sub;
      margin: 1rem 0;
      font-weight: normal;
      font-size: 12px;
      line-height: 22.78px;
      text-transform: capitalize;
    }
    & .btn {
      padding: 0.5rem 1rem;
      background: $white;
      color: $sec-color;
      border: solid 1px $sec-color;
      transition: all 0.5s ease;
      position: relative;
      bottom: 0;
      &:hover {
        color: $white;
        background: $sec-color;
      }
    }
  }
}

.loading {
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 700px) {
  .event {
    &-content {
      text-align: left;
      align-items: flex-start;
      & .btn {
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
  .events {
    &-content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
    }
    & .blg {
      flex-basis: 33.33%;
    }
    & .event-body {
      padding: 1.5rem;
      & .btn {
        padding: 0.5rem 2rem;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
}

@media screen and (min-width: 1000px) {
  .event {
    &-content {
      & h3 {
        font-weight: 600;
        font-size: 40px;
        line-height: 72px;
      }
    }
  }
  .events {
    .blg img {
      height: 230px;
      object-fit: cover;
      border-radius: 17px 17px 0 0;
    }
    &-content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 1rem;
    }
    & .event-body {
      & h4 {
        font-weight: 400;
        font-size: 18px;
        line-height: 26.19px;
      }
    }
  }
}

@media screen and (min-width: 1400px) {
  .event {
    &-content {
      & h3 {
        font-weight: 600;
        font-size: 48px;
        line-height: 72px;
      }
      & .btn {
        width: 162px;
        font-size: 18px;
      }
    }
  }
}
</style>
