import './app.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Próximamente, la cultura donde estés" />
    </div>
  );
}

export default App;
