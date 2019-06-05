package com.cafeteria.gestionpedidos.models;

public enum OrderState implements OrderOperations {

        EMITIDO(new EmitedOperation()),
        ENTREGADO(new DeliveredOperation()),
        PAGADO(new PaidOperation()),
        CANCELADO(new CancelledOperation());

        private final OrderOperations operations;

        OrderState(OrderOperations operations) {
            this.operations = operations;
        }

        @Override
        public OrderState deliver(Order order) {
            return operations.deliver(order);
        }

        @Override
        public OrderState pay(Order order) {
            return operations.pay(order);
        }

        @Override
        public OrderState cancel(Order order) {
            return operations.cancel(order);
        }
    }
