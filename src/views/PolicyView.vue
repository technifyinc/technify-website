<template>
  <div class="routes">
    <Header />
    <Banner>
      <h3>Technify Privacy Policy</h3>
    </Banner>
    <div class="policy">
      <div class="container">
        <div class="policy-content">
          <div
            class="policy-parts"
            v-for="policy in policies"
            :key="policy.index"
          >
            <h3>{{ policy.title }}</h3>
            <p v-html="policy.content"></p>
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
      policies: [
        {
          title: "Introduction",
          content:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
        },
        {
          title: "Privacy Policy",
          content:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est`,
        },
        {
          title: "Personal Data",
          content:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        },
        {
          title: "Disclosure Of Personal data",
          content:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comme.`,
        },
        {
          title: "Cookies",
          content:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        },
        {
          title: "Security",
          content:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        },
        {
          title: "Contact Us",
          content:
            `If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@technify.ng" style="color:#339DFF">hello@technify.ng</a>`,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
.policy {
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
  .policy {
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
  .policy {
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
