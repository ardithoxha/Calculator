import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Calculator from './Calculator'

function App() {
  
  const dispatch = useDispatch();
  const handleKeyPress = (e) => dispatch({
    type: (e.key.match(/[-|+|*|/]/) ? "OPERATION" : (e.key === "Backspace" ? "clear": (e.key === "Enter" ? "equals" :
              (e.key.match(/[.0-9]/) && !e.key.match(/[A-Z]/) ? "INPUT" : "default")))),
    userInput: e.key
  })
  document.addEventListener("keyup", handleKeyPress);

  
  return (
    <React.StrictMode>
      <Calculator />
    </React.StrictMode>
  );
}

export default App;
