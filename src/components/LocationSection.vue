<template>
  <section id="onde" class="loc section">
    <div class="container loc__inner">
      <div class="loc__copy">
        <span class="section-label" v-reveal="'right'">Como pedir</span>
        <h2 class="section-title" v-reveal="'up'" data-reveal-delay="100">
          Pedidos pelo <em>iFood.</em>
        </h2>
        <p class="loc__lead" v-reveal="'up'" data-reveal-delay="200">
          A cozinha funciona de sexta a domingo. Os pedidos passam pelo iFood;
          dúvidas ou encomendas maiores, falar pelo WhatsApp.
        </p>

        <ul class="loc__cards">
          <li class="loc__card" v-reveal="'down-left'" data-reveal-delay="280">
            <q-icon name="schedule" size="22px" />
            <div>
              <strong class="t-mono">Horário</strong>
              <p>Sex. e Sáb. · 19h às 23h</p>
              <p>Dom. · 12h às 15h</p>
            </div>
          </li>
          <li class="loc__card" v-reveal="'down'" data-reveal-delay="360">
            <q-icon name="location_on" size="22px" />
            <div>
              <strong class="t-mono">Atendimento</strong>
              <p>Vila Brasília</p>
              <p>Aparecida de Goiânia · GO</p>
            </div>
          </li>
          <li class="loc__card" v-reveal="'down-right'" data-reveal-delay="440">
            <q-icon name="payments" size="22px" />
            <div>
              <strong class="t-mono">Formas de pagamento</strong>
              <p>iFood, Pix, dinheiro ou cartão</p>
              <p>(retirada no local)</p>
            </div>
          </li>
        </ul>
      </div>

      <aside class="loc__cta" id="pedir" v-reveal="'zoom'" data-reveal-delay="200">
        <div class="loc__cta-mark">
          <span class="t-up">Pedido online</span>
        </div>
        <h3 class="loc__cta-title">
          <span class="t-display">Peça no</span>
          <span class="t-display-italic">iFood.</span>
        </h3>
        <p class="loc__cta-text">
          Cardápio atualizado, pagamento na plataforma e acompanhamento em tempo real.
          Encomendas acima de cinco unidades, falar pelo WhatsApp.
        </p>
        <div class="loc__cta-actions">
          <a :href="IFOOD_URL" class="btn btn-primary" target="_blank" rel="noopener">
            Abrir o iFood
          </a>
          <a :href="WHATSAPP_URL" class="btn btn-ghost" target="_blank" rel="noopener">
            WhatsApp
          </a>
        </div>
        <p class="loc__cta-note">
          <span class="t-mono">Tempo médio de preparo</span>
          <strong>25–35 minutos</strong>
        </p>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { IFOOD_URL, WHATSAPP_URL } from '@/config'
</script>

<style scoped lang="scss">
.loc { background: var(--c-bg-soft); }
.loc__inner {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 70px;
  align-items: center;
}
.loc__lead {
  font-size: 18px;
  color: var(--c-text-dim);
  line-height: 1.65;
  max-width: 520px;
  margin: 0 0 24px;
}
.loc__cards {
  list-style: none;
  margin: 0; padding: 0;
  display: flex; flex-direction: column;
  border-top: 1px solid var(--c-border);
  max-width: 520px;
}
.loc__card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 22px;
  align-items: start;
  padding: 22px 0;
  border-bottom: 1px solid var(--c-border);
  .q-icon { color: var(--c-fire); margin-top: 2px; }
  strong {
    display: block;
    text-transform: uppercase;
    letter-spacing: .18em;
    font-size: 11px;
    color: var(--c-text-mute);
    margin-bottom: 6px;
    font-weight: 500;
  }
  p {
    font-size: 15px;
    color: var(--c-text);
    margin: 0;
    line-height: 1.55;
    &:nth-child(3) { color: var(--c-text-dim); font-size: 13px; margin-top: 2px; }
  }
}

/* CTA */
.loc__cta {
  background: var(--c-bg-2);
  border: 1px solid var(--c-border);
  border-radius: var(--r-md);
  padding: 44px 38px;
  box-shadow: var(--sh-card);
  display: flex; flex-direction: column; gap: 18px;
}
.loc__cta-mark span {
  color: var(--c-fire);
  font-weight: 500;
}
.loc__cta-title {
  font-size: clamp(36px, 4.5vw, 56px);
  line-height: 1;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 14px;
  font-weight: 400;
  color: var(--c-text);
  letter-spacing: -.02em;
  .t-display-italic { color: var(--c-fire); }
}
.loc__cta-text {
  font-size: 16px;
  color: var(--c-text-dim);
  line-height: 1.6;
  margin: 4px 0 12px;
}
.loc__cta-actions {
  display: flex; gap: 10px; flex-wrap: wrap;
  margin-bottom: 18px;
}
.loc__cta-note {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  padding-top: 18px;
  border-top: 1px solid var(--c-border);
  font-size: 13px;
  color: var(--c-text-dim);
  span { font-size: 10px; letter-spacing: .18em; text-transform: uppercase; color: var(--c-text-mute); }
  strong { color: var(--c-text); font-weight: 500; }
}

@media (max-width: 980px) {
  .loc__inner { grid-template-columns: 1fr; gap: 40px; }
  .loc__cta { padding: 32px 26px; }
}
</style>
