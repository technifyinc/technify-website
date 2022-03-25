<template>
  <Header />
  <div class="bus">
    <div class="container">
      <div class="bus-content routes">
        <h3>Bussiness Analytic Insight</h3>
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
        <div v-for="vid in videos" :key="vid" class="buss-bg">
          <iframe
            :src="formatLink(vid.link)"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
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
  <Footer />
</template>

<script>
import Header from "@/components/navbar/TheHeader.vue";
import Footer from "@/components/navbar/TheFooter.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    Header,
    Footer,
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
    };
  },
  computed: {
    ...mapGetters(["recommendations", "videos"]),
  },
  methods: {
    ...mapActions(["getVideos"]),
    formatLink(value) {
      return (
        value.substr(0, 24) + "embed" + "/" + value.substr(32, value.length)
      );
    },
  },
  mounted() {
    this.getVideos();
  },
};
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
  }
}

.buss {
  margin: 1rem 0 5rem;
  &-bg {
    border: 1px solid #bcbcbc;
    box-sizing: border-box;
    backdrop-filter: drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.59));
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
      @include seeMore();
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
    }
  }
  .buss {
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button.see-more {
        @include seeMore();
      }
    }
    &-content {
      @include grid();
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
