<template>
  <Splide :options="options">
    <SplideSlide>
      <a
        href="https://tradelenda.com/"
        target="_blank"
        rel="noopener noreferrer"
        ><img
          src="https://res.cloudinary.com/trade-lenda/image/upload/v1628132872/landing_page_pic/Group_11434_2_umfio2.png"
          alt="tradelenda"
      /></a>
    </SplideSlide>
    <SplideSlide>
      <a
        href="https://www.onekioskafrica.com/"
        target="_blank"
        rel="noopener noreferrer"
        ><p>onekiosk</p></a
      >
    </SplideSlide>
    <SplideSlide>
      <a
        href="https://upbase.com.ng/"
        target="_blank"
        rel="noopener noreferrer"
        ><p>upbase</p></a>
    </SplideSlide>
    <SplideSlide>
      <a href="https://easyflip.ng" target="_blank" rel="noopener noreferrer"
        ><img src="@/assets/img/easyflip.svg" alt="easyflip"
      /></a>
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
        perPage: 3,
        gap: '1em',
        easing: 'ease',
        autoplay: true,
        interval: 2000,
        arrows: false,
        pagination: false,
        width: "20em",
        autoScroll: {
          speed: 2,
        }
      }
    }
  }
});
</script>

<style lang="scss">
</style>
