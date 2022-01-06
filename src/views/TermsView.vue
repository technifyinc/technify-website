<template>
  <div class="routes">
    <Header />
    <Banner>
      <h3>Terms of service</h3>
    </Banner>
    <div class="terms">
      <div class="container">
        <div class="terms-content">
          <div
            class="terms-parts"
            v-for="terms in terms"
            :key="terms.index"
          >
            <h3>{{ terms.title }}</h3>
            <p v-html="terms.content"></p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/navbar/Header.vue";
import Footer from "@/components/reuseables/Footer.vue";
import Banner from "@/components/reuseables/Banner.vue";
export default {
  components: {
    Header,
    Footer,
    Banner,
  },
  data() {
    return {
      terms: [
        {
          title: "Introduction",
          content:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
        },
        {
          title: "General terms",
          content:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
        },
        {
          title: "Agreement",
          content:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore`,
        },
        {
          title: "Disclaimer Warranties",
          content:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `,
        },
        {
          title: "Miscelleneous",
          content:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        }
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
.terms {
  padding: 1rem 0 3rem;
  &-parts {
    margin: 3rem 0;
    & h3 {
      font-size: 25px;
      font-weight: 600;
      line-height: 31px;
      margin-bottom: 1rem;
    }
    & p {
      margin: 0.5rem 0;
      line-height: 25px;
      font-weight: 400;
      font-size: 14px;
      color: $sub;
    }
  }
}
@media screen and (min-width: 1000px) {
  .terms {
    &-parts {
      & h3 {
        font-size: 24px;
        font-weight: 600;
        line-height: 40px;
      }
      & p {
        font-size: 18px;
        line-height: 35px;
      }
    }
  }
}
@media screen and (min-width: 1400px) {
  .terms {
    &-parts {
      & h3 {
        font-size: 32px;
        line-height: 42px;
      }
      & p {
        font-size: 24px;
        line-height: 45px;
      }
    }
  }
}
</style>
