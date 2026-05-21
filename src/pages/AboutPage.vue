<template>
  <main class="about">
    <!-- ===== COVER ===== -->
    <section class="cover">
      <div class="cover__bg" aria-hidden="true">
        <div class="cover__glow cover__glow--fire" />
        <div class="cover__glow cover__glow--gold" />
        <div class="cover__ring sd-rotate" />
      </div>
      <div class="container cover__inner">
        <div class="cover__copy">
          <span class="section-label" v-reveal="'down'">A história</span>
          <h1 class="cover__title">
            <span class="t-display" v-reveal="'left'">Um menino,</span>
            <span class="t-serif cover__title-i" v-reveal="'right'" data-reveal-delay="120">
              <em>uma chapa,</em>
            </span>
            <span class="t-display" v-reveal="'up'" data-reveal-delay="240">a família junto.</span>
          </h1>
          <p class="cover__lead" v-reveal="'up'" data-reveal-delay="340">
            Em uma cozinha de Aparecida de Goiânia, um garoto de onze anos resolveu cozinhar pros
            amigos. A família entrou junto. Daí em diante, o resto a vizinhança conta.
          </p>
          <div class="cover__meta" v-reveal="'up'" data-reveal-delay="440">
            <span><strong>Texto</strong> · a mãe, na maior parte</span>
            <span class="cover__meta-dot">·</span>
            <span><strong>Edição</strong> · o Gú, quando dava tempo</span>
          </div>
        </div>

        <aside class="cover__portrait">
          <div class="cover__portrait-card" v-reveal="'zoom'">
            <div class="cover__portrait-img float-y">
              <img src="/logo.png" alt="" />
            </div>
            <div class="cover__portrait-cap">
              <span class="t-hand">o cara da chapa</span>
              <small class="t-mono">Gú, 11</small>
            </div>
          </div>
          <span class="cover__sticker" v-reveal="'tilt-r'" data-reveal-delay="500">
            <em class="t-serif">leitura de</em>
            <strong class="t-display">4 min</strong>
          </span>
        </aside>
      </div>

      <div class="cover__scroll" aria-hidden="true">
        <span class="t-mono">scroll</span>
        <span class="cover__scroll-line" />
      </div>
    </section>

    <!-- ===== INTRO ===== -->
    <section class="section intro">
      <div class="container intro__inner">
        <div class="intro__body">
          <span class="section-label" v-reveal="'up'">Apresentando</span>
          <h2 class="intro__title" v-reveal="'up'" data-reveal-delay="100">
            <span class="t-display">Gustavo,</span>
            <span class="t-serif intro__title-i">
              <em>mas ninguém chama assim.</em>
            </span>
          </h2>

          <div class="intro__text">
            <p class="lead" v-reveal="'left'" data-reveal-delay="160">
              Aos onze anos, o Gú aprendeu a virar hambúrguer na chapa antes de aprender a fazer
              uma quesadilla decente. A mãe acha graça. As irmãs reclamam que a cozinha vira bagunça.
              Os clientes da rua acham que o lanche merece nota mais alta do que a do concorrente do shopping.
            </p>
            <p v-reveal="'left'" data-reveal-delay="240">
              Ele é o cozinheiro principal. Não cozinha sozinho — ninguém aqui pretende deixar uma criança
              de onze anos sozinha perto de chapa quente — mas é dele a receita do molho, é ele que vira a
              carne, é ele que decide se o pão tá no ponto. A mãe coordena, ensina o que precisa ser ensinado,
              e segura a barra quando o pedido fica grande.
            </p>
          </div>

          <blockquote class="pullquote" v-reveal="'zoom'" data-reveal-delay="300">
            <span class="pullquote__mark t-serif">“</span>
            <p class="t-hand">
              eu gosto quando o pão fica<br/>
              torradinho mas ainda mole<br/>
              por dentro.
            </p>
            <small class="t-mono">— Gú, conversando com o jornal da escola</small>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- ===== FAMÍLIA ===== -->
    <section id="familia" class="section family">
      <div class="container">
        <div class="family__head">
          <span class="section-label" v-reveal="'right'">A família</span>
          <h2 class="section-title" v-reveal="'up'" data-reveal-delay="100">
            Os <span class="t-serif"><em>quatro</em></span> da cozinha
          </h2>
          <p class="section-lead" v-reveal="'up'" data-reveal-delay="200">
            Cada um tem um papel definido (mais ou menos). Cada um troca de função quando precisa.
            Em casa não tem hierarquia rígida, mas tem mãe.
          </p>
        </div>

        <div class="family__grid">
          <article class="family__card" v-reveal="'up-left'">
            <div class="family__avatar family__avatar--gu">
              <span>G</span>
            </div>
            <span class="family__role t-mono">o chef</span>
            <h3 class="family__name t-display">Gú</h3>
            <p class="family__age">11 anos</p>
            <p class="family__bio">
              Cozinha aos fins de semana, vê tutorial no YouTube enquanto o pão dora.
              Ajuda as irmãs com a lição de matemática durante a semana — não por bondade,
              porque ele acha legal explicar.
            </p>
          </article>

          <article class="family__card" v-reveal="'up'" data-reveal-delay="100">
            <div class="family__avatar family__avatar--mom">
              <span>C</span>
            </div>
            <span class="family__role t-mono">a mãe</span>
            <h3 class="family__name t-display">Dona Cláudia</h3>
            <p class="family__age">a chefe oficial</p>
            <p class="family__bio">
              Afia faca, ajusta sal, embala os pedidos com aquele cuidado que só mãe tem.
              Diz que tá só "ajudando", mas sem ela não sai lanche. Trabalha de dia,
              cozinha à noite, dorme tarde no sábado.
            </p>
          </article>

          <article class="family__card" v-reveal="'up'" data-reveal-delay="200">
            <div class="family__avatar family__avatar--bia">
              <span>B</span>
            </div>
            <span class="family__role t-mono">o caderno</span>
            <h3 class="family__name t-display">Bia</h3>
            <p class="family__age">9 anos</p>
            <p class="family__bio">
              Anota pedido no caderno espiral da escola. Já trocou nome de cliente
              umas três vezes. Tá ficando boa. Recebe parte do que entra, separadinho,
              pra comprar lápis colorido.
            </p>
          </article>

          <article class="family__card" v-reveal="'up-right'" data-reveal-delay="300">
            <div class="family__avatar family__avatar--lara">
              <span>L</span>
            </div>
            <span class="family__role t-mono">o controle de qualidade</span>
            <h3 class="family__name t-display">Lara</h3>
            <p class="family__age">7 anos</p>
            <p class="family__bio">
              Prova um pedacinho de cada lanche antes de sair. Aprova quase tudo.
              Quando reprova, é coisa séria. Ainda recebe em batata frita.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- ===== COMO COMEÇOU ===== -->
    <section class="section origin">
      <div class="container origin__inner">
        <div class="origin__copy">
          <span class="section-label" v-reveal="'right'">Como começou</span>
          <h2 class="section-title" v-reveal="'up'" data-reveal-delay="100">
            Foi <span class="t-serif"><em>acontecendo.</em></span>
          </h2>
          <p class="origin__lead" v-reveal="'up'" data-reveal-delay="200">
            Era um sábado qualquer de 2024. A mãe deixou o Gú usar a chapa pra esquentar o lanche
            da própria escola. Saiu bom.
          </p>
          <p class="origin__lead" v-reveal="'up'" data-reveal-delay="280">
            No sábado seguinte ele perguntou se podia chamar dois amigos. Foram quatro. Daí em diante,
            sexta à noite tem uma fila pequena no portão. Não foi planejado, foi acontecendo.
          </p>
        </div>

        <div class="origin__timeline">
          <div class="origin__line">
            <div class="origin__line-fill sd-line" aria-hidden="true" />
          </div>
          <div class="origin__step" v-reveal="'left'">
            <span class="origin__step-num t-display">2023</span>
            <p>Gú vê um vídeo sobre <em>smash burger</em> e fica obcecado.</p>
          </div>
          <div class="origin__step" v-reveal="'right'" data-reveal-delay="100">
            <span class="origin__step-num t-display">jan/24</span>
            <p>Ganha uma chapinha elétrica de aniversário. Treina em pão sírio.</p>
          </div>
          <div class="origin__step" v-reveal="'left'" data-reveal-delay="200">
            <span class="origin__step-num t-display">mar/24</span>
            <p>Primeiro lanche pros amigos da escola. Recebe em figurinha.</p>
          </div>
          <div class="origin__step" v-reveal="'right'" data-reveal-delay="300">
            <span class="origin__step-num t-display">jul/24</span>
            <p>A vizinhança começa a pedir. A Bia tem a ideia do caderno.</p>
          </div>
          <div class="origin__step" v-reveal="'left'" data-reveal-delay="400">
            <span class="origin__step-num t-display">out/24</span>
            <p>Mãe abre conta no Pix do Gú e cria o Instagram. Bia ajuda a tirar foto.</p>
          </div>
          <div class="origin__step" v-reveal="'right'" data-reveal-delay="500">
            <span class="origin__step-num t-display">hoje</span>
            <p>Sextas, sábados e domingos. Pão fresco. Cardápio enxuto. Fila no portão.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== UM DIA DE COZINHA ===== -->
    <section id="dia" class="section daily">
      <div class="daily__back sd-parallax-slow t-display" aria-hidden="true">
        SEXTA À NOITE
      </div>
      <div class="container">
        <div class="daily__head">
          <span class="section-label" v-reveal="'down'">Um dia de cozinha</span>
          <h2 class="section-title" v-reveal="'up'" data-reveal-delay="100">
            <span class="t-serif"><em>15h</em></span> — chega da escola.<br/>
            <span class="t-serif"><em>00h</em></span> — apaga a chapa.
          </h2>
        </div>

        <div class="daily__schedule">
          <div class="daily__item" v-reveal="'left'">
            <span class="daily__time t-display">15h</span>
            <div>
              <h4>Volta da aula.</h4>
              <p>Tira a mochila, abre o caderno espiral da Bia e confere as encomendas anotadas durante a semana.</p>
            </div>
          </div>
          <div class="daily__item" v-reveal="'right'" data-reveal-delay="100">
            <span class="daily__time t-display">16h30</span>
            <div>
              <h4>Mercado da esquina.</h4>
              <p>Vai com a mãe escolher pão fresco e tomate. Aprendeu a apertar tomate com o Seu Toninho.</p>
            </div>
          </div>
          <div class="daily__item" v-reveal="'left'" data-reveal-delay="200">
            <span class="daily__time t-display">18h</span>
            <div>
              <h4>Acende a chapa.</h4>
              <p>Pré-aquece. Mistura o molho da casa. Lara fica de bobeira por perto, prova alguma coisa.</p>
            </div>
          </div>
          <div class="daily__item" v-reveal="'right'" data-reveal-delay="300">
            <span class="daily__time t-display">19h</span>
            <div>
              <h4>Sai pedido.</h4>
              <p>Bia anota, o Gú monta, a mãe finaliza e embala. Música baixa no celular, alguém sempre cantando alguma coisa.</p>
            </div>
          </div>
          <div class="daily__item" v-reveal="'left'" data-reveal-delay="400">
            <span class="daily__time t-display">23h</span>
            <div>
              <h4>Último lanche.</h4>
              <p>Quando o último cliente sai, a Lara já dormiu na cadeira. O Gú apaga a chapa e dá o último gole de Sukita.</p>
            </div>
          </div>
          <div class="daily__item" v-reveal="'right'" data-reveal-delay="500">
            <span class="daily__time t-display">00h</span>
            <div>
              <h4>Conta do dia.</h4>
              <p>Mãe e Gú dividem o que entrou. Parte vai pra Bia, parte pro próximo pão, parte fica num pote vermelho na cozinha.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== MÃE QUOTE ===== -->
    <section class="section mom">
      <div class="container mom__inner">
        <blockquote class="mom__quote" v-reveal="'zoom'">
          <p class="t-serif">
            “Ele já não me chama mais pra ajudar em algumas coisas.
            <em>Eu fico orgulhosa e meio orgulhosa demais.</em>”
          </p>
          <footer>
            <div class="mom__photo">
              <span>C</span>
            </div>
            <div>
              <strong>Dona Cláudia</strong>
              <small>a mãe do Gú</small>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>

    <!-- ===== COMBINADO ===== -->
    <section class="section deal">
      <div class="container">
        <div class="deal__grid">
          <div class="deal__copy">
            <span class="section-label" v-reveal="'right'">O combinado</span>
            <h2 class="section-title" v-reveal="'up'" data-reveal-delay="100">
              Tudo que entra na chapa<br/>
              <span class="t-serif"><em>sai da família.</em></span>
            </h2>
            <p class="deal__text" v-reveal="'up'" data-reveal-delay="200">
              Não tem terceirização, não tem ingrediente congelado vindo de longe que ninguém viu.
              Se você comer aqui, comeu uma coisa que a mãe deixou sair. A chapa é da casa,
              o pão é do mercado da esquina, o tomate o Gú escolheu na mão.
            </p>
          </div>

          <div class="deal__list">
            <div class="deal__item" v-reveal="'down-left'">
              <q-icon name="check_circle" size="20px" />
              <div>
                <strong>Carne</strong>
                <p>Açougue do Sr. Júlio, na quinta de manhã. Blend moído ali na hora.</p>
              </div>
            </div>
            <div class="deal__item" v-reveal="'down'" data-reveal-delay="100">
              <q-icon name="check_circle" size="20px" />
              <div>
                <strong>Pão</strong>
                <p>Padaria da esquina, fornada das 16h. Levado direto pra chapa.</p>
              </div>
            </div>
            <div class="deal__item" v-reveal="'down-right'" data-reveal-delay="200">
              <q-icon name="check_circle" size="20px" />
              <div>
                <strong>Molho</strong>
                <p>Receita da avó do Gú. Tem três ingredientes que ele se recusa a falar.</p>
              </div>
            </div>
            <div class="deal__item" v-reveal="'down-left'" data-reveal-delay="300">
              <q-icon name="check_circle" size="20px" />
              <div>
                <strong>Atendimento</strong>
                <p>Bia atende ao telefone com a voz mais oficial que ela consegue fazer aos nove anos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SONHO ===== -->
    <section class="section dream">
      <div class="container dream__inner">
        <div class="dream__main">
          <span class="section-label" v-reveal="'up'">Pra onde a gente vai</span>
          <h2 class="dream__title" v-reveal="'up'" data-reveal-delay="100">
            <span class="t-serif"><em>"Quando eu crescer,</em></span><br/>
            <span class="t-display">quero abrir um restaurante."</span>
          </h2>
          <p class="dream__author t-mono" v-reveal="'up'" data-reveal-delay="200">— o Gú</p>
          <p class="dream__lead" v-reveal="'up'" data-reveal-delay="300">
            A mãe diz que isso ainda dá pra pensar. Por enquanto a meta é fazer um pão melhor,
            comprar uma chapa nova e pegar o diploma da escola. Nessa ordem, ou não.
          </p>
        </div>

        <div class="dream__cards">
          <div class="dream__card" v-reveal="'left'">
            <span class="dream__card-num t-display">01</span>
            <strong>Pão melhor</strong>
            <p>Testar receita própria de pão brioche, com a padaria da esquina dando palpite.</p>
          </div>
          <div class="dream__card" v-reveal="'up'" data-reveal-delay="120">
            <span class="dream__card-num t-display">02</span>
            <strong>Chapa nova</strong>
            <p>Uma chapa de verdade, mais larga, pra fazer dois lanches ao mesmo tempo.</p>
          </div>
          <div class="dream__card" v-reveal="'right'" data-reveal-delay="240">
            <span class="dream__card-num t-display">03</span>
            <strong>Escola em dia</strong>
            <p>Combinou com a mãe: nota baixa, fim de semana sem chapa.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="section closing">
      <div class="container closing__inner">
        <h2 class="closing__title" v-reveal="'up'">
          <span class="t-display">Vem provar.</span>
          <span class="t-serif closing__title-i" v-reveal="'up'" data-reveal-delay="120">
            <em>a chapa está acesa.</em>
          </span>
        </h2>
        <p class="closing__lead" v-reveal="'up'" data-reveal-delay="240">
          Sexta à noite. A música baixa, a chapa quente, a Bia com o caderno na mão.
        </p>
        <div class="closing__actions" v-reveal="'up'" data-reveal-delay="320">
          <a href="https://wa.me/5562999990000" class="btn btn-primary pulse-glow" target="_blank" rel="noopener">
            <q-icon name="chat" size="20px" />
            Abrir o WhatsApp
          </a>
          <router-link to="/#cardapio" class="btn btn-ghost">
            <q-icon name="restaurant_menu" size="20px" />
            Ver o cardápio
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style scoped lang="scss">
.about { background: var(--c-bg); }
.section-title .t-serif {
  font-style: italic; color: var(--c-gold); font-weight: 700;
  text-transform: none; letter-spacing: -.01em;
}

