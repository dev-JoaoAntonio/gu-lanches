<template>
  <q-layout view="hHh lpr fFf" class="app">
    <AppHeader />
    <q-page-container>
      <main>
        <HeroSection />
        <MenuSection />
        <AboutSection />
        <TestimonialsSection />
        <LocationSection />
      </main>
    </q-page-container>
    <AppFooter />
  </q-layout>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import MenuSection from '@/components/MenuSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import LocationSection from '@/components/LocationSection.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style lang="scss">
.app { background: var(--c-bg); color: var(--c-text); }
</style>
