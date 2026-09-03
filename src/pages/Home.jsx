import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Shield,
  Clock,
  Coins,
  HeartHandshake,
  Sparkles,
  ArrowRight,
  Monitor,
  Gamepad2,
  Video,
  Smartphone,
  Check,
  ChevronRight,
  HelpCircle,
  PhoneCall,
  ExternalLink,
  Search,
} from "lucide-react";
import HeroCanvas from "../components/HeroCanvas";
import SpotlightCard from "../components/SpotlightCard";
import LeiFelcaSection from "../components/LeiFelcaSection";

const pillars = [
  {
    title: "Privacidade por Padrão",
    label: "Proteção de Dados",
    text: "As contas de menores devem ser criadas com o nível máximo de privacidade ativado por padrão. Perfis fechados para estranhos e dados pessoais protegidos.",
    icon: Shield,
    color: "from-blue-500 to-cyan-500",
    badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    spotlight: "rgba(59, 130, 246, 0.25)",
  },
  {
    title: "Menos Pressão de Tempo",
    label: "Saúde Digital",
    text: "Fim dos mecanismos de retenção abusiva: notificações compulsivas em horários de repouso e reprodução automática devem ser desativadas para menores.",
    icon: Clock,
    color: "from-amber-500 to-rose-500",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    spotlight: "rgba(245, 158, 11, 0.25)",
  },
  {
    title: "Bloqueio de Apostas e Loot Boxes",
    label: "Jogos & Economia",
    text: "Proibição de compras não autorizadas e jogos de azar disfarçados de games. Caixas-surpresa pagas e rifas virtuais não devem atingir crianças.",
    icon: Coins,
    color: "from-purple-500 to-indigo-500",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    spotlight: "rgba(168, 85, 247, 0.25)",
  },
  {
    title: "Controle Parental Acessível",
    label: "Acompanhamento Ativo",
    text: "Responsáveis devem ter acesso a ferramentas transparentes e descomplicadas para limitar tempos, restringir amizades e gerenciar compras.",
    icon: HeartHandshake,
    color: "from-emerald-500 to-teal-500",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    spotlight: "rgba(16, 185, 129, 0.25)",
  },
];

const platformIcons = {
  Windows: Monitor,
  Roblox: Gamepad2,
  YouTube: Video,
  Android: Smartphone,
  iOS: Smartphone,
};

