import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState(null)
  const [toggle, setToggle] = useState(false)

  const onClick = () => setToggle(prev => !prev)

  useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 100)
  }, [])

  return (
    <div className="App">
      {toggle === true && <div data-testid='toggle-elem'>toggle</div>}
      {data && <div style={{ color: 'blue' }}>data</div>}
      <h1>hi</h1>
      <button onClick={onClick} data-testid='toggle-btn'>click me!</button>
      <input type='text' placeholder='input value' />
    </div>
  );
}

export default App;
