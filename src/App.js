import { useEffect, useState } from 'react';
import Header from './components/Header';
import api from './services/api';

function App() {
  const [repositorios, setRepositorios] = useState();

  useEffect(() => {
    api
      .get("recipe")
      .then((response) => console.log(response))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
