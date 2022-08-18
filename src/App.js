import logo from './assets/blueHorse.jpg';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The new website is coming soon ....
        </p>
      </header>
    </div>
  );
}

export default App;
