<template>
  <section id="onde" class="loc section">
    <div class="container loc__inner">
      <!-- left: info -->
      <div class="loc__copy">
        <span class="section-label" v-reveal="'right'">Onde estamos</span>
        <h2 class="section-title" v-reveal="'right'" data-reveal-delay="100">
          Vem comer <br/>
          <span class="t-brush t-grad-fire">aqui pertinho</span>
        </h2>
        <p class="section-lead" v-reveal="'right'" data-reveal-delay="200">
          Cozinha aberta de quarta a domingo, das 18h à meia-noite. Salão pra comer no local
          ou pedir e levar.
        </p>

        <div class="loc__cards">
          <div class="loc__card" v-reveal="'down-left'" data-reveal-delay="280">
            <q-icon name="location_on" size="28px" />
            <div>
              <strong>Endereço</strong>
              <p>Rua das Brasas, 222 — Centro</p>
              <p>Goiânia · GO</p>
            </div>
          </div>
          <div class="loc__card" v-reveal="'down'" data-reveal-delay="360">
            <q-icon name="schedule" size="28px" />
            <div>
              <strong>Horário</strong>
              <p>Qua a Dom · 18h às 00h</p>
              <p>Seg e Ter · fechado</p>
            </div>
          </div>
          <div class="loc__card" v-reveal="'down-right'" data-reveal-delay="440">
            <q-icon name="call" size="28px" />
            <div>
              <strong>Contato</strong>
              <p>(62) 9 9999-0000</p>
              <p>@lanchesdogu</p>
            </div>
          </div>
        </div>
      </div>

      <!-- right: CTA card -->
      <div class="loc__cta" id="pedir" v-reveal="'zoom'" data-reveal-delay="200">
        <div class="loc__cta-glow sd-rotate" aria-hidden="true" />
        <div class="loc__cta-inner">
          <span class="t-up loc__cta-up">Faminto?</span>
          <h3 class="t-display loc__cta-title">
            Pede agora.<br/>
            <span class="t-brush t-grad-gold">A gente entrega.</span>
          </h3>
          <p class="loc__cta-text">
            Delivery próprio em até 40 min na região central.
            Também atendemos pelos principais apps.
          </p>
          <div class="loc__cta-actions">
            <a href="#" class="btn btn-primary">
              <q-icon name="delivery_dining" size="20px" />
              Pedir delivery
            </a>
            <a href="#" class="btn btn-ghost">
              <q-icon name="chat" size="20px" />
              WhatsApp
            </a>
          </div>
          <div class="loc__cta-apps">
            <span class="t-mono">Disponível em:</span>
            <span class="loc__app">iFood</span>
            <span class="loc__app">Rappi</span>
            <span class="loc__app">Uber Eats</span>
          </div>
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

.loc__cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
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
  .q-icon { color: var(--c-gold); margin-top: 4px; }
  strong {
    display: block;
    font-family: var(--f-mono);
    text-transform: uppercase;
    letter-spacing: .14em;
    font-size: 11px;
    color: var(--c-text-mute);
    margin-bottom: 6px;
  }
  p { font-size: 15px; color: var(--c-text); margin: 0 0 2px; }
}

/* ---- CTA card ---- */
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
}
.loc__cta-title {
  font-size: clamp(40px, 5vw, 60px);
  line-height: .95;
  margin: 0 0 16px;
  .t-brush { font-size: 1.05em; vertical-align: -.05em; }
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
  margin-bottom: 26px;
}
.loc__cta-apps {
  display: flex; gap: 12px; align-items: center; flex-wrap: wrap;
  padding-top: 22px;
  border-top: 1px dashed rgba(255,255,255,.08);
  > span:first-child {
    font-size: 11px;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--c-text-mute);
  }
}
.loc__app {
  font-family: var(--f-mono);
  font-size: 12px;
  letter-spacing: .04em;
  padding: 6px 12px;
  border-radius: var(--r-pill);
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.08);
  color: var(--c-text);
}

@media (max-width: 980px) {
  .loc__inner { grid-template-columns: 1fr; gap: 40px; }
  .loc__cta { padding: 36px 28px; }
}
</style>
