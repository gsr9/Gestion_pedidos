package com.cafeteria.gestionpedidos.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "order_table")
public class Order {
    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne
    private User user;
    private String firstPlate;
    private String secondPlate;
    private String dessert;
    private Date date;
    // Order's state
    private OrderState state;

    public Order(User user) {
        this.user = user;
        // Initialize state
        this.state = OrderState.EMITIDO;
    }

    public Order() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getFirstPlate() {
        return firstPlate;
    }

    public void setFirstPlate(String firstPlate) {
        this.firstPlate = firstPlate;
    }

    public String getSecondPlate() {
        return secondPlate;
    }

    public void setSecondPlate(String secondPlate) {
        this.secondPlate = secondPlate;
    }

    public String getDessert() {
        return dessert;
    }

    public void setDessert(String dessert) {
        this.dessert = dessert;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void deliver() { setState(state.deliver(this)); }

    public void pay() {
        setState(state.pay(this));
    }

    public void cancel() {
        setState(state.cancel(this));
    }

    public void setState(OrderState state) {
        if (state != null && state != this.state) {
            this.state = state;
        }
    }
}
