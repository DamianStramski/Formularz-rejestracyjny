package com.example.auth;

public class AuthDto {

    public static class RegisterRequest {
        private String username;
        private String password;
        private String email;

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }
    }

    public static class LoginRequest {
        private String username;
        private String password;

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }

    public static class AuthResponse {
        private String message;
        private String username;
        private boolean success;

        public AuthResponse(String message, String username, boolean success) {
            this.message = message;
            this.username = username;
            this.success = success;
        }

        public String getMessage() {
            return message;
        }

        public String getUsername() {
            return username;
        }

        public boolean isSuccess() {
            return success;
        }
    }
}
