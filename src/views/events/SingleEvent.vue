<template>
  <Header />
  <div class="event">
    <div class="container">
      <div class="event-header routes">
        <h3>Events</h3>
      </div>
    </div>
    <div class="event-img">
      <img src="@/assets/img/events-01.png" alt="event_img" />
    </div>
    <div class="container">
      <div class="event-content">
        <h3>About This Event</h3>
        <p>Africa Tech Summit Nairobi connects tech leaders from the African ecosystem and international players under one roof. Network with key stakeholders including tech corporates, mobile operators, fintechs, DeFi & crypto ventures, investors, leading start-ups, regulators and industry stakeholders driving business and investment forward. Following successful Summits in Rwanda, the fourth edition convenes in Nairobi, Kenya.</p>
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
              <p>Zoom:  <a href="#">http://meet.google.com/aqe-crpo-kop</a></p>
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
    </div>
    <div class="agenda">
      <div class="container">
        <h3>Agenda</h3>
        <ul>
          <li v-for="agenda in agendas" :key="agenda">
            <span>{{ agenda.time }}</span>
            <span>{{ agenda.topic }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <event-form />
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/navbar/Header.vue"
import Footer from "@/components/reuseables/Footer.vue"
import EventForm from "@/views/events/EventForm.vue"
import { mapGetters } from "vuex"
export default {
  components: {
    Header,
    EventForm,
    Footer
  },
  data() {
    return {
      speakers: [
        {
          src: require("@/assets/img/speaker-1.png"),
          name: "Kui Kinyanjui",
          org: "Safricon"
        },
        {
          src: require("@/assets/img/speaker-2.png"),
          name: "Kensaro Wiwa",
          org: "Facebook"
        },
        {
          src: require("@/assets/img/speaker-1.png"),
          name: "Kui Kinyanjui",
          org: "Safricon"
        },
        {
          src: require("@/assets/img/speaker-2.png"),
          name: "Kensaro Wiwa",
          org: "Facebook"
        },
                {
          src: require("@/assets/img/speaker-1.png"),
          name: "Kui Kinyanjui",
          org: "Safricon"
        },
        {
          src: require("@/assets/img/speaker-2.png"),
          name: "Kensaro Wiwa",
          org: "Facebook"
        },
        {
          src: require("@/assets/img/speaker-1.png"),
          name: "Kui Kinyanjui",
          org: "Safricon"
        },
        {
          src: require("@/assets/img/speaker-2.png"),
          name: "Kensaro Wiwa",
          org: "Facebook"
        }
      ],
      agendas: [
        {
          time: "4:00pm",
          topic: "Arrival/Networking"
        },
        {
          time: "4:30pm",
          topic: "Welcome address"
        },
        {
          time: "4:35pm",
          topic: "Sponsor's welcome"
        },
        {
          time: "4:50pm",
          topic: "Innovation, regulation and aftermath"
        },
        {
          time: "5:10pm",
          topic: "Panel: Regulation:untying the Knots"
        },
        {
          time: "5:50pm",
          topic: "Q&A"
        },
        {
          time: "7:40pm",
          topic: "Sponsors remark"
        },
        {
          time: "7:50pm",
          topic: "Vote's of thanks"
        }
      ]
    }
  },
  props: ["id"],
  computed: {
    ...mapGetters(["filterById"]),
    getevent() {
      return this.events.filter((event) => event.id === this.id);
    }
  },
  mounted() {
    // this.event = this.getevent()
    // this.events.forEach((event) => console.log(event.id));
    // console.log(this.getevent)
    // console.log(this.filterById(this.id))
  }
}
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
    height: 400px;
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
  .agenda {
    background: #f5eef8;
    padding: 5rem 0;
    h3 {
      text-align: center;
      margin-bottom: 5rem;
      color: $header;
      font-weight: 600;
      font-size: 28px;
      line-height: 38.08px;
    }
    ul {
      list-style: none;
    }
    li {
      border-top: solid 1px rgba(99, 15, 150, 0.33);
      border-bottom: solid 1px rgba(99, 15, 150, 0.33);
      padding: 1.5rem 0;
      span {
        margin: 1rem 0;
        display: block;
        font-weight: 500;
      }
      span:first-child {
        color: $sub;
        font-size: 16px;
        line-height: 20px;
      }
      span:last-child {
        color: $header;
        font-size: 18px;
        line-height: 22.32px;
      }
    }
  }
}
@media screen and (min-width: 1000px) {
  .event {
    &-img img {
      height: 500px;
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
    .agenda {
      h3 {
        font-size: 30px;
        line-height: 49px;
      }
      li {
        display: flex;
        justify-content: center;
        padding: 1rem 0;
        span {
          flex-basis: 50%;
          font-weight: 500;
        }
        span:first-child {
          font-size: 18px;
          line-height: 25px;
        }
        span:last-child {
          font-size: 18px;
          line-height: 25px;
        }
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
    .agenda {
      h3 {
        font-size: 36px;
        line-height: 49px;
      }
      li {
        span {
          flex-basis: 50%;
          font-weight: 500;
        }
        span:first-child {
          font-size: 20px;
          line-height: 25px;
        }
        span:last-child {
          font-size: 20px;
          line-height: 25px;
        }
      }
    }
  }
}
</style>