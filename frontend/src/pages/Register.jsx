import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    // Zarządzanie stanem formularza
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    // Stany dla błędów, sukcesu i komunikacji z serwerem
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Obsługa wysyłania formularza rejestracji
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Prosta walidacja po stronie frontendu
        if (formData.password !== formData.confirmPassword) {
            setError('Hasła nie są identyczne');
            return;
        }

        setLoading(true);
        try {
            // Wysłanie danych do serwera Spring Boot
            const response = await axios.post('http://localhost:8080/api/auth/register', {
                username: formData.username,
                email: formData.email,
                password: formData.password
            });

            if (response.data.success) {
                setSuccess('Rejestracja pomyślna! Przekierowywanie do logowania...');
                // Opóźnienie przekierowania dla lepszego UX (użytkownik widzi komunikat)
                setTimeout(() => navigate('/login'), 2000);
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Rejestracja nieudana. Spróbuj ponownie.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h1>Stwórz konto</h1>
                </div>
                <p className="subtitle">Dołącz do naszej społeczności</p>

                {error && <div className="alert alert-error">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}

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
                        <label>Adres e-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="damian@przyklad.pl"
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
                    <div className="form-group">
                        <label>Potwierdź hasło</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            placeholder="••••••••"
                        />
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Tworzenie konta...' : 'Zarejestruj się'}
                    </button>
                </form>

                <p className="link-text">
                    Masz już konto? <Link to="/login">Zaloguj się tutaj</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
