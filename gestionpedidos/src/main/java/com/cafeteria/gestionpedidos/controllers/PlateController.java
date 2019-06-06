package com.cafeteria.gestionpedidos.controllers;

import com.cafeteria.gestionpedidos.models.Plate;
import com.cafeteria.gestionpedidos.models.PlateType;
import com.cafeteria.gestionpedidos.repositories.PlateRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PlateController {

    private final PlateRepository repository;

    public PlateController(PlateRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/plates")
    List<Plate> All () {
        return repository.findAll();
    }

    @GetMapping("/plates/{type}")
    List<Plate> getPlatesByType(@PathVariable PlateType type) {
        return repository.findByType(type);
    }

    @PostMapping("/plates")
    List<Plate> createPlate(@RequestBody Plate plate) {
        Plate auxPlate = repository.findByName(plate.getName());
        if(auxPlate != null) {
            throw new RuntimeException("El plato ya existe");
        }
        repository.save(plate);
        return repository.findAll();
    }
}
