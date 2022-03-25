<template>
  <div class="loading" v-show="loadingStatus">
    <div class="spinner"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["loadingStatus"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.loading {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: rgba(128, 128, 128, 0.3);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spinner {
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #630f96;
    border-color: #630f96 transparent #630f96 transparent;
    animation: spinner 1.2s linear infinite;
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
