<template>
  <footer class="ftr">
    <div class="container">
      <div class="ftr__top">
        <div class="ftr__brand" v-reveal="'up'">
          <img src="/logo.png" alt="" class="ftr__logo" />
          <div>
            <span class="t-up ftr__brand-up">Hambúrgueres feitos em casa</span>
            <span class="ftr__brand-name">Lanches do Gú</span>
          </div>
        </div>

        <a :href="IFOOD_URL" class="btn btn-primary ftr__cta" target="_blank" rel="noopener" v-reveal="'up'" data-reveal-delay="100">
          Peça no iFood
        </a>
      </div>

      <div class="ftr__big sd-parallax-slow" aria-hidden="true">
        <span class="t-display-italic">Cozinha de casa.</span>
      </div>

      <div class="ftr__grid">
        <nav class="ftr__col" v-reveal="'up-left'">
          <strong>Site</strong>
          <router-link to="/">Início</router-link>
          <a href="/#cardapio">Cardápio</a>
          <a href="/#depoimentos">Avaliações</a>
          <a href="/#onde">Como pedir</a>
        </nav>
        <nav class="ftr__col" v-reveal="'up'" data-reveal-delay="80">
          <strong>A casa</strong>
          <router-link to="/quem-somos">A história</router-link>
          <router-link to="/quem-somos#familia">A família</router-link>
          <router-link to="/quem-somos#dia">Um dia de cozinha</router-link>
        </nav>
        <nav class="ftr__col" v-reveal="'up'" data-reveal-delay="160">
          <strong>Contato</strong>
          <a :href="IFOOD_URL" target="_blank" rel="noopener">iFood</a>
          <a :href="WHATSAPP_URL" target="_blank" rel="noopener">WhatsApp</a>
          <a :href="INSTAGRAM_URL" target="_blank" rel="noopener">Instagram</a>
          <a href="mailto:ola@lanchesdogu.com">ola@lanchesdogu.com</a>
        </nav>
        <div class="ftr__col ftr__col--addr" v-reveal="'up-right'" data-reveal-delay="240">
          <strong>Atendimento</strong>
          <p>Vila Brasília<br/>Aparecida de Goiânia · GO</p>
          <p>Sex. e Sáb. · 19h–23h<br/>Dom. · 12h–15h</p>
        </div>
      </div>

      <div class="ftr__bottom">
        <small>© 2026 Lanches do Gú · Todos os direitos reservados.</small>
        <small class="t-mono">CNPJ MEI em processo de abertura</small>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { IFOOD_URL, WHATSAPP_URL, INSTAGRAM_URL } from '@/config'
</script>

<style scoped lang="scss">
.ftr {
  background: var(--c-deep);
  color: var(--c-cream);
  padding: 90px 0 30px;
  border-top: 1px solid var(--c-border);
  position: relative;
  overflow: hidden;
}

.ftr__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  padding-bottom: 50px;
  border-bottom: 1px solid var(--c-border-on-dark);
}
.ftr__brand { display: flex; align-items: center; gap: 16px; }
.ftr__logo {
  width: 64px; height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--c-border-on-dark);
}
.ftr__brand div { display: flex; flex-direction: column; }
.ftr__brand-up { color: rgba(251, 248, 240, 0.5); margin-bottom: 4px; }
.ftr__brand-name {
  font-family: var(--f-display);
  font-style: italic;
  font-variation-settings: "opsz" 144;
  font-weight: 600;
  font-size: clamp(28px, 3.5vw, 40px);
  line-height: 1;
  color: var(--c-cream);
  letter-spacing: -.02em;
}
.ftr__cta { background: var(--c-fire); color: #fff; }

.ftr__big {
  margin: 60px 0;
  font-size: clamp(80px, 14vw, 200px);
  line-height: .9;
  letter-spacing: -.04em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(251, 248, 240, 0.16);
  white-space: nowrap;
  overflow: hidden;
}

.ftr__grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.2fr;
  gap: 30px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--c-border-on-dark);
}
.ftr__col {
  display: flex; flex-direction: column; gap: 10px;
  strong {
    font-family: var(--f-mono);
    text-transform: uppercase;
    letter-spacing: .2em;
    font-size: 11px;
    color: var(--c-fire);
    margin-bottom: 8px;
    font-weight: 500;
  }
  a {
    color: rgba(251, 248, 240, 0.65);
    font-size: 14px;
    transition: color .2s, padding .2s;
    width: fit-content;
    &:hover { color: var(--c-cream); padding-left: 4px; }
  }
}
.ftr__col--addr p {
  font-size: 13px;
  color: rgba(251, 248, 240, 0.65);
  line-height: 1.6;
  margin: 0 0 10px;
}

.ftr__bottom {
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  flex-wrap: wrap;
  gap: 10px;
  small {
    color: rgba(251, 248, 240, 0.5);
    font-size: 11px;
    letter-spacing: .04em;
  }
}

@media (max-width: 800px) {
  .ftr__grid { grid-template-columns: repeat(2, 1fr); }
  .ftr { padding-top: 60px; }
  .ftr__big { margin: 40px 0; }
}
@media (max-width: 480px) {
  .ftr__logo { width: 52px; height: 52px; }
  .ftr__top { flex-direction: column; align-items: flex-start; }
}
</style>
