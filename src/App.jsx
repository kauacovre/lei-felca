import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TutorialPage from "./pages/TutorialPage";
import { tutorials } from "./data/tutorials";

export default function App() {
  return (
    <div className="appShell">
      <Navbar tutorials={tutorials} />

      <main className="pageWrap">
        <Routes>
          <Route path="/" element={<Home tutorials={tutorials} />} />
          {/* Cada tutorial usa o mesmo modelo para manter navegacao e UX consistentes. */}
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
    </div>
  );
}
