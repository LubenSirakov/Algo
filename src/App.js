import algo from './utils/algo';
import { useReducer } from 'react';
import './App.css';
import SpinningImages from './components/SpiningImages'
import TextInput from './components/TextInput';
import OutputAlgo from './components/OutputAlgo';
import GlobalState, { reducer } from './components/GlobalState';

const initialState = {
  message: ''
}

function App(props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  let newAlgoSenctence = algo(state.message)

  return (
    <GlobalState initialState={state} dispatch={dispatch} >
      <div className="App">
        <header className="App-header">
          <SpinningImages />
          <TextInput />
          <OutputAlgo newAlgoSenctence={newAlgoSenctence} />
        </header>
      </div>
    </GlobalState>
  );
}

export default App;
