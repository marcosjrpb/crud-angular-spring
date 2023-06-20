package com.app.crud.enums;

public enum Category {
	
	BACK_END("Back-end"), FRONT_END("Front-end");
	
	private String value;
	
	private Category(String value){
		this.value = value;
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
