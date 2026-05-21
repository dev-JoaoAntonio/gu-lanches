<template>
  <section id="top" class="hero">
    <div class="hero__bg" aria-hidden="true">
      <div class="hero__tint hero__tint--gold sd-parallax-slow" />
      <div class="hero__tint hero__tint--fire sd-parallax-fast" />
    </div>

    <div class="container hero__inner">
      <div class="hero__copy">
        <div class="hero__eyebrow" v-reveal="'down'">
          <span class="hero__eyebrow-line" />
          <span>Aparecida de Goiânia · Hambúrgueres feitos em casa</span>
        </div>

        <h1 class="hero__title">
          <span class="hero__title-line t-display" v-reveal="'left'">
            Cozinha de casa,
          </span>
          <span class="hero__title-line t-display-italic" v-reveal="'right'" data-reveal-delay="120">
            no capricho
          </span>
          <span class="hero__title-line t-display" v-reveal="'up'" data-reveal-delay="240">
            da família.
          </span>
        </h1>

        <p class="hero__lead" v-reveal="'up'" data-reveal-delay="340">
          Hambúrgueres preparados em uma cozinha de bairro, com ingredientes do mercado da esquina
          e pão fresco da padaria do lado. Cardápio enxuto, atendimento próprio, sextas, sábados e domingos.
        </p>

        <div class="hero__actions" v-reveal="'up'" data-reveal-delay="440">
          <a :href="IFOOD_URL" class="btn btn-primary" target="_blank" rel="noopener">
            Peça no iFood
          </a>
          <a href="#cardapio" class="btn btn-ghost">Ver o cardápio</a>
        </div>

        <dl class="hero__stats" v-reveal="'up'" data-reveal-delay="560">
          <div class="hero__stat">
            <dt class="t-up">Cozinha aberta</dt>
            <dd class="t-display">Sex · Sáb · Dom</dd>
          </div>
          <div class="hero__stat">
            <dt class="t-up">Ingredientes</dt>
            <dd class="t-display">do mercado da esquina</dd>
          </div>
          <div class="hero__stat">
            <dt class="t-up">Cardápio</dt>
            <dd class="t-display">curto, por escolha</dd>
          </div>
        </dl>
      </div>

      <aside class="hero__art" v-reveal="'zoom'">
        <div class="hero__plate">
          <div class="hero__plate-inner float-y">
            <img src="/logo.png" alt="Lanches do Gú" />
          </div>
          <div class="hero__plate-ring sd-rotate-slow" />
        </div>
        <div class="hero__caption" v-reveal="'tilt-r'" data-reveal-delay="380">
          <span class="t-up">Desde</span>
          <strong class="t-display-italic">2024</strong>
        </div>
        <div class="hero__chip" v-reveal="'tilt-l'" data-reveal-delay="500">
          <span class="hero__chip-dot" />
          <span>Pedidos online · iFood</span>
        </div>
      </aside>
    </div>

    <div class="hero__strip" v-reveal="'up'" data-reveal-delay="700">
      <div class="marquee">
        <div class="marquee__track">
          <span v-for="i in 2" :key="i" class="marquee__group">
            <span class="t-display">Carne fresca</span>
            <span class="dot">·</span>
            <span class="t-display-italic">pão da padaria</span>
            <span class="dot">·</span>
            <span class="t-display">molho da casa</span>
            <span class="dot">·</span>
            <span class="t-display-italic">cardápio enxuto</span>
            <span class="dot">·</span>
            <span class="t-display">atendimento próprio</span>
            <span class="dot">·</span>
            <span class="t-display-italic">sexta a domingo</span>
            <span class="dot">·</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { IFOOD_URL } from '@/config'
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  padding: 160px 0 0;
  overflow: hidden;
}

