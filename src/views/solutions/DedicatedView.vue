<template>
  <Header />
  <div class="solution" v-for="(content, index) in contents" :key="index">
    <div class="container">
      <div class="solution-content">
        <div class="solution-text">
          <h3>{{ content.title }}</h3>
          <p>{{ content.text }}</p>
          <button class="btn" v-if="content.btn">Get Started</button>
        </div>
        <div class="illus">
          <img :src="content.src" :alt="content.title">
        </div>
      </div>
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
    Footer
  },
  data() {
    return {
      contents: [
        {
          title: "Dedicated team you can trust",
          text: "We have the best team to ensure your deliverables meet quality assurance standards or to scale your development processes.",
          src: require("@/assets/img/illus-10.svg"),
          btn: true
        },
        {
          title: "We help scale your delivery capacity with dedicated developers and teams",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
          src: require("@/assets/img/illus-11.svg"),
          btn: false
        },
        {
          title: "Managing and motivating dedicated developers and teams",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
          src: require("@/assets/img/illus-12.svg"),
          btn: false
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
.solution {
  height: 828px;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:nth-child(3),
  &:nth-child(4) {
    height: auto;
    padding: 3rem 0;
    text-align: center;
    & h3 {
      font-weight: 600;
      font-size: 24px;
      line-height: 29.76px;
    }
  }
  &:nth-child(4) {
    background: 
      url("@/assets/img/soln-bg-mobile.svg") no-repeat left -40px bottom -200px,
      url("@/assets/img/soln-bg-mobile-01.svg") no-repeat left 0px top 0px;
    padding-bottom: 7rem;
  }
  &:nth-child(odd) {
    background: #f5eef8;
  }
  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 38px;
  }
  &-text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 4rem;
    & h3 {
      color: $pri-color;
      margin-bottom: 1.5rem;
      font-weight: 600;
      font-size: 32px;
      line-height: 39.68px;
    }
    & p {
      color: $sub;
      font-weight: 400;
      font-size: 15px;
      line-height: 22.78px;
    }
    & .btn {
      width: 122px;
      font-size: 14px;
      line-height: 20.78px;
      margin-top: 2rem;
    }
    & .illus img {
      width: 357.77px;
      height: 271px;
    }
  }
}
@media screen and (min-width: 700px) {
  .solution {
    height: auto;
    padding: 3rem 0;
    &:nth-child(3) .solution-content,
    &:nth-child(4) .solution-content {
      margin: 0;
    }
    &:nth-child(odd) {
      grid-auto-flow: dense;
      direction: rtl;
    }
    &:nth-child(3),
    &:nth-child(4) {
      & h3 {
        font-weight: 500;
      }
    }
    &-content {
      margin-top: 78px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 2rem;
      align-items: center;
      justify-content: center;
    }
    &-text { 
      flex-basis: 50%;
      text-align: left;
      margin: 0;
    }
    & .illus {
      flex-basis: 50%;
    }
  }
}

@media screen and (min-width: 1000px) {
  .solution {
    padding: 0;
    margin-top: 78px;
    min-height: calc(100vh - 78px);
    &:nth-child(3),
    &:nth-child(4) {
      padding: 5rem 0;
      min-height: calc(100% - 78px);
      & h3 {
        font-size: 32px;
        line-height: 50.76px;
      }
    }
    &:nth-child(4) {
      margin-top: 0;
      background: 
        url("@/assets/img/soln-bg-01.svg") no-repeat left -40px bottom -200px,
        url("@/assets/img/soln-bg.svg") no-repeat left 0px top 0px;
      padding-bottom: 7rem;
    }
    &-content {
      margin-top: 0px;
      grid-column-gap: 5rem;
    }
    &-text {
      & h3 {
        font-size: 40px;
        line-height: 60px;
        font-weight: 600;
      }
      & p {
        font-size: 20px;
      }
    }
    & .btn {
      width: 162px;
      font-weight: 700;
      font-size: 18px;
    }
  }
}
@media screen and (min-width: 1200px) {
  .solution {
    &:nth-child(3),
    &:nth-child(4) {
      & h3 {
        font-size: 42px;
        line-height: 50.76px;
      }
      & p {
        font-size: 20px;
        line-height: 35px;
      }
    }
    &-text {
      & h3 {
        font-size: 50px;
        line-height: 70.88px;
        width: 100%;
      }
      & p {
        font-weight: normal;
        font-size: 22px;
        line-height: 34px;
      }
    }
  }
}
@media screen and (min-width: 1400px) {
  .solution {
    &:nth-child(3),
    &:nth-child(4) {
      & h3 {
        font-size: 43px;
        line-height: 55.76px;
      }
      & p {
        font-size: 23px;
        line-height: 44px;
      }
    }
    &-text {
      & h3 {
        font-size: 57px;
        line-height: 77.59px;
      }
      & p {
        font-size: 23px;
        line-height: 44px;
      }
    }
  }
}
</style>