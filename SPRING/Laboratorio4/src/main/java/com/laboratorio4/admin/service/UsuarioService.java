package com.laboratorio4.admin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.laboratorio4.admin.entity.Usuario;

import com.laboratorio4.admin.repository.UsuarioRepository;


@RestController
@RequestMapping("/usuario")
@CrossOrigin

public class UsuarioService {

	@Autowired
	UsuarioRepository usuarioRepository;
	
	@GetMapping(path="/buscar")
	public List<Usuario> buscar(){
		return usuarioRepository.findAll();
		
	}
	@PostMapping(path ="/guardar")
	public Usuario guardar (@RequestBody Usuario usuario) {
		return usuarioRepository.save(usuario);
		
	}
	
	@DeleteMapping(path="/eliminar/{usuario}")
	public void eliminar(@PathVariable("usuario") String usuario){
		usuarioRepository.deleteById(usuario);
		
			
	}
	
	@GetMapping(path="/buscar/nombre/{nombre}/apellido/{apellido}")
	public List<Usuario> buscarPorNombreYApellido(
			@PathVariable String nombre,
			@PathVariable String apellido){
		return usuarioRepository.findByNombreAndApellido(nombre, apellido);
	
	}
	
	
	@GetMapping(path="/login")
	public Usuario login(@RequestBody Usuario usuario){
	
     List<Usuario> ListaUsuarios=
     usuarioRepository.findByCorreoAndPassword
     (usuario.getCorreo(), 
      usuario.getPassword());
     
     Usuario usuarioRetorno = null;
     
     if(!ListaUsuarios.isEmpty()) {
     
     	usuarioRetorno = ListaUsuarios.get(0);
     
     }
		return usuarioRetorno;
		
}
	
}
