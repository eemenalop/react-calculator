import './App.css';
import Boton from './componets/Boton'
import Screen from './componets/Screen'
import './stylesheet/Screen.css'
import ClearButton from './componets/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs'


function App() {
  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const calculateInput = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Por favor ingresar valores para realizar operacion');
    }
  };



  return (
    <div className="App">
      <div className='logo-container'>
      </div>
      <div className='calculator-container'>
        <Screen input={input} />
        <div className='fila'>
          <Boton clickHandler={addInput}>1</Boton>
          <Boton clickHandler={addInput}>2</Boton>
          <Boton clickHandler={addInput}>3</Boton>
          <Boton clickHandler={addInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton clickHandler={addInput}>4</Boton>
          <Boton clickHandler={addInput}>5</Boton>
          <Boton clickHandler={addInput}>6</Boton>
          <Boton clickHandler={addInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton clickHandler={addInput}>7</Boton>
          <Boton clickHandler={addInput}>8</Boton>
          <Boton clickHandler={addInput}>9</Boton>
          <Boton clickHandler={addInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton clickHandler={calculateInput}>=</Boton>
          <Boton clickHandler={addInput}>0</Boton>
          <Boton clickHandler={addInput}>.</Boton>
          <Boton clickHandler={addInput}>/</Boton>

        </div>
        <div className='fila'>
          <ClearButton clickHandler={() => setInput('')}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
