import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sun, Moon, Shield, Menu, X, BookOpen, Video, Users } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import logoImg from "../assets/logo.png";

export default function Navbar({ tutorials = [] }) {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleScrollToTop = () => {
    setMobileMenuOpen(false);
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleScrollTo = (id) => {
    setMobileMenuOpen(false);
    if (!isHome) {
      navigate("/", { state: { scrollTo: id } });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-colors duration-200 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                handleScrollToTop();
              }
            }}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
            aria-label="Lei Felca - Início"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-lg shadow-blue-500/10 group-hover:scale-105 transition-transform duration-200 p-0.5">
              <img
                src={logoImg}
                alt="Logo Lei Felca"
                className="w-full h-full object-contain rounded-lg"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base md:text-lg tracking-tight text-slate-900 dark:text-white">
                  Lei Felca
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  Institucional
                </span>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                Guia de Segurança Digital Infantil
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={handleScrollToTop}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                isHome
                  ? "text-blue-600 dark:text-blue-400 bg-blue-500/10"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              Início
            </button>

            <button
              onClick={() => handleScrollTo("lei-felca")}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex items-center gap-1.5"
            >
              <Video className="w-4 h-4 text-blue-500" />
              O Que É a Lei
            </button>

            <button
              onClick={() => handleScrollTo("pilares")}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
            >
              O Que Muda
            </button>

            <button
              onClick={() => handleScrollTo("tutoriais")}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-indigo-500" />
              Tutoriais Práticos
            </button>

            <button
              onClick={() => handleScrollTo("creditos")}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Users className="w-4 h-4 text-emerald-500" />
              Créditos
            </button>
          </nav>

          {/* Actions: Theme toggle & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              {isDark ? (
                <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Quick Tutorial Shortcut CTA */}
            <button
              onClick={() => handleScrollTo("tutoriais")}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Proteger Agora
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0c0e14]/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-2">
          <button
            onClick={handleScrollToTop}
            className="w-full text-left block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer"
          >
            Início
          </button>
          <button
            onClick={() => handleScrollTo("lei-felca")}
            className="w-full text-left block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
          >
            O Que É a "Lei Felca"
          </button>
          <button
            onClick={() => handleScrollTo("pilares")}
            className="w-full text-left block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
          >
            O Que a Lei Muda
          </button>
          <button
            onClick={() => handleScrollTo("tutoriais")}
            className="w-full text-left block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer"
          >
            Tutoriais Práticos
          </button>
          <button
            onClick={() => handleScrollTo("creditos")}
            className="w-full text-left block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer flex items-center gap-2"
          >
            <Users className="w-4 h-4 text-emerald-500" />
            Créditos
          </button>
        </div>
      )}
    </header>
  );
}
