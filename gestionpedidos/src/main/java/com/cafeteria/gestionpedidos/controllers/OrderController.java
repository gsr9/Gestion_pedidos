package com.cafeteria.gestionpedidos.controllers;

import com.cafeteria.gestionpedidos.models.Order;
import com.cafeteria.gestionpedidos.models.OrderState;
import com.cafeteria.gestionpedidos.repositories.OrderRepository;
import com.cafeteria.gestionpedidos.services.OrderNotFoundException;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class OrderController {

    private final OrderRepository repository;

    OrderController(OrderRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/orders")
    List<Order> all() {
        return repository.findAll();
    }

    @GetMapping("/orders/{id}")
    Order findById(@PathVariable Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new OrderNotFoundException(id));
    }

    @PostMapping("/orders")
    Order createOrder(@RequestBody Order order) {
        Order savedOrder = repository.save(order);
        return savedOrder;
    }

    @PostMapping("/orders/{id}/pay")
    boolean payOrder(@PathVariable Long id) {
        boolean paid = false;
        Order order = repository.getOne(id);
        order.pay();
        if(order.getState() == OrderState.PAGADO){
            repository.save(order);
            paid = true;
        }
        return paid;
    }

    @PostMapping("/orders/{id}/cancel")
    boolean cancelOrder(@PathVariable Long id) {
        boolean cancelled = false;
        Order order = repository.getOne(id);
        order.cancel();
        if(order.getState() == OrderState.CANCELADO){
            repository.save(order);
            cancelled = true;
        }
        return cancelled;
    }

    @Scheduled(cron = "0 0 13 * * ?")
    public void deliverOrders() {
        List<Order> orders = repository.findByState(OrderState.EMITIDO);
        orders = orders.stream().filter(o -> {
            Calendar calendar = Calendar.getInstance();
            calendar.set(Calendar.HOUR_OF_DAY, 11);
            calendar.set(Calendar.MINUTE, 0);
            calendar.set(Calendar.SECOND, 0);
            Date today = calendar.getTime();

            return o.getDate().before(today);
        }).collect(Collectors.toList());

        System.out.println(orders);

        orders.forEach(order -> order.setState(OrderState.ENTREGADO));

        repository.saveAll(orders);
    }
}
