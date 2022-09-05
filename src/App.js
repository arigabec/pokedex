import "./App.css";
// import React, { useState, useEffect } from "react";
// import { PokeCard } from './components/PokeCard';
// import API from "./config/api";
/*import { MyComponent } from './components/MyComponent';
import { TrainerForm } from './components/TrainerForm';*/


// AVANCE DE CLASES 
function App() {
  // const [name, setName] = useState('');
  // const [nameTrainer, setNameTrainer] = useState('');

  return (
    // <MyComponent name={name} setName={setName}></MyComponent>
    // <TrainerForm> </TrainerForm>
    <h1>Hola</h1>
    // <PokeCard idPokemon={1}></PokeCard>
  );
}

export default App;

/* function App() {
  const [trainer, setTrainer] = useState();
  const getTrainerId = async () => {
    const trainerReponse = await API.get(`/trainer/3`);
    const { data } = trainerReponse;
    setTrainer(data.trainer[0]);
    console.log(data.trainer);
  };
  useEffect(() => {
    getTrainerId();
  }, []);

  return <><h1> Esta rotooo </h1></>;
  // return <>{trainer && <PokeCard idPokemon={trainer.id_pokemon}></PokeCard>}</>;
}

export default App;*/