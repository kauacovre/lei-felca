import React, { useState } from "react";
import { Play, ShieldAlert, Sparkles, ExternalLink, AlertTriangle, Eye, CheckCircle2 } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

export default function LeiFelcaSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="lei-felca" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Origem e Impacto Social
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Por que o nome popular{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              "Lei Felca"
            </span>
            ?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Entenda como um alerta público mobilizou a sociedade brasileira, pressionou as grandes
            plataformas e impulsionou marcos legais para proteger crianças e adolescentes na internet.
          </p>
        </div>

        {/* Video Feature & Explanatory Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left / Top: Interactive YouTube Video Player Container */}
          <div className="lg:col-span-7">
            <SpotlightCard
              spotlightColor="rgba(59, 130, 246, 0.2)"
              borderSpotlightColor="rgba(99, 102, 241, 0.45)"
              className="bg-[#0e1017]/90 dark:bg-[#0c0e14]/90 border-slate-200 dark:border-white/10 shadow-2xl rounded-2xl overflow-hidden"
            >
              <div className="p-2 sm:p-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black/90 shadow-inner group">
                  {!isPlaying ? (
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                      {/* Video Thumbnail Background */}
                      <img
                        src="https://img.youtube.com/vi/lWYGn6Cq4rA/maxresdefault.jpg"
                        alt="Vídeo investigativo do Felca sobre lives e menores"
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                      {/* Play Button with Glow */}
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="relative z-20 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600/90 text-white shadow-xl shadow-blue-500/40 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                        aria-label="Assistir ao vídeo diretamente do YouTube"
                      >
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                      </button>

                      {/* Video Title Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 z-20 text-left">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-slate-200 text-xs font-medium mb-1 border border-white/10">
                          <Eye className="w-3.5 h-3.5 text-blue-400" />
                          Vídeo Oficial no YouTube
                        </span>
                        <p className="text-white text-sm sm:text-base font-semibold line-clamp-1">
                          A investigação que expôs os riscos de menores em lives e redes sociais
                        </p>
                      </div>
                    </div>
                  ) : (
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/lWYGn6Cq4rA?autoplay=1&rel=0"
                      title="Vídeo Investigativo do Felca"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                    />
                  )}
                </div>
              </div>

              {/* Video Footer Caption */}
              <div className="px-5 py-4 border-t border-slate-200 dark:border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-amber-500" />
                  Conteúdo exibido diretamente via incorporação do YouTube
                </span>
                <a
                  href="https://www.youtube.com/watch?v=lWYGn6Cq4rA"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Abrir no YouTube
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </SpotlightCard>
          </div>

          {/* Right: The Narrative & Legal Explanations */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Como um vídeo transformou o debate nacional
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Ao documentar e expor de forma detalhada como menores de idade vinham sendo
                incentivados a participar de transmissões ao vivo com dinâmicas de exploração,
                o criador <strong>Felca</strong> expôs a facilidade com que crianças e jovens se tornam
                vítimas de assédio, monetização predatória e algoritmos de retenção agressiva.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                A comoção popular gerada pelo vídeo amplificou a pressão sobre o poder público,
                fazendo com que propostas de regulamentação da segurança digital infantil
                (como o <strong>PL 2628/2022</strong> e iniciativas congêneres) fossem rapidamente
                apelidadas pelo público e pela mídia de <strong>"Lei Felca"</strong>.
              </p>
            </div>

            {/* Key Pillars of the Initiative */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                    Proteção de Dados e Privacidade por Padrão
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Contas de menores não devem ser públicas nem abertas para contato indiscriminado de estranhos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                    Fim das Mecânicas Predatórias e Apostas
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Proibição de compras cegas (*loot boxes*) e jogos de azar direcionados a crianças.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                    Ferramentas Acessíveis para Pais e Mães
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    As plataformas devem fornecer painéis intuitivos de controle parental sem rodeios técnicos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
