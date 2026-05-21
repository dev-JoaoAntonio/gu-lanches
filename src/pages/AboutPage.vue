<template>
  <main class="about">
    <!-- ========== COVER ========== -->
    <section class="cover">
      <div class="container cover__inner">
        <div class="cover__meta" v-reveal="'down'">
          <span class="t-mono">A casa · ensaio editorial</span>
          <span class="cover__dot">·</span>
          <span class="t-mono">leitura de 4 minutos</span>
        </div>

        <h1 class="cover__title">
          <span class="t-display" v-reveal="'left'">Um menino,</span>
          <span class="t-display-italic cover__title-i" v-reveal="'right'" data-reveal-delay="120">uma chapa,</span>
          <span class="t-display" v-reveal="'up'" data-reveal-delay="240">a família junto.</span>
        </h1>

        <p class="cover__lead" v-reveal="'up'" data-reveal-delay="340">
          Em uma cozinha de Aparecida de Goiânia, um garoto de onze anos passou
          a montar hambúrgueres pra família. Hoje, atende a vizinhança
          de sexta a domingo, com a mãe coordenando e as irmãs dando suporte.
        </p>

        <div class="cover__credits" v-reveal="'up'" data-reveal-delay="440">
          <div>
            <span class="t-up">Texto</span>
            <strong>Lanches do Gú</strong>
          </div>
          <div>
            <span class="t-up">Fotografia</span>
            <strong>Arquivo da família</strong>
          </div>
          <div>
            <span class="t-up">Publicado</span>
            <strong>2026</strong>
          </div>
        </div>
      </div>

      <figure class="cover__art" v-reveal="'zoom'" data-reveal-delay="200">
        <div class="cover__art-inner float-y">
          <img src="/logo.png" alt="Marca Lanches do Gú" />
        </div>
        <figcaption>
          <span class="t-up">Marca</span>
          <strong>Lanches do Gú · 2024</strong>
        </figcaption>
      </figure>
    </section>

    <!-- ========== INTRO ========== -->
    <section class="section intro">
      <div class="container intro__inner">
        <aside class="intro__side">
          <span class="section-label" v-reveal="'right'">Apresentando</span>
          <h2 class="intro__sub" v-reveal="'up'" data-reveal-delay="100">
            Gustavo, <em>mas ninguém chama assim.</em>
          </h2>
        </aside>

        <div class="intro__body">
          <p class="intro__lead" v-reveal="'left'" data-reveal-delay="120">
            Aos onze anos, o Gú aprendeu a virar hambúrguer na chapa antes de
            saber preparar uma quesadilla decente. Não cozinha sozinho —
            chapa quente exige adulto por perto —, mas é dele a receita do
            molho, é ele que vira a carne, é ele que decide quando o pão
            está no ponto.
          </p>
          <p v-reveal="'left'" data-reveal-delay="220">
            A mãe, Dona Cláudia, coordena. Ensina o que precisa ser ensinado
            e segura a barra quando o pedido fica grande. As irmãs, Bia e
            Lara, anotam, conferem, embalam, e fazem o sistema funcionar.
            Em troca, o Gú dá uma força com a lição de casa delas durante a
            semana.
          </p>

          <blockquote class="intro__quote" v-reveal="'zoom'" data-reveal-delay="320">
            <p>
              “Gosto quando o pão fica torradinho mas ainda mole por dentro.
              Carne com bordinha bem dourada, queijo derretendo de leve.
              Não tem segredo, mas tem ponto.”
            </p>
            <cite>
              <strong>Gú</strong>
              <span>cozinheiro principal</span>
            </cite>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- ========== FAMÍLIA ========== -->
    <section id="familia" class="section family">
      <div class="container">
        <header class="family__head">
          <span class="section-label" v-reveal="'right'">A família</span>
          <h2 class="section-title" v-reveal="'up'" data-reveal-delay="100">
            Quatro pessoas, <em>quatro papéis.</em>
          </h2>
          <p class="section-lead" v-reveal="'up'" data-reveal-delay="200">
            Cada um tem uma função definida (mais ou menos). Cada um troca de função
            quando precisa. Não há hierarquia rígida — há mãe.
          </p>
        </header>

        <div class="family__grid">
          <article class="family__card" v-reveal="'up-left'">
            <div class="family__avatar">G</div>
            <span class="t-up family__role">O chef</span>
            <h3>Gú</h3>
            <p class="family__age">11 anos</p>
            <p class="family__bio">
              Cozinheiro principal. Aprende com vídeos do YouTube enquanto o pão dora.
              Durante a semana, ajuda as irmãs com a tarefa de matemática.
            </p>
          </article>

          <article class="family__card" v-reveal="'up'" data-reveal-delay="100">
            <div class="family__avatar">C</div>
            <span class="t-up family__role">A coordenadora</span>
            <h3>Dona Cláudia</h3>
            <p class="family__age">a mãe</p>
            <p class="family__bio">
              Coordena a operação, afia faca, ajusta sal, embala os pedidos. Trabalha
              durante o dia; à noite, está na cozinha.
            </p>
          </article>

          <article class="family__card" v-reveal="'up'" data-reveal-delay="200">
            <div class="family__avatar">B</div>
            <span class="t-up family__role">Atendimento</span>
            <h3>Bia</h3>
            <p class="family__age">9 anos</p>
            <p class="family__bio">
              Anota os pedidos no caderno espiral da escola. Recebe parte do
              faturamento para gastar com material escolar e lápis colorido.
            </p>
          </article>

          <article class="family__card" v-reveal="'up-right'" data-reveal-delay="300">
            <div class="family__avatar">L</div>
            <span class="t-up family__role">Controle de qualidade</span>
            <h3>Lara</h3>
            <p class="family__age">7 anos</p>
            <p class="family__bio">
              Prova um pedaço de cada lanche antes de sair. Aprova quase tudo. Quando
              reprova, é coisa séria. Ainda recebe em batata frita.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- ========== TIMELINE ========== -->
    <section class="section origin">
      <div class="container origin__inner">
        <aside class="origin__copy">
          <span class="section-label" v-reveal="'right'">Como começou</span>
          <h2 class="section-title" v-reveal="'up'" data-reveal-delay="100">
            Foi <em>acontecendo</em>, sem plano.
          </h2>
          <p class="origin__lead" v-reveal="'up'" data-reveal-delay="200">
            Sábado qualquer de 2024. A mãe deixou o Gú usar a chapa para esquentar
            o lanche da própria escola. Saiu bom. Na semana seguinte, dois amigos.
            Daí, a vizinhança.
          </p>
          <p class="origin__lead" v-reveal="'up'" data-reveal-delay="280">
            O caderno da Bia surgiu por necessidade. O Instagram, por sugestão da
            mãe. A entrada no iFood, por insistência do Gú.
          </p>
        </aside>

        <ol class="origin__timeline">
          <div class="origin__line"><div class="origin__line-fill sd-line" aria-hidden="true" /></div>

          <li class="origin__step" v-reveal="'left'">
            <span class="origin__step-date t-mono">2023</span>
            <h4>Primeiro contato</h4>
            <p>O Gú vê um vídeo sobre smash burger e fica obcecado pela técnica.</p>
          </li>
          <li class="origin__step" v-reveal="'right'" data-reveal-delay="80">
            <span class="origin__step-date t-mono">Jan · 2024</span>
            <h4>A chapinha</h4>
            <p>Ganha uma chapa elétrica de aniversário. Treina em pão sírio antes de pedir blend.</p>
          </li>
          <li class="origin__step" v-reveal="'left'" data-reveal-delay="160">
            <span class="origin__step-date t-mono">Mar · 2024</span>
            <h4>Primeiro pedido</h4>
            <p>Faz lanche para amigos da escola. Recebe em figurinhas e moedas.</p>
          </li>
          <li class="origin__step" v-reveal="'right'" data-reveal-delay="240">
            <span class="origin__step-date t-mono">Jul · 2024</span>
            <h4>A vizinhança chega</h4>
            <p>Vizinhos começam a pedir. A Bia tem a ideia do caderno de anotações.</p>
          </li>
          <li class="origin__step" v-reveal="'left'" data-reveal-delay="320">
            <span class="origin__step-date t-mono">Out · 2024</span>
            <h4>Conta e perfil</h4>
            <p>Conta Pix oficial no nome do Gú. Instagram criado pela mãe, fotos da Bia.</p>
          </li>
          <li class="origin__step" v-reveal="'right'" data-reveal-delay="400">
            <span class="origin__step-date t-mono">Hoje</span>
            <h4>iFood e fila no portão</h4>
            <p>Cardápio enxuto, pedido online e atendimento próprio. Sextas, sábados e domingos.</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- ========== DAILY ========== -->
    <section id="dia" class="section daily">
      <div class="daily__back sd-parallax-slow" aria-hidden="true">
        <span class="t-display-italic">Sexta à noite.</span>
      </div>
      <div class="container">
        <header class="daily__head">
          <span class="section-label" v-reveal="'down'">Um dia de cozinha</span>
          <h2 class="section-title" v-reveal="'up'" data-reveal-delay="100">
            Das <em>15h</em> até o último pedido.
          </h2>
        </header>

        <div class="daily__schedule">
          <article class="daily__item" v-reveal="'left'">
            <span class="daily__time t-display">15h</span>
            <h4>Saída da aula</h4>
            <p>Volta da escola. Tira a mochila, abre o caderno da Bia e confere as encomendas anotadas durante a semana.</p>
          </article>
          <article class="daily__item" v-reveal="'right'" data-reveal-delay="100">
            <span class="daily__time t-display">16h30</span>
            <h4>Mercado da esquina</h4>
            <p>Vai com a mãe escolher pão fresco e tomate. Aprendeu a apertar tomate com o Sr. Toninho.</p>
          </article>
          <article class="daily__item" v-reveal="'left'" data-reveal-delay="200">
            <span class="daily__time t-display">18h</span>
            <h4>Mise en place</h4>
            <p>Pré-aquece a chapa, mistura o molho da casa, organiza ingredientes em recipientes individuais.</p>
          </article>
          <article class="daily__item" v-reveal="'right'" data-reveal-delay="300">
            <span class="daily__time t-display">19h</span>
            <h4>Abertura</h4>
            <p>Saída do primeiro pedido. Bia anota, Gú monta, mãe finaliza e embala. Música baixa.</p>
          </article>
          <article class="daily__item" v-reveal="'left'" data-reveal-delay="400">
            <span class="daily__time t-display">23h</span>
            <h4>Último lanche</h4>
            <p>Limpeza da chapa começa antes do fim. Lara, na maior parte das vezes, já dormiu na cadeira.</p>
          </article>
          <article class="daily__item" v-reveal="'right'" data-reveal-delay="500">
            <span class="daily__time t-display">00h</span>
            <h4>Fechamento</h4>
            <p>Conta do dia entre mãe e Gú. Parte vai pra Bia, parte pro próximo pão, parte fica num pote vermelho.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ========== QUOTE MOM ========== -->
    <section class="section mom">
      <div class="container mom__inner">
        <blockquote v-reveal="'zoom'">
          <p>
            “Ele já não me chama mais para ajudar em algumas coisas.
            <em>Eu fico orgulhosa e meio orgulhosa demais.</em>”
          </p>
          <cite>
            <span class="mom__avatar">C</span>
            <div>
              <strong>Dona Cláudia</strong>
              <span class="t-up">mãe do Gú</span>
            </div>
          </cite>
        </blockquote>
      </div>
    </section>

    <!-- ========== DEAL ========== -->
    <section class="section deal">
      <div class="container">
        <div class="deal__grid">
          <aside class="deal__copy">
            <span class="section-label" v-reveal="'right'">O combinado</span>
            <h2 class="section-title" v-reveal="'up'" data-reveal-delay="100">
              Tudo o que entra na chapa <em>sai da família.</em>
            </h2>
            <p class="deal__text" v-reveal="'up'" data-reveal-delay="200">
              Não há terceirização. O blend é moído no açougue do bairro, o pão sai
              da padaria da esquina, o molho usa receita da avó. Se você comer aqui,
              comeu uma coisa que a mãe deixou sair.
            </p>
          </aside>

          <div class="deal__list">
            <article class="deal__item" v-reveal="'down-left'">
              <span class="t-mono deal__item-num">01</span>
              <strong>Carne</strong>
              <p>Açougue do Sr. Júlio, quinta de manhã. Blend moído na hora.</p>
            </article>
            <article class="deal__item" v-reveal="'down'" data-reveal-delay="80">
              <span class="t-mono deal__item-num">02</span>
              <strong>Pão</strong>
              <p>Padaria da esquina, fornada das 16h. Direto pra chapa.</p>
            </article>
            <article class="deal__item" v-reveal="'down-right'" data-reveal-delay="160">
              <span class="t-mono deal__item-num">03</span>
              <strong>Molho</strong>
              <p>Receita da avó do Gú. Três ingredientes que ele se recusa a dizer.</p>
            </article>
            <article class="deal__item" v-reveal="'down-left'" data-reveal-delay="240">
              <span class="t-mono deal__item-num">04</span>
              <strong>Atendimento</strong>
              <p>Bia atende ao telefone com a voz mais oficial que ela consegue.</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== DREAM ========== -->
    <section class="section dream">
      <div class="container dream__inner">
        <header class="dream__head">
          <span class="section-label" v-reveal="'up'">O que vem por aí</span>
          <h2 class="dream__title" v-reveal="'up'" data-reveal-delay="100">
            <span class="t-display-italic">“Quando eu crescer,</span>
            <span class="t-display">quero abrir um restaurante.”</span>
          </h2>
          <p class="dream__author t-mono" v-reveal="'up'" data-reveal-delay="200">— Gú</p>
          <p class="dream__lead" v-reveal="'up'" data-reveal-delay="300">
            A mãe diz que isso ainda dá pra pensar. Por enquanto, a meta é fazer um
            pão melhor, comprar uma chapa nova e manter as notas em dia.
          </p>
        </header>

        <div class="dream__cards">
          <article class="dream__card" v-reveal="'left'">
            <span class="dream__card-num t-display">01</span>
            <strong>Pão próprio</strong>
            <p>Receita autoral de pão brioche, em desenvolvimento com a padaria parceira.</p>
          </article>
          <article class="dream__card" v-reveal="'up'" data-reveal-delay="120">
            <span class="dream__card-num t-display">02</span>
            <strong>Chapa maior</strong>
            <p>Equipamento profissional para dobrar a capacidade sem perder consistência.</p>
          </article>
          <article class="dream__card" v-reveal="'right'" data-reveal-delay="240">
            <span class="dream__card-num t-display">03</span>
            <strong>Escola em dia</strong>
            <p>Acordo com a mãe: nota baixa interrompe a operação do fim de semana.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ========== CLOSING ========== -->
    <section class="section closing">
      <div class="container closing__inner">
        <h2 class="closing__title" v-reveal="'up'">
          <span class="t-display">Venha provar.</span>
          <span class="t-display-italic">a chapa está acesa.</span>
        </h2>
        <p class="closing__lead" v-reveal="'up'" data-reveal-delay="160">
          Sexta à noite, a partir das 19h. Pedidos pelo iFood, dúvidas pelo WhatsApp.
        </p>
        <div class="closing__actions" v-reveal="'up'" data-reveal-delay="280">
          <a :href="IFOOD_URL" class="btn btn-primary" target="_blank" rel="noopener">
            Peça no iFood
          </a>
          <router-link to="/#cardapio" class="btn btn-ghost">Ver o cardápio</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { IFOOD_URL } from '@/config'
