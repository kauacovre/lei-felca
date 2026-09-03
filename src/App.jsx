import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MouseAura from "./components/MouseAura";
import Home from "./pages/Home";
import TutorialPage from "./pages/TutorialPage";
import { tutorials } from "./data/tutorials";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#08080c] text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-blue-500/30 selection:text-blue-300">
      <ScrollToTop />
      {/* Ambient mouse glow effect */}
      <MouseAura />

      {/* Floating Glass Navbar */}
      <Navbar tutorials={tutorials} />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home tutorials={tutorials} />} />
          {tutorials.map((tutorial) => (
            <Route
              key={tutorial.slug}
              path={`/tutorial/${tutorial.slug}`}
              element={<TutorialPage tutorial={tutorial} />}
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Institutional Footer with Team Credits */}
      <Footer />
    </div>
  );
}
