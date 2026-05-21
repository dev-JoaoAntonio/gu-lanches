<template>
  <header class="hdr" :class="{ 'is-scrolled': scrolled }">
    <div class="hdr__progress sd-progress" aria-hidden="true" />
    <div class="container hdr__inner">
      <router-link to="/" class="hdr__brand" @click="mobileOpen = false">
        <img src="/logo.png" alt="Lanches do Gú" class="hdr__logo" />
        <span class="hdr__brand-text">
          <span class="hdr__brand-up">Hambúrgueres feitos em casa</span>
          <span class="hdr__brand-name">Lanches do Gú</span>
        </span>
      </router-link>

      <nav class="hdr__nav">
        <a :href="homeHash('cardapio')" class="hdr__link" @click="handleHash($event, 'cardapio')">Cardápio</a>
        <router-link to="/quem-somos" class="hdr__link" active-class="is-active">A casa</router-link>
        <a :href="homeHash('depoimentos')" class="hdr__link" @click="handleHash($event, 'depoimentos')">Avaliações</a>
        <a :href="homeHash('onde')" class="hdr__link" @click="handleHash($event, 'onde')">Como pedir</a>
      </nav>

      <a :href="IFOOD_URL" class="btn btn-primary hdr__cta" target="_blank" rel="noopener">
        Peça no iFood
      </a>

      <button class="hdr__burger" :class="{ open: mobileOpen }" @click="mobileOpen = !mobileOpen" aria-label="Menu">
        <span /><span /><span />
      </button>
    </div>
    <div class="hdr__mobile" :class="{ open: mobileOpen }">
      <a :href="homeHash('cardapio')" @click="handleHash($event, 'cardapio'); mobileOpen = false">Cardápio</a>
      <router-link to="/quem-somos" @click="mobileOpen = false">A casa</router-link>
      <a :href="homeHash('depoimentos')" @click="handleHash($event, 'depoimentos'); mobileOpen = false">Avaliações</a>
      <a :href="homeHash('onde')" @click="handleHash($event, 'onde'); mobileOpen = false">Como pedir</a>
      <a :href="IFOOD_URL" class="btn btn-primary" target="_blank" rel="noopener">
        Peça no iFood
      </a>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { IFOOD_URL } from '@/config'

const route = useRoute()
const router = useRouter()
const scrolled = ref(false)
const mobileOpen = ref(false)

function onScroll() { scrolled.value = window.scrollY > 24 }
function homeHash(id) { return route.path === '/' ? `#${id}` : `/#${id}` }
function handleHash(event, id) {
  if (route.path !== '/') {
    event.preventDefault()
    router.push({ path: '/', hash: `#${id}` })
  }
}

onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }) })
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped lang="scss">
.hdr {
  position: fixed; inset: 0 0 auto 0;
  z-index: 100;
  padding: 16px 0;
  background: rgba(247, 242, 232, 0);
  transition: padding .3s, background .3s, backdrop-filter .3s, border-color .3s;
  border-bottom: 1px solid transparent;
  &.is-scrolled {
    padding: 10px 0;
    background: rgba(247, 242, 232, 0.86);
    backdrop-filter: blur(16px) saturate(140%);
    -webkit-backdrop-filter: blur(16px) saturate(140%);
    border-bottom-color: var(--c-border);
  }
}
.hdr__progress {
  position: absolute; left: 0; bottom: -1px;
  height: 2px; width: 100%;
  background: var(--c-fire);
  transform-origin: left;
  transform: scaleX(0);
}
.hdr__inner { display: flex; align-items: center; gap: 24px; }

.hdr__brand {
  display: flex; align-items: center; gap: 12px;
  cursor: pointer; flex-shrink: 0;
}
.hdr__logo {
  width: 42px; height: 42px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--c-border);
  transition: transform .4s;
}
.hdr__brand:hover .hdr__logo { transform: scale(1.04); }
.hdr__brand-text { display: flex; flex-direction: column; line-height: 1; }
.hdr__brand-up {
  font-family: var(--f-mono);
  font-size: 9px;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--c-text-mute);
  font-weight: 500;
}
.hdr__brand-name {
  font-family: var(--f-display);
  font-variation-settings: "opsz" 144;
  font-style: italic;
  font-weight: 600;
  font-size: 22px;
  margin-top: 4px;
  color: var(--c-text);
  letter-spacing: -.01em;
}

.hdr__nav { display: flex; gap: 32px; margin-left: auto; }
.hdr__link {
  font-family: var(--f-mono);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: .03em;
  color: var(--c-text-dim);
  position: relative;
  padding: 6px 0;
  transition: color .2s;
  &::after {
    content: "";
    position: absolute; left: 0; right: 0; bottom: 0;
    height: 1px;
    background: var(--c-fire);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform .35s cubic-bezier(.2,.7,.2,1);
  }
  &:hover, &.is-active {
    color: var(--c-text);
    &::after { transform: scaleX(1); transform-origin: left; }
  }
}
.hdr__cta { padding: 11px 18px; font-size: 12px; }

.hdr__burger {
  display: none;
  background: none;
  border: 1px solid var(--c-border-strong);
  border-radius: 6px;
  width: 42px; height: 42px;
  padding: 0;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  span {
    width: 18px; height: 1.5px;
    background: var(--c-text);
    transition: transform .3s, opacity .2s;
    transform-origin: center;
  }
  &.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
  &.open span:nth-child(2) { opacity: 0; }
  &.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
}
.hdr__mobile {
  display: none;
  position: absolute; top: 100%; left: 0; right: 0;
  background: rgba(247, 242, 232, 0.98);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--c-border);
  padding: 18px 24px 28px;
  flex-direction: column;
  gap: 6px;
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
  transition: opacity .3s, transform .3s;
  &.open { opacity: 1; transform: translateY(0); pointer-events: auto; }
  a {
    font-family: var(--f-mono);
    font-size: 15px;
    padding: 14px 0;
    border-bottom: 1px solid var(--c-border);
    color: var(--c-text);
    letter-spacing: .04em;
    &.btn { justify-content: center; border-bottom: 0; margin-top: 12px; }
  }
}
@media (max-width: 980px) {
  .hdr__nav, .hdr__cta { display: none; }
  .hdr__burger { display: inline-flex; margin-left: auto; }
  .hdr__mobile { display: flex; }
}
@media (max-width: 480px) {
  .hdr__brand-name { font-size: 18px; }
  .hdr__brand-up { font-size: 8px; }
  .hdr__logo { width: 38px; height: 38px; }
}
</style>
