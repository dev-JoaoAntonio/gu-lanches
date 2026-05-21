<template>
  <section id="top" class="hero section grain">
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
      <div class="hero__copy">
        <span class="section-label" v-reveal="'down'">
          Goiânia · Cozinha de casa
        </span>

        <h1 class="hero__title">
          <span class="hero__line-1 t-display" v-reveal="'left'">Hambúrguer</span>
          <span class="hero__line-2 t-serif" v-reveal="'right'" data-reveal-delay="120">
            <em>feito em casa,</em>
          </span>
          <span class="hero__line-3 t-display" v-reveal="'up'" data-reveal-delay="240">
            com a família junto.
          </span>
        </h1>

        <p class="hero__lead" v-reveal="'up'" data-reveal-delay="320">
          Quem cozinha aqui é o <strong>Gú</strong>, 11 anos. A mãe ajuda, as irmãs fazem
          a lição em cima da mesa enquanto o pão vai pra chapa. O cardápio é curto,
          a fila é pequena, o lanche sai quentinho.
        </p>

        <div class="hero__actions" v-reveal="'up'" data-reveal-delay="420">
          <a href="#cardapio" class="btn btn-primary pulse-glow">
            <q-icon name="restaurant_menu" size="20px" />
            Ver o cardápio
          </a>
          <router-link to="/quem-somos" class="btn btn-ghost">
            <q-icon name="arrow_forward" size="20px" />
            Conhecer o Gú
          </router-link>
        </div>

        <div class="hero__stats">
          <div class="hero__stat" v-reveal="'down-left'" data-reveal-delay="500">
            <span class="hero__stat-num t-display t-grad-gold">11</span>
            <span class="hero__stat-lbl">anos<br/>o chef da casa</span>
          </div>
          <div class="hero__stat" v-reveal="'down'" data-reveal-delay="600">
            <span class="hero__stat-num t-display t-grad-gold">3</span>
            <span class="hero__stat-lbl">dias<br/>de cozinha por semana</span>
          </div>
          <div class="hero__stat" v-reveal="'down-right'" data-reveal-delay="700">
            <span class="hero__stat-num t-display t-grad-gold">1</span>
            <span class="hero__stat-lbl">família<br/>na cozinha junto</span>
          </div>
        </div>
      </div>

      <div class="hero__art">
        <div class="hero__art-orbit sd-rotate" aria-hidden="true">
          <span /><span /><span /><span />
        </div>
        <div class="hero__art-card" v-reveal="'zoom'">
          <div class="hero__art-card-inner float-y">
            <img src="/logo.png" alt="Logo Lanches do Gú" />
          </div>
          <div class="hero__art-badge" v-reveal="'tilt-r'" data-reveal-delay="500">
            <span class="t-hand">"</span>
            <p class="t-hand">o lanche é caprichado mesmo</p>
            <small class="t-mono">— a vó do Gú</small>
          </div>
          <div class="hero__art-tag t-mono" v-reveal="'tilt-l'" data-reveal-delay="650">
            <span class="dot" /> sex · sáb · dom
          </div>
        </div>
      </div>
    </div>

    <div class="hero__marquee" v-reveal="'up'" data-reveal-delay="800">
      <div class="marquee">
        <div class="marquee__track">
          <span v-for="i in 2" :key="i" class="marquee__group t-display">
            <span>na chapa</span><span class="dot-sep">•</span>
            <span class="t-brush t-grad-fire">caprichado</span><span class="dot-sep">•</span>
            <span>pão fresquinho</span><span class="dot-sep">•</span>
            <span class="t-brush t-grad-gold">do Gú</span><span class="dot-sep">•</span>
            <span>com molho da mãe</span><span class="dot-sep">•</span>
            <span class="t-brush t-grad-fire">tem brigadeiro</span><span class="dot-sep">•</span>
            <span>fim de semana</span><span class="dot-sep">•</span>
            <span class="t-brush t-grad-gold">aqui de casa</span><span class="dot-sep">•</span>
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
  opacity: .5;
}
.hero__glow--fire {
  background: radial-gradient(circle, #FF4500, transparent 60%);
  top: -250px; right: -200px;
}
.hero__glow--gold {
  background: radial-gradient(circle, #FFB800, transparent 60%);
  bottom: -300px; left: -200px;
  opacity: .3;
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

.hero__inner {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero__copy { display: flex; flex-direction: column; gap: 24px; }
.hero__title {
  font-size: clamp(52px, 7.5vw, 112px);
  line-height: .95;
  margin: 6px 0 4px;
  display: flex;
  flex-direction: column;
  font-weight: 400;
}
.hero__line-1 { color: var(--c-text); }
.hero__line-2 {
  font-size: clamp(64px, 9vw, 132px);
  line-height: 1;
  font-style: italic;
  font-weight: 600;
  color: var(--c-gold);
  text-transform: none;
  letter-spacing: -.01em;
  em { font-style: italic; }
}
.hero__line-3 { color: var(--c-text); }

.hero__lead {
  font-size: 18px;
  line-height: 1.65;
  color: var(--c-text-dim);
  max-width: 540px;
  strong { color: var(--c-gold); font-weight: 600; }
}

.hero__actions { display: flex; gap: 14px; flex-wrap: wrap; }

.hero__stats {
  display: flex;
  gap: 36px;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid var(--c-border);
}
.hero__stat { display: flex; flex-direction: column; gap: 6px; max-width: 140px; }
.hero__stat-num { font-size: 56px; line-height: 1; }
.hero__stat-lbl {
  font-family: var(--f-mono);
  font-size: 11px;
  line-height: 1.4;
  letter-spacing: .12em;
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
  position: absolute; inset: 0;
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
  display: grid; place-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 30px 50px rgba(255, 107, 26, .5));
  }
}
.hero__art-badge {
  position: absolute;
  top: 4%;
  left: -16%;
  background: #FFF6DA;
  border-radius: 4px;
  padding: 16px 18px 14px;
  box-shadow: var(--sh-card), 0 24px 40px -10px rgba(0,0,0,.5);
  transform: rotate(-6deg);
  max-width: 200px;
  color: #1a1208;
  > span:first-child {
    position: absolute;
    top: 4px; left: 10px;
    font-size: 42px;
    color: var(--c-fire);
    line-height: 1;
  }
  p {
    font-size: 22px;
    line-height: 1.1;
    margin: 0 0 6px;
    color: #1a1208;
    font-weight: 600;
  }
  small {
    display: block;
    font-size: 10px;
    letter-spacing: .14em;
    color: #6c563a;
    text-transform: uppercase;
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
  letter-spacing: .15em;
  text-transform: lowercase;
  color: var(--c-text);
  display: flex; align-items: center; gap: 8px;
  box-shadow: var(--sh-card);
  .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--c-gold); box-shadow: 0 0 8px var(--c-gold); }
}

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
.dot-sep { color: var(--c-gold); font-size: 28px; }

@media (max-width: 980px) {
  .hero__inner { grid-template-columns: 1fr; gap: 60px; }
  .hero__art { max-width: 380px; margin: 0 auto; }
  .hero__stats { gap: 24px; }
  .hero__stat-num { font-size: 44px; }
  .marquee__group { font-size: 26px; }
}
@media (max-width: 480px) {
  .hero { padding-top: 130px; }
  .hero__stats { flex-wrap: wrap; gap: 18px; }
  .hero__stat { flex: 1 1 80px; }
  .hero__art-badge { top: 2%; left: -4%; padding: 12px 14px 10px; p { font-size: 18px; } }
  .hero__art-tag { right: -4%; bottom: 4%; }
  .marquee__group { font-size: 22px; gap: 36px; }
}
</style>
