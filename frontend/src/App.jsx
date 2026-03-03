import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
    // Globalny stan użytkownika zsynchronizowany z localStorage
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    // Mechanizm logowania - zapisuje dane w przeglądarce i aktualizuje stan
    const handleLogin = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={user ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
                />
                <Route
                    path="/register"
                    element={user ? <Navigate to="/dashboard" /> : <Register />}
                />
                <Route
                    path="/dashboard"
                    element={user ? <Dashboard user={user} onLogout={handleLogout} /> : <Navigate to="/login" />}
                />
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
        </Router>
    );
}

export default App;
