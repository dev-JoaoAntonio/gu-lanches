<template>
  <section id="depoimentos" class="rev section">
    <div class="rev__backword sd-parallax-fast t-display" aria-hidden="true">
      DA VIZINHANÇA PRA VIZINHANÇA
    </div>

    <div class="container">
      <div class="rev__head">
        <span class="section-label" v-reveal="'down'">Recados</span>
        <h2 class="section-title" v-reveal="'up'" data-reveal-delay="100">
          O que dizem<br/>
          <span class="t-serif"><em>os clientes do Gú</em></span>
        </h2>
        <p class="section-lead" v-reveal="'up'" data-reveal-delay="200">
          A maior parte chega no boca-a-boca. Volta porque o lanche é bom e porque é divertido
          ver o garoto trabalhando com a família.
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
          <p class="rev__text t-serif">{{ t.text }}</p>
          <div class="rev__foot">
            <div class="rev__avatar" :style="{ background: t.color }">{{ t.initial }}</div>
            <div>
              <strong>{{ t.name }}</strong>
              <small>{{ t.role }}</small>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    name: 'Marina, vizinha',
    initial: 'M',
    role: 'mora na mesma rua',
    color: 'linear-gradient(135deg,#FFB800,#FF6B1A)',
    text: 'A gente passou a pedir toda sexta. O Gú já sabe o que cada um da família come. Achou que o meu marido não ia gostar de pepino e já tirou antes de eu pedir.'
  },
  {
    name: 'Rafa',
    initial: 'R',
    role: 'professor do Gú',
    color: 'linear-gradient(135deg,#E63946,#FF6B1A)',
    text: 'Ele me chamou pra ir num sábado. Cheguei achando que era uma brincadeira de criança. Saí com o melhor cheddar derretido que comi esse ano.'
  },
  {
    name: 'Camila',
    initial: 'C',
    role: 'amiga da mãe',
    color: 'linear-gradient(135deg,#FFD24C,#FFB800)',
    text: 'Encomendei dez Tudão pro aniversário da minha filha. Saiu tudo no horário, embalado direitinho. O Gú escreveu o nome de cada convidado na embalagem.'
  },
  {
    name: 'Seu Toninho',
    initial: 'T',
    role: 'do mercado da esquina',
    color: 'linear-gradient(135deg,#FF4500,#E63946)',
    text: 'O moleque vem aqui no mercado escolher tomate como se fosse coisa séria. Aperta, cheira, devolve se não está bom. Isso é coisa de cozinheiro.'
  },
  {
    name: 'Bia',
    initial: 'B',
    role: 'irmã do Gú',
    color: 'linear-gradient(135deg,#FFB800,#FFD24C)',
    text: 'Ele me ajuda com a tarefa de matemática quase todo dia. Em troca eu fico anotando os pedidos no caderno. Acho que é justo.'
  },
  {
    name: 'João',
    initial: 'J',
    role: 'pediu pela primeira vez',
    color: 'linear-gradient(135deg,#FF6B1A,#FFB800)',
    text: 'Achei pelo Instagram, pedi sem muita esperança. Veio numa caixinha de papel, com o nome do lanche escrito à mão. Pão tostado na medida certa.'
  }
]
const reveals = ['up-left', 'up', 'up-right', 'down-left', 'zoom', 'down-right']
</script>

<style scoped lang="scss">
.rev { position: relative; overflow: hidden; background: var(--c-bg-2); }
.rev__backword {
  position: absolute;
  top: 18%;
  left: -10%;
  font-size: clamp(120px, 16vw, 240px);
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
.section-title .t-serif {
  font-style: italic;
  color: var(--c-gold);
  font-weight: 700;
  text-transform: none;
  letter-spacing: -.01em;
}

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
  padding: 32px 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  transition: transform .35s cubic-bezier(.2,.7,.2,1), border-color .3s;
  &::before {
    content: "“";
    position: absolute;
    top: -6px; left: 18px;
    font-family: var(--f-serif);
    font-size: 100px;
    color: var(--c-gold);
    line-height: 1;
    opacity: .25;
  }
  &:hover {
    transform: translateY(-4px) rotate(-.3deg);
    border-color: var(--c-border);
  }
}
.rev__text {
  font-size: 17px;
  line-height: 1.55;
  color: var(--c-text);
  margin: 0;
  flex: 1;
  font-style: italic;
  font-weight: 400;
}
.rev__foot {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid rgba(255,255,255,.05);
}
.rev__avatar {
  width: 40px; height: 40px;
  border-radius: 50%;
  display: grid; place-items: center;
  font-family: var(--f-display);
  font-size: 16px;
  color: #1b0900;
}
.rev__foot strong {
  display: block;
  font-size: 14px;
  color: var(--c-text);
  font-weight: 600;
}
.rev__foot small {
  display: block;
  font-size: 12px;
  color: var(--c-text-mute);
  margin-top: 2px;
}

@media (max-width: 980px) { .rev__grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .rev__grid { grid-template-columns: 1fr; } }
</style>
