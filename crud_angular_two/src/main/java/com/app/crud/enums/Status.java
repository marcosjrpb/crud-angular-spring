package com.app.crud.enums;

public enum Status {
	
	ATIVO("Ativo"),
	INATIVO("Inativo");
	
	private String value;
	
	private Status(String valeu) {
		this.value = valeu;
	}
	public String getValue() {
		return value;
	}
	
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return value;
	}

}
