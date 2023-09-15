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

import com.laboratorio4.admin.entity.Estado;

import com.laboratorio4.admin.repository.EstadoRepository;


@RestController
@RequestMapping("/estado")
@CrossOrigin

public class EstadoService {

	@Autowired
	EstadoRepository estadoRepository;
	
	@GetMapping(path="/buscar")
	public List<Estado> buscar(){
		return estadoRepository.findAll();
		
	}
	@PostMapping(path ="/guardar")
	public Estado guardar (@RequestBody Estado estado) {
		return estadoRepository.save(estado);
		
	}
	
	@DeleteMapping(path="/eliminar/{estado}")
	public void eliminar(@PathVariable("estado") int idestado){
		estadoRepository.deleteById(idestado);
		
			
	}
	
	@GetMapping(path="/buscar/tabla/{tabla}/campo/{campo}")
	public List<Estado> buscarPorTablaYCampo(
			@PathVariable String tabla,
			@PathVariable String campo){
		return estadoRepository.findByTablaAndCampo(tabla, campo);
	}
}
