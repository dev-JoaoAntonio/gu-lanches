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
            Tem só o que<br/>
            <span class="t-serif"><em>vale a pena</em></span> ter
          </h2>
        </div>
        <p class="section-lead" v-reveal="'left'" data-reveal-delay="180">
          Cardápio enxuto de propósito. O Gú não monta nada que ele mesmo não comeria. Os preços
          são os de bairro, os ingredientes vêm do mercado da esquina.
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
          <span class="burger__num t-mono">0{{ idx + 1 }}</span>
          <div class="burger__emoji" aria-hidden="true">{{ burger.emoji }}</div>

          <h3 class="burger__name t-display">{{ burger.name }}</h3>
          <p class="burger__sub t-hand">{{ burger.subtitle }}</p>
          <p class="burger__desc">{{ burger.description }}</p>

          <div class="burger__foot">
            <span class="burger__price">
              <small>R$</small>
              <strong class="t-mono">{{ burger.price.toFixed(2).replace('.', ',') }}</strong>
            </span>
            <a href="#pedir" class="burger__add" aria-label="Pedir esse">
              <q-icon name="arrow_outward" size="20px" />
            </a>
          </div>
        </article>
      </div>

      <div class="sides">
        <h3 class="sides__title t-display" v-reveal="'up'">
          <span class="t-serif"><em>pra acompanhar</em></span>
        </h3>
        <div class="sides__grid">
          <div
            v-for="(side, idx) in sides"
            :key="side.name"
            class="side"
            v-reveal="sidesReveals[idx]"
            :data-reveal-delay="idx * 100"
          >
            <q-icon :name="side.icon" size="28px" class="side__icon" />
            <div class="side__body">
              <h4>{{ side.name }}</h4>
              <p>{{ side.desc }}</p>
            </div>
            <span class="side__price t-mono">R$ {{ side.price.toFixed(2).replace('.', ',') }}</span>
          </div>
        </div>
      </div>

      <p class="menu__foot t-hand" v-reveal="'up'">
        * tem opção sem cebola, sem maionese, sem o que você não comer. é só falar no pedido.
      </p>
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
  opacity: .22;
  &--1 { top: -100px; right: -200px; background: radial-gradient(circle, #FFB800, transparent 60%); }
  &--2 { bottom: -200px; left: -300px; background: radial-gradient(circle, #E63946, transparent 60%); }
}

.menu__head {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 60px;
  align-items: end;
  margin-bottom: 70px;
  position: relative; z-index: 1;
}
.section-title .t-serif { font-size: 1em; vertical-align: 0; color: var(--c-gold); font-style: italic; font-weight: 700; text-transform: none; letter-spacing: -.01em; }

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
  padding: 28px 26px 22px;
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
.burger__num {
  position: absolute;
  top: 22px; right: 22px;
  font-size: 11px;
  color: var(--c-text-mute);
  letter-spacing: .15em;
}
.burger__emoji {
  font-size: 76px;
  line-height: 1;
  margin: 0 0 14px;
  filter: drop-shadow(0 18px 24px rgba(255, 107, 26, .5));
  transition: transform .4s cubic-bezier(.2,.7,.2,1);
}
.burger__name {
  font-size: 32px;
  color: var(--c-text);
  margin: 0;
}
.burger__sub {
  font-family: var(--f-hand);
  font-size: 22px;
  color: var(--c-gold);
  margin: 2px 0 6px;
}
.burger__desc {
  font-size: 14px;
  line-height: 1.6;
  color: var(--c-text-dim);
  margin: 4px 0 18px;
}
.burger__foot {
  display: flex; justify-content: space-between; align-items: center;
  margin-top: auto; padding-top: 14px;
  border-top: 1px dashed rgba(255,255,255,.08);
}
.burger__price {
  display: inline-flex; align-items: baseline; gap: 4px;
  color: var(--c-text);
  small { font-size: 12px; color: var(--c-text-mute); font-family: var(--f-mono); }
  strong { font-size: 28px; font-weight: 700; }
}
.burger__add {
  width: 42px; height: 42px;
  border-radius: 50%;
  background: var(--c-bg-3);
  border: 1px solid var(--c-border);
  color: var(--c-gold);
  display: grid; place-items: center;
  transition: transform .3s, background .3s, color .3s;
  &:hover {
    transform: rotate(-12deg) scale(1.08);
    background: var(--c-gold);
    color: #1b0900;
  }
}

.sides {
  margin-top: 110px;
  position: relative; z-index: 1;
}
.sides__title {
  font-size: clamp(32px, 4vw, 52px);
  margin: 0 0 32px;
  text-transform: lowercase;
  .t-serif { font-style: italic; color: var(--c-gold); font-weight: 600; text-transform: none; letter-spacing: -.01em; }
}
.sides__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.side {
  background: var(--c-bg-2);
  border: 1px solid rgba(255,255,255,.06);
  border-radius: var(--r-md);
  padding: 20px;
  display: flex; align-items: center; gap: 16px;
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
  h4 { font-size: 14px; margin: 0 0 3px; color: var(--c-text); font-weight: 600; font-family: var(--f-body); }
  p { font-size: 12px; color: var(--c-text-mute); margin: 0; }
}
.side__price { color: var(--c-gold); font-size: 14px; font-weight: 600; }

.menu__foot {
  margin-top: 36px;
  text-align: center;
  font-size: 22px;
  color: var(--c-text-mute);
}

@media (max-width: 980px) {
  .menu__head { grid-template-columns: 1fr; gap: 24px; }
  .menu__grid { grid-template-columns: repeat(2, 1fr); }
  .sides__grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .menu__grid { grid-template-columns: 1fr; }
  .sides__grid { grid-template-columns: 1fr; }
  .burger__emoji { font-size: 62px; }
}
</style>
