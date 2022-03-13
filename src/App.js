import './styles/App.scss';
import React, {useState, useEffect} from 'react';
import NormalCalculator from './components/NormalCalculator'
import ClassicCalculator from './components/ClassicCalculator'
import Swal from 'sweetalert2'

function App() {

  const [state, setState] = useState('normal')
  const [result, setResult] = useState(null)
  const [number, setNumber] = useState('')

  const reset = () => {
    setResult(null)
    setNumber('')
  }

  useEffect(() => {
    reset()
  }, [state])

  const getResponse = () => {
    fetch(`http://d384-2806-261-2400-1b40-35d2-fcd4-6b63-e706.ngrok.io/api/fibonacci/${number}`)
    .then(data => data.json())
    .then(data => setResult(data.result))
    .catch(err => Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    }))
  }


  return (
    <div className="App-main-container">
      <div className="App-header-main-container">
        <div className="App-header-toggle-container">
          <button className={state === 'normal'? 'App-toggle-NormalCalculator-button button-off': 'App-toggle-NormalCalculator-button'} onClick={() => setState('normal')}>Normal Calculator</button>
          <button className={state === 'classic'? 'App-toggle-classicCalculator-button button-off': 'App-toggle-classicCalculator-button'} onClick={() => setState('classic')}>Classic Calculator</button>
        </div>
      </div>
      <div className="App-calculator-main-container">
        {
          state==='normal' && <NormalCalculator result={result} setResult={setResult} setNumber={setNumber} number={number} getResponse={getResponse} reset={reset}/>
        }
        {
          state==='classic' && <ClassicCalculator result={result} setNumber={setNumber} number={number} getResponse={getResponse} reset={reset}/>
        }
      </div>
    </div>
  );
}

export default App;
