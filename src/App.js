import { useEffect, useState } from 'react';
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
     
    </div>
  );
}

export default App;
