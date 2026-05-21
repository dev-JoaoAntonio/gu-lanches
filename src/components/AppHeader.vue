<template>
  <header class="hdr" :class="{ 'is-scrolled': scrolled }">
    <div class="hdr__progress sd-progress" aria-hidden="true" />
    <div class="container hdr__inner">
      <a href="#top" class="hdr__brand">
        <img src="/logo.png" alt="Lanches do Gú" class="hdr__logo" />
        <span class="hdr__brand-text">
          <span class="hdr__brand-up t-up">Hambúrgueres</span>
          <span class="hdr__brand-name t-brush">Lanches do Gú</span>
        </span>
      </a>
      <nav class="hdr__nav">
        <a href="#cardapio" class="hdr__link">Cardápio</a>
        <a href="#historia" class="hdr__link">A história</a>
        <a href="#depoimentos" class="hdr__link">Quem provou</a>
        <a href="#onde" class="hdr__link">Onde estamos</a>
      </nav>
      <a href="#pedir" class="btn btn-primary hdr__cta">
        <q-icon name="bolt" size="18px" />
        Pedir agora
      </a>
      <button class="hdr__burger" :class="{ open: mobileOpen }" @click="mobileOpen = !mobileOpen" aria-label="Menu">
        <span /><span /><span />
      </button>
    </div>
    <div class="hdr__mobile" :class="{ open: mobileOpen }">
      <a href="#cardapio" @click="mobileOpen = false">Cardápio</a>
      <a href="#historia" @click="mobileOpen = false">A história</a>
      <a href="#depoimentos" @click="mobileOpen = false">Quem provou</a>
      <a href="#onde" @click="mobileOpen = false">Onde estamos</a>
      <a href="#pedir" @click="mobileOpen = false" class="btn btn-primary">Pedir agora</a>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)
function onScroll() { scrolled.value = window.scrollY > 24 }
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }) })
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped lang="scss">
.hdr {
  position: fixed; inset: 0 0 auto 0;
  z-index: 100;
  padding: 18px 0;
  transition: padding .3s, background .3s, backdrop-filter .3s;
  &.is-scrolled {
    padding: 10px 0;
    background: rgba(5,5,5,.72);
    backdrop-filter: blur(18px) saturate(140%);
    -webkit-backdrop-filter: blur(18px) saturate(140%);
    border-bottom: 1px solid var(--c-border);
  }
}
.hdr__progress {
  position: absolute; left: 0; bottom: 0;
  height: 2px; width: 100%;
  background: var(--g-fire);
  transform-origin: left;
  transform: scaleX(0);
}
.hdr__inner {
  display: flex; align-items: center; gap: 24px;
}
.hdr__brand {
  display: flex; align-items: center; gap: 14px;
  font-family: var(--f-display);
  cursor: pointer;
  flex-shrink: 0;
}
.hdr__logo {
  width: 46px; height: 46px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 0 2px var(--c-gold), 0 10px 30px -8px rgba(255, 184, 0, .6);
  transition: transform .4s;
}
.hdr__brand:hover .hdr__logo { transform: rotate(-6deg) scale(1.05); }
.hdr__brand-text { display: flex; flex-direction: column; line-height: 1; }
.hdr__brand-up {
  font-size: 9px;
  color: var(--c-gold);
}
.hdr__brand-name {
  font-size: 22px;
  margin-top: 4px;
  color: var(--c-cream);
  letter-spacing: .005em;
}
.hdr__nav {
  display: flex; gap: 28px;
  margin-left: auto;
}
.hdr__link {
  font-family: var(--f-mono);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: .04em;
  text-transform: uppercase;
  color: var(--c-text-dim);
  position: relative;
  padding: 6px 0;
  transition: color .2s;
  &::after {
    content: "";
    position: absolute; left: 0; right: 0; bottom: 0;
    height: 2px;
    background: var(--g-fire);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform .35s cubic-bezier(.2,.7,.2,1);
  }
  &:hover {
    color: var(--c-text);
    &::after { transform: scaleX(1); transform-origin: left; }
  }
}
.hdr__cta { padding: 12px 20px; font-size: 12px; }
.hdr__burger {
  display: none;
  background: none;
  border: 1px solid var(--c-border);
  border-radius: 10px;
  width: 44px; height: 44px;
  padding: 0;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  span {
    width: 20px; height: 2px;
    background: var(--c-gold);
    transition: transform .3s, opacity .2s;
    transform-origin: center;
  }
  &.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  &.open span:nth-child(2) { opacity: 0; }
  &.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
}
.hdr__mobile {
  display: none;
  position: absolute; top: 100%; left: 0; right: 0;
  background: rgba(5,5,5,.96);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--c-border);
  padding: 18px 24px 28px;
  flex-direction: column;
  gap: 14px;
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
  transition: opacity .3s, transform .3s;
  &.open { opacity: 1; transform: translateY(0); pointer-events: auto; }
  a {
    font-family: var(--f-mono);
    font-size: 18px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255,255,255,.05);
    color: var(--c-text);
    text-transform: uppercase;
    letter-spacing: .04em;
    &.btn { justify-content: center; border-bottom: 0; }
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
  .hdr__logo { width: 40px; height: 40px; }
}
</style>
