package com.laboratorio4.admin.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.laboratorio4.admin.entity.Estado;



@Repository("estadoRepository")

public interface EstadoRepository  extends JpaRepository< Estado, Integer> {

	public List<Estado> findByTablaAndCampo
	(String tabla,String campo);
	
	
}
