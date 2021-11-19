import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Calculator from './Calculator'

function App() {
  const keyArray = {"0": "zero", "1": "one", "2": "two", "3": "three"}
    const dispatch = useDispatch();
    const handleKeyPress = (e) => dispatch({type: (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") ? "OPERATION": e.key === "Enter"? "equals": "INPUT", userInput: e.key})
    

    document.addEventListener("keyup", handleKeyPress);
  return (
    <React.StrictMode>
      <Calculator />
    </React.StrictMode>
  );
}

export default App;