</script>

<style scoped lang="scss">
.about { background: var(--c-bg); }
.section-title em { font-style: italic; font-weight: 500; color: var(--c-fire); }

/* ========== COVER ========== */
.cover {
  position: relative;
  padding: 170px 0 90px;
}
.cover__inner {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 60px;
  align-items: end;
}
.cover__meta {
  display: flex; gap: 14px; align-items: center;
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--c-text-mute);
  margin-bottom: 26px;
}
.cover__dot { color: var(--c-fire); }
.cover__title {
  font-size: clamp(50px, 7vw, 108px);
  line-height: .98;
  margin: 0 0 30px;
  display: flex; flex-direction: column;
  font-weight: 400;
  letter-spacing: -.03em;
  color: var(--c-text);
}
.cover__title-i { color: var(--c-fire); }
.cover__lead {
  font-size: 20px;
  color: var(--c-text-dim);
  line-height: 1.6;
  max-width: 580px;
  margin: 0 0 38px;
}
.cover__credits {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding-top: 26px;
  border-top: 1px solid var(--c-border);
  max-width: 540px;
  > div { display: flex; flex-direction: column; gap: 6px; }
  span { color: var(--c-text-mute); }
  strong {
    font-family: var(--f-display);
    font-style: italic;
    font-variation-settings: "opsz" 144;
    font-size: 16px;
    font-weight: 500;
    color: var(--c-text);
    letter-spacing: -.005em;
  }
}

