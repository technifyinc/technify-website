<template>
  <section class="about">
    <div class="container">
      <div class="about-content flex align-center flex-between">
        <div class="illus" data-aos="zoom-in">
          <img src="@/assets/img/illus-06.svg" alt="illus_six" />
        </div>
        <div class="about-text" data-aos="fade">
          <h3>About Us</h3>
          <p>More Than Just a Technology Company. We promote a work environment based on respect, effectiveness, timeliness, objectivity, merit, effective communication, compliance with policies and processes, corporate loyalty and swift execution.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
}
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
.about {
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
  .about {
    &-text {
      flex-basis: 50%;
      padding-left: 5rem;
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
  .about {
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
  .about {
    &-text {
    }
    & .illus img {
      height: 500px;
    }
  }
}
</style>
