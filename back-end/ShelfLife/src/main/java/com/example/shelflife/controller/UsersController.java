package com.example.shelflife.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.shelflife.entity.Company;
import com.example.shelflife.entity.Users;
import com.example.shelflife.services.UsersService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UsersController {

    @Autowired
    private UsersService userService;

    @PostMapping("/login")
    public ResponseEntity<Users> login(@RequestBody Users user) {
        Users existingUser = userService.findByUsernameAndPassword(user.getUsername(), user.getPassword());
        if (existingUser != null) {
            // Authentication successful, return user object with user_type
            return ResponseEntity.ok(existingUser);
        } else {
            // Authentication failed, return error message
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }
    
    @GetMapping("/users/{userId}")
    public ResponseEntity<String> getUserByName(@PathVariable int userId) {
        try {
            Users user = userService.getUserById(userId);
            if (user != null) {
                return ResponseEntity.ok(user.getName());
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching user");
        }
    }
    
    @GetMapping("/get-profile")
    public ResponseEntity<Company> getProfile(@PathVariable int userId) {
    	Users user = userService.getUserById(userId);
    	Company comp = user.getCompany();
    	return ResponseEntity.ok(comp);
    }
    
}
