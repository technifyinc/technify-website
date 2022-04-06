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
      <a href="https://upbase.com.ng/" target="_blank" rel="noopener noreferrer"
        ><img src="https://upbase.com.ng/assets/img/upbase.png" alt="upbase"
      /></a>
    </SplideSlide>
    <SplideSlide>
      <a href="https://easyflip.ng" target="_blank" rel="noopener noreferrer"
        ><img src="https://easyflip.ng/img/logo.bb6fab0f.svg" alt="easyflip"
      /></a>
    </SplideSlide>
    <SplideSlide>
      <a
        href="https://emadeshopping.com"
        target="_blank"
        rel="noopener noreferrer"
        ><img src="https://emadeshopping.com/img/logo.png" alt="emade"
      /></a>
    </SplideSlide>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        type: "loop",
        drag: false,
        focus: "center",
        perPage: 3,
        gap: "1em",
        easing: "ease",
        autoplay: true,
        interval: 2000,
        arrows: false,
        pagination: false,
        width: "20em",
        autoScroll: {
          speed: 2,
        },
      },
    };
  },
});
</script>

<style lang="scss" scoped>
img,
p {
  background: #f5e6fe;
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: 0;
  padding: 0;
  height: 30px;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
}
</style>
