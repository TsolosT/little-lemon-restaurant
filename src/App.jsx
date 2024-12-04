import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Reservetion from './pages/Reservetion'
import Login from './pages/Login'

function App() {

  return (
      <main>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/menu' element={<Menu/>} />
            {/* <Route path='/about' element={<About/>} /> */}
            <Route path='/reservetion' element={<Reservetion/>} />
            {/* <Route path='/order-online' element={<OrderOnline/>} /> */}
            <Route path='/login' element={<Login/>} />
          </Routes>
          <Footer/>
        </Router>
      </main>
  )
}

export default App
