package com.greentrack.backend.controller;

import com.greentrack.backend.model.User;
import com.greentrack.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") // React frontend ke liye
public class UserController {

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/signup")
    public Map<String, Object> signup(@RequestBody User user) {
        Map<String, Object> response = new HashMap<>();

        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            response.put("message", "Email already registered!");
            response.put("status", false);
            return response;
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);

        response.put("message", "Signup successful!");
        response.put("status", true);
        response.put("user", user); // frontend ko user info milega
        return response;
    }


    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> loginRequest) {
        Map<String, Object> response = new HashMap<>();

        String identifier = loginRequest.get("identifier");
        String password = loginRequest.get("password");

        if (identifier == null || password == null) {
            response.put("message", "Please provide both identifier and password!");
            response.put("status", false);
            return response;
        }

        // Try both email and contactNumber variations
        User user = userRepository.findByEmailOrContactNumber(identifier, identifier).orElse(null);

        // If not found, try adding +91
        if (user == null && identifier.matches("^\\d{10}$")) {
            user = userRepository.findByEmailOrContactNumber("+91" + identifier, "+91" + identifier).orElse(null);
        }

        if (user == null || !passwordEncoder.matches(password, user.getPassword())) {
            response.put("message", "Invalid email/contact or password!");
            response.put("status", false);
            return response;
        }

        response.put("message", "Login successful!");
        response.put("status", true);
        response.put("user", user.getFullName());
        response.put("email", user.getEmail());
        response.put("contactNumber", user.getContactNumber());
        return response;
    }
}


