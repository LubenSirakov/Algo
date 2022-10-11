import pepe from './images/pepe.png'
import dolan from './images/dolan.png'
import gooby from './images/gooby.png'
import trading from './images/trading.png'
import hasbulla from './images/has.png'
import algo from './algo';
import { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('')

  const handleChange = (e) => setMessage(e.target.value)

  let newAlgoSenctence = algo(message)

  return (
    <div className="App">
      <header className="App-header">
        <div className='img-container'>
          <img src={pepe} className="App-logo" alt="logo" />
          <img src={dolan} className="App-logo" alt="logo" />
          <img src={gooby} className="App-logo" alt="logo" />
          <img src={trading} className="App-logo" alt="logo" />
        </div>
        <h1>
          Enter something to algo
        </h1>
        <div className='input-div'>
          <img src={hasbulla} className="hasbulla" alt="hasbulla" />
          <input
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
            value={message}
          />
        </div>
        <div className='ouput-div'>
          {newAlgoSenctence
            ? (
              <>
                <h3 className='output'>{newAlgoSenctence}</h3>
                <button
                  className='algo-btn'
                  onClick={() => { navigator.clipboard.writeText(newAlgoSenctence) }}
                >
                  Copy
                </button>
              </>
            )
            : (
              <>
                <h3 className='output'>Размени буквите</h3>
                <button
                  className='btn-invisible '
                >
                </button>
              </>
            )}
        </div>
      </header>
    </div>
  );
}

export default App;
