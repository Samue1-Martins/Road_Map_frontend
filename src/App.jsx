import { useState } from 'react'
import { Fragment } from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import './App.css'


// Import Components Html 
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

// import Routes
import RoutesApp from './routes/Routes'

// import pages Html


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <div className='mainContent'>
          <RoutesApp />
      </div>
      <Footer />
    </div>
  )
}

export default App
