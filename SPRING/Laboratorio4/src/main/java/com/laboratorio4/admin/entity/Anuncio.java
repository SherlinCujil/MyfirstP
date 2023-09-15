package com.laboratorio4.admin.entity;

import java.io.Serializable;
import java.sql.Date;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "anuncio")

public class Anuncio implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -6632322607051096753L;
	/**
	 * 
	 */
	

	@Id
		
	@Column(name = "idanuncio")
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Basic (optional = false)
	private int idanuncio;
	
	
	
	@Column (name="texto")
	private String texto;
	
	@Column(name="imagen")
	private String imagen;
	
	@Column(name="fechaInicio")
	private Date fechaInicio;
	
	@Column(name="fechaFin")
	private Date fechaFin;

	public int getIdanuncio() {
		return idanuncio;
	}

	public void setIdanuncio(int idanuncio) {
		this.idanuncio = idanuncio;
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public Date getFechaInicio() {
		return fechaInicio;
	}

	public void setFechaInicio(Date fechaInicio) {
		this.fechaInicio = fechaInicio;
	}

	public Date getFechaFin() {
		return fechaFin;
	}

	public void setFechaFin(Date fechaFin) {
		this.fechaFin = fechaFin;
	}

	
	
	

}
