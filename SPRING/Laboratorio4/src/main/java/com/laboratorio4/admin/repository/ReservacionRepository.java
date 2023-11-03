package com.laboratorio4.admin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


import com.laboratorio4.admin.entity.Reservacion;




@Repository("reservacionRepository")

public interface ReservacionRepository  extends JpaRepository< Reservacion, Integer> {

	
	List<Reservacion> findByCorreo(String correo);
/*	public List<Reservacion> findByCorreoAndObservaciones
	(String correo,String observaciones);
	*/
}