package com.cafeteria.gestionpedidos.models;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class EmitedOperation implements OrderOperations {
    @Override
    public OrderState deliver(Order order) {
        log.info("Entregando el pedido #" + order.getId());
        return OrderState.ENTREGADO;
    }

    @Override
    public OrderState pay(Order order) {
        log.info("No se puede pagar un pedido que no ha sido entregado.");
        return null;
    }

    @Override
    public OrderState cancel(Order order) {
        log.info("Cancelando el pedido #" + order.getId());
        return OrderState.CANCELADO;
    }
}