export default function Home({ tutorials = [] }) {
  const [searchFilter, setSearchFilter] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const location = useLocation();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.state]);

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesSearch =
      tutorial.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      tutorial.platform.toLowerCase().includes(searchFilter.toLowerCase()) ||
      tutorial.summary.toLowerCase().includes(searchFilter.toLowerCase());

    if (!matchesSearch) return false;

    if (activeCategory === "all") return true;
    if (activeCategory === "mobile") return tutorial.platform === "Android" || tutorial.platform === "iOS";
    if (activeCategory === "gaming") return tutorial.platform === "Roblox" || tutorial.platform === "YouTube";
    if (activeCategory === "os") return tutorial.platform === "Windows";
    return true;
  });

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO SECTION WITH INTERACTIVE CANVAS */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-20 overflow-hidden border-b border-slate-200/60 dark:border-white/5">
        {/* Interactive Antigravity Canvas */}
        <HeroCanvas />

        {/* Ambient Hero Glows */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-indigo-500/15 to-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-white/5 border border-blue-500/20 dark:border-white/10 text-slate-800 dark:text-blue-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md mb-6 hover:border-blue-500/40 transition-colors">
            <Sparkles className="w-4 h-4 text-blue-500 dark:text-blue-400 animate-pulse" />
            <span>Marco Regulatório da Infância Digital</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-slate-500 dark:text-slate-400">Guia Institucional</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] max-w-4xl mx-auto">
            Cuidando dos menores no{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              universo digital
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Inspirado pela conscientização da <strong>Lei Felca</strong>, este portal reúne
            ferramentas práticas para que pais e responsáveis configurem a proteção das crianças
            em celulares, computadores, redes e jogos.
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("tutoriais")}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Ver Tutoriais Práticos
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("lei-felca")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 backdrop-blur-md transition-all hover:border-slate-300 dark:hover:border-white/20 cursor-pointer"
            >
              <Video className="w-4 h-4 text-blue-500" />
              Entenda a "Lei Felca"
            </button>
          </div>

          {/* Quick Snapshot Card with Spotlight Effect */}
          <div className="mt-14 max-w-3xl mx-auto">
            <SpotlightCard
              spotlightColor="rgba(59, 130, 246, 0.15)"
              borderSpotlightColor="rgba(99, 102, 241, 0.4)"
              className="bg-white/80 dark:bg-[#0c0e14]/80 backdrop-blur-xl border-slate-200/80 dark:border-white/10 shadow-2xl p-6 sm:p-8 text-left"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200/60 dark:border-white/10 pb-5">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400">
                    Resumo Executivo
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    O Dever de Cuidado das Plataformas
                  </h3>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                  Proteção Integral
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 text-blue-500 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    <strong>Privacidade reforçada</strong> desde o cadastro inicial da criança.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 text-blue-500 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    <strong>Desativação de recursos viciantes</strong> e autoplay noturno.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 text-blue-500 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    <strong>Restrição a conversas com estranhos</strong> em jogos online.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 text-blue-500 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    <strong>Painéis claros de controle</strong> para mães, pais e tutores.
                  </span>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED LEI FELCA SECTION WITH EMBEDDED YOUTUBE VIDEO */}
      <LeiFelcaSection />

      {/* 3. PILLARS SECTION ("O QUE MUDA NO DIA A DIA") */}
      <section id="pilares" className="py-20 bg-slate-50/50 dark:bg-[#07080b]/50 border-t border-b border-slate-200/60 dark:border-white/5 scroll-mt-16 md:scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
              Diretrizes Fundamentais
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              O que a regulamentação transforma no dia a dia
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              Quatro compromissos centrais que trazem segurança real para o ambiente doméstico e escolar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <SpotlightCard
                  key={pillar.title}
                  spotlightColor={pillar.spotlight}
                  borderSpotlightColor="rgba(255, 255, 255, 0.2)"
                  className="bg-white dark:bg-[#0c0e14] border-slate-200 dark:border-white/10 p-6 flex flex-col justify-between hover:shadow-xl transition-shadow"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${pillar.color} text-white shadow-lg`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${pillar.badgeColor}`}>
                        {pillar.label}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pillar.text}
                    </p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. TUTORIALS SECTION */}
      <section id="tutoriais" className="py-20 lg:py-28 relative scroll-mt-16 md:scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
                Guia Passo a Passo
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Configure os aparelhos da sua casa
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
                Selecione a plataforma para acessar instruções descomplicadas com linguagem direta e tempo estimado.
              </p>
            </div>

            {/* Filter / Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Buscar plataforma..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="pl-9 pr-4 py-2 text-sm rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-56"
                />
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-white/5 p-1 rounded-xl border border-slate-200 dark:border-white/5">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                    activeCategory === "all"
                      ? "bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Todos
                </button>
                <button
                  onClick={() => setActiveCategory("mobile")}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                    activeCategory === "mobile"
                      ? "bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Celulares
                </button>
                <button
                  onClick={() => setActiveCategory("gaming")}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                    activeCategory === "gaming"
                      ? "bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Jogos & Vídeo
                </button>
              </div>
            </div>
          </div>

          {/* Tutorials Grid with Interactive Spotlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutorials.map((tutorial) => {
              const IconComp = platformIcons[tutorial.platform] || Shield;
              return (
                <SpotlightCard
                  key={tutorial.slug}
                  as={Link}
                  to={`/tutorial/${tutorial.slug}`}
                  spotlightColor="rgba(59, 130, 246, 0.2)"
                  borderSpotlightColor="rgba(99, 102, 241, 0.4)"
                  className="group bg-white dark:bg-[#0c0e14] border-slate-200 dark:border-white/10 p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-blue-600 dark:text-blue-400 group-hover:scale-105 group-hover:border-blue-500/40 transition-all duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                        <Clock className="w-3 h-3 text-blue-500" />
                        {tutorial.estimatedTime}
                      </span>
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {tutorial.platform}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tutorial.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {tutorial.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-sm font-semibold text-blue-600 dark:text-blue-400">
                    <span>Acessar tutorial</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </SpotlightCard>
              );
            })}
          </div>

          {filteredTutorials.length === 0 && (
            <div className="text-center py-16">
              <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Nenhum tutorial encontrado para a busca "{searchFilter}".
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 5. OFFICIAL CHANNELS & REPORTING */}
      <section className="py-16 bg-slate-100/70 dark:bg-white/[0.02] border-t border-slate-200/60 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-500 dark:text-rose-400">
              Emergência & Denúncia
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Canais Oficiais de Ajuda e Proteção
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Se você presenciou aliciamento, exploração, vazamento de fotos ou qualquer violação envolvendo menores na internet, denuncie imediatamente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <a
              href="https://new.safernet.org.br/denuncie"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-[#0c0e14] border border-slate-200 dark:border-white/10 hover:border-blue-500/40 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-base text-slate-900 dark:text-white">SaferNet Brasil</span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Canal seguro e anônimo para denúncias de crimes cibernéticos contra crianças e adolescentes.
                </p>
              </div>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-4">
                Denunciar online →
              </span>
            </a>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0c0e14] border border-slate-200 dark:border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-base text-slate-900 dark:text-white">Disque 100</span>
                  <PhoneCall className="w-4 h-4 text-emerald-500" />
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Disque Direitos Humanos. Gratuito, sigiloso e disponível 24 horas por dia em todo o Brasil.
                </p>
              </div>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-4">
                Ligue gratuitamente: 100
              </span>
            </div>

            <a
              href="https://www.gov.br/mdh/pt-br"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-[#0c0e14] border border-slate-200 dark:border-white/10 hover:border-indigo-500/40 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-base text-slate-900 dark:text-white">Conselhos Tutelares</span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Órgão permanente encarregado de zelar pelos direitos da criança e do adolescente no município.
                </p>
              </div>
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-4">
                Consultar canais municipais →
              </span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
