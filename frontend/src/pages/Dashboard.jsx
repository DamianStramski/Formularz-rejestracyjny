const Dashboard = ({ user, onLogout }) => {
    // Pobierz pierwszą literę nazwy użytkownika dla awatara
    const userInitial = user.username ? user.username.charAt(0).toUpperCase() : '?';

    return (
        <div className="container">
            <div className="card dashboard-container">
                <div className="avatar-container">
                    <div className="user-avatar">{userInitial}</div>
                </div>

                <div className="card-header">
                    <h1>Witaj, {user.username}!</h1>
                </div>
                <p className="subtitle">Zalogowałeś się pomyślnie do systemu.</p>

                <div className="stats-grid">
                    <div className="stat-item" style={{ textAlign: 'center' }}>
                        <span className="stat-label">Status Konta</span>
                        <div className="status-badge" style={{ justifyContent: 'center' }}>
                            <span className="status-dot"></span>
                            Aktywny
                        </div>
                    </div>
                </div>

                <div className="dashboard-info">
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        To jest Twój prywatny panel. Serwer backendowy potwierdził Twoją tożsamość.
                        Wszystkie dane sesji są bezpiecznie przechowywane w pamięci Twojej przeglądarki.
                    </p>
                </div>

                <button className="logout-btn" onClick={onLogout}>
                    Wyloguj się
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
