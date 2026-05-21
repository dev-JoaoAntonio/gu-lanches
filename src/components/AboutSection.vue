<template>
  <section id="historia" class="about section">
    <div class="container about__inner">
      <!-- left: collage -->
      <div class="about__art">
        <div class="about__art-grid">
          <div class="about__chip about__chip--1" v-reveal="'left'">
            <div class="emoji">🔥</div>
            <span class="t-mono">Chapa quente</span>
          </div>
          <div class="about__chip about__chip--2" v-reveal="'down-left'" data-reveal-delay="120">
            <div class="emoji">🍞</div>
            <span class="t-mono">Pão fresco</span>
          </div>
          <div class="about__chip about__chip--3" v-reveal="'up-left'" data-reveal-delay="240">
            <div class="emoji">🧀</div>
            <span class="t-mono">Queijo derretido</span>
          </div>
          <div class="about__chip about__chip--4" v-reveal="'left'" data-reveal-delay="360">
            <div class="emoji">🍅</div>
            <span class="t-mono">Tomate da feira</span>
          </div>
          <div class="about__photo sd-tilt" v-reveal="'zoom'" data-reveal-delay="200">
            <img src="/logo.png" alt="" />
            <div class="about__photo-stamp">
              <span class="t-brush">desde</span>
              <strong class="t-display">2019</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- right: text -->
      <div class="about__copy">
        <span class="section-label" v-reveal="'right'">A história</span>
        <h2 class="section-title" v-reveal="'right'" data-reveal-delay="100">
          Tudo começou<br/>
          numa <span class="t-brush t-grad-fire">chapa</span><br/>
          <span class="t-brush t-grad-gold">de quintal</span>
        </h2>

        <div class="about__text" v-reveal="'right'" data-reveal-delay="200">
          <p>
            O Gú sempre teve mania de invadir a cozinha. Em <strong>2019</strong>, montou
            uma chapinha no quintal de casa pra testar receita pros amigos.
            A vizinhança começou a pedir, o boca-a-boca rodou — e o quintal
            virou loja.
          </p>
          <p>
            Hoje a gente prepara cada blend na hora, com carne de açougue
            de confiança, pão assado todo dia e molhos feitos aqui dentro.
            <em>Nada de pressa</em>, nada de atalho.
          </p>
        </div>

        <ul class="about__list">
          <li v-reveal="'right'" data-reveal-delay="320">
            <q-icon name="check_circle" size="22px" />
            <span><strong>Carne fresca</strong> — sem congelados, blend próprio</span>
          </li>
          <li v-reveal="'right'" data-reveal-delay="400">
            <q-icon name="check_circle" size="22px" />
            <span><strong>Pão da casa</strong> — assado todas as manhãs</span>
          </li>
          <li v-reveal="'right'" data-reveal-delay="480">
            <q-icon name="check_circle" size="22px" />
            <span><strong>Molhos artesanais</strong> — receitas de família</span>
          </li>
          <li v-reveal="'right'" data-reveal-delay="560">
            <q-icon name="check_circle" size="22px" />
            <span><strong>Atendimento de gente</strong> — você é da casa</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
.about { background: linear-gradient(180deg, var(--c-bg) 0%, var(--c-bg-2) 100%); position: relative; }
.about__inner {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 80px;
  align-items: center;
}

/* ---- art ---- */
.about__art { position: relative; }
.about__art-grid {
  position: relative;
  aspect-ratio: 1;
  max-width: 540px;
}
.about__chip {
  position: absolute;
  display: inline-flex; align-items: center; gap: 12px;
  background: var(--c-bg-3);
  border: 1px solid var(--c-border);
  border-radius: var(--r-pill);
  padding: 12px 20px 12px 14px;
  box-shadow: var(--sh-card);
  z-index: 2;
  .emoji { font-size: 22px; }
  span { font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: var(--c-text); }
  &--1 { top: 8%;  left: -6%; }
  &--2 { top: 36%; right: -10%; }
  &--3 { bottom: 28%; left: -12%; }
  &--4 { bottom: 6%; right: 4%; }
}
.about__photo {
  position: absolute;
  inset: 12% 14%;
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 35%, rgba(255,107,26,.45), transparent 60%),
    var(--c-bg-3);
  border: 1px solid var(--c-border);
  display: grid; place-items: center;
  overflow: visible;
  box-shadow: var(--sh-card), 0 40px 80px -20px rgba(255,107,26,.4);
  img {
    width: 88%;
    height: 88%;
    object-fit: contain;
    filter: drop-shadow(0 20px 40px rgba(0,0,0,.6));
  }
}
.about__photo-stamp {
  position: absolute;
  bottom: -22px;
  right: -22px;
  width: 110px; height: 110px;
  border-radius: 50%;
  background: var(--g-fire);
  display: flex; align-items: center; justify-content: center;
  flex-direction: column;
  color: #1b0900;
  box-shadow: var(--sh-strong);
  border: 4px solid var(--c-bg);
  span { font-size: 14px; opacity: .8; line-height: 1; }
  strong { font-size: 36px; line-height: 1; margin-top: 2px; }
}

/* ---- copy ---- */
.about__copy { display: flex; flex-direction: column; gap: 22px; }
.section-title .t-brush { font-size: 1.05em; vertical-align: -.05em; }

.about__text {
  font-size: 17px;
  line-height: 1.65;
  color: var(--c-text-dim);
  display: flex; flex-direction: column; gap: 14px;
  max-width: 540px;
  strong { color: var(--c-text); font-weight: 600; }
  em { color: var(--c-gold); font-style: italic; font-family: var(--f-brush); font-size: 22px; }
}

.about__list {
  list-style: none;
  padding: 0; margin: 12px 0 0;
  display: flex; flex-direction: column; gap: 14px;
  li {
    display: flex; align-items: center; gap: 14px;
    padding: 14px 18px;
    background: var(--c-bg-3);
    border: 1px solid rgba(255,255,255,.05);
    border-radius: var(--r-md);
    color: var(--c-text-dim);
    font-size: 15px;
    transition: transform .3s, border-color .3s;
    &:hover { transform: translateX(6px); border-color: var(--c-border); }
    strong { color: var(--c-text); font-weight: 600; margin-right: 4px; }
    .q-icon { color: var(--c-gold); flex-shrink: 0; }
  }
}

@media (max-width: 980px) {
  .about__inner { grid-template-columns: 1fr; gap: 60px; }
  .about__art-grid { max-width: 420px; margin: 0 auto; }
}
@media (max-width: 480px) {
  .about__chip { padding: 8px 14px 8px 10px; .emoji { font-size: 18px; } span { font-size: 10px; } }
  .about__photo-stamp { width: 80px; height: 80px; strong { font-size: 26px; } }
}
</style>
