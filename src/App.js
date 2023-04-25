import logo from 'react';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [names, setNames] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddName = () => {
    if (inputValue !== '') {
      setNames([...names, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveName = (index) => {
    const newNames = [...names];
    newNames.splice(index, 1);
    setNames(newNames);
  };

  const handlePickRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    alert("Wir gehen heute zu " + (names[randomIndex]) + " .Hoffe das ist okay für dich?");
  };

  return (
    <div className="App">
      
      <header className="App-header">
        <label>
          <input id="input" name="input" value={inputValue} type="text" className="Input" placeholer="name..." onChange={handleInputChange} >
          </input>
          <div className="Silent-Seperator  Button-Box">
            <div className="button-list">
              {names.map((name, index) => (
                <button className="Button" key={index} onClick={() => handleRemoveName(index)}>
                  {name}
                </button>
              ))}
            </div>
          </div>
        </label>
        <div className="Seperator Button-Box">
          <div class="Logo">
          </div>
          @CodeMuun</div>
        <div className="Button-Box">
          <label className="Button-lable">
            <button className="Button" onClick={handleAddName} >
              <a>
                <h2>
                  ADD
                </h2>
              </a>
            </button>
          </label>
          <label className="Button-lable">
            <button className="Button" onClick={handlePickRandomName} >
              <a>
                <h2>
                  ZDOZM
                </h2>
              </a>
            </button>
          </label>
        </div>

      </header>
    </div>
  );
}


export default App;

