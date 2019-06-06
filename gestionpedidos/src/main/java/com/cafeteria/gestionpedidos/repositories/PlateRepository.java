package com.cafeteria.gestionpedidos.repositories;

import com.cafeteria.gestionpedidos.models.Plate;
import com.cafeteria.gestionpedidos.models.PlateType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlateRepository extends JpaRepository<Plate, Long>{
    List<Plate> findByType(PlateType type);
    Plate findByName(String name);
}
