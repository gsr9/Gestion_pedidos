package com.cafeteria.gestionpedidos.models;

public class PaidOperation implements OrderOperations {
    @Override
    public OrderState deliver(Order order) {
        return null;
    }

    @Override
    public OrderState pay(Order order) {
        return null;
    }

    @Override
    public OrderState cancel(Order order) {
        return null;
    }
}
