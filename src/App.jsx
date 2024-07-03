import { useState } from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import './App.css'


// Import Components Html 
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <BrowserRouter />
      <Header />
      <div className='mainContent'>
        {/* <Routes>
          <Route path="/" element={<Main />} />
        </Routes> */}
        <Main />
      </div>
      <Footer />
      <BrowserRouter />
    </div>
  )
}

export default App
