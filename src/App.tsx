import { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import Pokemon from './pages/Pokemon';
import Pokemons from './pages/Pokemons';
import Items from './pages/Items';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/items" element={<Items />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemons/:name" element={<Pokemon />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
