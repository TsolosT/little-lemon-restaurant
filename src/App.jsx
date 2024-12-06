import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Reservetion from './pages/Reservetion'
import Login from './pages/Login'
import UnderDevPage from './pages/UnderDevPage';
import { BookingProvider } from "./context/booking/BookingContext";

function App() {

  return (
    <BookingProvider>
      <main>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/menu' element={<Menu/>} />
            <Route path='/menu/:id' element={<UnderDevPage/>} />
            <Route path='/about' element={<UnderDevPage/>} />
            <Route path='/reservetion' element={<Reservetion/>} />
            <Route path='/order-online' element={<UnderDevPage/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/*' element={<UnderDevPage/>} />
          </Routes>
          <Footer/>
        </Router>
      </main>
    </BookingProvider>
  )
}

export default App
