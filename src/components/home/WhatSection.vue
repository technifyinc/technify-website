<template>
  <section class="what">
    <div class="container">
      <div class="what-content">
        <h3>What We Do</h3>
        <p>Providing I.T. solutions for your business(s).</p>
        <div class="what-inner flex align-center flex-between">
          <div class="what-text">
            <h3>Enterprise Software Development</h3>
            <p>
              We help you Leverage our expertise in enterprise software
              development, API integration, modernising legacy systems,
              andconsolidating app portfolios to improve processes and minimize
              cost in your organization.
            </p>
          </div>
          <div class="illus">
            <image-slider />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageSlider from './ImageSlider.vue';
export default {
  components: { ImageSlider },
  name: "WhatSection",
};
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
.what {
  background: $bg;
  padding: 2rem 0;
  &-content {
    text-align: center;
  }
  &-content h3 {
    margin-bottom: 1rem;
    font-size: 30px;
  }
  &-text {
    text-align: left;
  }
  &-inner {
    margin-top: 2rem;
  }
}

@media screen and (min-width: 700px) {
  .what {
    &-text {
      flex-basis: 50%;
      margin: 0;
    }
    & .illus {
      flex-basis: 50%;
    }
  }
}
@media screen and (min-width: 1000px) {
  .what {
    &-text {
      & h3 {
        font-size: 40px;
      }
      & p {
        font-size: 20px;
      }
    }
    & .illus img {
      height: 500px;
    }
  }
}
@media screen and (min-width: 1200px) {
  .what {
    &-text {
      & h3 {
        font-size: 45px;
      }
      & p {
        font-size: 20px;
      }
    }
    & .illus img {
      height: 500px;
    }
  }
}
</style>
