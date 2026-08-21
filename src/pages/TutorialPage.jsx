import { Link } from "react-router-dom";
import { ArrowLeftIcon, BulbIcon, ExternalLinkIcon, SparkleIcon, platformMeta } from "../components/Icons";

export default function TutorialPage({ tutorial }) {
  const meta = platformMeta[tutorial.platform] ?? { Icon: SparkleIcon, variant: "coral" };
  const { Icon, variant } = meta;

  return (
    <article className="tutorialPage">
      <Link className="backLink" to="/">
        <ArrowLeftIcon width={18} height={18} />
        Voltar para a Home
      </Link>

      <header className={`tutorialHero v-${variant}`}>
        <span className="heroIconBadge">
          <Icon width={28} height={28} />
        </span>
        <p className={`eyebrow v-${variant}`}>{tutorial.platform}</p>
        <h1>{tutorial.title}</h1>
        <p className="lead">{tutorial.summary}</p>

        <div className="quickInfo" aria-label="Informacoes rapidas">
          <span>
            <strong>Tempo:</strong> {tutorial.estimatedTime}
          </span>
          <span>
            <strong>Meta:</strong> configuracao em menos de 5 min
          </span>
        </div>
      </header>

      <section className="stepsSection" aria-labelledby="passos-title">
        <h2 id="passos-title">Passo a passo</h2>
        <ol className="stepList">
          {tutorial.steps.map((step, index) => (
            <li key={step.title}>
              <span className="stepNumber">{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="tipsSection" aria-labelledby="dicas-title">
        <h2 id="dicas-title">
          <BulbIcon width={22} height={22} />
          Dicas de seguranca
        </h2>
        <ul className="tipsList">
          {tutorial.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      <section className="sourceBox" aria-labelledby="fontes-title">
        <h2 id="fontes-title">Fonte de apoio</h2>
        <p>
          As telas dos aplicativos podem mudar. Quando algo estiver diferente, procure pelo nome da
          configuracao abaixo dentro do app.
        </p>
        <a href={tutorial.sourceUrl} target="_blank" rel="noreferrer">
          Abrir ajuda oficial de {tutorial.platform}
          <ExternalLinkIcon width={16} height={16} />
        </a>
      </section>
    </article>
  );
}
