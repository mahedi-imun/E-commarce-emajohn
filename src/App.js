
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
       <Route path='/'element={<Shop/>} ></Route>
       <Route path='/shop'element={<Shop/>} ></Route>
       <Route path='/Order'element={<Orders/>} ></Route>
       <Route path='/Inventory'element={<Inventory/>} ></Route>
      </Routes>
      
    </div>
  );
}

export default App;
