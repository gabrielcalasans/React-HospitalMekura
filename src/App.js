import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

import Contato from './pages/Contato';
import Especialidades from './pages/Especialidades';


import Agendar from './pages/servicos/Agendar';
import Consultar from './pages/servicos/Consultar';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />         
          <Route path="/especialidades/cardiologia" element={<Especialidades />} /> 
          <Route path="/especialidades/urologia" element={<Especialidades />} />  
          <Route path="/especialidades/cronicas" element={<Especialidades />} />
          <Route path="/especialidades/oftalmologia" element={<Especialidades />} />
          <Route path="/servicos/agendar-exame" element={<Agendar />} />
          <Route path="/servicos/acompanhar-exame" element={<Consultar />} />
        </Routes>      
        <Footer />
      </Router>
    </div>
  );
}

export default App;
