<template>
  <section id="top" class="hero section grain">
    <!-- background composition -->
    <div class="hero__bg" aria-hidden="true">
      <div class="hero__glow hero__glow--fire" />
      <div class="hero__glow hero__glow--gold" />
      <div class="hero__ring sd-rotate" />
      <svg class="hero__sparks" viewBox="0 0 800 800" aria-hidden="true">
        <defs>
          <radialGradient id="spark-g" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#FFB800" stop-opacity="1"/>
            <stop offset="100%" stop-color="#FFB800" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <circle cx="120" cy="180" r="2" fill="url(#spark-g)" />
        <circle cx="640" cy="220" r="3" fill="url(#spark-g)" />
        <circle cx="700" cy="540" r="2" fill="url(#spark-g)" />
        <circle cx="80" cy="620" r="3" fill="url(#spark-g)" />
        <circle cx="380" cy="120" r="1.5" fill="url(#spark-g)" />
        <circle cx="500" cy="700" r="2" fill="url(#spark-g)" />
      </svg>
    </div>

    <div class="container hero__inner">
      <!-- left column -->
      <div class="hero__copy">
        <span class="section-label" v-reveal="'down'">
          Desde 2019 · Artesanal · No carvão
        </span>

        <h1 class="hero__title">
          <span class="hero__line-1 t-display" v-reveal="'left'">Sabor que</span>
          <span class="hero__line-2 t-brush t-grad-fire" v-reveal="'right'" data-reveal-delay="120">explode</span>
          <span class="hero__line-3 t-display" v-reveal="'up'" data-reveal-delay="240">na boca</span>
        </h1>

        <p class="hero__lead" v-reveal="'up'" data-reveal-delay="320">
          Hambúrgueres preparados na chapa quente, pão fresco assado todo dia,
          ingredientes selecionados a dedo. Tudo do jeito que o Gú gosta — <em>do jeito certo</em>.
        </p>

        <div class="hero__actions" v-reveal="'up'" data-reveal-delay="420">
          <a href="#cardapio" class="btn btn-primary pulse-glow">
            <q-icon name="local_fire_department" size="20px" />
            Ver cardápio
          </a>
          <a href="#pedir" class="btn btn-ghost">
            <q-icon name="delivery_dining" size="20px" />
            Pedir delivery
          </a>
        </div>

        <div class="hero__stats">
          <div class="hero__stat" v-reveal="'down-left'" data-reveal-delay="500">
            <span class="hero__stat-num t-display t-grad-gold">5+</span>
            <span class="hero__stat-lbl">anos no fogo</span>
          </div>
          <div class="hero__stat" v-reveal="'down'" data-reveal-delay="600">
            <span class="hero__stat-num t-display t-grad-gold">12k</span>
            <span class="hero__stat-lbl">pedidos servidos</span>
          </div>
          <div class="hero__stat" v-reveal="'down-right'" data-reveal-delay="700">
            <span class="hero__stat-num t-display t-grad-gold">4.9</span>
            <span class="hero__stat-lbl">⭐ avaliação média</span>
          </div>
        </div>
      </div>

      <!-- right column — logo art -->
      <div class="hero__art">
        <div class="hero__art-orbit sd-rotate" aria-hidden="true">
          <span /><span /><span /><span />
        </div>
        <div class="hero__art-card" v-reveal="'zoom'">
          <div class="hero__art-card-inner float-y">
            <img src="/logo.png" alt="Logo Lanches do Gú" />
          </div>
          <div class="hero__art-badge t-mono" v-reveal="'tilt-r'" data-reveal-delay="500">
            <span>★ ★ ★ ★ ★</span>
            <small>O lanche oficial</small>
          </div>
          <div class="hero__art-tag t-mono" v-reveal="'tilt-l'" data-reveal-delay="650">
            <span class="dot" /> Aberto agora
          </div>
        </div>
      </div>
    </div>

    <!-- bottom marquee -->
    <div class="hero__marquee" v-reveal="'up'" data-reveal-delay="800">
      <div class="marquee">
        <div class="marquee__track">
          <span v-for="i in 2" :key="i" class="marquee__group t-display">
            <span>Carvão</span><span class="dot-sep">•</span>
            <span class="t-brush t-grad-fire">Suculento</span><span class="dot-sep">•</span>
            <span>Artesanal</span><span class="dot-sep">•</span>
            <span class="t-brush t-grad-gold">Do Gú</span><span class="dot-sep">•</span>
            <span>Fresquinho</span><span class="dot-sep">•</span>
            <span class="t-brush t-grad-fire">Hot</span><span class="dot-sep">•</span>
            <span>Chapa quente</span><span class="dot-sep">•</span>
            <span class="t-brush t-grad-gold">Pra acabar</span><span class="dot-sep">•</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
