package com.example.auth;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173") // Default Vite port
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthDto.AuthResponse> register(@RequestBody AuthDto.RegisterRequest request) {
        boolean success = authService.register(request);
        if (success) {
            return ResponseEntity
                    .ok(new AuthDto.AuthResponse("Użytkownik zarejestrowany pomyślnie", request.getUsername(), true));
        }
        return ResponseEntity.badRequest()
                .body(new AuthDto.AuthResponse("Rejestracja nieudana: Użytkownik już istnieje", null, false));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthDto.AuthResponse> login(@RequestBody AuthDto.LoginRequest request) {
        boolean success = authService.login(request);
        if (success) {
            return ResponseEntity.ok(new AuthDto.AuthResponse("Logowanie pomyślne", request.getUsername(), true));
        }
        return ResponseEntity.status(401)
                .body(new AuthDto.AuthResponse("Nieprawidłowa nazwa użytkownika lub hasło", null, false));
    }
}
