<template>
  <section class="section">
    <div class="container">
      <div class="section-content flex align-center flex-between">
        <div class="illus" data-aos="zoom-in">
          <img src="@/assets/img/illus-03.svg" alt="illus_three" />
        </div>
        <div class="section-text" data-aos="fade">
          <h3>Software Integration</h3>
          <p>We help Improve software infrastructure with well-built microservices, reliable API, and data integration. Launch your mobile strategy with our comprehensive enterprise application development, or use our enterprise app integration solutions.</p>
        </div>
      </div>
    </div>
  </section>
    <section class="section">
    <div class="container">
      <div class="section-content flex align-center flex-between">
        <div class="illus" data-aos="zoom-in">
          <img src="@/assets/img/illus-04.svg" alt="illus_four" />
        </div>
        <div class="section-text" data-aos="fade">
          <h3>I.T Consulting Services</h3>
          <p>With the expertise and deep tech background of the best minds at Technify Inc  to create a comprehensive IT strategy for a digital and technological transformation of your organization that goes in line with your business objectives.</p>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-content flex align-center flex-between">
        <div class="illus" data-aos="zoom-in">
          <img src="@/assets/img/illus-05.svg" alt="illus_five" />
        </div>
        <div class="section-text" data-aos="fade">
          <h3>Tools To Keep Your Network Working</h3>
          <p>We provide standardized tools for monitoring, managing and reporting. Our services include operations and system management, with availability monitoring and reporting, together with performance optimization and management.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
}
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
.section {
  background: $sec-bg;
  padding: 2rem 0;
  &:nth-child(odd) {
    background: $bg;
  }
  &-content h3 {
    margin-bottom: 1rem;
    font-size: 30px;
  }
  &-text {
    text-align: left;
    margin-top: 2rem;
  }
}

@media screen and (min-width: 700px) {
  .section {
    &-content {
      flex-direction: row-reverse;
    }
    &:nth-child(odd) &-content {
      flex-direction: row;
      & .illus {
        margin: 0 5rem 0 0;
      }
    }
    &-text {
      flex-basis: 50%;
      margin: 0;
      & h3 {
        font-size: 20px;
      }
      & p {
        font-size: 12px;
      }
    }
    & .illus {
      flex-basis: 50%;
      padding-left: 5rem;
    }
  }
}
@media screen and (min-width: 1000px) {
  .section {
    &-text {
      & h3 {
        font-size: 30px;
      }
      & p {
        font-size: unset;
      }
    }
    & .illus img {
      height: 500px;
    }
  }
}
@media screen and (min-width: 1200px) {
  .section {
    &-text {
      & h3 {
        // font-size: 45px;
      }
      & p {
        // font-size: 20px;
      }
    }
    & .illus img {
      height: 500px;
    }
  }
}
</style>
