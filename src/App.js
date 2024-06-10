import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter,Routes} from 'react-router-dom';
import Home from './Home';
import Login from './Login'
import Register from './Register'
import {ToastContainer} from 'react-toastify'
import './Login.css';
import Housekeeper from './Housekeeper'


function App() {
  return (
  <div className='App'>
    <ToastContainer></ToastContainer>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='register' element={<Register/>}></Route>
      <Route path='housekeeper' element={<Housekeeper/>}></Route>
    </Routes>
    </BrowserRouter>


  </div>
  );
}

export default App;
