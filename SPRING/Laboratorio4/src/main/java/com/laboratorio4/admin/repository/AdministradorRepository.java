package com.laboratorio4.admin.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.laboratorio4.admin.entity.Administrador;




@Repository("administradorRepository")

public interface AdministradorRepository  extends JpaRepository< Administrador, String> {

	public List<Administrador> findByNombreAndCarnet
	(String nombre,String carnet);
	
	
}
