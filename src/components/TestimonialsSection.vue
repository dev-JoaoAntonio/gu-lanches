<template>
  <section id="depoimentos" class="rev section">
    <div class="container">
      <header class="rev__head">
        <span class="section-label" v-reveal="'down'">Avaliações</span>
        <h2 class="section-title" v-reveal="'up'" data-reveal-delay="100">
          O que dizem <em>os clientes da casa.</em>
        </h2>
        <p class="section-lead" v-reveal="'up'" data-reveal-delay="200">
          A maior parte dos pedidos chega pelo boca a boca. Quem entra, costuma voltar.
        </p>
      </header>

      <div class="rev__grid">
        <article
          v-for="(t, idx) in items"
          :key="t.name"
          class="rev__card"
          v-reveal="reveals[idx]"
          :data-reveal-delay="idx * 80"
        >
          <p class="rev__text">{{ t.text }}</p>
          <footer class="rev__foot">
            <div class="rev__avatar">{{ t.initial }}</div>
            <div>
              <strong>{{ t.name }}</strong>
              <small>{{ t.role }}</small>
            </div>
          </footer>
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
    role: 'Cliente desde 2024',
    text: 'Passamos a pedir toda sexta. O Gú já sabe o que cada um da família come. Achou que meu marido não ia gostar de pepino e tirou antes de eu pedir.'
  },
  {
    name: 'Rafael P.',
    initial: 'R',
    role: 'Professor',
    text: 'Fui em um sábado, achando que era brincadeira de criança. Saí com o melhor cheddar derretido que comi esse ano.'
  },
  {
    name: 'Camila R.',
    initial: 'C',
    role: 'Encomendou aniversário',
    text: 'Encomendei dez Tudão para o aniversário da minha filha. Tudo no horário, embalado individualmente. O Gú escreveu o nome de cada convidado na embalagem.'
  },
  {
    name: 'Sr. Toninho',
    initial: 'T',
    role: 'Mercado da esquina',
    text: 'O moleque vem aqui escolher tomate como se fosse coisa séria. Aperta, cheira, devolve se não está bom. Isso é coisa de cozinheiro.'
  },
  {
    name: 'Beatriz M.',
    initial: 'B',
    role: 'Cliente recorrente',
    text: 'O cardápio é curto, mas todos os itens entregam exatamente o que prometem. O pão tostado na medida certa faz diferença.'
  },
  {
    name: 'João V.',
    initial: 'J',
    role: 'Pediu pelo iFood',
    text: 'Achei pelo Instagram, pedi pelo iFood sem grande expectativa. Veio bem embalado, com o nome do lanche escrito à mão na caixa.'
  }
]
const reveals = ['up-left', 'up', 'up-right', 'down-left', 'zoom', 'down-right']
</script>

<style scoped lang="scss">
.rev { background: var(--c-bg); }
.rev__head {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 60px;
}
.rev__head .section-lead { margin: 12px auto 0; }
.rev__head .section-label { justify-content: center; }

.rev__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-top: 1px solid var(--c-border);
  border-left: 1px solid var(--c-border);
}
.rev__card {
  position: relative;
  padding: 36px 32px 30px;
  background: var(--c-bg);
  border-right: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  display: flex;
  flex-direction: column;
  gap: 22px;
  min-height: 280px;
  transition: background .3s;
  &::before {
    content: "“";
    position: absolute;
    top: 14px; right: 24px;
    font-family: var(--f-display);
    font-size: 80px;
    color: var(--c-gold);
    line-height: 1;
    opacity: .25;
    font-style: italic;
  }
  &:hover { background: var(--c-bg-soft); }
}
.rev__text {
  font-family: var(--f-display);
  font-style: italic;
  font-size: 19px;
  line-height: 1.5;
  color: var(--c-text);
  margin: 0;
  flex: 1;
  font-weight: 400;
}
.rev__foot {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 14px;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid var(--c-border);
}
.rev__avatar {
  width: 44px; height: 44px;
  border-radius: 50%;
  background: var(--c-gold-bg);
  border: 1px solid var(--c-border);
  display: grid; place-items: center;
  font-family: var(--f-display);
  font-style: italic;
  font-size: 20px;
  font-weight: 500;
  color: var(--c-fire);
}
.rev__foot strong {
  display: block;
  font-size: 14px;
  color: var(--c-text);
  font-weight: 500;
  letter-spacing: -.005em;
}
.rev__foot small {
  display: block;
  font-size: 11px;
  color: var(--c-text-mute);
  margin-top: 2px;
  font-family: var(--f-mono);
  letter-spacing: .08em;
  text-transform: uppercase;
}

@media (max-width: 980px) { .rev__grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .rev__grid { grid-template-columns: 1fr; } }
</style>
