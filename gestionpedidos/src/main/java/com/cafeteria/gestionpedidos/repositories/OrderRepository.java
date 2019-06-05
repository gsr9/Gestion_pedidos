package com.cafeteria.gestionpedidos.repositories;

import com.cafeteria.gestionpedidos.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}