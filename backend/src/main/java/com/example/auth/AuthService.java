package com.example.auth;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class AuthService {

    // Przechowywanie użytkowników w pamięci (zabezpieczone do pracy wielowątkowej)
    private final Map<String, User> userStorage = new ConcurrentHashMap<>();
    private final PasswordEncoder passwordEncoder;

    public AuthService(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public boolean register(AuthDto.RegisterRequest request) {
        if (userStorage.containsKey(request.getUsername())) {
            return false;
        }
        User user = new User(
                request.getUsername(),
                passwordEncoder.encode(request.getPassword()),
                request.getEmail());
        userStorage.put(user.getUsername(), user);
        return true;
    }

    public boolean login(AuthDto.LoginRequest request) {
        User user = userStorage.get(request.getUsername());
        if (user == null) {
            return false;
        }
        return passwordEncoder.matches(request.getPassword(), user.getPassword());
    }
}
