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
@Table (name = "reservacion")

public class Reservacion implements Serializable {
	

	/**
	 * 
	 */
	private static final long serialVersionUID = -2281487058309871832L;

	@Id
		
	@Column(name = "idreservacion")
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Basic (optional = false)
	private int idreservacion;
	
	@Column(name="cantidad_Pasajeros")
	private int cantidadPasajeros;
	
	@Column (name="observaciones")
	private String observaciones;
	
	@Column(name="correo")
	private String correo;
	
	@Column(name = "idestado")
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Basic (optional = false)
	private int idestado;
	
	@Column(name = "idviaje")
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Basic (optional = false)
	private int idviaje;

	public int getIdreservacion() {
		return idreservacion;
	}

	public void setIdreservacion(int idreservacion) {
		this.idreservacion = idreservacion;
	}

	public int getCantidadPasajeros() {
		return cantidadPasajeros;
	}

	public void setCantidadPasajeros(int cantidadPasajeros) {
		this.cantidadPasajeros = cantidadPasajeros;
	}

	public String getObservaciones() {
		return observaciones;
	}

	public void setObservaciones(String observaciones) {
		this.observaciones = observaciones;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public int getIdestado() {
		return idestado;
	}

	public void setIdestado(int idestado) {
		this.idestado = idestado;
	}

	public int getIdviaje() {
		return idviaje;
	}

	public void setIdviaje(int idviaje) {
		this.idviaje = idviaje;
	}

	

}
