package com.laboratorio4.admin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.laboratorio4.admin.entity.Reservacion;




@Repository("reservacionRepository")

public interface ReservacionRepository  extends JpaRepository< Reservacion, Integer> {

/*	public List<Reservacion> findByCorreoAndObservaciones
	(String correo,String observaciones);
	*/
}