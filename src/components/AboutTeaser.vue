<template>
  <section id="historia" class="teaser section">
    <div class="container teaser__inner">
      <div class="teaser__copy">
        <span class="section-label" v-reveal="'right'">A história</span>
        <h2 class="section-title" v-reveal="'right'" data-reveal-delay="100">
          O Gú tem<br/>
          <span class="t-serif"><em>onze anos.</em></span>
        </h2>

        <div class="teaser__text" v-reveal="'right'" data-reveal-delay="200">
          <p>
            Começou quando a mãe deixou ele usar a chapa pra fazer o lanche da escola.
            Saiu bom. Os colegas pediram, os vizinhos pediram. Daí pra cá, sexta à noite
            tem fila pequena no portão de casa.
          </p>
          <p>
            Quem cozinha é o Gú. Quem afia faca e olha o tempero é a mãe.
            As irmãs ajudam na hora do recado e da entrega. Ele, em troca,
            ainda dá uma força com a lição delas no meio da semana.
          </p>
        </div>

        <router-link to="/quem-somos" class="teaser__cta" v-reveal="'right'" data-reveal-delay="300">
          Ler a história inteira
          <q-icon name="arrow_forward" size="20px" />
        </router-link>
      </div>

      <!-- right: composição -->
      <div class="teaser__art">
        <div class="teaser__polaroid teaser__polaroid--1 sd-tilt" v-reveal="'left'">
          <div class="teaser__photo" style="background: radial-gradient(circle at 50% 35%, rgba(255,107,26,.55), transparent 60%), #1a1a1a;">
            <img src="/logo.png" alt="" />
          </div>
          <p class="t-hand">eu, na chapa</p>
        </div>

        <div class="teaser__polaroid teaser__polaroid--2" v-reveal="'down-left'" data-reveal-delay="150">
          <div class="teaser__photo teaser__photo--mom">
            <span class="teaser__photo-emoji">👩‍🍳</span>
          </div>
          <p class="t-hand">a mãe ensinando</p>
        </div>

        <div class="teaser__polaroid teaser__polaroid--3" v-reveal="'down-right'" data-reveal-delay="280">
          <div class="teaser__photo teaser__photo--sis">
            <span class="teaser__photo-emoji">📚</span>
          </div>
          <p class="t-hand">eu ajudando<br/>com a lição</p>
        </div>

        <span class="teaser__sticker" v-reveal="'zoom'" data-reveal-delay="400">
          <em class="t-serif">desde</em>
          <strong class="t-display">2024</strong>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
.teaser {
  background: linear-gradient(180deg, var(--c-bg) 0%, var(--c-bg-2) 100%);
  position: relative;
  overflow: hidden;
}
.teaser__inner {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 80px;
  align-items: center;
}

.teaser__copy { display: flex; flex-direction: column; gap: 22px; }
.section-title .t-serif {
  font-style: italic;
  color: var(--c-gold);
  font-weight: 700;
  text-transform: none;
  letter-spacing: -.01em;
}

.teaser__text {
  font-size: 17px;
  line-height: 1.7;
  color: var(--c-text-dim);
  display: flex; flex-direction: column; gap: 14px;
  max-width: 520px;
}

.teaser__cta {
  display: inline-flex; align-items: center; gap: 12px;
  font-family: var(--f-mono);
  text-transform: uppercase;
  letter-spacing: .15em;
  font-size: 13px;
  font-weight: 600;
  color: var(--c-gold);
  padding: 14px 0;
  width: fit-content;
  border-bottom: 1px solid var(--c-border);
  transition: gap .3s, color .3s, border-color .3s;
  margin-top: 8px;
  &:hover {
    gap: 18px;
    color: var(--c-text);
    border-color: var(--c-gold);
  }
}

/* ---- art ---- */
.teaser__art {
  position: relative;
  aspect-ratio: 1;
  width: 100%;
  max-width: 560px;
  margin-left: auto;
}

.teaser__polaroid {
  position: absolute;
  background: #FFF6DA;
  padding: 14px 14px 22px;
  border-radius: 4px;
  box-shadow: var(--sh-card), 0 30px 60px -10px rgba(0,0,0,.6);
  color: #1a1208;
  transition: transform .4s cubic-bezier(.2,.7,.2,1);
  &:hover { transform: scale(1.04) rotate(0deg) !important; z-index: 5; }
  p {
    margin: 10px 0 0;
    font-size: 22px;
    text-align: center;
    color: #2a1f10;
    line-height: 1.1;
  }
  &--1 {
    top: 4%;
    left: 6%;
    width: 56%;
    transform: rotate(-5deg);
    z-index: 2;
  }
  &--2 {
    top: 28%;
    right: 2%;
    width: 42%;
    transform: rotate(6deg);
    z-index: 3;
  }
  &--3 {
    bottom: 4%;
    left: 18%;
    width: 44%;
    transform: rotate(-3deg);
    z-index: 4;
  }
}

.teaser__photo {
  aspect-ratio: 1;
  border-radius: 2px;
  background: var(--c-bg-3);
  display: grid; place-items: center;
  overflow: hidden;
  img { width: 92%; height: 92%; object-fit: contain; filter: drop-shadow(0 14px 24px rgba(0,0,0,.5)); }
}
.teaser__photo--mom {
  background: linear-gradient(160deg, #FFB800 0%, #FF6B1A 60%, #E63946 100%);
}
.teaser__photo--sis {
  background: linear-gradient(160deg, #1a1a1a 0%, #0d0d0d 100%);
  border: 1px solid var(--c-border);
}
.teaser__photo-emoji {
  font-size: 70px;
  filter: drop-shadow(0 12px 18px rgba(0,0,0,.4));
}

.teaser__sticker {
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 110px; height: 110px;
  border-radius: 50%;
  background: var(--g-fire);
  display: flex; align-items: center; justify-content: center;
  flex-direction: column;
  color: #1b0900;
  box-shadow: var(--sh-strong);
  border: 4px solid var(--c-bg);
  z-index: 5;
  em { font-size: 16px; font-style: italic; line-height: 1; }
  strong { font-size: 32px; line-height: 1; margin-top: 4px; }
}

@media (max-width: 980px) {
  .teaser__inner { grid-template-columns: 1fr; gap: 60px; }
  .teaser__art { max-width: 480px; margin: 0 auto; }
}
@media (max-width: 480px) {
  .teaser__polaroid p { font-size: 18px; }
  .teaser__sticker { width: 86px; height: 86px; strong { font-size: 24px; } }
}
</style>
