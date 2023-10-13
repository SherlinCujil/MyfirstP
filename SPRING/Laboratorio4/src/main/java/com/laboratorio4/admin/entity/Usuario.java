package com.laboratorio4.admin.entity;


import java.io.Serializable;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "Usuario")

public class Usuario implements Serializable {
	
	

	/**
	 * 
	 */
	private static final long serialVersionUID = -155909107354599804L;

	/**
	 * 
	 */
	
	@Id
	@Basic (optional = false)
	@Column(name = "correo")
	private String correo;
	
    @Column (name="nombre")
	private String nombre;
	
	@Column(name="apellido")
	private String apellido;
	
	@Column(name="password")
	private String password;
	
	@Column(name="telefono")
	private String telefono;
	
     
    
	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	
}
