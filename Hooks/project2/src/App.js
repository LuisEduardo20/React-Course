import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  //   const [reverse, setReverse] = useState(false);
  //   const reverseClass = reverse ? 'reverse' : '';

  //   const [counter, setCounter] = useState(0);

  //   const handleClick = () => {
  //     setReverse(!reverse);
  //   };

  //   const handleIncrement = () => {
  //     setCounter((counter) => counter + 1);
  //   };

  const [counter, setCounter] = useEffect();

  return (
    <div className="App">
      <h1>Oi</h1>
      {/* <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <p>Contador = {counter}</p>
        <button type="button" onClick={handleIncrement}>
          Contador
        </button>
        <p>Estado do Botão = {reverseClass}</p>
        <button type="button" onClick={handleClick}>
          Reverse
        </button>
      </header> */}
    </div>
  );
}

export default App;
