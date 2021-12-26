<template>
  <Header />
  <div class="event">
    <div class="container">
      <div class="event-content routes">
        <h3>Events</h3>
        <ul>
          <li class="active">Today</li>
          <li>Upcoming</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="events">
    <div class="container">
      <div class="events-content">
        <div v-for="event in events" :key="event" class="blg">
          <img :src="event.src" alt="event" />
          <div class="event-body">
            <div class="date">
              <p>{{ event.month }}</p>
              <p>{{ event.day }}</p>
            </div>
            <div class="content">
              <h4>{{ event.body }}</h4>
              <p>{{ event.time }}</p>
              <div class="event-icon">
                <img :src="event.event_icon" alt="event" />
                {{ event.venue }}
              </div>
              <router-link :to="{name: 'event', params: { id:event.id }}" class="btn">{{ event.btn_value }}</router-link>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/navbar/Header.vue"
import Footer from "@/components/reuseables/Footer.vue"
import { mapGetters } from "vuex"
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(["events"])
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.event {
  color: $header;
  padding: 3rem 0;
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
  }
  & .event-body {
    padding: 1rem;
    display: flex;
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