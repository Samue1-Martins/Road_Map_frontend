import { useState } from 'react'
import './App.css'

import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/auth'

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
      <AuthProvider>
        <Header />
        <div className='mainContent'>
          <RoutesApp />
        </div>
        <Footer />
      </AuthProvider>
    </div>
  )
}

export default App
