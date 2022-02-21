<template>
  <div class="about">
    <Header />
    <div class="container">
      <div class="about-content routes">
        <div class="about-text">
          <h3>About us</h3>
          <p>
            We promote a work environment based on respect, effectiveness,
            effective communication, compliance with policies and processes,
            corporate loyalty and swift execution.
          </p>
        </div>
        <div class="illus">
          <img src="@/assets/img/illus-05.svg" alt="about_us" />
        </div>
        <div class="about-cards">
          <div class="about-card">
            <img src="@/assets/img/about-vision.svg" alt="about_vision" />
            <h4>our vision</h4>
            <p>
              To be the Preferred tech business partner, creating the best
              products and services.
            </p>
          </div>
          <div class="about-card">
            <img src="@/assets/img/about-mission.svg" alt="about_mission" />
            <h4>our mission</h4>
            <p>
              We have a mission to create the best enterprise technology
              products in Nigeria, and Africa at large with significant market
              share to make work smarter and life better across Nigeria and
              Africa.
            </p>
          </div>
          <div class="about-card">
            <img src="@/assets/img/about-values.svg" alt="about_values" />
            <h4>our values</h4>
            <p>
              Technify Inc operates on strong values that define how we work and
              offer services to our esteemed clients.
            </p>
            <ul>
              <li>Commitment to Improvement.</li>
              <li>Always Shipping.</li>
              <li>Extreme accountability.</li>
              <li>Constant open communication.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from '@/components/navbar/Header.vue'
import Footer from '@/components/reuseables/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/global.scss';
.about {
  color: $header;
  padding: 3rem 0;
  &-content {
    text-align: center;
  }
  & .illus {
    margin: 3.5rem 0;
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
  &-cards {
    background: #ffffff;
    border: 1px solid #be53ff;
    box-sizing: border-box;
    box-shadow: 0px 0px 31px 10px rgba(0, 0, 0, 0.06);
    border-radius: 9px;
    text-align: left;
    padding: 1.5rem;
    margin: 0.2rem 0.2rem 1rem;
  }
  &-card {
    padding: 1.8rem 0;
    & img {
      width: 25px;
      height: 25px;
    }
    & h4 {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 21.76px;
      text-transform: capitalize;
      margin: 0.7rem 0 1rem;
      color: $header;
    }
    & p {
      font-weight: normal;
      font-size: 12px;
      line-height: 22.78px;
      color: $sub;
    }
    & ul {
      padding: 1rem 0 0 1rem;
    }
    & ul li {
      font-weight: normal;
      font-size: 12px;
      line-height: 22.78px;
      color: $sub;
      padding-bottom: 0.5rem;
    }
  }
  &-card:nth-child(2) {
    border-top: solid 1px #7a36a4;
    border-bottom: solid 1px #7a36a4;
  }
}

@media screen and (min-width: 700px) {
  .about {
    &-cards {
      display: flex;
      padding: 1rem 0.5rem;
    }
    &-card {
      padding: 1rem;
      flex-basis: 33.33%;
    }
    &-card:nth-child(2) {
      border-top: none;
      border-bottom: none;
      border-left: solid 1px #7a36a4;
      border-right: solid 1px #7a36a4;
    }
  }
}

@media screen and (min-width: 1000px) {
  .about {
    margin: 2rem 0 8rem;
    & .illus {
      width: 900px;
      margin: 5rem auto;
      & img {
        width: 634.65px;
        height: 342px;
      }
    }
    &-text {
      width: 900px;
      margin: auto;
      & h3 {
        font-size: 30px;
        line-height: 51.2px;
      }
      & p {
        font-size: 16px;
        line-height: 31.3px;
      }
    }
    &-cards {
      padding: 2rem 1rem;
    }
    &-card {
      padding: 1.5rem;
      & img {
        width: 32px;
        height: 32px;
      }
      & h4 {
        font-size: 23px;
        line-height: 35.44px;
      }
      & p {
        font-size: 16px;
        line-height: 31.3px;
      }
      & ul li {
        font-size: 16px;
        line-height: 31.3px;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .about-cards {
    width: 1100px;
    margin: 1rem auto;
  }
}

@media screen and (min-width: 1400px) {
  .about {
    & .illus {
      width: 900px;
      margin: 5rem auto;
      & img {
        width: 634.65px;
        height: 342px;
      }
    }
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
    &-cards {
      width: 1200px;
    }
    &-card {
      & img {
        width: 38px;
        height: 38px;
      }
      & h4 {
        font-size: 29px;
        line-height: 39.44px;
      }
      & p {
        font-size: 18px;
        line-height: 31.3px;
      }
      & ul li {
        font-size: 18px;
        line-height: 31.3px;
      }
    }
  }
}
</style>
