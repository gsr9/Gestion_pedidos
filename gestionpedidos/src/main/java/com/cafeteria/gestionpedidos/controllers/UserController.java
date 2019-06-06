package com.cafeteria.gestionpedidos.controllers;

import com.cafeteria.gestionpedidos.models.Order;
import com.cafeteria.gestionpedidos.models.User;
import com.cafeteria.gestionpedidos.repositories.OrderRepository;
import com.cafeteria.gestionpedidos.repositories.UserRepository;
import com.cafeteria.gestionpedidos.services.UserNotFoundException;
import org.springframework.web.bind.annotation.*;

import javax.management.relation.RelationNotFoundException;
import java.util.List;

@RestController
public class UserController {

    private final UserRepository repository;
    private final OrderRepository orderRepository;

    UserController(UserRepository repository, OrderRepository orderRepository) {
        this.repository = repository;
        this.orderRepository = orderRepository;
    }

    @GetMapping("/users")
    List<User> all() {
        return repository.findAll();
    }

    @GetMapping("/users/{id}")
    User findById(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Usuario not found"));
    }

    @GetMapping("/users/{id}/orders")
    List<Order> getUserOrders(@PathVariable Long id){
        List<Order> orders =  orderRepository.findByUserId(id);

        return orders;
    }

    @PostMapping("/users")
    User registerUser(@RequestBody User user){
        User auxUser = repository.findByEmail(user.getEmail());
        if(auxUser != null){
            throw new UserNotFoundException(user.getId());
        }
        return repository.save(user);
    }

    @PutMapping("/users/{id}")
    User updateUser(@RequestBody User user, @PathVariable Long id){
        return repository.findById(id)
                .map(oldUser -> {
                    oldUser.setName(user.getName());
                    oldUser.setPass(user.getPass());
                    oldUser.setEmail(user.getEmail());
                    return repository.save(oldUser);
                })
                .orElseGet(() -> {
                    user.setId(id);
                    return repository.save(user);
                });
    }


}

