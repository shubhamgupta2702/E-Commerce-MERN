
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header.jsx'
import Home from './Pages/Home/Home.jsx'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
