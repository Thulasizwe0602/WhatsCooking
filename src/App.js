import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/UserLists';
import Menu from './pages/Menu';
import Orders from './pages/Orders';
import Reports from './pages/Reports';
import Deliveries from './pages/Deliveries';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/deliveries' element={<Deliveries/>}/>
          <Route path='/reports' element={<Reports/>}/>
        </Routes>
    </Router>
    </> 
  );
}

export default App;
