package com.cafeteria.gestionpedidos.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class User {

    @GeneratedValue
    @Id
    private Long id;
    @Column(unique = true)
    private String email;
    private String name;
    private String pass;

    public User() {
    }

    public User(String name, String pass) {
        this.name = name;
        this.pass = pass;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }
}
