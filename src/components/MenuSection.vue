<template>
  <section id="cardapio" class="menu section">
    <div class="container">
      <header class="menu__head">
        <div>
          <span class="section-label" v-reveal="'right'">Cardápio</span>
          <h2 class="section-title" v-reveal="'up'" data-reveal-delay="100">
            Curto, pensado, <em>conferido em casa.</em>
          </h2>
        </div>
        <p class="section-lead" v-reveal="'left'" data-reveal-delay="180">
          O cardápio só tem o que o Gú monta sem hesitar. Preços de bairro, ingredientes
          comprados a cada fim de semana. Pedidos pelo iFood.
        </p>
      </header>

      <div class="menu__grid">
        <article
          v-for="(burger, idx) in burgers"
          :key="burger.id"
          class="card"
          v-reveal="reveals[idx % reveals.length]"
          :data-reveal-delay="idx * 80"
        >
          <header class="card__top">
            <span class="card__num t-mono">— {{ String(idx + 1).padStart(2, '0') }}</span>
            <span class="card__tag t-mono">{{ burger.tag }}</span>
          </header>

          <h3 class="card__name">
            <span class="t-display">{{ burger.name }}</span>
            <span class="card__descriptor t-display-italic">{{ burger.descriptor }}</span>
          </h3>

          <p class="card__desc">{{ burger.description }}</p>

          <footer class="card__foot">
            <span class="card__price">
              <small class="t-mono">R$</small>
              <strong class="t-display">{{ burger.price.toFixed(2).replace('.', ',') }}</strong>
            </span>
            <a :href="IFOOD_URL" class="btn-link" target="_blank" rel="noopener">
              Pedir no iFood
              <span aria-hidden="true">→</span>
            </a>
          </footer>
        </article>
      </div>

      <div class="sides">
        <h3 class="sides__title">
          <span class="t-display">Para acompanhar</span>
        </h3>
        <div class="sides__grid">
          <div
            v-for="(side, idx) in sides"
            :key="side.name"
            class="side"
            v-reveal="sidesReveals[idx]"
            :data-reveal-delay="idx * 80"
          >
            <q-icon :name="side.icon" size="22px" class="side__icon" />
            <div class="side__body">
              <h4 class="t-display">{{ side.name }}</h4>
              <p>{{ side.desc }}</p>
            </div>
            <span class="side__price t-mono">R$ {{ side.price.toFixed(2).replace('.', ',') }}</span>
          </div>
        </div>
      </div>

      <p class="menu__note" v-reveal="'up'">
        Restrições alimentares podem ser ajustadas no momento do pedido — sem cebola, sem maionese, sem o
        que for preciso. Indique nas observações.
      </p>
    </div>
  </section>
</template>

<script setup>
import { burgers, sides } from '@/data/menu'
import { IFOOD_URL } from '@/config'

const reveals = ['up-left', 'up', 'up-right', 'down-left', 'zoom', 'down-right']
const sidesReveals = ['left', 'up', 'down', 'right']
</script>

<style scoped lang="scss">
.menu { background: var(--c-bg); }

.menu__head {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 60px;
  align-items: end;
  padding-bottom: 60px;
  border-bottom: 1px solid var(--c-border);
  margin-bottom: 60px;
}

.menu__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-top: 1px solid var(--c-border);
}

.card {
  position: relative;
  background: var(--c-bg);
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  border-right: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  transition: background .35s;

  &:nth-child(3n) { border-right: none; }
  &:hover {
    background: var(--c-bg-soft);
    .card__name .t-display-italic { transform: translateX(4px); }
  }
}

.card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}
.card__num {
  font-size: 11px;
  letter-spacing: .2em;
  color: var(--c-text-mute);
  text-transform: uppercase;
}
.card__tag {
  font-size: 10px;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--c-fire);
  padding: 4px 10px;
  background: var(--c-gold-bg);
  border-radius: var(--r-pill);
}

.card__name {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  .t-display {
    font-size: 38px;
    font-weight: 500;
    color: var(--c-text);
    font-variation-settings: "opsz" 144, "SOFT" 30;
    letter-spacing: -.02em;
    line-height: 1;
  }
  .t-display-italic {
    font-size: 20px;
    color: var(--c-fire);
    font-weight: 400;
    line-height: 1.1;
    transition: transform .35s cubic-bezier(.2,.7,.2,1);
  }
}

.card__desc {
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--c-text-dim);
  margin: 0;
  flex: 1;
}

.card__foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 18px;
  border-top: 1px solid var(--c-border);
  margin-top: auto;
}
.card__price {
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  color: var(--c-text);
  small { font-size: 12px; color: var(--c-text-mute); }
  strong { font-size: 28px; font-weight: 500; letter-spacing: -.02em; }
}

/* sides */
.sides {
  margin-top: 100px;
  padding-top: 60px;
  border-top: 1px solid var(--c-border);
}
.sides__title {
  font-size: clamp(28px, 3.5vw, 40px);
  margin: 0 0 32px;
  font-weight: 400;
  color: var(--c-text);
}
.sides__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
}
.side {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 22px 24px;
  border-bottom: 1px solid var(--c-border);
  &:nth-child(odd) { border-right: 1px solid var(--c-border); }
  &:last-child, &:nth-last-child(2):nth-child(odd) { border-bottom: none; }
}
.side__icon { color: var(--c-fire); }
.side__body {
  flex: 1;
  h4 { font-size: 18px; margin: 0 0 2px; color: var(--c-text); font-weight: 500; letter-spacing: -.01em; }
  p { font-size: 13px; color: var(--c-text-mute); margin: 0; }
}
.side__price { color: var(--c-text); font-size: 14px; font-weight: 500; }

.menu__note {
  margin: 60px 0 0;
  font-family: var(--f-display);
  font-style: italic;
  font-size: 18px;
  color: var(--c-text-dim);
  text-align: center;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
}

@media (max-width: 980px) {
  .menu__head { grid-template-columns: 1fr; gap: 24px; }
  .menu__grid { grid-template-columns: repeat(2, 1fr); }
  .card:nth-child(3n) { border-right: 1px solid var(--c-border); }
  .card:nth-child(2n) { border-right: none; }
  .sides__grid { grid-template-columns: 1fr; }
  .side, .side:nth-child(odd) { border-right: none; }
}
@media (max-width: 560px) {
  .menu__grid { grid-template-columns: 1fr; }
  .card, .card:nth-child(2n) { border-right: none; }
  .card__name .t-display { font-size: 32px; }
}
</style>
