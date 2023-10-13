package com.laboratorio4.admin.entity;

import java.io.Serializable;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "lugar")

public class Lugar implements Serializable {
	
		
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -4095978467046512736L;


	/**
	 * 
	 */
	
	@Id
	@Column(name = "idlugar")
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Basic (optional = false)
	private int idlugar;

	
	@Column (name="nombre")
	private String nombre;
	
	@Column(name="descripcion", columnDefinition = "LONGTEXT")
	private String descripcion;
	
	@Column(name="imagen")
	private String imagen;

	public int getIdlugar() {
		return idlugar;
	}

	public void setIdlugar(int idlugar) {
		this.idlugar = idlugar;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	} 

}
