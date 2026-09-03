import React from "react";
import { Users, GraduationCap, ShieldCheck, Heart } from "lucide-react";
import logoImg from "../assets/logo.png";

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const teamMembers = [
  {
    name: "Alexandre Rodrigues",
    handle: "@xand_rod",
    url: "https://www.instagram.com/xand_rod?igsi=bHRzcW9sbnJ3dGJt",
  },
  {
    name: "Kauã Covre",
    handle: "@kauacovre",
    url: "https://www.instagram.com/kauacovre?igsi=eGF5OHhkaHExbG5z",
  },
  {
    name: "João Pedro Borges",
    handle: "@jp.borgesz",
    url: "https://www.instagram.com/jp.borgesz?igsi=eHB3OWRma3Fmbmlw",
  },
];

export default function Footer() {
  return (
    <footer id="creditos" className="border-t border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-[#06070a]/90 backdrop-blur-md text-slate-600 dark:text-slate-400 text-xs transition-colors scroll-mt-16 md:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand & Mission */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-sm flex items-center justify-center p-0.5 shrink-0">
                <img
                  src={logoImg}
                  alt="Logo Lei Felca"
                  className="w-full h-full object-contain rounded-lg"
                  onError={(e) => {
                    // Fallback se imagem falhar
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div>
                <span className="font-extrabold text-sm text-slate-900 dark:text-white tracking-tight block">
                  Lei Felca
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  Guia Institucional de Segurança Digital Infantil
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Portal educativo e informativo focado em orientações práticas para pais e responsáveis,
              promovendo a proteção integral e a privacidade de crianças e adolescentes no ambiente online.
            </p>
          </div>

          {/* Credits: Equipe Cão */}
          <div className="md:col-span-6 md:text-right space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-semibold">
              <Users className="w-3.5 h-3.5" />
              <span>Créditos do Projeto</span>
            </div>

            <div className="flex flex-col md:items-end">
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center md:justify-end gap-1.5">
                <GraduationCap className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Desenvolvido pela <strong>Equipe Cão</strong></span>
              </p>

              <div className="mt-2 flex flex-wrap md:justify-end gap-2">
                {teamMembers.map((member) => (
                  <a
                    key={member.name}
                    href={member.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Abrir Instagram de ${member.name} (${member.handle})`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium bg-slate-100 hover:bg-pink-500/10 dark:bg-white/5 dark:hover:bg-pink-500/15 border border-slate-200 hover:border-pink-500/30 dark:border-white/10 dark:hover:border-pink-500/30 text-slate-700 hover:text-pink-600 dark:text-slate-300 dark:hover:text-pink-400 shadow-sm transition-all duration-200 group"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-pink-500 transition-colors" />
                    <span>{member.name}</span>
                  </a>
                ))}
              </div>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 flex items-center md:justify-end gap-1">
                <span>Trabalho escolar e acadêmico de conscientização digital</span>
                <Heart className="w-3 h-3 text-rose-500 inline fill-rose-500/20" />
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200/60 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Iniciativa sem fins lucrativos • Conscientização e Cidadania Digital</span>
          </div>

          <p className="text-center sm:text-right">
            © {new Date().getFullYear()} Lei Felca • Todos os direitos reservados aos estudantes.
          </p>
        </div>
      </div>
    </footer>
  );
}
