package com.cafeteria.gestionpedidos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class GestionpedidosApplication {

    public static void main(String[] args) {
        SpringApplication.run(GestionpedidosApplication.class, args);
    }

}
