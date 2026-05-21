<template>
  <q-layout view="hHh lpr fFf" class="app">
    <AppHeader />
    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
    <AppFooter />
  </q-layout>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style lang="scss">
.app { background: var(--c-bg); color: var(--c-text); }

.page-enter-active, .page-leave-active {
  transition: opacity .4s cubic-bezier(.2,.7,.2,1), filter .4s, transform .4s;
}
.page-enter-from { opacity: 0; filter: blur(14px); transform: translateY(20px); }
.page-leave-to   { opacity: 0; filter: blur(14px); transform: translateY(-20px); }
</style>
