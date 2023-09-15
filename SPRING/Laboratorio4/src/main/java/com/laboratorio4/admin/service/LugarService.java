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


import com.laboratorio4.admin.entity.Lugar;

import com.laboratorio4.admin.repository.LugarRepository;


@RestController
@RequestMapping("/lugar")
@CrossOrigin

public class LugarService {

	@Autowired
	LugarRepository lugarRepository;
	
	@GetMapping(path="/buscar")
	public List<Lugar> buscar(){
		return lugarRepository.findAll();
		
	}
	@PostMapping(path ="/guardar")
	public Lugar guardar (@RequestBody Lugar lugar) {
		return lugarRepository.save(lugar);
		
	}
	
	@DeleteMapping(path="/eliminar/{lugar}")
	public void eliminar(@PathVariable("lugar") int idlugar){
		lugarRepository.deleteById(idlugar);
		
			
	}

	@GetMapping(path="/buscar/nombre/{nombre}/descripcion/{descripcion}")
	public List<Lugar> buscarPorNombreYDescripcion(
			@PathVariable String nombre,
			@PathVariable String descripcion){
		return lugarRepository.findByNombreAndDescripcion(nombre, descripcion);	
	}	
}