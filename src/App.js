
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppNav from './compnents/AppNav';
import Products from "./compnents/Products";
import Cart from "./compnents/Cart";

function App() {
  return (
    <div className="App">
        <AppNav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
