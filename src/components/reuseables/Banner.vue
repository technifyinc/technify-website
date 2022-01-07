<template>
  <div class="banner">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "UniversalBanner",
};
</script>
<style lang="scss">
@import "@/scss/global.scss";
.banner {
  height: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: $banner;
  padding: 1rem;
  text-align: center;
  & > h3 {
    margin: 1rem 0;
    font-size: 26px;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 28px;
    line-height: 25px;
  }
}

@media screen and (min-width: 1000px) {
  .banner {
    height: 424px;
    & > h3 {
      font-size: 32px;
      line-height: 40.4px;
    }
  }
}
@media screen and (min-width: 1400px) {
  .banner {
    & > h3 {
      font-size: 50px;
      line-height: 65px;
    }
  }
}
</style>
