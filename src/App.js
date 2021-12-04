import './app.scss';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer'; 
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>

        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
