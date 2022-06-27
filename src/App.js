
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Link,Routes} from 'react-router-dom'


import Navbar from './Components/navbar/Navbar';
import MainScreen from './Components/Main Screen/MainScreen';

import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';


function App() {
  return (
    <div className="App">
       
      <Routes>
      <Route path='/' element={<MainScreen />}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/admin' element={<Admin/>} />

      </Routes>

    </div>
  );
}

export default App;
