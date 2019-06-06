package com.cafeteria.gestionpedidos.models;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class DeliveredOperation implements OrderOperations {
    @Override
    public OrderState deliver(Order order) {
        log.info("No se puede entregar un pedido ya entregado.");
        return null;
    }

    @Override
    public OrderState pay(Order order) {
        log.info("Pagando el pedido #" + order.getId());
        return OrderState.PAGADO;
    }

    @Override
    public OrderState cancel(Order order) {
        log.info("No se puede cancelar un pedido entregado.");
        return null;
    }
}
