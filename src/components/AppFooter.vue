<template>
  <footer class="ftr">
    <div class="container">
      <div class="ftr__lockup">
        <div class="ftr__brand" v-reveal="'up'">
          <img src="/logo.png" alt="" class="ftr__logo float-y" />
          <div class="ftr__brand-text">
            <span class="t-up">Hambúrgueres feitos em casa</span>
            <span class="t-display t-grad-gold ftr__brand-name">Lanches do Gú</span>
          </div>
        </div>
      </div>

      <div class="ftr__big sd-parallax-slow t-display" aria-hidden="true">
        cozinha de casa.
      </div>

      <div class="ftr__grid">
        <div class="ftr__col" v-reveal="'up-left'">
          <strong>O lugar</strong>
          <router-link to="/">Início</router-link>
          <a href="/#cardapio">Cardápio</a>
          <a href="/#depoimentos">Recados</a>
          <a href="/#onde">Como pedir</a>
        </div>
        <div class="ftr__col" v-reveal="'up'" data-reveal-delay="100">
          <strong>Sobre</strong>
          <router-link to="/quem-somos">Quem é o Gú</router-link>
          <router-link to="/quem-somos#familia">A família</router-link>
          <router-link to="/quem-somos#dia">Um dia de cozinha</router-link>
        </div>
        <div class="ftr__col" v-reveal="'up'" data-reveal-delay="200">
          <strong>Falar com a gente</strong>
          <a href="https://wa.me/5562999990000" target="_blank" rel="noopener">
            <q-icon name="chat" size="14px" /> WhatsApp
          </a>
          <a href="https://instagram.com/lanchesdogu" target="_blank" rel="noopener">
            <q-icon name="o_camera_alt" size="14px" /> @lanchesdogu
          </a>
          <a href="mailto:ola@lanchesdogu.com">
            <q-icon name="mail" size="14px" /> ola@lanchesdogu.com
          </a>
        </div>
        <div class="ftr__col ftr__col--note" v-reveal="'up-right'" data-reveal-delay="300">
          <strong>Recadinho</strong>
          <p class="t-hand">
            obrigado por vir comer aqui em casa! a gente capricha de verdade
            em cada lanche. — gú e família ♥
          </p>
        </div>
      </div>

      <div class="ftr__bottom">
        <small>© 2026 Lanches do Gú · Vila Brasília, Aparecida de Goiânia.</small>
        <small class="t-mono">site construído com a mãe lendo por cima do ombro</small>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped lang="scss">
.ftr {
  position: relative;
  background: linear-gradient(180deg, var(--c-bg-2) 0%, #000 100%);
  padding: 100px 0 30px;
  overflow: hidden;
  border-top: 1px solid var(--c-border);
}
.ftr__lockup { margin-bottom: 60px; }
.ftr__brand { display: flex; align-items: center; gap: 22px; }
.ftr__logo {
  width: 86px; height: 86px;
  border-radius: 50%;
  box-shadow: 0 0 0 2px var(--c-gold), 0 20px 50px -10px rgba(255, 184, 0, .5);
  object-fit: cover;
}
.ftr__brand-text { display: flex; flex-direction: column; }
.ftr__brand-text .t-up { color: var(--c-text-mute); }
.ftr__brand-name {
  font-size: clamp(40px, 6vw, 64px);
  margin-top: 4px;
  line-height: 1;
}

.ftr__big {
  font-size: clamp(80px, 14vw, 220px);
  line-height: .9;
  margin: 30px 0 60px;
  color: transparent;
  -webkit-text-stroke: 1px var(--c-border);
  letter-spacing: -.02em;
  white-space: nowrap;
  overflow: hidden;
  text-transform: lowercase;
}

.ftr__grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1.2fr 1.2fr;
  gap: 30px;
  padding-bottom: 50px;
  border-bottom: 1px solid rgba(255,255,255,.06);
}
.ftr__col {
  display: flex; flex-direction: column; gap: 10px;
  strong {
    font-family: var(--f-mono);
    text-transform: uppercase;
    letter-spacing: .15em;
    font-size: 12px;
    color: var(--c-gold);
    margin-bottom: 6px;
  }
  a {
    color: var(--c-text-dim);
    font-size: 14px;
    transition: color .2s, transform .2s;
    display: inline-flex; align-items: center; gap: 8px;
    &:hover { color: var(--c-text); transform: translateX(4px); }
  }
}
.ftr__col--note p {
  font-size: 18px;
  color: var(--c-text);
  line-height: 1.4;
  margin: 0;
  max-width: 280px;
}

.ftr__bottom {
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  flex-wrap: wrap;
  gap: 10px;
  small {
    color: var(--c-text-mute);
    font-size: 12px;
    letter-spacing: .04em;
  }
}

@media (max-width: 980px) {
  .ftr__grid { grid-template-columns: repeat(2, 1fr); }
  .ftr { padding-top: 60px; }
  .ftr__lockup { margin-bottom: 30px; }
  .ftr__big { margin: 14px 0 30px; }
}
@media (max-width: 480px) {
  .ftr__logo { width: 64px; height: 64px; }
}
</style>
