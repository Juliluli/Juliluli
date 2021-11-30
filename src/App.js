import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <header className="App-header">
        <NavBar />
        <ItemListContainer greetings="Hola, soy el componente contenedor!" className="itemlistcontainer"/>
    </header>
  );
}

export default App;
