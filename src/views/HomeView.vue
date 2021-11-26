<template>
  <div class="home">
    <Header />
    <main-section />
    <what-section />
    <services-section />
    <trustees-section />
    <about-section />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/navbar/Header.vue'
import Footer from '@/components/reuseables/Footer.vue'
import MainSection from '@/components/home/MainSection.vue'
import WhatSection from '@/components/home/WhatSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import TrusteesSection from '@/components/home/TrusteesSection.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    MainSection,
    WhatSection,
    ServicesSection,
    TrusteesSection,
    AboutSection,
    Footer
  }
}
</script>
