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

import com.laboratorio4.admin.entity.Viaje;
import com.laboratorio4.admin.repository.ViajeRepository;


@RestController
@RequestMapping("/viaje")
@CrossOrigin

public class ViajeService {

	@Autowired
	ViajeRepository viajeRepository;
	
	@GetMapping(path="/buscar")
	public List<Viaje> buscar(){
		return viajeRepository.findAll();
		
	}
	@PostMapping(path ="/guardar")
	public Viaje guardar (@RequestBody Viaje viaje) {
		return viajeRepository.save(viaje);
		
	}
	
	@DeleteMapping(path="/eliminar/{viaje}")
	public void eliminar(@PathVariable("viaje") int idviaje){
		viajeRepository.deleteById(idviaje);
		
	}

		
	/*@GetMapping(path="/buscar/cupo/{cupo}/descripcion/{descripcion}")
	public List<Viaje> buscarPorCupoYDescripcion(
			@PathVariable String cupo,
			@PathVariable String descripcion){
		return viajeRepository.findByCupoAndDescripcion(cupo, descripcion);
	}
	*/
}