.cover__art {
  margin: 0;
  padding: 22px;
  background: var(--c-bg-2);
  border: 1px solid var(--c-border);
  border-radius: var(--r-md);
  box-shadow: var(--sh-card);
  display: flex; flex-direction: column; gap: 16px;
  max-width: 380px;
  justify-self: end;
}
.cover__art-inner {
  aspect-ratio: 1;
  background:
    radial-gradient(circle at 50% 35%, rgba(194, 73, 20, .18), transparent 60%),
    linear-gradient(180deg, #2A1F18 0%, #1A1410 100%);
  border-radius: var(--r-sm);
  display: grid; place-items: center;
  img { width: 88%; height: 88%; object-fit: contain; }
}
.cover__art figcaption {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 6px;
  span { color: var(--c-text-mute); }
  strong {
    font-family: var(--f-mono);
    font-size: 12px;
    color: var(--c-text);
    letter-spacing: .04em;
    font-weight: 500;
  }
}

/* ========== INTRO ========== */
.intro { background: var(--c-bg-soft); border-top: 1px solid var(--c-border); border-bottom: 1px solid var(--c-border); }
.intro__inner {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 70px;
  align-items: start;
}
.intro__side { position: sticky; top: 120px; display: flex; flex-direction: column; gap: 16px; }
.intro__sub {
  font-family: var(--f-display);
  font-variation-settings: "opsz" 144, "SOFT" 30;
  font-size: clamp(34px, 4vw, 52px);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -.03em;
  color: var(--c-text);
  margin: 0;
  em { font-style: italic; font-weight: 500; color: var(--c-fire); }
}
.intro__body { display: flex; flex-direction: column; gap: 16px; }
.intro__lead {
  font-family: var(--f-display);
  font-size: 22px;
  line-height: 1.55;
  color: var(--c-text);
  font-weight: 400;
  letter-spacing: -.01em;
  margin: 0;
}
.intro__body p:not(.intro__lead) {
  font-size: 17px;
  line-height: 1.75;
  color: var(--c-text-dim);
  margin: 0;
}

.intro__quote {
  margin: 30px 0 0;
  padding: 30px 32px;
  background: var(--c-bg-2);
  border-left: 3px solid var(--c-fire);
  border-radius: var(--r-sm);
  display: flex; flex-direction: column; gap: 18px;
  p {
    font-family: var(--f-display);
    font-style: italic;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.45;
    color: var(--c-text);
    margin: 0;
  }
  cite {
    font-style: normal;
    display: flex; flex-direction: column; gap: 2px;
    strong { font-size: 14px; color: var(--c-text); font-weight: 500; }
    span {
      font-family: var(--f-mono);
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: .2em;
      color: var(--c-text-mute);
    }
  }
}

/* ========== FAMÍLIA ========== */
.family { background: var(--c-bg); }
.family__head { text-align: center; max-width: 720px; margin: 0 auto 60px; }
.family__head .section-lead { margin: 12px auto 0; }
.family__head .section-label { justify-content: center; }
.family__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border-top: 1px solid var(--c-border);
  border-left: 1px solid var(--c-border);
}
.family__card {
  background: var(--c-bg);
  border-right: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  padding: 36px 28px;
  display: flex; flex-direction: column; gap: 6px;
  transition: background .3s;
  &:hover { background: var(--c-bg-soft); }
  h3 {
    font-family: var(--f-display);
    font-variation-settings: "opsz" 144, "SOFT" 30;
    font-size: 38px;
    font-weight: 500;
    color: var(--c-text);
    letter-spacing: -.02em;
    margin: 0;
    line-height: 1;
  }
}
.family__avatar {
  width: 56px; height: 56px;
  border-radius: 50%;
  background: var(--c-gold-bg);
  border: 1px solid var(--c-border);
  display: grid; place-items: center;
  font-family: var(--f-display);
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  color: var(--c-fire);
  margin-bottom: 14px;
}
.family__role { color: var(--c-text-mute); }
.family__age {
  font-family: var(--f-display);
  font-style: italic;
  font-size: 16px;
  color: var(--c-fire);
  margin: 2px 0 10px;
}
.family__bio {
  font-size: 14px;
  line-height: 1.65;
  color: var(--c-text-dim);
  margin: 0;
}

