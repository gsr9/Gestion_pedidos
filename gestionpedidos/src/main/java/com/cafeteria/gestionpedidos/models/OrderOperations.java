package com.cafeteria.gestionpedidos.models;

public interface OrderOperations {

    OrderState deliver(Order order);

    OrderState pay(Order order);

    OrderState cancel(Order order);
}
