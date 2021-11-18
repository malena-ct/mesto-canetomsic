import './app.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
