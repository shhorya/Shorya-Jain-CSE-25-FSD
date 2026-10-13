import Login from './components/Login';
import Registeration from './components/Registeration';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registeration />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </div>
}

function home() {
  return (
    <div>
  <h2>Welcome to the Home Page</h2>
  <nav>
    <ul>
      <li><a href="/login">Login</a></li>
      <li><a href="/register">Register</a></li>
      <li><a href="/dashboard">Dashboard</a></li>
    </ul>
  </nav>
</div>
  );
}

export default App