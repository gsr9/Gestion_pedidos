package com.cafeteria.gestionpedidos.repositories;

import com.cafeteria.gestionpedidos.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>{
}