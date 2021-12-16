<template>
  <main class="main">
    <Header />
    <div class="container">
      <div class="main-content">
        <div class="main-text" data-aos="fade">
          <h1>Innovate with our Solutions</h1>
          <p>
            We build out technologies to improve business processes end to end
            and optimize workflow.
          </p>
        </div>
        <div class="illus">
          <landing-image />
        </div>
      </div>
      <div class="trustees">
        <p>Trusted by <b>10,000+</b> businesses</p>
        <div class="trustees-list">
          <companies-slider />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "@/components/navbar/Header.vue";
import LandingImage from "@/components/home/LandingImage.vue"
import CompaniesSlider from "@/components/home/CompaniesSlider.vue"
export default {
  name: "MainSection",
  components: {
    Header,
    LandingImage,
    CompaniesSlider
  }
};
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
.main {
  height: 838px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &-text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 4rem;
    & h1 {
      color: $pri-color;
      margin-bottom: 1.5rem;
      font-weight: bold;
      font-size: 32px;
      line-height: 39.68px;
    }
    & p {
      font-size: 15px;
      line-height: 22px;
    }
  }
}

.trustees {
  padding: 3rem 0 0;
  & p {
    font-size: 14px;
    color: $sub;
  }
  &-list {
    margin-top: 1.5rem;
  }
}

@media screen and (min-width: 700px) {
  .main-text {
    text-align: center;
    width: 450px;
    margin: auto auto 5rem;
    & h1 {
      font-size: 35px;
    }
    & p {
      font-size: 18px;
      line-height: 32px;
    }
  }
}

@media screen and (min-width: 1000px) {
  .main {
    &-content {
      flex-direction: row;
      text-align: left;
      justify-content: space-between;
    }
    &-text {
      flex-basis: 50%;
      text-align: left;
      align-items: flex-start;
      margin: 0;
      & h1 {
        font-size: 40px;
        line-height: 60px;
        width: 400px;
        font-weight: 600;
      }
      & p {
        font-size: 20px;
        width: 400px;
      }
    }
    & .illus {
      flex-basis: 50%;
    }
  }
  .trustees p {
    font-size: 18px;
  }
}
@media screen and (min-width: 1200px) {
  .main {
    &-text {
      & h1 {
        font-size: 52px;
        line-height: 70.88px;
        width: 100%;
      }
      & p {
        font-weight: normal;
        font-size: 22px;
        line-height: 34px;
        width: 450px;
      }
    }
  }
}
@media screen and (min-width: 1400px) {
  .main-content {
    & h1 {
      font-size: 62px;
      line-height: 76.88px;
    }
    & p {
      font-size: 25px;
      line-height: 44px;
      width: 100%;
    }
  }
}
</style>
