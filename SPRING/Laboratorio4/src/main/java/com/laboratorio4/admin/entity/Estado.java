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
@Table (name = "estado")

public class Estado implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -7621186848230067939L;
	/**
	 * 
	 */
	
	
	
	@Id
	@Column(name = "idestado")
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Basic (optional = false)
	private int idestado;

	
	
	@Column (name="valor")
	private String valor;
	
	@Column(name="tabla")
	private String tabla;
	
	@Column(name="campo")
	private String campo;

	public int getIdestado() {
		return idestado;
	}

	public void setIdestado(int idestado) {
		this.idestado = idestado;
	}

	public String getValor() {
		return valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}

	public String getTabla() {
		return tabla;
	}

	public void setTabla(String tabla) {
		this.tabla = tabla;
	}

	public String getCampo() {
		return campo;
	}

	public void setCampo(String campo) {
		this.campo = campo;
	}
	
}
