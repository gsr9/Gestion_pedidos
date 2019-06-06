package com.cafeteria.gestionpedidos.repositories;

import com.cafeteria.gestionpedidos.models.Order;
import com.cafeteria.gestionpedidos.models.OrderState;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByState(OrderState state);
    List<Order> findByUserId(Long id);
}