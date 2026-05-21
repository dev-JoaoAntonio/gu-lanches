<template>
  <section id="historia" class="teaser section">
    <div class="container teaser__inner">
      <div class="teaser__copy">
        <span class="section-label" v-reveal="'right'">A casa</span>
        <h2 class="section-title" v-reveal="'up'" data-reveal-delay="100">
          O Gú tem onze anos. <em>A cozinha é em família.</em>
        </h2>

        <div class="teaser__text">
          <p v-reveal="'up'" data-reveal-delay="200">
            Tudo começou em um sábado de 2024, quando a mãe deixou o Gú usar a chapa para esquentar
            o próprio lanche. A receita agradou. Os colegas pediram, os vizinhos pediram, o resto foi
            organizado em volta da mesa da cozinha.
          </p>
          <p v-reveal="'up'" data-reveal-delay="280">
            Hoje o Gú é o cozinheiro principal. A mãe coordena, ajusta tempero e embala. As irmãs,
            Bia e Lara, ajudam no recado e na conferência. Ele, em troca, dá uma força com a lição
            delas durante a semana.
          </p>
        </div>

        <router-link to="/quem-somos" class="btn-link" v-reveal="'right'" data-reveal-delay="380">
          Ler a história completa
          <span aria-hidden="true">→</span>
        </router-link>
      </div>

      <aside class="teaser__art">
        <figure class="teaser__photo" v-reveal="'zoom'">
          <div class="teaser__photo-inner">
            <img src="/logo.png" alt="" />
          </div>
          <figcaption>
            <span class="t-mono">Lanches do Gú</span>
            <span class="t-mono">Goiânia · 2024</span>
          </figcaption>
        </figure>

        <div class="teaser__pillars">
          <div class="teaser__pillar" v-reveal="'up-right'" data-reveal-delay="200">
            <span class="t-display teaser__pillar-num">04</span>
            <strong>Pessoas na cozinha</strong>
            <p>Gú, Dona Cláudia, Bia e Lara.</p>
          </div>
          <div class="teaser__pillar" v-reveal="'down-right'" data-reveal-delay="320">
            <span class="t-display teaser__pillar-num">06</span>
            <strong>Itens no cardápio</strong>
            <p>Curto por escolha, refeito a cada compra.</p>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
.teaser { background: var(--c-bg-soft); }
.teaser__inner {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 80px;
  align-items: center;
}

.teaser__copy { display: flex; flex-direction: column; gap: 22px; }
.teaser__text {
  display: flex; flex-direction: column; gap: 14px;
  font-size: 17px;
  line-height: 1.7;
  color: var(--c-text-dim);
  max-width: 540px;
  p { margin: 0; }
}

/* ---- art ---- */
.teaser__art { display: grid; grid-template-columns: 1.1fr 1fr; gap: 18px; align-items: stretch; }

.teaser__photo {
  margin: 0;
  background: var(--c-bg-2);
  border: 1px solid var(--c-border);
  padding: 18px 18px 16px;
  border-radius: var(--r-md);
  box-shadow: var(--sh-card);
  display: flex; flex-direction: column; gap: 14px;
}
.teaser__photo-inner {
  aspect-ratio: 1;
  background:
    radial-gradient(circle at 50% 35%, rgba(194, 73, 20, .18), transparent 60%),
    linear-gradient(180deg, #2A1F18 0%, #1A1410 100%);
  border-radius: var(--r-sm);
  display: grid; place-items: center;
  img { width: 88%; height: 88%; object-fit: contain; }
}
.teaser__photo figcaption {
  display: flex; justify-content: space-between;
  font-size: 10px;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--c-text-mute);
}

.teaser__pillars { display: flex; flex-direction: column; gap: 18px; }
.teaser__pillar {
  background: var(--c-bg-2);
  border: 1px solid var(--c-border);
  border-radius: var(--r-md);
  padding: 24px 22px;
  display: flex; flex-direction: column; gap: 6px;
  flex: 1;
  transition: border-color .3s, transform .3s;
  &:hover { border-color: var(--c-border-strong); transform: translateY(-2px); }
}
.teaser__pillar-num {
  font-size: 44px;
  color: var(--c-fire);
  letter-spacing: -.04em;
  font-weight: 500;
  font-variation-settings: "opsz" 144;
  margin-bottom: 6px;
}
.teaser__pillar strong {
  font-family: var(--f-display);
  font-size: 18px;
  font-weight: 500;
  color: var(--c-text);
  letter-spacing: -.01em;
}
.teaser__pillar p {
  font-size: 13px;
  line-height: 1.5;
  color: var(--c-text-dim);
  margin: 0;
}

@media (max-width: 980px) {
  .teaser__inner { grid-template-columns: 1fr; gap: 60px; }
}
@media (max-width: 560px) {
  .teaser__art { grid-template-columns: 1fr; }
}
</style>
