<template>
  <div class="home">
    <main-section />
    <what-section />
    <ways-section />
    <Footer />
  </div>
</template>

<script>
import MainSection from "@/components/home/MainSection.vue";
import WhatSection from "@/components/home/WhatSection.vue";
import WaysSection from "@/components/home/WaysSection.vue";
import Footer from "@/components/reuseables/Footer.vue";

export default {
  name: "HomeView",
  components: {
    MainSection,
    WhatSection,
    WaysSection,
    Footer,
  },
};
</script>
