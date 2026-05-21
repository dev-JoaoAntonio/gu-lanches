<template>
  <section id="cardapio" class="menu section">
    <div class="menu__bg" aria-hidden="true">
      <div class="menu__blob menu__blob--1 sd-parallax-slow" />
      <div class="menu__blob menu__blob--2 sd-parallax-fast" />
    </div>

    <div class="container">
      <div class="menu__head">
        <div>
          <span class="section-label" v-reveal="'right'">Cardápio</span>
          <h2 class="section-title" v-reveal="'up'" data-reveal-delay="100">
            Os <span class="t-brush t-grad-fire">lanches</span> que<br/>
            todo mundo pede de novo
          </h2>
        </div>
        <p class="section-lead" v-reveal="'left'" data-reveal-delay="180">
          Cada lanche é montado na hora, com pão fresco do dia, blends próprios
          e molhos feitos aqui dentro. Escolhe o teu e vem.
        </p>
      </div>

      <div class="menu__grid">
        <article
          v-for="(burger, idx) in burgers"
          :key="burger.id"
          class="burger"
          v-reveal="reveals[idx % reveals.length]"
          :data-reveal-delay="idx * 90"
        >
          <div class="burger__top">
            <span class="burger__tag">{{ burger.tag }}</span>
            <span class="burger__spicy" v-if="burger.spicy">
              <span v-for="n in burger.spicy" :key="n">🌶️</span>
            </span>
          </div>

          <div class="burger__emoji" aria-hidden="true">{{ burger.emoji }}</div>

          <h3 class="burger__name t-display">{{ burger.name }}</h3>
          <p class="burger__sub t-brush">{{ burger.subtitle }}</p>
          <p class="burger__desc">{{ burger.description }}</p>

          <div class="burger__foot">
            <span class="burger__price">
              <small>R$</small>
              <strong class="t-mono">{{ burger.price.toFixed(2).replace('.', ',') }}</strong>
            </span>
            <button class="burger__add" aria-label="Adicionar ao pedido">
              <q-icon name="add" size="20px" />
            </button>
          </div>
        </article>
      </div>

      <!-- combos / sides -->
      <div class="sides">
        <h3 class="sides__title t-display" v-reveal="'up'">
          <span class="t-brush t-grad-gold">Acompanha</span> bem
        </h3>
        <div class="sides__grid">
          <div
            v-for="(side, idx) in sides"
            :key="side.name"
            class="side"
            v-reveal="sidesReveals[idx]"
            :data-reveal-delay="idx * 100"
          >
            <q-icon :name="side.icon" size="32px" class="side__icon" />
            <div class="side__body">
              <h4 class="t-mono">{{ side.name }}</h4>
              <p>{{ side.desc }}</p>
            </div>
            <span class="side__price t-mono">R$ {{ side.price.toFixed(2).replace('.', ',') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { burgers, sides } from '@/data/menu'

const reveals = ['up-left', 'up', 'up-right', 'down-left', 'zoom', 'down-right']
const sidesReveals = ['left', 'up', 'down', 'right']
</script>

<style scoped lang="scss">
.menu { position: relative; overflow: hidden; }
.menu__bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
.menu__blob {
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  filter: blur(150px);
  opacity: .25;
  &--1 { top: -100px; right: -200px; background: radial-gradient(circle, #FFB800, transparent 60%); }
  &--2 { bottom: -200px; left: -300px; background: radial-gradient(circle, #E63946, transparent 60%); }
}

.menu__head {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 60px;
  align-items: end;
  margin-bottom: 70px;
  position: relative;
  z-index: 1;
}
.section-title .t-brush { font-size: 1.15em; vertical-align: -0.05em; }

.menu__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  position: relative; z-index: 1;
}
.burger {
  position: relative;
  background: linear-gradient(180deg, var(--c-bg-3) 0%, var(--c-bg-2) 100%);
  border: 1px solid rgba(255,255,255,.06);
  border-radius: var(--r-lg);
  padding: 26px 24px 22px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow: hidden;
  transition: transform .35s cubic-bezier(.2,.7,.2,1), border-color .35s, box-shadow .35s;
  &::before {
    content: "";
    position: absolute; inset: -1px;
    background: var(--g-fire);
    border-radius: inherit;
    opacity: 0;
    z-index: -1;
    transition: opacity .35s;
  }
  &:hover {
    transform: translateY(-6px);
    border-color: transparent;
    box-shadow: var(--sh-card), 0 30px 60px -10px rgba(255,107,26,.35);
    &::before { opacity: .9; }
    .burger__emoji { transform: scale(1.15) rotate(-6deg); }
  }
}
.burger__top {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 8px;
}
.burger__tag {
  font-family: var(--f-mono);
  font-size: 10px;
  letter-spacing: .15em;
  text-transform: uppercase;
  padding: 6px 10px;
  border-radius: var(--r-pill);
  background: rgba(255, 184, 0, .12);
  color: var(--c-gold);
  border: 1px solid var(--c-border);
}
.burger__spicy { font-size: 14px; }
.burger__emoji {
  font-size: 90px;
  line-height: 1;
  margin: 6px 0;
  filter: drop-shadow(0 18px 24px rgba(255, 107, 26, .5));
  transition: transform .4s cubic-bezier(.2,.7,.2,1);
}
.burger__name {
  font-size: 30px;
  color: var(--c-text);
  margin: 4px 0 0;
}
.burger__sub {
  font-family: var(--f-brush);
  font-size: 20px;
  color: var(--c-gold);
  margin: 0;
}
.burger__desc {
  font-size: 14px;
  line-height: 1.55;
  color: var(--c-text-dim);
  margin: 8px 0 16px;
}
.burger__foot {
  display: flex; justify-content: space-between; align-items: center;
  margin-top: auto; padding-top: 12px;
  border-top: 1px dashed rgba(255,255,255,.08);
}
.burger__price {
  display: inline-flex; align-items: baseline; gap: 4px;
  color: var(--c-text);
  small { font-size: 12px; color: var(--c-text-mute); font-family: var(--f-mono); }
  strong { font-size: 28px; font-weight: 700; }
}
.burger__add {
  width: 44px; height: 44px;
  border-radius: 50%;
  background: var(--g-fire);
  color: #1b0900;
  border: 0;
  cursor: pointer;
  display: grid; place-items: center;
  transition: transform .3s, box-shadow .3s;
  &:hover { transform: rotate(90deg) scale(1.06); box-shadow: 0 12px 30px -8px rgba(255,107,26,.7); }
}

/* sides */
.sides {
  margin-top: 100px;
  position: relative; z-index: 1;
}
.sides__title {
  font-size: clamp(36px, 5vw, 60px);
  margin: 0 0 32px;
  .t-brush { font-size: 1.1em; vertical-align: -.05em; }
}
.sides__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
.side {
  background: var(--c-bg-2);
  border: 1px solid rgba(255,255,255,.06);
  border-radius: var(--r-md);
  padding: 22px;
  display: flex; align-items: center; gap: 18px;
  transition: transform .3s, background .3s, border-color .3s;
  &:hover {
    transform: translateY(-3px);
    background: var(--c-bg-3);
    border-color: var(--c-border);
  }
}
.side__icon { color: var(--c-gold); }
.side__body {
  flex: 1;
  h4 { font-size: 14px; margin: 0 0 4px; text-transform: uppercase; letter-spacing: .08em; color: var(--c-text); font-weight: 600; }
  p { font-size: 12px; color: var(--c-text-mute); margin: 0; }
}
.side__price { color: var(--c-gold); font-size: 14px; font-weight: 600; }

@media (max-width: 980px) {
  .menu__head { grid-template-columns: 1fr; gap: 24px; }
  .menu__grid { grid-template-columns: repeat(2, 1fr); }
  .sides__grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .menu__grid { grid-template-columns: 1fr; }
  .sides__grid { grid-template-columns: 1fr; }
  .burger__emoji { font-size: 72px; }
}
</style>
