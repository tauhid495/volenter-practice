
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/authentiction/Login';
import Register from './Components/authentiction/Register';
import NavBar from './Components/CommonRouts/navBar/NavBar';
import Events from './Components/events/Events';
import Home from './Components/home/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      app page
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/navbar' element={<NavBar />}></Route>
        <Route path='/events' element={<Events />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
