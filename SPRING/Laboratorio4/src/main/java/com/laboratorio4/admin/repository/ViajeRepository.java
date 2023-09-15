package com.laboratorio4.admin.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.laboratorio4.admin.entity.Viaje;


@Repository("viajeRepository")

public interface ViajeRepository  extends JpaRepository< Viaje, Integer> {

	/* public List<Viaje> findByCupoAndDescripcion
	(String cupo,String descripcion);
	*/ 
}