import React, { useState, useEffect } from "react";
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
  Play,
  Image as ImageIcon,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Info,
  Camera,
  Check
} from "lucide-react";
import SpotlightCard from "../components/SpotlightCard";
import { tutorials } from "../data/tutorials";

const platformIcons = {
  Windows: Monitor,
  Roblox: Gamepad2,
  YouTube: Video,
  Android: Smartphone,
  iOS: Smartphone,
};

function parseYouTubeUrl(url, defaultStart = 0) {
  if (!url) return null;
  try {
    let videoId = "";
    let startTime = defaultStart || 0;

    const idMatch = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
    );
    if (idMatch) {
      videoId = idMatch[1];
    }

    const timeMatch = url.match(/[?&](?:t|start)=([0-9]+(?:s|m|h)?)/);
    if (timeMatch) {
      const val = timeMatch[1];
      if (val.endsWith("s")) {
        startTime = parseInt(val.replace("s", ""), 10);
      } else if (val.endsWith("m")) {
        startTime = parseInt(val.replace("m", ""), 10) * 60;
      } else {
        startTime = parseInt(val, 10);
      }
    }

    if (!videoId) return null;

    return {
      videoId,
      startTime: startTime || 0,
      thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      fallbackThumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    };
  } catch {
    return null;
  }
}