/* ========== ORIGIN / TIMELINE ========== */
.origin { background: var(--c-bg-soft); }
.origin__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}
.origin__copy { position: sticky; top: 120px; display: flex; flex-direction: column; gap: 18px; }
.origin__lead {
  font-size: 17px;
  line-height: 1.7;
  color: var(--c-text-dim);
  margin: 0;
  max-width: 460px;
}

.origin__timeline {
  position: relative;
  padding-left: 50px;
  list-style: none;
  margin: 0;
}
.origin__line {
  position: absolute;
  left: 22px; top: 6px; bottom: 6px;
  width: 1px;
  background: var(--c-border-strong);
}
.origin__line-fill {
  position: absolute; inset: 0;
  background: var(--c-fire);
  transform-origin: top;
  transform: scaleY(0);
}
.origin__step {
  position: relative;
  padding: 12px 0 32px 30px;
  &::before {
    content: "";
    position: absolute;
    left: -36px; top: 18px;
    width: 11px; height: 11px;
    border-radius: 50%;
    background: var(--c-bg-soft);
    border: 2px solid var(--c-fire);
  }
  h4 {
    font-family: var(--f-display);
    font-size: 22px;
    font-weight: 500;
    color: var(--c-text);
    letter-spacing: -.01em;
    margin: 4px 0 6px;
  }
  p {
    font-size: 15px;
    line-height: 1.55;
    color: var(--c-text-dim);
    margin: 0;
  }
}
.origin__step-date {
  font-size: 11px;
  color: var(--c-fire);
  letter-spacing: .15em;
  text-transform: uppercase;
}

