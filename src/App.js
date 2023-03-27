import { useEffect, useState } from 'react';
import Header from './components/Header';
import api from './services/api';
import './App.css';
import Card from './components/Card';

function App() {
  const [repositorios, setRepositorios] = useState();

  useEffect(() => {
    api
      .get("recipe")
      .then((response) => setRepositorios(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      {repositorios.forEach((element) => {
        return (
          <Card 
            titulo={element.id}
          />
        )
      })}
    </div>
  );
}


export default App;
