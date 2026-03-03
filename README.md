# Zadanie praktyczne: Rejestracja i logowanie użytkowników

Prosta aplikacja webowa umożliwiająca rejestrację i logowanie użytkowników, zbudowana w Javie (Spring Boot) oraz ReactJS.

## Struktura projektu

- `backend/`: Aplikacja Spring Boot (Java 21).
- `frontend/`: Aplikacja React (Vite).

## Wymagania

- Java 21 lub nowsza
- Node.js 18 lub nowszy
- Gradle (opcjonalnie, dołączony jest wrapper)

## Instrukcja uruchomienia

### 1. Uruchomienie Backend (Java)
1. Otwórz terminal w folderze `backend`.
2. Uruchom polecenie:
   ```bash
   ./gradlew bootRun
   ```
   (Na Windows: `gradlew.bat bootRun`)
3. Serwer backendowy zostanie uruchomiony na porcie `8080`.

### 2. Uruchomienie Frontend (React)
1. Otwórz nowy terminal w folderze `frontend`.
2. Zainstaluj zależności (jeśli nie zostały zainstalowane):
   ```bash
   npm install
   ```
3. Uruchom aplikację:
   ```bash
   npm run dev
   ```
4. Aplikacja będzie dostępna pod adresem: `http://localhost:5173`.

## Funkcjonalności
- **Rejestracja:** Umożliwia stworzenie nowego konta (dane przechowywane w pamięci).
- **Logowanie:** Autoryzacja użytkownika na podstawie nazwy i hasła.
- **Dashboard:** Prosta strona dostępna po pomyślnym zalogowaniu.
- **Bezpieczeństwo:** Hasła są szyfrowane przy użyciu BCrypt.