/* ========== DAILY ========== */
.daily { background: var(--c-bg); position: relative; overflow: hidden; }
.daily__back {
  position: absolute;
  top: 30%; left: -6%;
  font-size: clamp(120px, 16vw, 260px);
  white-space: nowrap;
  color: transparent;
  -webkit-text-stroke: 1px rgba(194, 73, 20, .12);
  pointer-events: none;
  z-index: 0;
  letter-spacing: -.03em;
}
.daily__head { max-width: 720px; margin: 0 auto 60px; text-align: center; position: relative; z-index: 1; }
.daily__head .section-label { justify-content: center; }
.daily__schedule {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0;
  position: relative; z-index: 1;
  border-top: 1px solid var(--c-border);
  border-left: 1px solid var(--c-border);
}
.daily__item {
  background: var(--c-bg);
  border-right: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  padding: 32px 28px;
  display: flex; flex-direction: column; gap: 8px;
  transition: background .3s;
  &:hover { background: var(--c-bg-soft); }
  h4 {
    font-family: var(--f-display);
    font-size: 20px;
    color: var(--c-text);
    margin: 4px 0 4px;
    font-weight: 500;
    letter-spacing: -.01em;
  }
  p {
    font-size: 14px;
    line-height: 1.6;
    color: var(--c-text-dim);
    margin: 0;
  }
}
.daily__time {
  font-size: 42px;
  color: var(--c-fire);
  letter-spacing: -.02em;
  font-weight: 500;
  font-variation-settings: "opsz" 144;
  line-height: 1;
}

