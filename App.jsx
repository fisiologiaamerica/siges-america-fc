
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Saude from './components/Saude';
import Performance from './components/Performance';
import Treinadores from './components/Treinadores';
import Atletas from './components/Atletas';
import Admin from './components/Admin';
import Login from './components/Login';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => onAuthStateChanged(auth, setUser), []);

  if (!user) return <Login />;

  return (
    <div className="min-h-screen bg-white text-red-600">
      <header className="bg-red-700 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">SIGES - América FC RJ</h1>
        <nav className="space-x-4">
          <Link to="/">Dashboard</Link>
          <Link to="/saude">Saúde</Link>
          <Link to="/performance">Performance</Link>
          <Link to="/treinadores">Treinadores</Link>
          <Link to="/atletas">Atletas</Link>
          <Link to="/admin">Administração</Link>
        </nav>
      </header>

      <main className="p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/saude" element={<Saude />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/treinadores" element={<Treinadores />} />
          <Route path="/atletas" element={<Atletas />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}
