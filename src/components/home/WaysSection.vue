<template>
  <section class="ways">
    <div class="container">
      <div class="ways-content">
        <div class="ways-head">
          <h3>Ways to use technify</h3>
          <p>We have some great plans to suit your individual needs</p>
          <router-link to="/" class="btn">Get Started</router-link>
        </div>
        <div class="ways-text" data-aos="zoom-in">
          <img src="@/assets/img/ways-user.svg" alt="ways_user">
          <h4>Technify for Individuals</h4>
          <p>
            We help Improve software infrastructure with well-built
            microservices, reliable API, and data integration. Launch your
            mobile strategy with our comprehensive enterprise application
            development, or use our enterprise app integration solutions.
          </p>
          <router-link to="/">Learn more</router-link>
        </div>
        <div class="ways-text" data-aos="zoom-in">
          <img src="@/assets/img/ways-building.svg" alt="ways_building">
          <h4>Technify for Companies</h4>
          <p>
            We help Improve software infrastructure with well-built
            microservices, reliable API, and data integration. Launch your
            mobile strategy with our comprehensive enterprise application
            development, or use our enterprise app integration solutions.
          </p>
          <router-link to="/">Learn more</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesWays",
};
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
.ways {
  background: $bg;
  padding: 3rem 0;
  text-align: center;
  &-head {
    margin-bottom: 3rem;
    & h3 {
      font-size: 26px;
      font-weight: 600;
      line-height: 32.24px;
      margin-bottom: 1rem;
    }
    & p {
      font-size: 17px;
      font-weight: 400;
      margin: 1rem 0;
    }
    & .btn {
      color: $white;
      font-size: 15px;
      font-weight: 600;
      line-height: 21.82px;
    }
  }
  &-text {
    margin: 2rem 0;
    background: #fdfdfd;
    border: solid 2px #edcfff;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
    border-radius: 11px;
    padding: 1rem;
    & h4 {
      font-size: 18px;
      font-weight: 500;
      line-height: 25.38px;
    }
    & p {
      font-size: 13px;
      font-weight: 400;
      line-height: 19.24px;
      margin: 1rem 0;
    }
    & img {
      width: 35px;
      height: 37px;
      margin-bottom: 0.5rem;
    }
    & a {
      color: $tag-color;
      font-size: 13px;
      line-height: 20.02px;
      font-weight: 500;
    }
  }
}

@media screen and (min-width: 700px) {
  .ways {
    text-align: left;
    &-content {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
    }
    &-text {
      flex-basis: 48.5%;
    }
    &-head {
      flex-basis: 100%;
      margin: 1rem 0;
      text-align: center;
    }
  }
}
@media screen and (min-width: 1000px) {
  .ways {
    &-head {
      flex-basis: 32%;
      margin: 0;
      text-align: left;
      & h3 {
        font-size: 38px;
        line-height: 49.24px;
      }
      & p {
        font-size: 17px;
        font-weight: 400;
        margin: 1rem 0;
      }
      & .btn {
        margin-top: 2rem;
        padding: 0.8rem 1.5rem;
      }
    }
    &-text {
      flex-basis: 32%;
      margin: 0;
      & h4 {
        font-size: 20px;
        line-height: 22.3px;
      }
    } 
  }
}

@media screen and (min-width: 1200px) {
  .ways {
    &-text {
      flex-basis: 32%;
      margin: 0;
      & h4 {
        font-size: 20px;
        line-height: 22.3px;
      }
      & h4 {
        font-size: 22px;
        font-weight: 700;
        line-height: 29.92px;
      }
      & p {
        font-size: 15px;
        font-weight: 500;
        line-height: 23.48px;
      }
    } 
  }
}
@media screen and (min-width: 1400px) {
  .ways {
    &-head {
      & h3 {
        font-size: 48px;
        line-height: 59.52px;
      }
      & p {
        font-size: 22px;
        line-height: 31.46px;
      }
      & .btn {
        font-size: 18px;
        font-weight: 700;
        line-height: 26.19px;
      }
    }
    &-text {
      & h4 {
        font-size: 30px;
        line-height: 42.3px;
      }
      & p,
      & a {
        font-size: 17px;
        line-height: 26.18px;
      }
      & img {
        width: 61px;
        height: 65px;
      }
    }
  }
}
</style>