/* ========== MOM ========== */
.mom { background: var(--c-bg-soft); }
.mom__inner { max-width: 900px; margin: 0 auto; text-align: center; }
.mom blockquote {
  margin: 0;
  p {
    font-family: var(--f-display);
    font-style: italic;
    font-weight: 400;
    font-size: clamp(28px, 3.5vw, 44px);
    line-height: 1.3;
    color: var(--c-text);
    margin: 0 0 32px;
    letter-spacing: -.015em;
    em { color: var(--c-fire); font-weight: 500; }
  }
  cite {
    font-style: normal;
    display: inline-flex;
    gap: 14px;
    align-items: center;
    strong { font-size: 14px; color: var(--c-text); font-weight: 500; display: block; }
    span { font-size: 10px; color: var(--c-text-mute); margin-top: 4px; display: block; }
  }
}
.mom__avatar {
  width: 52px; height: 52px;
  border-radius: 50%;
  background: var(--c-gold-bg);
  border: 1px solid var(--c-border);
  display: grid; place-items: center;
  font-family: var(--f-display);
  font-style: italic;
  font-size: 22px;
  color: var(--c-fire);
}

/* ========== DEAL ========== */
.deal { background: var(--c-bg); }
.deal__grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 70px;
  align-items: start;
}
.deal__copy { display: flex; flex-direction: column; gap: 18px; position: sticky; top: 120px; }
.deal__text {
  font-size: 17px;
  line-height: 1.7;
  color: var(--c-text-dim);
  max-width: 460px;
  margin: 0;
}
.deal__list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border-top: 1px solid var(--c-border);
  border-left: 1px solid var(--c-border);
}
.deal__item {
  background: var(--c-bg);
  border-right: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  padding: 30px 26px;
  display: flex; flex-direction: column; gap: 6px;
  strong {
    font-family: var(--f-display);
    font-size: 22px;
    color: var(--c-text);
    font-weight: 500;
    letter-spacing: -.01em;
    margin-top: 14px;
  }
  p { font-size: 14px; line-height: 1.6; color: var(--c-text-dim); margin: 4px 0 0; }
}
.deal__item-num {
  font-size: 11px;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--c-fire);
}