/* ---- background sutil ---- */
.hero__bg { position: absolute; inset: 0; pointer-events: none; }
.hero__tint {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: .55;
}
.hero__tint--gold {
  width: 600px; height: 600px;
  top: -150px; right: -150px;
  background: radial-gradient(circle, var(--c-gold-bg), transparent 70%);
}
.hero__tint--fire {
  width: 500px; height: 500px;
  bottom: -200px; left: -100px;
  background: radial-gradient(circle, #FBE3D2, transparent 70%);
  opacity: .8;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 2;
  padding-bottom: 90px;
}

.hero__copy { display: flex; flex-direction: column; gap: 28px; }

.hero__eyebrow {
  display: flex; align-items: center; gap: 16px;
  font-family: var(--f-mono);
  text-transform: uppercase;
  letter-spacing: .22em;
  font-size: 11px;
  color: var(--c-text-mute);
  font-weight: 500;
}
.hero__eyebrow-line {
  display: inline-block;
  width: 40px; height: 1px;
  background: var(--c-fire);
}

.hero__title {
  font-size: clamp(54px, 7.5vw, 116px);
  line-height: .98;
  margin: 0;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  letter-spacing: -.03em;
}
.hero__title-line { display: block; }
.hero__title .t-display-italic { color: var(--c-fire); }

.hero__lead {
  font-size: 19px;
  line-height: 1.6;
  color: var(--c-text-dim);
  max-width: 560px;
  margin: 0;
}

.hero__actions {
  display: flex; gap: 12px; flex-wrap: wrap;
}

.hero__stats {
  margin: 18px 0 0;
  padding: 28px 0 0;
  border-top: 1px solid var(--c-border);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.hero__stat {
  display: flex; flex-direction: column; gap: 8px;
}
.hero__stat dt {
  color: var(--c-text-mute);
}
.hero__stat dd {
  margin: 0;
  font-family: var(--f-display);
  font-variation-settings: "opsz" 144;
  font-size: 22px;
  font-weight: 500;
  color: var(--c-text);
  letter-spacing: -.01em;
  line-height: 1.15;
}

/* ---- art ---- */
.hero__art {
  position: relative;
  aspect-ratio: 1;
  width: 100%;
  max-width: 480px;
  margin-left: auto;
}
.hero__plate {
  position: relative;
  width: 100%; height: 100%;
  background: var(--c-bg-2);
  border-radius: 50%;
  border: 1px solid var(--c-border);
  box-shadow: var(--sh-card);
  display: grid; place-items: center;
}
.hero__plate-inner {
  width: 82%; height: 82%;
  border-radius: 50%;
  display: grid; place-items: center;
  img {
    width: 100%; height: 100%;
    object-fit: contain;
  }
}
.hero__plate-ring {
  position: absolute; inset: -20px;
  border-radius: 50%;
  border: 1px dashed var(--c-border-strong);
  pointer-events: none;
}

.hero__caption {
  position: absolute;
  top: -10px;
  left: -20px;
  background: var(--c-bg-2);
  border: 1px solid var(--c-border);
  border-radius: var(--r-md);
  padding: 12px 16px;
  box-shadow: var(--sh-card);
  display: flex; flex-direction: column; gap: 4px;
  min-width: 92px;
  span { color: var(--c-text-mute); }
  strong {
    font-size: 26px;
    color: var(--c-fire);
    line-height: 1;
    font-weight: 500;
  }
}

.hero__chip {
  position: absolute;
  bottom: 6%;
  right: -10px;
  background: var(--c-deep);
  color: var(--c-cream);
  border-radius: var(--r-pill);
  padding: 9px 16px;
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: .15em;
  text-transform: uppercase;
  display: flex; align-items: center; gap: 8px;
  box-shadow: var(--sh-card);
}
.hero__chip-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #34D399;
}

/* ---- strip ---- */
.hero__strip {
  border-top: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  padding: 22px 0;
  background: var(--c-bg-soft);
}
.marquee__group {
  display: inline-flex;
  align-items: center;
  gap: 32px;
  font-size: 22px;
  color: var(--c-text);
  letter-spacing: -.01em;
}
.marquee__group .t-display-italic { color: var(--c-fire); }
.dot { color: var(--c-gold); font-size: 18px; }

@media (max-width: 980px) {
  .hero__inner { grid-template-columns: 1fr; gap: 60px; padding-bottom: 70px; }
  .hero__art { max-width: 360px; margin: 0 auto; }
  .hero__stats { grid-template-columns: 1fr; gap: 14px; }
  .marquee__group { font-size: 18px; gap: 22px; }
}
@media (max-width: 480px) {
  .hero { padding-top: 120px; }
  .hero__caption { left: -8px; padding: 10px 12px; strong { font-size: 22px; } }
  .hero__chip { right: -4px; }
}
</style>
