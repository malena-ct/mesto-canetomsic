import './app.scss';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer'; 
import {Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
