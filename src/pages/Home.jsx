import { Link } from "react-router-dom";
import {
  ShieldIcon,
  HourglassIcon,
  GiftOffIcon,
  UsersHeartIcon,
  SparkleIcon,
  CompassIcon,
  platformMeta
} from "../components/Icons";

const pillars = [
  {
    title: "Privacidade por padrao",
    label: "Privacy by Default",
    text: "Servicos usados por criancas devem iniciar com a configuracao mais protetiva para dados, perfil e exposicao.",
    Icon: ShieldIcon,
    variant: "coral"
  },
  {
    title: "Menos uso compulsivo",
    label: "Anti-Uso Compulsivo",
    text: "A lei pressiona plataformas a reduzir recursos que prendem a atencao, como autoplay, notificacoes excessivas e recompensas por tempo de uso.",
    Icon: HourglassIcon,
    variant: "teal"
  },
  {
    title: "Sem loot boxes para menores",
    label: "Bloqueio de Loot Boxes",
    text: "Jogos direcionados a criancas e adolescentes, ou provavelmente acessados por eles, nao devem oferecer caixas de recompensa pagas.",
    Icon: GiftOffIcon,
    variant: "violet"
  },
  {
    title: "Supervisao parental facil",
    label: "Ferramentas para responsaveis",
    text: "Pais e responsaveis devem conseguir limitar tempo, compras, conversas, recomendacoes e privacidade em controles claros.",
    Icon: UsersHeartIcon,
    variant: "yellow"
  }
];

export default function Home({ tutorials }) {
  return (
    <>
      <section className="heroSection">
        <div className="heroText">
          <p className="eyebrow">
            <SparkleIcon width={13} height={13} style={{ verticalAlign: "-2px", marginRight: 4 }} />
            Lei no. 15.211/2025
          </p>
          <h1>Um guia simples para proteger criancas e adolescentes no mundo digital.</h1>
          <p className="lead">
            A Lei Felca, chamada oficialmente de Estatuto Digital da Crianca e do Adolescente,
            cria regras para que aplicativos, jogos, redes sociais e sistemas digitais sejam mais
            seguros para menores de idade no Brasil.
          </p>
          <div className="heroActions">
            <a href="#tutoriais" className="primaryAction">
              Ver tutoriais
            </a>
            <a href="#pilares" className="secondaryAction">
              <CompassIcon width={18} height={18} />
              Entender a lei
            </a>
          </div>
        </div>

        <aside className="lawSnapshot" aria-label="Resumo rapido da lei">
          <h2>Em palavras simples</h2>
          <p>
            A responsabilidade nao fica so com a familia. As plataformas tambem precisam entregar
            configuracoes seguras, linguagem clara e ferramentas para acompanhamento.
          </p>
          <ul>
            <li>Mais privacidade desde o primeiro acesso.</li>
            <li>Menos estimulos para uso exagerado.</li>
            <li>Mais controle sobre compras e conversas.</li>
          </ul>
        </aside>
      </section>

      <section className="contentBand" id="pilares" aria-labelledby="pilares-title">
        <div className="sectionHeader">
          <p className="eyebrow">Pilares da protecao</p>
          <h2 id="pilares-title">O que muda na pratica</h2>
        </div>

        <div className="pillarGrid">
          {/* Cards curtos ajudam leitores com baixo letramento digital a escanear o conteudo. */}
          {pillars.map((pillar) => (
            <article className={`pillarCard v-${pillar.variant}`} key={pillar.title}>
              <span className="numberBadge">Pilar</span>
              <span className="iconBadge">
                <pillar.Icon width={24} height={24} />
              </span>
              <p className={`cardLabel v-${pillar.variant}`}>{pillar.label}</p>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="tutorialBand" id="tutoriais" aria-labelledby="tutoriais-title">
        <div className="sectionHeader">
          <p className="eyebrow">Configure em poucos minutos</p>
          <h2 id="tutoriais-title">Tutoriais praticos</h2>
          <p>
            Escolha a plataforma que sua familia usa hoje e siga o passo a passo. Cada roteiro foi
            escrito para uma configuracao inicial rapida.
          </p>
        </div>

        <div className="tutorialGrid">
          {tutorials.map((tutorial) => {
            const meta = platformMeta[tutorial.platform] ?? { Icon: SparkleIcon, variant: "coral" };
            const { Icon, variant } = meta;
            return (
              <Link className={`tutorialCard v-${variant}`} to={`/tutorial/${tutorial.slug}`} key={tutorial.slug}>
                <span className="iconBadge">
                  <Icon width={24} height={24} />
                </span>
                <span className={`platformTag v-${variant}`}>{tutorial.platform}</span>
                <h3>{tutorial.title}</h3>
                <p>{tutorial.summary}</p>
                <span className="timePill">{tutorial.estimatedTime}</span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
