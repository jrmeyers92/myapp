import React from 'react';
import logo from './logo.svg';

function App() {
  const buttonText = {text: 'click me'};
  const labelText = "Enter Name:"

  return (
    <div className="App">
      <label className="label" for="name">{labelText}</label>
      <input id="name" type="text"/>
      <button style={{backgroundColor: 'blue', color: 'white'}}>
        {buttonText.text}
      </button>

    </div>
  );
}

export default App;
