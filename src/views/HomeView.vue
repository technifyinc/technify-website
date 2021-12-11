<template>
  <div class="home">
    <main-section />
    <what-section />
    <ways-section />
    <trust-section />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/reuseables/Footer.vue";
import MainSection from "@/components/home/MainSection.vue";
import WhatSection from "@/components/home/WhatSection.vue";
import WaysSection from "@/components/home/WaysSection.vue";
import TrustSection from "@/components/home/TrustSection.vue";

export default {
  name: "HomeView",
  components: {
    MainSection,
    WhatSection,
    WaysSection,
    TrustSection,
    Footer,
  },
};
</script>
