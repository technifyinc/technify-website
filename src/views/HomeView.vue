<template>
  <div class="home">
    <Header />
    <main-section />
    <what-section />
    <ways-section />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/navbar/TheHeader.vue";
import MainSection from "@/components/home/MainSection.vue";
import WhatSection from "@/components/home/WhatSection.vue";
import WaysSection from "@/components/home/WaysSection.vue";
import Footer from "@/components/navbar/TheFooter.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    MainSection,
    WhatSection,
    WaysSection,
    Footer,
  },
};
</script>
