<template>
  <section id="onde" class="loc section">
    <div class="container loc__inner">
      <div class="loc__copy">
        <span class="section-label" v-reveal="'right'">Como pedir</span>
        <h2 class="section-title" v-reveal="'right'" data-reveal-delay="100">
          Manda mensagem,<br/>
          <span class="t-serif"><em>a gente confirma.</em></span>
        </h2>
        <p class="section-lead" v-reveal="'right'" data-reveal-delay="200">
          O Gú cozinha de sexta a domingo. Pedidos pelo WhatsApp ou DM no Instagram. Depois
          é só vir buscar, ou combinar entrega aqui no bairro.
        </p>

        <div class="loc__cards">
          <div class="loc__card" v-reveal="'down-left'" data-reveal-delay="280">
            <q-icon name="schedule" size="26px" />
            <div>
              <strong>Horário</strong>
              <p>Sex e Sáb · 19h às 23h</p>
              <p>Dom · 12h às 15h</p>
            </div>
          </div>
          <div class="loc__card" v-reveal="'down'" data-reveal-delay="360">
            <q-icon name="location_on" size="26px" />
            <div>
              <strong>Onde</strong>
              <p>Vila Brasília, Aparecida de Goiânia</p>
              <p>(endereço exato após confirmar o pedido)</p>
            </div>
          </div>
          <div class="loc__card" v-reveal="'down-right'" data-reveal-delay="440">
            <q-icon name="payments" size="26px" />
            <div>
              <strong>Como pagar</strong>
              <p>Pix, dinheiro ou cartão</p>
              <p>na hora de retirar</p>
            </div>
          </div>
        </div>
      </div>

      <div class="loc__cta" id="pedir" v-reveal="'zoom'" data-reveal-delay="200">
        <div class="loc__cta-glow sd-rotate" aria-hidden="true" />
        <div class="loc__cta-inner">
          <span class="loc__cta-up t-mono">É só chamar</span>
          <h3 class="t-display loc__cta-title">
            Pede pelo<br/>
            <span class="t-serif"><em>WhatsApp.</em></span>
          </h3>
          <p class="loc__cta-text">
            O Gú (ou a Bia, se ele estiver no fogão) responde rápido. Sextas costumam encher,
            então quanto antes melhor.
          </p>
          <div class="loc__cta-actions">
            <a href="https://wa.me/5562999990000" class="btn btn-primary">
              <q-icon name="chat" size="20px" />
              Abrir o WhatsApp
            </a>
            <a href="https://instagram.com/lanchesdogu" class="btn btn-ghost">
              <q-icon name="o_camera_alt" size="20px" />
              @lanchesdogu
            </a>
          </div>
          <p class="loc__cta-note t-hand">
            *encomenda de mais de 5 lanches só pra noite seguinte, viu?
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
.loc { position: relative; }
.loc__inner {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 60px;
  align-items: center;
}
.section-title .t-serif {
  font-style: italic;
  color: var(--c-gold);
  font-weight: 700;
  text-transform: none;
  letter-spacing: -.01em;
}

.loc__cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-top: 36px;
  max-width: 480px;
}
.loc__card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 18px;
  align-items: start;
  background: var(--c-bg-2);
  border: 1px solid rgba(255,255,255,.05);
  border-radius: var(--r-md);
  padding: 18px 20px;
  transition: transform .3s, border-color .3s;
  &:hover { transform: translateX(6px); border-color: var(--c-border); }
  .q-icon { color: var(--c-gold); margin-top: 2px; }
  strong {
    display: block;
    font-family: var(--f-mono);
    text-transform: uppercase;
    letter-spacing: .14em;
    font-size: 11px;
    color: var(--c-text-mute);
    margin-bottom: 6px;
  }
  p { font-size: 14px; color: var(--c-text); margin: 0 0 2px; line-height: 1.45; }
}

/* ---- CTA ---- */
.loc__cta {
  position: relative;
  border-radius: var(--r-lg);
  background: radial-gradient(120% 100% at 30% 0%, rgba(255,107,26,.25), transparent 70%), var(--c-bg-2);
  border: 1px solid var(--c-border);
  padding: 50px 44px;
  overflow: hidden;
  box-shadow: var(--sh-card);
}
.loc__cta-glow {
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, transparent 0deg, rgba(255,184,0,.15) 90deg, transparent 180deg, rgba(255,107,26,.15) 270deg, transparent 360deg);
  top: -200px; right: -200px;
  filter: blur(40px);
  pointer-events: none;
}
.loc__cta-inner { position: relative; z-index: 1; }
.loc__cta-up {
  color: var(--c-gold);
  display: inline-block;
  margin-bottom: 14px;
  text-transform: uppercase;
  letter-spacing: .22em;
  font-size: 12px;
}
.loc__cta-title {
  font-size: clamp(40px, 5vw, 60px);
  line-height: .95;
  margin: 0 0 16px;
  .t-serif { font-style: italic; color: var(--c-gold); font-weight: 700; text-transform: none; letter-spacing: -.01em; }
}
.loc__cta-text {
  font-size: 16px;
  color: var(--c-text-dim);
  margin: 0 0 26px;
  max-width: 380px;
  line-height: 1.55;
}
.loc__cta-actions {
  display: flex; gap: 12px; flex-wrap: wrap;
  margin-bottom: 22px;
}
.loc__cta-note {
  font-size: 18px;
  color: var(--c-text-mute);
  margin: 0;
  padding-top: 18px;
  border-top: 1px dashed rgba(255,255,255,.08);
}

@media (max-width: 980px) {
  .loc__inner { grid-template-columns: 1fr; gap: 40px; }
  .loc__cta { padding: 36px 28px; }
}
</style>