.hero {
  min-height: 100vh;
  padding: 160px 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

/* ---- background ---- */
.hero__bg { position: absolute; inset: 0; pointer-events: none; }
.hero__glow {
  position: absolute;
  width: 800px; height: 800px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: .55;
}
.hero__glow--fire {
  background: radial-gradient(circle, #FF4500, transparent 60%);
  top: -250px; right: -200px;
}
.hero__glow--gold {
  background: radial-gradient(circle, #FFB800, transparent 60%);
  bottom: -300px; left: -200px;
  opacity: .35;
}
.hero__ring {
  position: absolute;
  width: 900px; height: 900px;
  top: -200px; right: -300px;
  border: 1px dashed rgba(255, 184, 0, .12);
  border-radius: 50%;
  &::before, &::after {
    content: "";
    position: absolute; inset: 60px;
    border: 1px dashed rgba(255, 184, 0, .08);
    border-radius: 50%;
  }
  &::after { inset: 140px; }
}
.hero__sparks { position: absolute; inset: 0; width: 100%; height: 100%; opacity: .8; }

/* ---- inner grid ---- */
.hero__inner {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* ---- copy ---- */
.hero__copy { display: flex; flex-direction: column; gap: 24px; }
.hero__title {
  font-size: clamp(56px, 9vw, 132px);
  line-height: .88;
  margin: 6px 0 4px;
  display: flex;
  flex-direction: column;
  gap: 0;
  font-weight: 400;
}
.hero__line-1 { color: var(--c-text); }
.hero__line-2 {
  font-size: clamp(72px, 12vw, 180px);
  line-height: .9;
  margin: -4px 0;
  text-transform: none;
}
.hero__line-3 { color: var(--c-text); margin-top: 6px; }

.hero__lead {
  font-size: 18px;
  line-height: 1.6;
  color: var(--c-text-dim);
  max-width: 520px;
  em {
    color: var(--c-gold);
    font-style: italic;
    font-family: var(--f-brush);
    font-size: 22px;
  }
}

.hero__actions { display: flex; gap: 14px; flex-wrap: wrap; }

.hero__stats {
  display: flex;
  gap: 36px;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid var(--c-border);
}
.hero__stat { display: flex; flex-direction: column; gap: 4px; }
.hero__stat-num { font-size: 44px; line-height: 1; }
.hero__stat-lbl {
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: var(--c-text-mute);
}

/* ---- art ---- */
.hero__art {
  position: relative;
  aspect-ratio: 1;
  width: 100%;
  max-width: 520px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero__art-orbit {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px dashed rgba(255, 184, 0, .25);
  span {
    position: absolute;
    width: 14px; height: 14px;
    background: var(--c-gold);
    border-radius: 50%;
    box-shadow: 0 0 20px var(--c-gold);
  }
  span:nth-child(1) { top: -7px;  left: 50%; transform: translateX(-50%); }
  span:nth-child(2) { right: -7px; top: 50%; transform: translateY(-50%); background: var(--c-fire); box-shadow: 0 0 20px var(--c-fire); }
  span:nth-child(3) { bottom: -7px; left: 50%; transform: translateX(-50%); background: var(--c-tomato); box-shadow: 0 0 20px var(--c-tomato); }
  span:nth-child(4) { left: -7px; top: 50%; transform: translateY(-50%); }
}
.hero__art-card {
  position: relative;
  width: 84%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 35%, rgba(255, 107, 26, .35), transparent 60%);
}
.hero__art-card-inner {
  position: absolute; inset: 0;
  display: grid;
  place-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 30px 50px rgba(255, 107, 26, .5));
  }
}
.hero__art-badge {
  position: absolute;
  top: 8%;
  left: -12%;
  background: var(--c-bg-2);
  border: 1px solid var(--c-border);
  border-radius: var(--r-md);
  padding: 12px 16px;
  box-shadow: var(--sh-card);
  span { display: block; color: var(--c-gold); font-size: 14px; letter-spacing: .15em; }
  small {
    display: block;
    color: var(--c-text-dim);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: .18em;
    margin-top: 4px;
  }
}
.hero__art-tag {
  position: absolute;
  bottom: 10%;
  right: -8%;
  background: var(--c-bg-2);
  border: 1px solid var(--c-border);
  border-radius: var(--r-pill);
  padding: 10px 16px;
  font-size: 12px;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--c-text);
  display: flex; align-items: center; gap: 8px;
  box-shadow: var(--sh-card);
  .dot { width: 8px; height: 8px; border-radius: 50%; background: #21BA45; box-shadow: 0 0 8px #21BA45; }
}

/* ---- marquee ---- */
.hero__marquee {
  margin-top: 80px;
  position: relative; z-index: 2;
  border-top: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  padding: 24px 0;
}
.marquee__group {
  display: inline-flex;
  align-items: center;
  gap: 60px;
  font-size: 36px;
  letter-spacing: .04em;
  color: var(--c-text-dim);
}
.dot-sep {
  color: var(--c-gold);
  font-size: 28px;
}

@media (max-width: 980px) {
  .hero__inner { grid-template-columns: 1fr; gap: 60px; }
  .hero__art { max-width: 380px; margin: 0 auto; }
  .hero__stats { gap: 24px; }
  .hero__stat-num { font-size: 34px; }
  .marquee__group { font-size: 26px; }
}
@media (max-width: 480px) {
  .hero { padding-top: 130px; }
  .hero__stats { flex-wrap: wrap; gap: 18px; }
  .hero__stat { flex: 1 1 80px; }
  .hero__art-badge { top: 2%; left: -4%; padding: 8px 12px; }
  .hero__art-tag { right: -4%; bottom: 4%; }
  .marquee__group { font-size: 22px; gap: 36px; }
}
</style>
