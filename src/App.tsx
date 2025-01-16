import { useState, useEffect } from "react";

import Loader from "./components/Loader";
import Header from "./components/Header";

function App() {
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    // Simulando o carregamento da página
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simula 3 segundos de carregamento

    return () => clearTimeout(timer); // Limpeza do timer
  }, []);

  return (
    <div className="App">
      { isLoading ? (
        <Loader />
      ) : (

        <Header />

      )}
    </div>
  );
}

export default App;
