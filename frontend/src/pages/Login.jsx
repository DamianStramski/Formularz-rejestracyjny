import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Obsługa logowania użytkownika
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Próba uwierzytelnienia na backendzie
            const response = await axios.post('http://localhost:8080/api/auth/login', formData);

            if (response.data.success) {
                // Przekazanie danych użytkownika do głównego stanu aplikacji
                onLogin(response.data);
                navigate('/dashboard');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Nieprawidłowa nazwa użytkownika lub hasło');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="card">
                <header className="card-header">
                    <h1>Witaj!</h1>
                </header>
                <p className="subtitle">Zaloguj się do swojego konta</p>

                {error && <div className="alert alert-error">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nazwa użytkownika</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            placeholder="DamianKowalski"
                        />
                    </div>
                    <div className="form-group">
                        <label>Hasło</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="••••••••"
                        />
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Logowanie...' : 'Zaloguj się'}
                    </button>
                </form>

                <p className="link-text">
                    Nie masz konta? <Link to="/register">Zarejestruj się</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
