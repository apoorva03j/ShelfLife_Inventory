package com.example.shelflife.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shelflife.entity.Users;
import com.example.shelflife.repo.UsersRepo;

@Service
public class UsersService {

    @Autowired
    UsersRepo repo;

    public Users saveUser(Users user) {
        return repo.save(user);
    }

    public Users findByUsernameAndPassword(String username, String password) {
        Users user = repo.findByUsernameAndPassword(username, password);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
    
    public Users getUserById(int userId) {
    	return repo.findById(userId).orElse(null);
    }
    
}

