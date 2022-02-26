import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Cardiologia from './pages/especialidades/Cardiologia';
import Urologia from './pages/especialidades/Urologia';
import Cronicas from './pages/especialidades/Cronicas';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />         
          <Route path="/especialidades/cardiologia" element={<Cardiologia />} /> 
          <Route path="/especialidades/urologia" element={<Urologia />} />  
          <Route path="/especialidades/cronicas" element={<Cronicas />} />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
