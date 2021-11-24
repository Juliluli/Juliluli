import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';


function App() {
  const [count, setCount] = useState(0)
  const estilos= {backgroundColor: "azure"}
  const clickyclicky =()=>console.log("Hola!!!!")
  return (
    <div className="App" onClick={clickyclicky}>
      <header className="App-header" style={estilos}>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <button type="button" onClick={()=>setCount((count)=>count +1)}>count is: {count}</button>
        {/* <input /> */}
        <NavBar/>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
