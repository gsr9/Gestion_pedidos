package com.cafeteria.gestionpedidos.controllers;

import com.cafeteria.gestionpedidos.models.User;
import com.cafeteria.gestionpedidos.repositories.UserRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    private final UserRepository repository;

    LoginController(UserRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/login")
    User login(@RequestBody User user){
        User dbUser = repository.findByEmail(user.getEmail());
        if(dbUser != null && user.getPass().equals(dbUser.getPass())){
            return dbUser;
        }
        return null;
    }
}
