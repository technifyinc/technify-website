<template>
  <Header />
  <div class="bus">
    <div class="container">
      <div class="bus-content routes">
        <h3>Bussiness Analytic Insight</h3>
        <div class="banner">
          <ul>
            <li class="banner-main-icon">
              <img src="@/assets/img/bus-folder.svg" alt="icon">
            </li>
            <div class="banner-inner">
              <li v-for="ban in bans" :key="ban">
                <img :src="ban.icon" alt="icon">
                <div class="ban-aside">
                  <p>{{ ban.title }}</p>
                  <p>{{ ban.content }}</p>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="buss">
    <div class="container">
      <div class="buss-header">
        <h3>Top Recommendation</h3>
        <button class="hide-on-sm see-more">See more</button>
      </div>
      <div class="buss-content">
        <div v-for="recommendation in recommendations" :key="recommendation" class="buss-bg">
          <img :src="recommendation.src" alt="bus" />
          <div class="buss-body">
            <p>{{ recommendation.title }}</p>
            <a class="btn">{{ recommendation.btn }}</a>
          </div>
        </div>
      </div>
      <div class="buss-footer hide-on-lg">
        <button class="see-more">See more</button>
      </div>
    </div>
  </div>
  <div class="buss">
    <div class="container">
      <div class="buss-header">
        <h3>Top Rated Videos</h3>
        <button class="hide-on-sm see-more">See more</button>
      </div>
      <div class="buss-content">
        <div v-for="vid in vids" :key="vid" class="buss-bg">
          <iframe :src="vid.src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="buss-body vids">
            <p>{{ vid.title }}</p>
          </div>
        </div>
      </div>
      <div class="buss-footer hide-on-lg">
        <button class="see-more">See more</button>
      </div>
    </div>
  </div>
  <div class="buss">
    <div class="container">
      <div class="buss-header">
        <h3>Trending News</h3>
        <button class="hide-on-sm see-more">See more</button>
      </div>
      <div class="buss-content">
        <div v-for="report in reports" :key="report" class="buss-bg">
          <img :src="report.src" alt="bus" />
          <div class="buss-body">
            <p>{{ report.title }}</p>
            <a class="btn">{{ report.btn }}</a>
          </div>
        </div>
      </div>
      <div class="buss-footer hide-on-lg">
        <button class="see-more">See more</button>
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
    return {
      bans: [
        {
          id: Math.random().toString(36).substring(7).toUpperCase(),
          icon: require("@/assets/img/bus-user.svg"),
          title: "Name",
          content: "Kiyatsu Nagasaki",
        },
        {
          id: Math.random().toString(36).substring(7).toUpperCase(),
          icon: require("@/assets/img/bus-company.svg"),
          title: "Company",
          content: "Technify",
        },
        {
          id: Math.random().toString(36).substring(7).toUpperCase(),
          icon: require("@/assets/img/bus-role.svg"),
          title: "Role",
          content: "Product Designer",
        },
        {
          id: Math.random().toString(36).substring(7).toUpperCase(),
          icon: require("@/assets/img/bus-location.svg"),
          title: "Location",
          content: "Lagos, Nigeria",
        },
      ],
    }
  },
  computed: {
    ...mapGetters(["recommendations", "vids", "reports"])
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
@mixin seeMore() {
  background: none;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  color: $sub-color;
  display: inline;
  font-weight: 500;
  font-size: 16px;
  line-height: 21.76px;
  cursor: pointer;
}
@mixin grid() {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}
.bus {
  color: $header;
  padding: 3rem 0;
  &-content {
    text-align: center;
    & h3 {
      font-weight: bold;
      font-size: 24px;
      line-height: 32.64px;
      color: $header;
      margin-bottom: 2rem;
      text-transform: capitalize;
    }
    .banner {
      background: #B53CFF;
      border: 1.5px solid #BE53FF;
      box-shadow: 0px 0px 14px 5px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: $white;
      padding: 2.5rem 1rem;
      margin-bottom: 2rem;
      & ul {
        list-style: none;
      }
      &-main-icon {
        padding-bottom: 4rem;
        & img {
          width: 45px;
        }
      }
      &-inner {
        & li {
          padding-top: 3rem;
          & p {
            font-size: 16px;
            font-weight: 400;
            line-height: 21.76px;
            margin-bottom: 0.5rem;
            &:last-child {
              font-size: 18px;
              font-weight: 600;
              line-height: 24.48px;
            }
          }
          & img {
            width: 22px;
          }
        }
      }
    }
  }
}

.buss {
  margin: 1rem 0 5rem;
  &-bg {
    border: 1px solid #BCBCBC;
    box-sizing: border-box;
    background-filter: drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.59));
    border-radius: 12px;
    background: $white;
    margin: 1rem 0.2rem 2rem;
  }
  img,
  iframe {
    width: 100%;
    height: 231px;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
  }
  &-header {
    text-align: center;
    margin-bottom: 2rem;
    h3 {
      font-weight: 500;
      font-size: 24px;
      line-height: 32.64px; 
    }
  }
  &-footer {
    text-align: center;
    margin: 2rem 0;
    button.see-more {
      @include seeMore()
    }
  }
  &-body {
    padding: 1rem;
    & p {
      font-weight: 400;
      font-size: 17px;
      line-height: 26.35px;
    }
    & .btn {
      padding: 0.5rem 1rem;
      background: $white;
      color: $sec-color;
      border: solid 1px $sec-color;
      transition: all 0.5s ease;
      margin-top: 2rem;
      &:hover {
        color: $white;
        background: $sec-color;
      }
    }
  }
  .vids {
    padding: 1rem 1rem 2rem;
  }
}

