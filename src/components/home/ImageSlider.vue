<template>
  <Splide :options="options">
    <SplideSlide>
      <img src="@/assets/img/illus-02.svg" alt="illus-02">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/img/illus-03.svg" alt="illus-03">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/img/illus-04.svg" alt="illus-04">
    </SplideSlide>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        type: 'loop',
        drag: false,
        focus: 'center',
        perPage: 1,
        easing: 'ease',
        autoplay: true,
        interval: 2000,
        arrows: false,
        pagination: false,
      }
    }
  }
});
</script>

<style lang="scss">
</style>