export default function TutorialPage({ tutorial }) {
  if (!tutorial) return null;

  const IconComp = platformIcons[tutorial.platform] || Shield;

  // Video State
  const videoData = tutorial.video;
  const ytInfo = videoData?.url ? parseYouTubeUrl(videoData.url, videoData.recommendedStartTime) : null;
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStartTime, setCurrentStartTime] = useState(ytInfo?.startTime || 0);
  const [thumbnailError, setThumbnailError] = useState(false);

  // Lightbox Modal for Screenshots
  const [activeScreenshot, setActiveScreenshot] = useState(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveScreenshot(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Update video start time if chapter/key moment clicked
  const handleSelectMoment = (seconds) => {
    setCurrentStartTime(seconds);
    setIsPlaying(true);
  };

  // Find Prev / Next tutorials for navigation
  const currentIndex = tutorials.findIndex((t) => t.slug === tutorial.slug);
  const prevTutorial = currentIndex > 0 ? tutorials[currentIndex - 1] : null;
  const nextTutorial = currentIndex < tutorials.length - 1 ? tutorials[currentIndex + 1] : null;

  return (
    <article className="min-h-screen py-10 lg:py-16 relative">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 dark:bg-blue-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb / Back Link */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para o início
          </Link>

          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Tutorial {currentIndex + 1} de {tutorials.length}
          </span>
        </div>

        {/* Tutorial Header Card */}
        <SpotlightCard
          spotlightColor="rgba(59, 130, 246, 0.2)"
          borderSpotlightColor="rgba(99, 102, 241, 0.4)"
          className="bg-white/80 dark:bg-[#0c0e14]/80 backdrop-blur-xl border-slate-200 dark:border-white/10 p-6 sm:p-10 mb-8 shadow-xl"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <IconComp className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-blue-600 dark:text-blue-400">
                    {tutorial.platform}
                  </span>
                  {videoData?.url && (
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <Video className="w-3 h-3" />
                      Vídeo incluso
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Guia Oficial de Proteção e Monitoramento Familiar
                </p>
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

        {/* ========================================================================= */}
        {/* VIDEO SECTION (Embedded Player with Key Moments or Coming Soon Card) */}
        {/* ========================================================================= */}
        <section className="mb-12">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Vídeo Explicativo Passo a Passo
              </h2>
            </div>
            {videoData?.url && (
              <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
                {videoData.channel || "Vídeo Oficial"}
              </span>
            )}
          </div>

          {videoData?.url && ytInfo ? (
            <SpotlightCard
              spotlightColor="rgba(59, 130, 246, 0.25)"
              borderSpotlightColor="rgba(99, 102, 241, 0.4)"
              className="bg-white dark:bg-[#0c0e14] border-slate-200 dark:border-white/10 overflow-hidden shadow-xl"
            >
              <div className="p-3 sm:p-5">
                {/* 16:9 Video Frame */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black/90 shadow-inner group">
                  {!isPlaying ? (
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                      <img
                        src={thumbnailError ? ytInfo.fallbackThumbnail : ytInfo.thumbnail}
                        onError={() => setThumbnailError(true)}
                        alt={videoData.title || "Capa do vídeo explicativo"}
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                      {/* Big Play Button */}
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="relative z-20 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600/90 text-white shadow-xl shadow-blue-500/40 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50 cursor-pointer"
                        aria-label="Reproduzir vídeo explicativo"
                      >
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                      </button>

                      {/* Video Badges & Title Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 z-20 text-left">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-slate-200 text-xs font-medium border border-white/10">
                            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                            {videoData.channel || "Tutorial Oficial"}
                          </span>
                          {videoData.recommendedStartTimeLabel && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-600/80 backdrop-blur-md text-white text-xs font-semibold border border-blue-400/30">
                              <Clock className="w-3 h-3" />
                              Ponto focal: {videoData.recommendedStartTimeLabel}
                            </span>
                          )}
                        </div>
                        <p className="text-white text-sm sm:text-base font-bold line-clamp-1">
                          {videoData.title}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${ytInfo.videoId}?autoplay=1&start=${currentStartTime}&rel=0`}
                      title={videoData.title || "Vídeo Tutorial"}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                    />
                  )}
                </div>

                {/* Video Info and Interactive Key Moments Bar */}
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        {videoData.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Veja a demonstração prática da vinculação de conta e consentimento de responsáveis.
                      </p>
                    </div>

                    <a
                      href={videoData.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline shrink-0"
                    >
                      <span>Abrir no YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Interactive Chapter Moments */}
                  {videoData.keyMoments && videoData.keyMoments.length > 0 && (
                    <div className="mt-3">
                      <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-blue-500" />
                        Pular para momento chave do tutorial:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {videoData.keyMoments.map((moment) => (
                          <button
                            key={moment.time}
                            onClick={() => handleSelectMoment(moment.time)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                              isPlaying && currentStartTime === moment.time
                                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                                : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-white/10"
                            }`}
                          >
                            <span className="font-bold text-blue-500 dark:text-blue-400">
                              {moment.timeFormatted}
                            </span>
                            <span className="truncate max-w-[200px] sm:max-w-none">
                              {moment.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </SpotlightCard>
          ) : (
            /* Fallback card when video is not yet configured for this platform */
            <SpotlightCard
              spotlightColor="rgba(59, 130, 246, 0.15)"
              borderSpotlightColor="rgba(255, 255, 255, 0.15)"
              className="bg-slate-50/60 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 p-6 sm:p-8 rounded-2xl"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Video className="w-6 h-6" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Vídeo Explicativo em Produção
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      Em Breve
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    O tutorial em vídeo com gravação de tela para <strong>{tutorial.platform}</strong> está
                    sendo finalizado. Você já pode seguir o guia completo com o passo a passo ilustrado
                    logo abaixo.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          )}
        </section>

        {/* ========================================================================= */}
        {/* STEPS SECTION WITH DEDICATED RESERVED SCREENSHOT SLOTS */}
        {/* ========================================================================= */}
        <section className="space-y-6 mb-12">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Passo a Passo com Capturas de Tela
              </h2>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {tutorial.steps.length} etapas guiadas
            </span>
          </div>

          <div className="space-y-6">
            {tutorial.steps.map((step, index) => {
              const screenshots = step.screenshots || [
                {
                  url: "",
                  caption: `Captura de tela do passo ${index + 1}: ${step.title}`,
                  placeholderTitle: `Print ${index + 1}: ${step.title}`,
                  placeholderHint: `Captura de tela demonstrativa da ação deste passo.`,
                },
              ];

              return (
                <SpotlightCard
                  key={step.title}
                  spotlightColor="rgba(99, 102, 241, 0.15)"
                  borderSpotlightColor="rgba(255, 255, 255, 0.2)"
                  className="bg-white dark:bg-[#0c0e14] border-slate-200 dark:border-white/10 p-5 sm:p-7 flex flex-col gap-5 shadow-lg"
                >
                  {/* Step Header */}
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-extrabold text-sm sm:text-base shrink-0 shadow-md shadow-blue-500/20 mt-0.5">
                      {index + 1}
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                          Etapa {index + 1}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* ========================================================= */}
                  {/* SCREENSHOTS CONTAINER (Reserved Space or Rendered Image) */}
                  {/* ========================================================= */}
                  <div className="sm:pl-14 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Camera className="w-3.5 h-3.5 text-blue-500" />
                        {screenshots.length === 1
                          ? "Print ilustrativo desta etapa"
                          : `Prints ilustrativos (${screenshots.length} capturas)`}
                      </span>
                      <span className="text-[11px] text-slate-400 dark:text-slate-500">
                        {screenshots.some((s) => s.url) ? "Clique para ampliar" : "Espaço reservado"}
                      </span>
                    </div>

                    <div
                      className={`grid gap-4 ${
                        screenshots.length > 1
                          ? "grid-cols-1 md:grid-cols-2"
                          : "grid-cols-1"
                      }`}
                    >
                      {screenshots.map((item, sIndex) => {
                        const hasImage = Boolean(item.url && item.url.trim() !== "");

                        if (hasImage) {
                          return (
                            <div
                              key={sIndex}
                              className="group relative rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-black/40 cursor-pointer shadow-md transition-all hover:border-blue-500/50 hover:shadow-xl"
                              onClick={() =>
                                setActiveScreenshot({
                                  url: item.url,
                                  caption: item.caption,
                                  title: step.title,
                                  stepIndex: index + 1,
                                })
                              }
                            >
                              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                                <img
                                  src={item.url}
                                  alt={item.caption || step.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md text-white text-xs font-semibold shadow-lg">
                                    <Maximize2 className="w-3.5 h-3.5" />
                                    Ampliar print
                                  </span>
                                </div>
                              </div>
                              {item.caption && (
                                <div className="p-2.5 bg-white dark:bg-[#0c0e14] border-t border-slate-100 dark:border-white/5">
                                  <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                                    {item.caption}
                                  </p>
                                </div>
                              )}
                            </div>
                          );
                        }

                        // Reserved Placeholder Box
                        return (
                          <div
                            key={sIndex}
                            className="relative rounded-2xl border-2 border-dashed border-blue-500/30 dark:border-blue-400/20 bg-gradient-to-b from-blue-50/40 to-indigo-50/20 dark:from-blue-950/20 dark:to-indigo-950/10 p-6 sm:p-7 flex flex-col items-center justify-center text-center transition-all hover:border-blue-500/50 hover:bg-blue-50/60 dark:hover:bg-blue-950/30 group"
                          >
                            {/* Icon badge */}
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                              <ImageIcon className="w-6 h-6" />
                            </div>

                            {/* Badge */}
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-[11px] font-bold uppercase tracking-wider mb-2 border border-blue-500/20">
                              <Camera className="w-3 h-3" />
                              Espaço Reservado para Print
                            </span>

                            {/* Placeholder Title */}
                            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
                              {item.placeholderTitle || `Print do Passo ${index + 1}`}
                            </h4>

                            {/* Placeholder Hint */}
                            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md leading-relaxed mb-3">
                              {item.placeholderHint ||
                                item.caption ||
                                "A captura de tela demonstrando esta etapa será exibida aqui."}
                            </p>

                            {/* Technical guidance hint */}
                            <div className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 dark:text-slate-500 bg-white/60 dark:bg-white/5 px-3 py-1 rounded-lg border border-slate-200/60 dark:border-white/5">
                              <Info className="w-3 h-3 text-blue-500" />
                              <span>Formatos suportados: PNG, JPG ou WebP (proporção 16:9)</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* TIPS SECTION */}
        {/* ========================================================================= */}
        {tutorial.tips && tutorial.tips.length > 0 && (
          <section className="mb-12">
            <SpotlightCard
              spotlightColor="rgba(245, 158, 11, 0.15)"
              borderSpotlightColor="rgba(245, 158, 11, 0.3)"
              className="bg-amber-500/[0.03] dark:bg-amber-500/[0.05] border-amber-500/20 dark:border-amber-500/20 p-6 sm:p-8"
            >
              <div className="flex items-center gap-2.5 mb-4 text-amber-600 dark:text-amber-400">
                <Lightbulb className="w-5 h-5" />
                <h2 className="text-lg font-bold">Dicas Essenciais para Famílias e Responsáveis</h2>
              </div>
              <ul className="space-y-3">
                {tutorial.tips.map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </section>
        )}

        {/* ========================================================================= */}
        {/* OFFICIAL SOURCE LINK */}
        {/* ========================================================================= */}
        {tutorial.sourceUrl && (
          <section className="pt-6 pb-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Precisa de detalhes avançados ou suporte técnico?
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

        {/* ========================================================================= */}
        {/* PREVIOUS / NEXT TUTORIAL NAVIGATION */}
        {/* ========================================================================= */}
        <section className="pt-6 border-t border-slate-200/60 dark:border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {prevTutorial ? (
            <Link
              to={`/tutorial/${prevTutorial.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-xs font-semibold"
            >
              <ChevronLeft className="w-4 h-4" />
              <div className="text-left">
                <span className="block text-[10px] text-slate-400 uppercase">Tutorial Anterior</span>
                <span className="font-bold">{prevTutorial.platform}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextTutorial ? (
            <Link
              to={`/tutorial/${nextTutorial.slug}`}
              className="inline-flex items-center justify-end gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-xs font-semibold sm:ml-auto"
            >
              <div className="text-right">
                <span className="block text-[10px] text-slate-400 uppercase">Próximo Tutorial</span>
                <span className="font-bold">{nextTutorial.platform}</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to="/"
              className="inline-flex items-center justify-end gap-2 px-4 py-2.5 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 transition-all text-xs font-semibold sm:ml-auto"
            >
              <span>Voltar ao início</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          )}
        </section>
      </div>

      {/* ========================================================================= */}
      {/* SCREENSHOT LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      {activeScreenshot && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setActiveScreenshot(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0c0e14] border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Passo {activeScreenshot.stepIndex}: {activeScreenshot.title}
                </span>
              </div>
              <button
                onClick={() => setActiveScreenshot(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Fechar visualização"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image */}
            <div className="p-2 sm:p-4 max-h-[75vh] flex items-center justify-center overflow-auto">
              <img
                src={activeScreenshot.url}
                alt={activeScreenshot.caption || activeScreenshot.title}
                className="max-h-[70vh] w-auto rounded-lg object-contain"
              />
            </div>

            {/* Modal Caption */}
            {activeScreenshot.caption && (
              <div className="px-5 py-3 border-t border-white/10 bg-black/40 text-center">
                <p className="text-xs sm:text-sm text-slate-300 italic">
                  {activeScreenshot.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
