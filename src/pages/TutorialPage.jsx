import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  ExternalLink,
  Lightbulb,
  ShieldCheck,
  CheckCircle,
  Monitor,
  Gamepad2,
  Video,
  Smartphone,
  Shield,
} from "lucide-react";
import SpotlightCard from "../components/SpotlightCard";

const platformIcons = {
  Windows: Monitor,
  Roblox: Gamepad2,
  YouTube: Video,
  Android: Smartphone,
  iOS: Smartphone,
};

export default function TutorialPage({ tutorial }) {
  if (!tutorial) return null;

  const IconComp = platformIcons[tutorial.platform] || Shield;

  return (
    <article className="min-h-screen py-10 lg:py-16 relative">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 dark:bg-blue-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para o início
          </Link>
        </div>

        {/* Tutorial Header Card */}
        <SpotlightCard
          spotlightColor="rgba(59, 130, 246, 0.2)"
          borderSpotlightColor="rgba(99, 102, 241, 0.4)"
          className="bg-white/80 dark:bg-[#0c0e14]/80 backdrop-blur-xl border-slate-200 dark:border-white/10 p-6 sm:p-10 mb-10 shadow-xl"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <IconComp className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-blue-600 dark:text-blue-400">
                  {tutorial.platform}
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400">Guia de Configuração</p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
              <span>Tempo estimado: {tutorial.estimatedTime}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {tutorial.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {tutorial.summary}
          </p>
        </SpotlightCard>

        {/* Steps Section */}
        <section className="space-y-6 mb-12">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Passo a Passo
            </h2>
          </div>

          <div className="space-y-4">
            {tutorial.steps.map((step, index) => (
              <SpotlightCard
                key={step.title}
                spotlightColor="rgba(99, 102, 241, 0.15)"
                borderSpotlightColor="rgba(255, 255, 255, 0.2)"
                className="bg-white dark:bg-[#0c0e14] border-slate-200 dark:border-white/10 p-5 sm:p-6 flex items-start gap-4 sm:gap-5"
              >
                <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-sm shrink-0 shadow-md shadow-blue-500/20 mt-0.5">
                  {index + 1}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        {tutorial.tips && tutorial.tips.length > 0 && (
          <section className="mb-12">
            <SpotlightCard
              spotlightColor="rgba(245, 158, 11, 0.15)"
              borderSpotlightColor="rgba(245, 158, 11, 0.3)"
              className="bg-amber-500/[0.03] dark:bg-amber-500/[0.05] border-amber-500/20 dark:border-amber-500/20 p-6 sm:p-8"
            >
              <div className="flex items-center gap-2.5 mb-4 text-amber-600 dark:text-amber-400">
                <Lightbulb className="w-5 h-5" />
                <h2 className="text-lg font-bold">Dicas para Conversar em Família</h2>
              </div>
              <ul className="space-y-3">
                {tutorial.tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </section>
        )}

        {/* Official Source Link */}
        {tutorial.sourceUrl && (
          <section className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Precisa de detalhes avançados?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Consulte o artigo oficial de suporte da plataforma {tutorial.platform}.
              </p>
            </div>

            <a
              href={tutorial.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 transition-all"
            >
              Documentação Oficial {tutorial.platform}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </section>
        )}
      </div>
    </article>
  );
}
