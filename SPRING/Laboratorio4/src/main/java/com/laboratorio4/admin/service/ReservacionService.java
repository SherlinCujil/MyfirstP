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

import com.laboratorio4.admin.entity.Reservacion;
import com.laboratorio4.admin.repository.ReservacionRepository;


@RestController
@RequestMapping("/reservacion")
@CrossOrigin

public class ReservacionService {

	@Autowired
	ReservacionRepository reservacionRepository;
	
	@GetMapping(path="/buscar")
	public List<Reservacion> buscar(){
		return reservacionRepository.findAll();
		
	}
	@PostMapping(path ="/guardar")
	public Reservacion guardar (@RequestBody Reservacion reservacion) {
		return reservacionRepository.save(reservacion);
		
	}
	
	@DeleteMapping(path="/eliminar/{reservacion}")
	public void eliminar(@PathVariable("reservacion") int idreservacion){
		reservacionRepository.deleteById(idreservacion);
				
	}
		
	/*@GetMapping(path="/buscar/correo/{correo}/observaciones/{observaciones}")
	public List<Reservacion> buscarPorCorreoYObservaciones(
			@PathVariable String correo,
			@PathVariable String observaciones){
		return reservacionRepository.findByCorreoAndObservaciones(correo, observaciones);
	}
	*/
}