import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Restaurantdetails from './components/Restaurantdetails';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/restaurant-details/:id' element={<Restaurantdetails/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
