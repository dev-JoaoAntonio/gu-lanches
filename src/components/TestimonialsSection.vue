<template>
  <section id="depoimentos" class="rev section">
    <!-- scroll driven backdrop word -->
    <div class="rev__backword sd-parallax-fast t-display" aria-hidden="true">
      QUEM PROVOU NUNCA ESQUECE
    </div>

    <div class="container">
      <div class="rev__head">
        <span class="section-label" v-reveal="'down'">Depoimentos</span>
        <h2 class="section-title" v-reveal="'up'" data-reveal-delay="100">
          Quem provou,<br/>
          <span class="t-brush t-grad-fire">não esquece</span>
        </h2>
        <p class="section-lead" v-reveal="'up'" data-reveal-delay="200">
          Mais de 12 mil pedidos e contando. Um pouquinho do que rola na nossa caixa de avaliações.
        </p>
      </div>

      <div class="rev__grid">
        <article
          v-for="(t, idx) in items"
          :key="t.name"
          class="rev__card"
          v-reveal="reveals[idx]"
          :data-reveal-delay="idx * 100"
        >
          <div class="rev__quote">"</div>
          <p class="rev__text">{{ t.text }}</p>
          <div class="rev__foot">
            <div class="rev__avatar" :style="{ background: t.color }">{{ t.initial }}</div>
            <div>
              <strong class="t-mono">{{ t.name }}</strong>
              <small>{{ t.role }}</small>
            </div>
            <div class="rev__stars">★ ★ ★ ★ ★</div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    name: 'Marina A.',
    initial: 'M',
    role: 'Cliente fiel desde 2020',
    color: 'linear-gradient(135deg,#FFB800,#FF6B1A)',
    text: 'O Cheddar Melt é viciante. Já provei muito hambúrguer e o do Gú tem aquela coisa de comida feita com capricho. Pão fofo, carne suculenta, parou.'
  },
  {
    name: 'Rafa P.',
    initial: 'R',
    role: 'Vai todo sábado',
    color: 'linear-gradient(135deg,#E63946,#FF6B1A)',
    text: 'Sábado sem Bacon de Fogo não é sábado. O atendimento é sempre na maior simpatia, o pessoal lembra do meu nome.'
  },
  {
    name: 'Camila R.',
    initial: 'C',
    role: 'Veggie',
    color: 'linear-gradient(135deg,#FFD24C,#FFB800)',
    text: 'Finalmente uma hamburgueria que respeita opção vegetariana. O Green Stack é uma das melhores coisas que provei esse ano.'
  },
  {
    name: 'João V.',
    initial: 'J',
    role: 'Pediu de delivery',
    color: 'linear-gradient(135deg,#FF4500,#E63946)',
    text: 'Pedi pelo iFood numa noite de chuva. Chegou quentinho, embalado direitinho, o pão ainda crocante. Aplausos.'
  },
  {
    name: 'Bia M.',
    initial: 'B',
    role: 'Fã do Duplo Impacto',
    color: 'linear-gradient(135deg,#FFB800,#FFD24C)',
    text: 'Duplo Impacto é uma experiência. Levo amigos só pra ver a cara deles na primeira mordida. Recomendo demais.'
  },
  {
    name: 'Tiago S.',
    initial: 'T',
    role: 'Aniversariante',
    color: 'linear-gradient(135deg,#FF6B1A,#FFB800)',
    text: 'Fiz meu aniversário ali. O Gú e o time fecharam o salão pra gente, super atenciosos. Lanche maravilhoso, brigadeiro de sobremesa. Top.'
  }
]
const reveals = ['up-left', 'up', 'up-right', 'down-left', 'zoom', 'down-right']
</script>

<style scoped lang="scss">
.rev { position: relative; overflow: hidden; background: var(--c-bg-2); }
.rev__backword {
  position: absolute;
  top: 20%;
  left: -10%;
  font-size: clamp(140px, 18vw, 280px);
  white-space: nowrap;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 184, 0, .08);
  letter-spacing: .04em;
  pointer-events: none;
  z-index: 0;
}
.rev__head {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 60px;
  position: relative; z-index: 1;
}
.rev__head .section-lead { margin: 0 auto; }
.rev__grid {
  position: relative; z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.rev__card {
  position: relative;
  background: var(--c-bg-3);
  border: 1px solid rgba(255,255,255,.05);
  border-radius: var(--r-lg);
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform .35s cubic-bezier(.2,.7,.2,1), border-color .3s;
  &:hover {
    transform: translateY(-4px) rotate(-.4deg);
    border-color: var(--c-border);
  }
}
.rev__quote {
  font-family: var(--f-display);
  font-size: 80px;
  color: var(--c-gold);
  line-height: .6;
  margin-top: -8px;
  letter-spacing: -.05em;
}
.rev__text {
  font-size: 16px;
  line-height: 1.6;
  color: var(--c-text);
  margin: 0;
  flex: 1;
}
.rev__foot {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid rgba(255,255,255,.05);
}
.rev__avatar {
  width: 42px; height: 42px;
  border-radius: 50%;
  display: grid; place-items: center;
  font-family: var(--f-display);
  font-size: 18px;
  color: #1b0900;
}
.rev__foot strong {
  display: block;
  font-size: 13px;
  color: var(--c-text);
  letter-spacing: .04em;
}
.rev__foot small {
  display: block;
  font-size: 11px;
  color: var(--c-text-mute);
  letter-spacing: .04em;
}
.rev__stars {
  color: var(--c-gold);
  font-size: 12px;
  letter-spacing: .1em;
}

@media (max-width: 980px) { .rev__grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .rev__grid { grid-template-columns: 1fr; } }
</style>
