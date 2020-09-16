import React from 'react'
import Header from './components/header'
import './global.css'
import Main from './pages/main'
import Routes from './routes'

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
)

export default App;
