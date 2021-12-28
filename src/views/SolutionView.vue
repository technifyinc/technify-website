<template>
  <div class="solution">
    <Header />
    <div class="container">
      <div class="solution-content routes"></div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/navbar/Header.vue";
import Footer from "@/components/reuseables/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.solution {
  color: $header;
  padding: 3rem 0;
  &-content {
    text-align: center;
  }
  &-text {
    & h3 {
      font-weight: bold;
      font-size: 24px;
      line-height: 32.64px;
      color: $header;
      margin-bottom: 1rem;
      text-transform: capitalize;
    }
    & p {
      font-weight: normal;
      font-size: 12px;
      line-height: 22.78px;
      color: $sub;
    }
  }
}

@media screen and (min-width: 1400px) {
  .solution {
    &-text {
      width: 900px;
      margin: auto;
      & h3 {
        font-size: 45px;
        line-height: 61.2px;
      }
      & p {
        font-size: 20px;
        line-height: 31.3px;
      }
    }
  }
}
</style>
