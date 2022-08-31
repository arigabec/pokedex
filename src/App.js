import './App.css';
/*import React, { useState } from 'react';
import { MyComponent } from './components/MyComponent';
import { TrainerForm } from './components/TrainerForm';*/
import { PokeCard } from './components/PokeCard';

function App() {
  // const [name, setName] = useState('');
  // const [nameTrainer, setNameTrainer] = useState('');

  return (
    // <MyComponent name={name} setName={setName}></MyComponent>
    // <TrainerForm> </TrainerForm>
    <PokeCard idPokemon={4}></PokeCard>
  );
}

export default App;