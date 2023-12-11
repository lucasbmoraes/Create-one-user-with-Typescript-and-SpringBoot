import './App.css'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import CadastroCliente from './Components/CadastroCliente/CadastroCliente';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cadastroCliente" element={<CadastroCliente />} />
      </Routes>
    </Router>
  )
}

export default App
