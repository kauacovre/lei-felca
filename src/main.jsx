/*O arquivo src/main.jsx usa o BrowserRouter. 
Isso causa um erro 404 (tela branca) se alguém tentar acessar diretamente a URL de um tutorial (ex: /tutorial/windows-family-safety) no GitHub Pages. 
O HashRouter resolve isso perfeitamente. */

import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Alterado aqui
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter> {/* Alterado aqui */}
      <App />
    </HashRouter>
  </React.StrictMode>
);