@media screen and (min-width: 700px) {
  .bus {
    &-content {
      & h3 {
        text-align: left;
      }
      .banner {
        &-main-icon {
          padding-bottom: 2rem;
        }
        &-inner {
          display: flex;
          align-items: end;
          justify-content: space-between;
        }
      }
    }
  }
  .buss {
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button.see-more {
        @include seeMore()
      }
    }
    &-content {
      @include grid()
    }
  }
}

@media screen and (min-width: 1000px) {
  .bus {
    &-content {
      & h3 {
        font-size: 30px;
        line-height: 41px;
      }
      .banner {
        padding: 2.5rem 2rem;
        &-inner {
          & li {
            display: flex;
            align-items: flex-start;
            text-align: left;
            & p {
              font-size: 18px;
              line-height: 20px;
              &:last-child {
                font-size: 20px;
                font-weight: 400;
                line-height: 22px;
              }
            }
            & img {
              margin-right: 1rem;
            }
          }
        }
      }
    }
  }
  .buss {
    &-header {
      h3 {
        font-weight: 600;
        font-size: 25px;
        line-height: 30px; 
      }
      button.see-more {
        @include seeMore();
        font-size: 18px;
        line-height: 20px;
        font-weight: 500;
      }
    }
    &-content {
      @include grid();
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
    }
    &-body {
      & p {
        font-size: 18px;
        line-height: 28px;
      }
      & .btn {
        padding: 0.5rem 1rem;
        width: 111px;
        text-align: center;
      }
    }
  }
}

@media screen and (min-width: 1400px) {
  .bus {
    &-content {
      & h3 {
        font-size: 38px;
        line-height: 51px;
      }
      .banner {
        &-inner {
          & li {
            & p {
              font-size: 20px;
              line-height: 27px;
              &:last-child {
                font-size: 24px;
                line-height: 32px;
              }
            }
          }
        }
      }
    }
  }
  .buss {
    &-header {
      h3 {
        font-size: 30px;
        line-height: 40px; 
      }
      button.see-more {
        font-size: 22px;
        line-height: 30px;
      }
    }
    &-body {
      & p {
        font-size: 18px;
        line-height: 28px;
      }
      & .btn {
        padding: 0.5rem 1rem;
      }
    }
  }
}
</style>