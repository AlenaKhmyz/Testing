// import logo from './logo.svg';
// import './App.css';
// import { useState, useEffect } from 'react'

// function App() {
//   const [data, setData] = useState(null)
//   const [toggle, setToggle] = useState(false)
//   const [value, setValue] = useState('')

//   const onClick = () => setToggle(prev => !prev)

//   useEffect(() => {
//     setTimeout(() => {
//       setData({})
//     }, 100)
//   }, [])

//   return (
//     <div className="App">
//       <h1 data-testid="value-elem">{value}</h1>
//       {toggle === true && <div data-testid='toggle-elem'>toggle</div>}
//       {data && <div style={{ color: 'blue' }}>data</div>}
//       <h1>hi</h1>
//       <button onClick={onClick} data-testid='toggle-btn'>click me!</button>
//       <input onChange={e => setValue(e.target.value)} type='text' placeholder='input value' />
//     </div>
//   );
// }

// export default App;

import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import MainPage from './pages/MainPage'

const App = () => {

  return (
    <div>
      <Link to="/" data-testid="main-link">Main</Link>
      <Link to="/about" data-testid="about-link">About</Link>
      <Routes>
        <Route path="/" element={<MainPage/> } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<ErrorPage/> } />
      </Routes>
    </div>
  )
}

export default App
