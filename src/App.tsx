import { useState, useEffect } from "react";

import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Simulando o carregamento da página
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simula 3 segundos de carregamento

    return () => clearTimeout(timer); // Limpeza do timer
  }, []);

  return (
    <div className="App">
      {/* Loader */}
      {loading && <Loader />}

      {/* Conteúdo principal */}
      <div className="content">
        <header>
          <h1>Bem-vindo ao Meu Site</h1>
          <p>Este é um site exemplo com carregamento e animações.</p>
        </header>
        <section>
          <p>Conteúdo carregado gradualmente...</p>
        </section>
      </div>
    </div>
  );
}

export default App;