/* ============ COVER ============ */
.cover {
  position: relative;
  padding: 180px 0 120px;
  overflow: hidden;
  min-height: 90vh;
  display: flex;
  align-items: center;
}
.cover__bg { position: absolute; inset: 0; pointer-events: none; }
.cover__glow {
  position: absolute;
  width: 800px; height: 800px;
  border-radius: 50%;
  filter: blur(140px);
}
.cover__glow--fire { background: radial-gradient(circle, #FF4500, transparent 60%); top: -300px; right: -200px; opacity: .45; }
.cover__glow--gold { background: radial-gradient(circle, #FFB800, transparent 60%); bottom: -400px; left: -250px; opacity: .3; }
.cover__ring {
  position: absolute;
  width: 700px; height: 700px;
  top: 10%; right: -200px;
  border: 1px dashed rgba(255, 184, 0, .14);
  border-radius: 50%;
}

.cover__inner {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative; z-index: 2;
}
.cover__title {
  font-size: clamp(54px, 8vw, 116px);
  line-height: .95;
  margin: 18px 0 28px;
  display: flex; flex-direction: column;
}
.cover__title-i {
  font-style: italic;
  color: var(--c-gold);
  font-weight: 700;
  text-transform: none;
  letter-spacing: -.01em;
  font-size: 1.1em;
  margin: -8px 0;
}
.cover__lead {
  font-size: 20px;
  line-height: 1.6;
  color: var(--c-text-dim);
  max-width: 560px;
  margin: 0 0 32px;
}
.cover__meta {
  display: flex; gap: 14px; flex-wrap: wrap;
  font-size: 13px;
  color: var(--c-text-mute);
  font-family: var(--f-mono);
  strong { color: var(--c-gold); font-weight: 500; }
}
.cover__meta-dot { color: var(--c-gold); }

.cover__portrait {
  position: relative;
  aspect-ratio: 1;
  max-width: 460px;
  margin-left: auto;
}
.cover__portrait-card {
  position: relative;
  background: #FFF6DA;
  padding: 22px 22px 14px;
  border-radius: 4px;
  box-shadow: var(--sh-card), 0 40px 80px -10px rgba(0,0,0,.6);
  transform: rotate(-3deg);
  color: #1a1208;
}
.cover__portrait-img {
  aspect-ratio: 1;
  background:
    radial-gradient(circle at 50% 35%, rgba(255,107,26,.45), transparent 60%),
    linear-gradient(180deg, #1a1a1a 0%, #050505 100%);
  border-radius: 2px;
  display: grid; place-items: center;
  img { width: 90%; height: 90%; object-fit: contain; filter: drop-shadow(0 18px 30px rgba(0,0,0,.6)); }
}
.cover__portrait-cap {
  display: flex; justify-content: space-between; align-items: baseline;
  margin-top: 12px;
  span { font-size: 28px; }
  small {
    font-size: 11px;
    letter-spacing: .15em;
    text-transform: uppercase;
    color: #6c563a;
  }
}
.cover__sticker {
  position: absolute;
  top: -10px; right: -10px;
  width: 100px; height: 100px;
  border-radius: 50%;
  background: var(--g-fire);
  color: #1b0900;
  display: flex; align-items: center; justify-content: center; flex-direction: column;
  box-shadow: var(--sh-strong);
  border: 4px solid var(--c-bg);
  z-index: 3;
  em { font-size: 14px; font-style: italic; }
  strong { font-size: 24px; line-height: 1; margin-top: 4px; }
}

.cover__scroll {
  position: absolute;
  bottom: 30px; left: 50%;
  transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center;
  gap: 12px;
  color: var(--c-text-mute);
  text-transform: uppercase;
  letter-spacing: .25em;
  font-size: 10px;
  z-index: 2;
}
.cover__scroll-line {
  width: 1px; height: 50px;
  background: linear-gradient(180deg, var(--c-gold), transparent);
  animation: scrollPulse 1.8s ease-in-out infinite;
}
@keyframes scrollPulse {
  0%, 100% { transform: scaleY(.6); opacity: .4; transform-origin: top; }
  50%      { transform: scaleY(1);  opacity: 1; }
}

/* ============ INTRO ============ */
.intro { background: var(--c-bg-2); }
.intro__inner { max-width: 860px; margin: 0 auto; }
.intro__body { display: flex; flex-direction: column; gap: 28px; }
.intro__title {
  font-size: clamp(40px, 5vw, 76px);
  line-height: 1;
  margin: 18px 0 6px;
  display: flex; flex-direction: column; gap: 4px;
}
.intro__title-i {
  font-style: italic;
  color: var(--c-gold);
  font-weight: 700;
  font-size: 1em;
  letter-spacing: -.01em;
}
.intro__text {
  display: flex; flex-direction: column; gap: 16px;
  font-size: 17px;
  line-height: 1.7;
  color: var(--c-text-dim);
  p.lead {
    font-size: 22px;
    color: var(--c-text);
    line-height: 1.55;
    font-family: var(--f-serif);
  }
}
.pullquote {
  margin: 30px 0 0;
  padding: 36px 36px 26px;
  background: var(--c-bg-3);
  border: 1px solid var(--c-border);
  border-radius: var(--r-lg);
  position: relative;
  display: flex; flex-direction: column; gap: 14px;
  align-items: center;
  text-align: center;
}
.pullquote__mark {
  position: absolute;
  top: -14px; left: 26px;
  font-size: 86px;
  color: var(--c-gold);
  line-height: 1;
  font-style: italic;
  font-weight: 700;
}
.pullquote p {
  font-size: 38px;
  line-height: 1.05;
  margin: 0;
  color: var(--c-cream);
}
.pullquote small {
  font-size: 11px;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: var(--c-text-mute);
}

/* ============ FAMÍLIA ============ */
.family { position: relative; }
.family__head {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 60px;
}
.family__head .section-lead { margin: 16px auto 0; }
.family__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
.family__card {
  background: var(--c-bg-2);
  border: 1px solid rgba(255,255,255,.06);
  border-radius: var(--r-lg);
  padding: 28px 24px;
  transition: transform .35s, border-color .35s;
  display: flex; flex-direction: column; gap: 8px;
  &:hover { transform: translateY(-6px); border-color: var(--c-border); }
}
.family__avatar {
  width: 80px; height: 80px;
  border-radius: 50%;
  display: grid; place-items: center;
  font-family: var(--f-display);
  font-size: 38px;
  color: #1b0900;
  margin-bottom: 14px;
}
.family__avatar--gu    { background: linear-gradient(135deg,#FFB800,#FF6B1A); }
.family__avatar--mom   { background: linear-gradient(135deg,#E63946,#FF6B1A); }
.family__avatar--bia   { background: linear-gradient(135deg,#FFD24C,#FFB800); }
.family__avatar--lara  { background: linear-gradient(135deg,#FF4500,#E63946); }
.family__role {
  font-size: 10px;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--c-text-mute);
}
.family__name { font-size: 36px; margin: 4px 0 0; color: var(--c-text); }
.family__age {
  font-family: var(--f-hand);
  font-size: 20px;
  color: var(--c-gold);
  margin: 0 0 10px;
}
.family__bio {
  font-size: 14px;
  line-height: 1.6;
  color: var(--c-text-dim);
  margin: 0;
}

/* ============ ORIGIN ============ */
.origin { background: var(--c-bg-2); }
.origin__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}
.origin__copy { position: sticky; top: 120px; display: flex; flex-direction: column; gap: 18px; }
.origin__lead {
  font-size: 18px;
  line-height: 1.7;
  color: var(--c-text-dim);
  margin: 0;
  max-width: 460px;
}

.origin__timeline {
  position: relative;
  padding-left: 50px;
}
.origin__line {
  position: absolute;
  left: 22px; top: 0; bottom: 0;
  width: 2px;
  background: rgba(255,184,0,.15);
}
.origin__line-fill {
  position: absolute; inset: 0;
  background: var(--g-fire);
  transform-origin: top;
  transform: scaleY(0);
}
@supports (animation-timeline: view()) {
  .sd-line {
    animation: line-fill linear both;
    animation-timeline: view();
    animation-range: entry 0% cover 90%;
  }
}
@keyframes line-fill {
  from { transform: scaleY(0); }
  to   { transform: scaleY(1); }
}
.origin__step {
  position: relative;
  padding: 14px 0 36px 30px;
  &::before {
    content: "";
    position: absolute;
    left: -36px; top: 18px;
    width: 14px; height: 14px;
    border-radius: 50%;
    background: var(--c-gold);
    box-shadow: 0 0 0 4px var(--c-bg-2), 0 0 20px rgba(255,184,0,.6);
  }
}
.origin__step-num {
  font-size: 32px;
  color: var(--c-gold);
  display: block;
  margin-bottom: 4px;
  letter-spacing: 0;
  font-weight: 400;
  text-transform: lowercase;
}
.origin__step p {
  font-size: 16px;
  color: var(--c-text);
  margin: 0;
  line-height: 1.5;
  em { font-style: italic; color: var(--c-gold); }
}

/* ============ DAILY ============ */
.daily { position: relative; overflow: hidden; }
.daily__back {
  position: absolute;
  top: 30%; left: -8%;
  font-size: clamp(140px, 18vw, 280px);
  white-space: nowrap;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 107, 26, .07);
  pointer-events: none;
  z-index: 0;
}
.daily__head { max-width: 700px; margin: 0 auto 60px; text-align: center; position: relative; z-index: 1; }
.daily__head .section-title { font-size: clamp(36px, 5vw, 64px); }
.daily__schedule {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  position: relative; z-index: 1;
}
.daily__item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 22px;
  align-items: start;
  padding: 24px 26px;
  background: var(--c-bg-2);
  border: 1px solid rgba(255,255,255,.05);
  border-radius: var(--r-md);
  transition: border-color .3s, transform .3s;
  &:hover { border-color: var(--c-border); transform: translateY(-3px); }
  h4 { font-size: 17px; color: var(--c-text); margin: 4px 0 6px; font-weight: 600; }
  p { font-size: 14px; line-height: 1.55; color: var(--c-text-dim); margin: 0; }
}
.daily__time {
  font-size: 40px;
  color: var(--c-gold);
  line-height: 1;
  letter-spacing: 0;
  font-weight: 400;
}

/* ============ MOM QUOTE ============ */
.mom { background: var(--c-bg-2); }
.mom__inner { max-width: 920px; margin: 0 auto; }
.mom__quote {
  padding: 0;
  margin: 0;
  text-align: center;
  p {
    font-size: clamp(28px, 4vw, 50px);
    line-height: 1.25;
    color: var(--c-cream);
    font-style: italic;
    font-weight: 400;
    margin: 0 0 32px;
    em { color: var(--c-gold); font-style: italic; font-weight: 600; }
  }
  footer {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    strong { display: block; color: var(--c-text); font-size: 14px; }
    small { color: var(--c-text-mute); font-size: 12px; font-family: var(--f-mono); text-transform: uppercase; letter-spacing: .12em; }
  }
}
.mom__photo {
  width: 56px; height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg,#E63946,#FF6B1A);
  display: grid; place-items: center;
  font-family: var(--f-display);
  font-size: 22px;
  color: #1b0900;
}

/* ============ DEAL ============ */
.deal__grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 70px;
  align-items: start;
}
.deal__copy { display: flex; flex-direction: column; gap: 20px; }
.deal__text { font-size: 17px; line-height: 1.7; color: var(--c-text-dim); max-width: 460px; }
.deal__list { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.deal__item {
  display: grid; grid-template-columns: auto 1fr; gap: 14px;
  padding: 22px;
  background: var(--c-bg-2);
  border: 1px solid rgba(255,255,255,.06);
  border-radius: var(--r-md);
  align-items: start;
  .q-icon { color: var(--c-gold); margin-top: 2px; }
  strong { display: block; color: var(--c-text); font-size: 15px; margin-bottom: 4px; font-weight: 600; }
  p { font-size: 13px; line-height: 1.55; color: var(--c-text-dim); margin: 0; }
}

/* ============ DREAM ============ */
.dream { background: var(--c-bg-2); }
.dream__inner { display: flex; flex-direction: column; gap: 60px; }
.dream__main { max-width: 800px; }
.dream__title {
  font-size: clamp(40px, 5vw, 76px);
  line-height: 1;
  margin: 18px 0 12px;
  display: flex; flex-direction: column; gap: 4px;
  .t-serif { font-style: italic; color: var(--c-gold); font-weight: 700; font-size: 1.08em; letter-spacing: -.01em; }
  .t-display { color: var(--c-text); }
}
.dream__author {
  font-size: 13px;
  color: var(--c-text-mute);
  text-transform: uppercase;
  letter-spacing: .2em;
  margin: 0 0 22px;
}
.dream__lead {
  font-size: 18px;
  line-height: 1.7;
  color: var(--c-text-dim);
  max-width: 620px;
  margin: 0;
}
.dream__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.dream__card {
  background: var(--c-bg-3);
  border: 1px solid rgba(255,255,255,.06);
  border-radius: var(--r-md);
  padding: 26px 24px;
  transition: border-color .3s, transform .3s;
  &:hover { border-color: var(--c-border); transform: translateY(-4px); }
  strong { display: block; color: var(--c-text); font-size: 18px; margin: 10px 0 8px; font-weight: 600; }
  p { font-size: 14px; line-height: 1.6; color: var(--c-text-dim); margin: 0; }
}
.dream__card-num {
  font-size: 24px;
  color: var(--c-gold);
  letter-spacing: 0;
  font-weight: 400;
}

/* ============ CLOSING ============ */
.closing__inner { text-align: center; max-width: 760px; margin: 0 auto; }
.closing__title {
  font-size: clamp(50px, 7vw, 100px);
  line-height: .95;
  margin: 0 0 26px;
  display: flex; flex-direction: column; gap: 6px;
  .t-display { color: var(--c-text); }
  .t-serif { font-style: italic; color: var(--c-gold); font-weight: 700; text-transform: none; letter-spacing: -.01em; font-size: 1em; }
}
.closing__lead {
  font-size: 18px;
  color: var(--c-text-dim);
  line-height: 1.6;
  margin: 0 0 32px;
}
.closing__actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

@media (max-width: 980px) {
  .cover { padding-top: 140px; padding-bottom: 80px; min-height: auto; }
  .cover__inner { grid-template-columns: 1fr; gap: 50px; }
  .cover__portrait { max-width: 360px; margin: 0 auto; }
  .family__grid { grid-template-columns: repeat(2, 1fr); }
  .origin__inner { grid-template-columns: 1fr; gap: 40px; }
  .origin__copy { position: static; }
  .daily__schedule { grid-template-columns: 1fr; }
  .deal__grid { grid-template-columns: 1fr; gap: 40px; }
  .deal__list { grid-template-columns: 1fr 1fr; }
  .dream__cards { grid-template-columns: 1fr; }
}
@media (max-width: 560px) {
  .family__grid { grid-template-columns: 1fr; }
  .deal__list { grid-template-columns: 1fr; }
  .pullquote p { font-size: 28px; }
  .pullquote { padding: 28px 22px 22px; }
  .cover__sticker { width: 80px; height: 80px; strong { font-size: 20px; } }
}
</style>
