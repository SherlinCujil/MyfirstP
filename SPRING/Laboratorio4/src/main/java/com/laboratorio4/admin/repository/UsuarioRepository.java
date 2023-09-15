package com.laboratorio4.admin.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.laboratorio4.admin.entity.Usuario;

@Repository("usuarioRepository")

public interface UsuarioRepository  extends JpaRepository< Usuario, String> {

	public List<Usuario> findByNombreAndApellido
	(String nombre,String apellido);
	
	List<Usuario>findByCorreoAndPassword(String correo, String password);
	
	
	
}
