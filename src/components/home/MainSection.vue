<template>
  <main class="main">
    <div class="container">
      <div class="main-content flex align-center flex-between">
        <div class="main-text" data-aos="fade">
          <h3>Innovate with our Solutions</h3>
          <p>We build out technologies to improve business processes end to end and optimize workflow.</p>
        </div>
        <div class="illus">
          <img src="@/assets/img/illus-01.svg" alt="illus_one" data-aos="zoom-in" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'MainSection',
}
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
.main {
  background: $sec-bg;
  padding: 2rem 0;
  &-content h3 {
    color: $sec-color;
    margin-bottom: 1rem;
    font-size: 30px;
  }
  &-text {
    margin-bottom: 3rem;
  }
}

@media screen and (min-width: 700px) {
  .main {
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
  .main {
    height: 100vh;
    &-text {
      & h3 {
        font-size: 40px;
      }
      & p {
        font-size: 20px;
        width: 400px;
      }
    }
    & .illus img {
      height: 500px;
    }
  }
}
@media screen and (min-width: 1200px) {
  .main {
    &-text {
      & h3 {
        font-size: 45px;
        width: 450px;
      }
      & p {
        font-size: 20px;
        width: 400px;
      }
    }
    & .illus img {
      height: 500px;
    }
  }
}
</style>