/* ========== DREAM ========== */
.dream { background: var(--c-bg-soft); border-top: 1px solid var(--c-border); }
.dream__inner { display: flex; flex-direction: column; gap: 50px; }
.dream__head { max-width: 760px; }
.dream__title {
  font-size: clamp(38px, 5vw, 64px);
  line-height: 1.05;
  margin: 18px 0 8px;
  display: flex; flex-direction: column; gap: 4px;
  font-weight: 400;
  letter-spacing: -.025em;
  color: var(--c-text);
  .t-display-italic { color: var(--c-fire); font-size: 1em; }
}
.dream__author {
  font-size: 12px;
  color: var(--c-text-mute);
  text-transform: uppercase;
  letter-spacing: .2em;
  margin: 0 0 18px;
}
.dream__lead {
  font-size: 17px;
  line-height: 1.7;
  color: var(--c-text-dim);
  max-width: 620px;
  margin: 0;
}
.dream__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-top: 1px solid var(--c-border);
  border-left: 1px solid var(--c-border);
}
.dream__card {
  background: var(--c-bg-soft);
  border-right: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  padding: 32px 28px;
  display: flex; flex-direction: column; gap: 6px;
  transition: background .3s;
  &:hover { background: var(--c-bg-2); }
  strong {
    font-family: var(--f-display);
    font-size: 20px;
    color: var(--c-text);
    font-weight: 500;
    letter-spacing: -.01em;
    margin-top: 14px;
  }
  p { font-size: 14px; line-height: 1.65; color: var(--c-text-dim); margin: 4px 0 0; }
}
.dream__card-num {
  font-size: 24px;
  color: var(--c-fire);
  font-weight: 500;
  letter-spacing: -.02em;
  font-variation-settings: "opsz" 144;
}

/* ========== CLOSING ========== */
.closing { background: var(--c-bg); }
.closing__inner { text-align: center; max-width: 780px; margin: 0 auto; }
.closing__title {
  font-size: clamp(46px, 6.5vw, 92px);
  line-height: 1;
  margin: 0 0 24px;
  display: flex; flex-direction: column; gap: 4px;
  font-weight: 400;
  letter-spacing: -.03em;
  color: var(--c-text);
  .t-display-italic { color: var(--c-fire); font-size: 1em; }
}
.closing__lead {
  font-size: 18px;
  color: var(--c-text-dim);
  line-height: 1.6;
  margin: 0 0 32px;
}
.closing__actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

@media (max-width: 980px) {
  .cover__inner { grid-template-columns: 1fr; gap: 50px; }
  .cover__art { max-width: 320px; justify-self: start; }
  .intro__inner { grid-template-columns: 1fr; gap: 30px; }
  .intro__side { position: static; }
  .family__grid { grid-template-columns: repeat(2, 1fr); }
  .origin__inner { grid-template-columns: 1fr; gap: 40px; }
  .origin__copy { position: static; }
  .daily__schedule { grid-template-columns: 1fr; }
  .deal__grid { grid-template-columns: 1fr; gap: 40px; }
  .deal__copy { position: static; }
  .deal__list { grid-template-columns: 1fr; }
  .dream__cards { grid-template-columns: 1fr; }
  .cover__credits { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .family__grid { grid-template-columns: 1fr; }
  .cover__credits { grid-template-columns: 1fr; }
}
</style>
