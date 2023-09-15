package com.laboratorio4.admin.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.laboratorio4.admin.entity.Comentario;


@Repository ("comentarioRepository")
public interface ComentarioRepository extends JpaRepository<Comentario, Integer> {
 

	/* public List<Comentario> findByTextoAndCorreo
	(String texto,String correo);
	*/
}