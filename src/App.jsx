import { useState } from 'react'
import './App.css'

function CalcDisplay({ dispValue }) {
  return (
    <div className='Display'> 
      {dispValue}
    </div>
  );
}

function CalcButton({ buttonLabel, onClick, buttonClassName = 'Button' }) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {buttonLabel}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState('0');
  const [operand1, setOperand1] = useState(null);
  const [operand2, setOperand2] = useState(null);
  const [operation, setOperation] = useState(null);

  const clearButtonClickHandler = (e) => {
    e.preventDefault();
    setDisp(0);
    setOperand1(null);
    setOperand2(null);
    setOperation(null);
  }

  // DEFINED HERE INSIDE App()
  const nameClickHandler = (e) => {
    e.preventDefault();
    setDisp('Samantha Villanueva');
  }

  const operationClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOperation(value);
    setDisp(value);
  }

  const equalButtonClickHandler = (e) => {
    e.preventDefault();

    if (operation === '+') {
      setDisp(parseFloat(operand1) + parseFloat(operand2));
    } else if (operation === '-') {
      setDisp(parseFloat(operand1) - parseFloat(operand2));
    } else if (operation === '×') {
      setDisp(parseFloat(operand1) * parseFloat(operand2));
    } else if (operation === '÷') {
      setDisp(parseFloat(operand1) / parseFloat(operand2));
    }
  }

  const nullbuttonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value + "|" + operand1 + "|" + operand2 + "|" + operation);
    if(operation === null) {
      if(operand1 === null) {
        setDisp(value);
        setOperand1(value);
      } else {
        setDisp(operand1 + value);
        setOperand1(operand1 + value);
      }
    } else {
      if(operand2 === null) {
        setDisp(value);
        setOperand2(value);
      } else {
        setDisp(operand2 + value);
        setOperand2(operand2 + value);
      }
    }
  }

  return (
    <div className='App'>
      <div className='Header'>Calculator of Samantha Villanueva - WMD3A</div>
      <div className='Calculator'>
        <CalcDisplay dispValue={disp} />
        <div className='Keypad'>
          <CalcButton buttonLabel={7} onClick={nullbuttonClickHandler} />
          <CalcButton buttonLabel={8} onClick={nullbuttonClickHandler} />
          <CalcButton buttonLabel={9} onClick={nullbuttonClickHandler} />
          <CalcButton buttonLabel={'÷'} onClick={operationClickHandler} />
          <CalcButton buttonLabel={4} onClick={nullbuttonClickHandler} />
          <CalcButton buttonLabel={5} onClick={nullbuttonClickHandler} />
          <CalcButton buttonLabel={6} onClick={nullbuttonClickHandler} />
          <CalcButton buttonLabel={'×'} onClick={operationClickHandler} />
          <CalcButton buttonLabel={1} onClick={nullbuttonClickHandler} />
          <CalcButton buttonLabel={2} onClick={nullbuttonClickHandler} />
          <CalcButton buttonLabel={3} onClick={nullbuttonClickHandler} />
          <CalcButton buttonLabel={'-'} onClick={operationClickHandler} />
          <CalcButton buttonLabel={'C'} buttonClassName="Button ClrButton" onClick={clearButtonClickHandler} />
          <CalcButton buttonLabel={0} onClick={nullbuttonClickHandler} />
          <CalcButton buttonLabel={'='} onClick={equalButtonClickHandler} />
          <CalcButton buttonLabel={'+'} onClick={operationClickHandler} />
        </div>
        <div className='NameButtonContainer'>
          <CalcButton 
            buttonLabel={'Villanueva'} 
            buttonClassName='NameButton' 
            onClick={nameClickHandler} 
          />
        </div>
      </div>
    </div>
  )
}

export default App