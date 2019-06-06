package com.cafeteria.gestionpedidos.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "plate_table")
public class Plate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String name;
    private PlateType type;

    public Plate() {  }

    public Plate(String name, PlateType type) {
        this.name = name;
        this.type = type;
    }
}
