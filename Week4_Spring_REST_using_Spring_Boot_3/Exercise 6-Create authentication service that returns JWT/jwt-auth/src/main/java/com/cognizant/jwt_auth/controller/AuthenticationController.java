package com.cognizant.jwt_auth.controller;

import com.cognizant.jwt_auth.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestHeader("Authorization") String authHeader) {
        if (authHeader != null && authHeader.startsWith("Basic ")) {
            String base64Credentials = authHeader.substring("Basic ".length());
            byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(decodedBytes);
            String[] parts = credentials.split(":", 2);

            if (parts.length == 2) {
                String username = parts[0];
                String password = parts[1];

                // Hardcoded authentication logic
                if ("user".equals(username) && "pwd".equals(password)) {
                    String token = jwtUtil.generateToken(username);
                    Map<String, String> response = new HashMap<>();
                    response.put("token", token);
                    return ResponseEntity.ok(response);
                }
            }
        }
        return ResponseEntity.status(401).body("Unauthorized");
    }
}
